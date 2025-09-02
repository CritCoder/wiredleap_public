export interface FileNode {
  id: string
  name: string
  type: 'file' | 'folder'
  path: string
  children?: FileNode[]
  content?: string
  language?: string
  size?: number
  lastModified?: Date
}

export interface FileViewerProps {
  files: FileNode[]
  selectedFile?: string
  onFileSelect?: (file: FileNode) => void
  onFileAction?: (action: FileAction, file: FileNode) => void
  className?: string
  showLineNumbers?: boolean
  theme?: 'light' | 'dark'
}

export interface FileHeaderProps {
  file: FileNode
  onAction?: (action: FileAction) => void
  showActions?: boolean
  className?: string
}

export interface FileTreeProps {
  files: FileNode[]
  selectedFile?: string
  onFileSelect?: (file: FileNode) => void
  expandedFolders?: Set<string>
  onToggleFolder?: (folderId: string) => void
  className?: string
}

export interface ShikiViewerProps {
  code: string
  language: string
  showLineNumbers?: boolean
  highlightLines?: number[]
  theme?: 'light' | 'dark'
  className?: string
  filename?: string
}

export type FileAction = 
  | 'copy'
  | 'download' 
  | 'edit'
  | 'delete'
  | 'rename'
  | 'share'
  | 'fullscreen'

export interface CodeHighlightConfig {
  theme: string
  languages: string[]
  showLineNumbers: boolean
  wrapLongLines: boolean
}

export interface FileStats {
  totalFiles: number
  totalFolders: number
  totalSize: number
  lastModified: Date
}