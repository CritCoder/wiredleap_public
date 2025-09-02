'use client'

import { FileHeaderProps, FileAction } from '@/types'
import { cn } from '@/lib/utils'
import { 
  Download, 
  Copy, 
  Edit3, 
  Trash2, 
  Share2, 
  Maximize2,
  FileText,
  Folder
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function FileHeader({
  file,
  onAction,
  showActions = true,
  className
}: FileHeaderProps) {
  const handleAction = (action: FileAction) => {
    onAction?.(action)
  }

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return ''
    const units = ['B', 'KB', 'MB', 'GB']
    let size = bytes
    let unitIndex = 0
    
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024
      unitIndex++
    }
    
    return `${size.toFixed(1)} ${units[unitIndex]}`
  }

  const formatDate = (date?: Date) => {
    if (!date) return ''
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const getFileIcon = () => {
    return file.type === 'folder' ? (
      <Folder className="w-4 h-4 text-blue-500" />
    ) : (
      <FileText className="w-4 h-4 text-gray-500" />
    )
  }

  const getLanguageColor = (lang?: string) => {
    const colors: Record<string, string> = {
      typescript: 'bg-blue-500',
      javascript: 'bg-yellow-500',
      python: 'bg-green-500',
      java: 'bg-red-500',
      css: 'bg-blue-400',
      html: 'bg-orange-500',
      json: 'bg-gray-500',
      markdown: 'bg-purple-500'
    }
    return colors[lang?.toLowerCase() || ''] || 'bg-gray-400'
  }

  return (
    <div className={cn(
      'flex items-center justify-between p-4 border-b border-border bg-background',
      className
    )}>
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {getFileIcon()}
        
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-foreground truncate">
              {file.name}
            </h3>
            {file.language && (
              <span className={cn(
                'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white',
                getLanguageColor(file.language)
              )}>
                {file.language.toUpperCase()}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
            <span>{file.path}</span>
            {file.size && <span>{formatFileSize(file.size)}</span>}
            {file.lastModified && <span>Modified {formatDate(file.lastModified)}</span>}
          </div>
        </div>
      </div>

      {showActions && onAction && (
        <div className="flex items-center gap-2 ml-4">
          {/* Quick actions */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleAction('copy')}
            title="Copy content"
          >
            <Copy className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleAction('download')}
            title="Download file"
          >
            <Download className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleAction('fullscreen')}
            title="View fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>

          {/* More actions dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleAction('edit')}>
                <Edit3 className="w-4 h-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAction('share')}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => handleAction('delete')}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  )
}