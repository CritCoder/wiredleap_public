import * as React from "react"
import { cn } from "@/lib/utils"

export interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "filled"
  size?: "sm" | "md" | "lg"
}

const StarBorder = React.forwardRef<HTMLDivElement, StarBorderProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "p-3 text-sm",
      md: "p-4 text-base", 
      lg: "p-6 text-lg"
    }

    const variantClasses = {
      default: "border-2 border-primary/20 bg-background",
      outline: "border-2 border-border bg-transparent",
      filled: "border-2 border-primary/30 bg-primary/5"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg overflow-hidden",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {/* Top-left star */}
        <div className="absolute -top-1 -left-1 w-3 h-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-primary/60"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Top-right star */}
        <div className="absolute -top-1 -right-1 w-3 h-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-primary/60"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Bottom-left star */}
        <div className="absolute -bottom-1 -left-1 w-3 h-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-primary/60"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Bottom-right star */}
        <div className="absolute -bottom-1 -right-1 w-3 h-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-primary/60"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

StarBorder.displayName = "StarBorder"

export { StarBorder }
