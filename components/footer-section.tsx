"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function FooterSection() {
  return (
    <>
      {/* Separator above footer */}
      <Separator className="w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <footer className="relative w-full bg-black text-white overflow-hidden">
        {/* Decorative background accents */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* subtle top glow */}
          <div className="absolute inset-x-0 -top-8 h-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)] opacity-20" />
          {/* ultra-subtle grid */}
          <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        {/* Main Footer Content */}
        <div className="max-w-[1320px] mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Section: Logo, Description, Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="text-white text-2xl font-semibold leading-6">Wiredleap</div>
              <p className="mt-3 text-white/70 text-sm leading-6 max-w-md">
                Advanced AI-powered intelligence solutions for enterprise operations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a aria-label="Twitter" href="https://twitter.com/wiredleap" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <Twitter className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
              </a>
              <a aria-label="GitHub" href="https://github.com/wiredleap" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <Github className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com/company/wiredleap" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Section: Platform, Company, Resources */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8">
            <div>
              <h3 className="text-xs tracking-widest uppercase text-white/50 mb-3">Platform</h3>
              <ul className="space-y-2.5 leading-6">
                <li><a className="text-white/80 hover:text-white transition-colors" href="/solutions">Signal Intelligence</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/solutions">Threat Detection</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/solutions">Real-time Analytics</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/solutions">AI-Powered Insights</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/solutions">Enterprise Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-white/50 mb-3">Company</h3>
              <ul className="space-y-2.5 leading-6">
                <li><a className="text-white/80 hover:text-white transition-colors" href="/about">About us</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/about">Our team</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/contact">Careers</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/contact">Contact</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/contact">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-white/50 mb-3">Resources</h3>
              <ul className="space-y-2.5 leading-6">
                <li><a className="text-white/80 hover:text-white transition-colors" href="/docs">Documentation</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/docs">API Reference</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/contact">Support</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/contact">Community</a></li>
                <li><a className="text-white/80 hover:text-white transition-colors" href="/contact">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Legal Footer Section */}
        <div className="border-t border-white/10 bg-black/40">
          <div className="max-w-[1320px] mx-auto px-5 py-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-xs text-white/70">
                © 2025 Wiredleap Technology Pvt. Ltd. All rights reserved.
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 text-xs text-white/70">
                <a href="/privacy" className="cursor-pointer hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="cursor-pointer hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="cursor-pointer hover:text-white transition-colors">
                  Cookie Policy
                </a>
                <a href="/dpa" className="cursor-pointer hover:text-white transition-colors">
                  Data Processing Agreement
                </a>
                <a href="/security" className="cursor-pointer hover:text-white transition-colors">
                  Security
                </a>
                <a href="/compliance" className="cursor-pointer hover:text-white transition-colors">
                  Compliance
                </a>
              </div>
            </div>
            
            {/* Additional Legal Information */}
            <div className="mt-3 text-white/30 leading-relaxed hidden md:block">
              <p className="legal-copy text-center md:text-left whitespace-nowrap">
                Wiredleap is a registered trademark of Wiredleap Technology Pvt. Ltd. 
                This platform is designed for authorized government and enterprise use only. 
                All data processing complies with ISO 9001 and ISO 27001 standards. 
                For security inquiries, contact <a href="mailto:security@wiredleap.com" className="text-white/50 hover:text-white transition-colors">security@wiredleap.com</a>. 
                This service is not intended for personal or unauthorized use.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
