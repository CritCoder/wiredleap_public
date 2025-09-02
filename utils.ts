import { FileNode } from '@/types'

/**
 * Generate a unique ID for a file or folder
 */
export function generateFileId(path: string): string {
  return btoa(path).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16)
}

/**
 * Get file extension from filename
 */
export function getFileExtension(filename: string): string {
  const parts = filename.split('.')
  return parts.length > 1 ? parts.pop()?.toLowerCase() || '' : ''
}

/**
 * Determine programming language from file extension
 */
export function getLanguageFromExtension(extension: string): string {
  const languageMap: Record<string, string> = {
    'js': 'javascript',
    'jsx': 'javascript',
    'ts': 'typescript',
    'tsx': 'typescript',
    'py': 'python',
    'java': 'java',
    'cpp': 'cpp',
    'c': 'c',
    'cs': 'csharp',
    'php': 'php',
    'rb': 'ruby',
    'go': 'go',
    'rs': 'rust',
    'swift': 'swift',
    'kt': 'kotlin',
    'scala': 'scala',
    'html': 'html',
    'htm': 'html',
    'xml': 'xml',
    'css': 'css',
    'scss': 'scss',
    'sass': 'sass',
    'less': 'less',
    'json': 'json',
    'yaml': 'yaml',
    'yml': 'yaml',
    'toml': 'toml',
    'ini': 'ini',
    'cfg': 'ini',
    'conf': 'ini',
    'md': 'markdown',
    'markdown': 'markdown',
    'sql': 'sql',
    'sh': 'bash',
    'bash': 'bash',
    'zsh': 'bash',
    'fish': 'bash',
    'ps1': 'powershell',
    'bat': 'batch',
    'cmd': 'batch',
    'dockerfile': 'dockerfile',
    'r': 'r',
    'R': 'r',
    'matlab': 'matlab',
    'm': 'matlab',
    'tex': 'latex',
    'lua': 'lua',
    'vim': 'vim',
    'asm': 'assembly',
    's': 'assembly'
  }
  
  return languageMap[extension.toLowerCase()] || 'text'
}

/**
 * Format file size in human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B'
  
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  const k = 1024
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${units[i]}`
}

/**
 * Sort files and folders (folders first, then alphabetical)
 */
export function sortFiles(files: FileNode[]): FileNode[] {
  return [...files].sort((a, b) => {
    // Folders first
    if (a.type !== b.type) {
      return a.type === 'folder' ? -1 : 1
    }
    // Then alphabetical
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
  })
}

/**
 * Find a file by ID in a nested file tree
 */
export function findFileById(files: FileNode[], id: string): FileNode | null {
  for (const file of files) {
    if (file.id === id) {
      return file
    }
    if (file.children) {
      const found = findFileById(file.children, id)
      if (found) return found
    }
  }
  return null
}

/**
 * Find a file by path in a nested file tree
 */
export function findFileByPath(files: FileNode[], path: string): FileNode | null {
  for (const file of files) {
    if (file.path === path) {
      return file
    }
    if (file.children) {
      const found = findFileByPath(file.children, path)
      if (found) return found
    }
  }
  return null
}

/**
 * Get all files (not folders) from a nested file tree
 */
export function getAllFiles(files: FileNode[]): FileNode[] {
  const result: FileNode[] = []
  
  for (const file of files) {
    if (file.type === 'file') {
      result.push(file)
    } else if (file.children) {
      result.push(...getAllFiles(file.children))
    }
  }
  
  return result
}

/**
 * Filter files by name/content search
 */
export function searchFiles(files: FileNode[], query: string): FileNode[] {
  if (!query.trim()) return files
  
  const searchTerm = query.toLowerCase()
  const result: FileNode[] = []
  
  for (const file of files) {
    const matchesName = file.name.toLowerCase().includes(searchTerm)
    const matchesContent = file.content?.toLowerCase().includes(searchTerm)
    
    if (matchesName || matchesContent) {
      result.push(file)
    } else if (file.children) {
      const childMatches = searchFiles(file.children, query)
      if (childMatches.length > 0) {
        result.push({
          ...file,
          children: childMatches
        })
      }
    }
  }
  
  return result
}

/**
 * Get file tree statistics
 */
export function getFileTreeStats(files: FileNode[]): {
  totalFiles: number
  totalFolders: number
  totalSize: number
  maxDepth: number
} {
  let totalFiles = 0
  let totalFolders = 0
  let totalSize = 0
  let maxDepth = 0
  
  function traverse(nodes: FileNode[], depth: number = 0) {
    maxDepth = Math.max(maxDepth, depth)
    
    for (const node of nodes) {
      if (node.type === 'file') {
        totalFiles++
        totalSize += node.size || 0
      } else {
        totalFolders++
        if (node.children) {
          traverse(node.children, depth + 1)
        }
      }
    }
  }
  
  traverse(files)
  
  return { totalFiles, totalFolders, totalSize, maxDepth }
}

/**
 * Create a file tree from a flat list of file paths
 */
export function createFileTree(filePaths: string[]): FileNode[] {
  const root: FileNode[] = []
  const nodeMap = new Map<string, FileNode>()
  
  for (const filePath of filePaths) {
    const parts = filePath.split('/').filter(Boolean)
    let currentPath = ''
    let currentLevel = root
    
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      currentPath = currentPath ? `${currentPath}/${part}` : part
      const isFile = i === parts.length - 1 && part.includes('.')
      
      let node = nodeMap.get(currentPath)
      
      if (!node) {
        node = {
          id: generateFileId(currentPath),
          name: part,
          type: isFile ? 'file' : 'folder',
          path: currentPath,
          children: isFile ? undefined : []
        }
        
        if (isFile) {
          const extension = getFileExtension(part)
          node.language = getLanguageFromExtension(extension)
        }
        
        nodeMap.set(currentPath, node)
        currentLevel.push(node)
      }
      
      if (!isFile && node.children) {
        currentLevel = node.children
      }
    }
  }
  
  return sortFiles(root)
}

/**
 * Flatten a file tree into a list of all nodes
 */
export function flattenFileTree(files: FileNode[]): FileNode[] {
  const result: FileNode[] = []
  
  function traverse(nodes: FileNode[]) {
    for (const node of nodes) {
      result.push(node)
      if (node.children) {
        traverse(node.children)
      }
    }
  }
  
  traverse(files)
  return result
}

/**
 * Validate file tree structure
 */
export function validateFileTree(files: FileNode[]): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  const seenIds = new Set<string>()
  
  function validate(nodes: FileNode[], parentPath: string = '') {
    for (const node of nodes) {
      // Check for duplicate IDs
      if (seenIds.has(node.id)) {
        errors.push(`Duplicate ID found: ${node.id}`)
      }
      seenIds.add(node.id)
      
      // Check for valid type
      if (!['file', 'folder'].includes(node.type)) {
        errors.push(`Invalid type for ${node.path}: ${node.type}`)
      }
      
      // Check path consistency
      const expectedPath = parentPath ? `${parentPath}/${node.name}` : node.name
      if (node.path !== expectedPath) {
        errors.push(`Path mismatch for ${node.name}. Expected: ${expectedPath}, Got: ${node.path}`)
      }
      
      // Files shouldn't have children
      if (node.type === 'file' && node.children) {
        errors.push(`File ${node.path} has children but should not`)
      }
      
      // Validate children
      if (node.children) {
        validate(node.children, node.path)
      }
    }
  }
  
  validate(files)
  
  return {
    isValid: errors.length === 0,
    errors
  }
}