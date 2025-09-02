'use client'

import { useState } from 'react'
import { FileTreeProps, FileNode } from '@/types'
import { cn } from '@/lib/utils'
import { 
  ChevronRight, 
  ChevronDown,
  File,
  Folder,
  FolderOpen
} from 'lucide-react'

export function FileTree({
  files,
  selectedFile,
  onFileSelect,
  expandedFolders: controlledExpanded,
  onToggleFolder,
  className
}: FileTreeProps) {
  const [internalExpanded, setInternalExpanded] = useState<Set<string>>(new Set())
  
  const expandedFolders = controlledExpanded || internalExpanded
  const toggleFolder = onToggleFolder || ((folderId: string) => {
    const newExpanded = new Set(internalExpanded)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setInternalExpanded(newExpanded)
  })

  const getFileIcon = (file: FileNode, isExpanded?: boolean) => {
    if (file.type === 'folder') {
      return isExpanded ? (
        <FolderOpen className="w-4 h-4 text-blue-500" />
      ) : (
        <Folder className="w-4 h-4 text-blue-500" />
      )
    }
    
    // File type specific icons
    const ext = file.name.split('.').pop()?.toLowerCase()
    const iconClass = "w-4 h-4"
    
    switch (ext) {
      case 'ts':
      case 'tsx':
        return <File className={cn(iconClass, "text-blue-600")} />
      case 'js':
      case 'jsx':
        return <File className={cn(iconClass, "text-yellow-500")} />
      case 'css':
        return <File className={cn(iconClass, "text-blue-400")} />
      case 'html':
        return <File className={cn(iconClass, "text-orange-500")} />
      case 'json':
        return <File className={cn(iconClass, "text-gray-500")} />
      case 'md':
        return <File className={cn(iconClass, "text-purple-500")} />
      case 'py':
        return <File className={cn(iconClass, "text-green-500")} />
      default:
        return <File className={cn(iconClass, "text-gray-400")} />
    }
  }

  const renderNode = (node: FileNode, level: number = 0) => {
    const isExpanded = expandedFolders.has(node.id)
    const isSelected = selectedFile === node.id
    const hasChildren = node.children && node.children.length > 0

    return (
      <div key={node.id}>
        <div
          className={cn(
            'flex items-center gap-2 py-1.5 px-2 rounded-md cursor-pointer hover:bg-accent transition-colors',
            isSelected && 'bg-accent text-accent-foreground',
            'group'
          )}
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => {
            if (node.type === 'folder') {
              toggleFolder(node.id)
            } else {
              onFileSelect?.(node)
            }
          }}
        >
          {node.type === 'folder' ? (
            <div className="flex items-center gap-1">
              {hasChildren ? (
                isExpanded ? (
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                )
              ) : (
                <div className="w-3 h-3" />
              )}
              {getFileIcon(node, isExpanded)}
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <div className="w-3 h-3" />
              {getFileIcon(node)}
            </div>
          )}
          
          <span className={cn(
            'text-sm truncate flex-1',
            node.type === 'folder' ? 'font-medium' : 'font-normal'
          )}>
            {node.name}
          </span>
          
          {/* File count for folders */}
          {node.type === 'folder' && hasChildren && (
            <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              {node.children!.length}
            </span>
          )}
        </div>
        
        {/* Render children if folder is expanded */}
        {node.type === 'folder' && isExpanded && hasChildren && (
          <div>
            {node.children!.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  const sortNodes = (nodes: FileNode[]): FileNode[] => {
    return [...nodes].sort((a, b) => {
      // Folders first, then files
      if (a.type !== b.type) {
        return a.type === 'folder' ? -1 : 1
      }
      // Alphabetical within same type
      return a.name.localeCompare(b.name)
    })
  }

  return (
    <div className={cn(
      'overflow-auto border-r border-border bg-background',
      className
    )}>
      <div className="p-2">
        <div className="mb-2">
          <h3 className="text-sm font-medium text-muted-foreground px-2">
            Files
          </h3>
        </div>
        
        <div className="space-y-0.5">
          {sortNodes(files).map(file => renderNode(file))}
        </div>
        
        {files.length === 0 && (
          <div className="text-sm text-muted-foreground text-center py-8">
            No files found
          </div>
        )}
      </div>
    </div>
  )
}