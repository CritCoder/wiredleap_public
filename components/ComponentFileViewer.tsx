'use client'

import { useState, useEffect } from 'react'
import { FileViewerProps, FileNode, FileAction } from '@/types'
import { cn } from '@/lib/utils'
import { FileTree } from '@/components/FileTree'
import { FileHeader } from '@/components/FileHeader'
import { ShikiViewer } from '@/components/ShikiViewer'
import { Button } from '@/components/ui/button'
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@/components/ui/resizable'
import { 
  Search,
  Settings,
  MoreHorizontal,
  FileText
} from 'lucide-react'
import { Input } from '@/components/ui/input'

export function ComponentFileViewer({
  files,
  selectedFile,
  onFileSelect,
  onFileAction,
  className,
  showLineNumbers = true,
  theme = 'light'
}: FileViewerProps) {
  const [currentFile, setCurrentFile] = useState<FileNode | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())
  const [filteredFiles, setFilteredFiles] = useState<FileNode[]>(files)

  useEffect(() => {
    if (selectedFile) {
      const findFileById = (nodes: FileNode[], id: string): FileNode | null => {
        for (const node of nodes) {
          if (node.id === id) return node
          if (node.children) {
            const found = findFileById(node.children, id)
            if (found) return found
          }
        }
        return null
      }
      
      const file = findFileById(files, selectedFile)
      setCurrentFile(file)
    }
  }, [selectedFile, files])

  useEffect(() => {
    // Filter files based on search query
    const filterNodes = (nodes: FileNode[]): FileNode[] => {
      if (!searchQuery) return nodes
      
      return nodes.reduce<FileNode[]>((acc, node) => {
        if (node.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          acc.push(node)
        } else if (node.children) {
          const filteredChildren = filterNodes(node.children)
          if (filteredChildren.length > 0) {
            acc.push({ ...node, children: filteredChildren })
          }
        }
        return acc
      }, [])
    }

    setFilteredFiles(filterNodes(files))
  }, [files, searchQuery])

  const handleFileSelect = (file: FileNode) => {
    setCurrentFile(file)
    onFileSelect?.(file)
  }

  const handleFileAction = (action: FileAction) => {
    if (currentFile) {
      onFileAction?.(action, currentFile)
      
      // Handle built-in actions
      switch (action) {
        case 'copy':
          if (currentFile.content) {
            navigator.clipboard.writeText(currentFile.content)
          }
          break
        case 'download':
          if (currentFile.content) {
            const blob = new Blob([currentFile.content], { type: 'text/plain' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = currentFile.name
            a.click()
            URL.revokeObjectURL(url)
          }
          break
        case 'fullscreen':
          // Implementation would depend on your app's modal system
          console.log('Fullscreen view not implemented')
          break
      }
    }
  }

  const handleToggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const getFileStats = () => {
    const countNodes = (nodes: FileNode[]): { files: number; folders: number } => {
      let files = 0
      let folders = 0
      
      for (const node of nodes) {
        if (node.type === 'file') {
          files++
        } else {
          folders++
          if (node.children) {
            const childCounts = countNodes(node.children)
            files += childCounts.files
            folders += childCounts.folders
          }
        }
      }
      
      return { files, folders }
    }

    return countNodes(files)
  }

  const stats = getFileStats()

  return (
    <div className={cn('flex flex-col h-full border border-border rounded-lg overflow-hidden', className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">File Viewer</span>
          <span className="text-xs text-muted-foreground">
            ({stats.files} files, {stats.folders} folders)
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 pl-8 h-8 text-sm"
            />
          </div>
          
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Main content */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* File tree panel */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
          <FileTree
            files={filteredFiles}
            selectedFile={currentFile?.id}
            onFileSelect={handleFileSelect}
            expandedFolders={expandedFolders}
            onToggleFolder={handleToggleFolder}
            className="h-full"
          />
        </ResizablePanel>
        
        <ResizableHandle />
        
        {/* Content panel */}
        <ResizablePanel defaultSize={75} minSize={60}>
          <div className="flex flex-col h-full">
            {currentFile ? (
              <>
                <FileHeader
                  file={currentFile}
                  onAction={handleFileAction}
                  showActions={true}
                />
                
                <div className="flex-1 overflow-hidden">
                  {currentFile.content ? (
                    <ShikiViewer
                      code={currentFile.content}
                      language={currentFile.language || 'text'}
                      showLineNumbers={showLineNumbers}
                      theme={theme}
                      filename={currentFile.name}
                      className="h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <div className="text-center">
                        <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>No content available for this file</p>
                        <p className="text-sm mt-1">
                          {currentFile.type === 'folder' ? 'This is a folder' : 'File content not loaded'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <h3 className="text-lg font-medium mb-2">No file selected</h3>
                  <p className="text-sm">
                    Select a file from the tree to view its content
                  </p>
                </div>
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}