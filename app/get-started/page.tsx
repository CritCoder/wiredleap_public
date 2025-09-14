
'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, Users } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
  country: string
  projectDescription: string
}

const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "Australia", 
  "Japan", "South Korea", "Singapore", "Netherlands", "Switzerland", "Sweden",
  "Norway", "Denmark", "Finland", "Belgium", "Austria", "Ireland", "New Zealand",
  "Israel", "Other"
]

export default function GetStartedPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    country: '',
    projectDescription: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
    if (!formData.company.trim()) newErrors.company = 'Company/Institution is required'
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const msg = await res.json().catch(() => ({}))
        throw new Error(msg?.error || 'Failed to submit')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white monochrome">
        <Header />
        <main className="pt-24">
          <div className="max-w-2xl mx-auto px-6 py-12 text-center">
            <Card className="bg-white/5 border border-white/10 rounded-2xl">
              <CardContent className="pt-8">
                <CheckCircle className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h1 className="text-2xl font-alliance2 font-light text-white mb-2">
                  Thank You for Your Interest!
                </h1>
                <p className="text-white/70 mb-6">
                  We've received your demo request and will connect you with the right team within 24 hours.
                </p>
                <div className="space-y-1.5 text-sm text-white/70">
                  <p>✓ Your information has been securely submitted</p>
                  <p>✓ Our solutions team will review your project details</p>
                  <p>✓ You'll receive a follow-up within 1 business day</p>
                </div>
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="mt-6 bg-white text-black hover:bg-white/90 rounded-xl"
                >
                  Return to Homepage
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <FooterSection />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white monochrome">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-alliance2 font-light text-white mb-4">
              Get Started with Wiredleap
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Contact us for a demo, partnership inquiry, or to discuss how Wiredleap's AI-powered surveillance intelligence can solve your organization's most complex challenges.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact / Demo Request + Partnership Inquiry</CardTitle>
              <CardDescription className="text-white/70">
                Interested in solving your problems with Wiredleap's advanced surveillance software?
              </CardDescription>
            </CardHeader>
            
              <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/30 rounded-md p-3">
                    {submitError}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-white/70">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`bg-black/40 border-white/10 text-white placeholder:text-white/40 ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-white/70">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-white/70">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`bg-black/40 border-white/10 text-white placeholder:text-white/40 ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-white/70">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Business Email Address <span className="text-white/70">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-black/40 border-white/10 text-white placeholder:text-white/40 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-white/70">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-white/70">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`bg-black/40 border-white/10 text-white placeholder:text-white/40 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-sm text-white/70">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle">
                    Job Title <span className="text-white/70">*</span>
                  </Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className={`bg-black/40 border-white/10 text-white placeholder:text-white/40 ${errors.jobTitle ? 'border-red-500' : ''}`}
                    placeholder="e.g., Security Director, CTO, IT Manager"
                  />
                  {errors.jobTitle && (
                    <p className="text-sm text-white/70">{errors.jobTitle}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">
                    Company / Institution <span className="text-white/70">*</span>
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`bg-black/40 border-white/10 text-white placeholder:text-white/40 ${errors.company ? 'border-red-500' : ''}`}
                    placeholder="Your organization name"
                  />
                  {errors.company && (
                    <p className="text-sm text-white/70">{errors.company}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">
                    Country <span className="text-white/70">*</span>
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger className={`bg-black/40 border-white/10 text-white ${errors.country ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p className="text-sm text-white/70">{errors.country}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDescription">
                    Tell us about your project
                  </Label>
                  <p className="text-sm text-white/70">
                    A bit of context will allow us to connect you to the right team faster:
                  </p>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    placeholder="Describe your surveillance requirements, security challenges, or partnership interests..."
                    className="min-h-[100px] bg-black/40 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-white/90 font-semibold py-3 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>

                <p className="text-xs text-white/60 text-center">
                  Please see our{' '}
                  <a href="/privacy" className="text-white hover:underline">
                    Privacy Policy
                  </a>{' '}
                  regarding how we will handle this information.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-alliance2 font-light text-white mb-8">Why Choose Wiredleap?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <Shield className="w-7 h-7 text-white/80" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enterprise-Grade Security</h3>
                <p className="text-white/70 text-sm">
                  Advanced AI-powered surveillance solutions trusted by top organizations worldwide.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <Zap className="w-7 h-7 text-white/80" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Intelligence</h3>
                <p className="text-white/70 text-sm">
                  Get instant alerts and actionable insights with our cutting-edge monitoring technology.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <Users className="w-7 h-7 text-white/80" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                <p className="text-white/70 text-sm">
                  Our expert team provides 24/7 support and custom solutions for your unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
