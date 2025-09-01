import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, ArrowRight, Phone, Mail } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CTASection() {
  return (
    <section className="w-full py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <Card className="border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/10">
          <CardContent className="p-16 text-center">
            <Badge className="mb-8 px-6 py-3 text-base bg-black/10 backdrop-blur-sm border border-black/20 text-black hover:bg-black/20 transition-all duration-300">
              🚀 Ready to Transform Your Intelligence Operations?
            </Badge>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-alliance2 font-light mb-8 leading-tight">
              Experience the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                AI-Powered Intelligence
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Join leading government agencies and Fortune 500 companies who trust Wiredleap 
              for their most critical intelligence and security operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="px-12 py-6 text-xl bg-black text-white hover:bg-black/90 transition-all duration-300 group rounded-full shadow-lg hover:shadow-xl">
                    <Phone className="mr-3 w-6 h-6" />
                    Schedule a Call
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-xl border border-white/50">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-alliance2 font-light text-center">
                      Schedule a Call
                    </DialogTitle>
                    <DialogDescription className="text-lg text-center">
                      Interested in solving your problems with Palantir software?
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form className="space-y-6 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-base font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          className="mt-2 h-12 text-base"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-base font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          className="mt-2 h-12 text-base"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">
                        Business Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-2 h-12 text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-2 h-12 text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="jobTitle" className="text-base font-medium">
                        Job Title *
                      </Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        className="mt-2 h-12 text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-base font-medium">
                        Company / Institution *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        className="mt-2 h-12 text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="country" className="text-base font-medium">
                        Country *
                      </Label>
                      <Select name="country" required>
                        <SelectTrigger className="mt-2 h-12 text-base">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="projectDetails" className="text-base font-medium">
                        Tell us about your project, a bit of context will allow us to connect you to the right team faster:
                      </Label>
                      <Textarea
                        id="projectDetails"
                        name="projectDetails"
                        className="mt-2 min-h-32 text-base"
                        placeholder="Describe your project requirements, challenges, and goals..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full h-14 text-lg bg-black text-white hover:bg-black/90 transition-all duration-300 rounded-full">
                      Submit
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      Please see our{" "}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                      {" "}regarding how we will handle this information.
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-2 border-black/20 text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full">
                <Mail className="mr-3 w-6 h-6" />
                Contact Sales
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold mb-1">Enterprise Security</div>
                  <div className="text-lg text-muted-foreground">SOC 2, ISO 27001, FedRAMP</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold mb-1">24/7 Support</div>
                  <div className="text-lg text-muted-foreground">Dedicated security operations</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold mb-1">Expert Team</div>
                  <div className="text-lg text-muted-foreground">Former intelligence professionals</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
