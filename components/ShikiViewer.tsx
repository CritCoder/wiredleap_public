'use client'

import { useEffect, useState } from 'react'
import { ShikiViewerProps } from '@/types'
import { cn } from '@/lib/utils'

// Mock syntax highlighter (replace with actual Shiki when installed)
export function ShikiViewer({
  code,
  language,
  showLineNumbers = true,
  highlightLines = [],
  theme = 'light',
  className,
  filename
}: ShikiViewerProps) {
  const [highlightedCode, setHighlightedCode] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate async highlighting (replace with actual Shiki implementation)
    const highlightCode = async () => {
      setIsLoading(true)
      
      // Mock delay
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Simple syntax highlighting simulation
      let highlighted = code
        .replace(/\/\*[\s\S]*?\*\//g, '<span class="text-gray-500 italic">$&</span>') // Comments
        .replace(/\/\/.*$/gm, '<span class="text-gray-500 italic">$&</span>') // Single line comments
        .replace(/\b(function|const|let|var|if|else|for|while|return|import|export|class|interface|type)\b/g, '<span class="text-blue-600 font-semibold">$&</span>') // Keywords
        .replace(/(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-600">$&</span>') // Strings
        .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="text-orange-600">$&</span>') // Numbers

      setHighlightedCode(highlighted)
      setIsLoading(false)
    }

    highlightCode()
  }, [code, language, theme])

  const lines = code.split('\n')

  return (
    <div className={cn(
      'relative overflow-hidden rounded-lg border border-border',
      theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900',
      className
    )}>
      {filename && (
        <div className={cn(
          'px-4 py-2 text-sm font-medium border-b border-border',
          theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-700'
        )}>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-2">{filename}</span>
            <span className="ml-auto text-xs opacity-70">{language}</span>
          </div>
        </div>
      )}
      
      <div className="relative">
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full"></div>
            <span className="ml-2 text-sm text-muted-foreground">Highlighting code...</span>
          </div>
        ) : (
          <div className="flex">
            {showLineNumbers && (
              <div className={cn(
                'select-none border-r border-border px-3 py-4 text-sm font-mono',
                theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-50 text-gray-500'
              )}>
                {lines.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      'leading-6',
                      highlightLines.includes(index + 1) && 'bg-yellow-200/50'
                    )}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex-1 overflow-x-auto">
              <pre className="p-4 text-sm font-mono leading-6">
                <code
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                  className="block"
                />
              </pre>
            </div>
          </div>
        )}
      </div>
      
      {/* Copy button */}
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className={cn(
          'absolute top-2 right-2 p-2 rounded-md opacity-0 hover:opacity-100 transition-opacity',
          theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        )}
        title="Copy code"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  )
}