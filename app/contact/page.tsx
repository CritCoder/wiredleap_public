import React from 'react'
import { Header } from '@/components/header'
import { FooterSection } from '@/components/footer-section'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/40 z-5" />
          <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">Have questions about Wiredleap’s surveillance intelligence platform? Send us a message and we’ll get back to you shortly.</p>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales Question</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground mb-1">hello@wiredleap.com</p>
                  <p className="text-muted-foreground mb-1">support@wiredleap.com</p>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM PST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Office</h3>
                  <p className="text-muted-foreground mb-1">123 Innovation Drive</p>
                  <p className="text-muted-foreground mb-1">San Francisco, CA 94105</p>
                  <p className="text-sm text-muted-foreground">United States</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p className="text-muted-foreground mb-1">Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="/faq" className="block text-muted-foreground hover:text-foreground transition-colors">
                  → Frequently Asked Questions
                </a>
                {/* Pricing link removed */}
                <a href="/solutions" className="block text-muted-foreground hover:text-foreground transition-colors">
                  → Solutions Overview
                </a>
                <a href="/docs" className="block text-muted-foreground hover:text-foreground transition-colors">
                  → Documentation
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground mb-6">We’re located in the heart of San Francisco’s tech district. Drop by for a coffee and a chat about AI‑powered security and monitoring.</p>
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Coming Soon</p>
            </div>
          </div>
        </section>
      </div>
      </main>

      <FooterSection />
    </div>
  )
}
