import { StarBorder } from "@/components/ui/star-border"

export default function StarBorderDemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">StarBorder Component Demo</h1>
          <p className="text-muted-foreground text-lg">
            A theme-aware border component with decorative star elements
          </p>
        </div>

        {/* Default variant */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Default Variant</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StarBorder size="sm">
              <div className="text-center">
                <h3 className="font-medium">Small Size</h3>
                <p className="text-sm text-muted-foreground">Compact star border</p>
              </div>
            </StarBorder>
            
            <StarBorder size="md">
              <div className="text-center">
                <h3 className="font-medium">Medium Size</h3>
                <p className="text-sm text-muted-foreground">Standard star border</p>
              </div>
            </StarBorder>
            
            <StarBorder size="lg">
              <div className="text-center">
                <h3 className="font-medium">Large Size</h3>
                <p className="text-sm text-muted-foreground">Spacious star border</p>
              </div>
            </StarBorder>
          </div>
        </div>

        {/* Outline variant */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Outline Variant</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StarBorder variant="outline" size="sm">
              <div className="text-center">
                <h3 className="font-medium">Small Outline</h3>
                <p className="text-sm text-muted-foreground">Clean border style</p>
              </div>
            </StarBorder>
            
            <StarBorder variant="outline" size="md">
              <div className="text-center">
                <h3 className="font-medium">Medium Outline</h3>
                <p className="text-sm text-muted-foreground">Balanced proportions</p>
              </div>
            </StarBorder>
            
            <StarBorder variant="outline" size="lg">
              <div className="text-center">
                <h3 className="font-medium">Large Outline</h3>
                <p className="text-sm text-muted-foreground">Prominent presence</p>
              </div>
            </StarBorder>
          </div>
        </div>

        {/* Filled variant */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Filled Variant</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StarBorder variant="filled" size="sm">
              <div className="text-center">
                <h3 className="font-medium">Small Filled</h3>
                <p className="text-sm text-muted-foreground">Subtle background</p>
              </div>
            </StarBorder>
            
            <StarBorder variant="filled" size="md">
              <div className="text-center">
                <h3 className="font-medium">Medium Filled</h3>
                <p className="text-sm text-muted-foreground">Enhanced visibility</p>
              </div>
            </StarBorder>
            
            <StarBorder variant="filled" size="lg">
              <div className="text-center">
                <h3 className="font-medium">Large Filled</h3>
                <p className="text-sm text-muted-foreground">Bold appearance</p>
              </div>
            </StarBorder>
          </div>
        </div>

        {/* Custom styling example */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Custom Styling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StarBorder 
              className="border-dashed border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10"
              size="lg"
            >
              <div className="text-center">
                <h3 className="font-medium">Custom Border</h3>
                <p className="text-sm text-muted-foreground">Dashed border with gradient background</p>
              </div>
            </StarBorder>
            
            <StarBorder 
              className="border-4 border-primary/50 bg-gradient-to-br from-background to-muted/20 shadow-lg"
              size="lg"
            >
              <div className="text-center">
                <h3 className="font-medium">Enhanced Style</h3>
                <p className="text-sm text-muted-foreground">Thick border with shadow effects</p>
              </div>
            </StarBorder>
          </div>
        </div>

        {/* Usage example */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Usage Example</h2>
          <div className="bg-muted/20 rounded-lg p-6">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { StarBorder } from "@/components/ui/star-border"

export function StarBorderDemo() {
  return (
    <div className="space-y-8">
      <StarBorder>
        Theme-aware Border
      </StarBorder>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
