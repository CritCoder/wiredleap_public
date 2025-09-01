"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function FooterSection() {
  return (
    <>
      {/* Separator above footer */}
      <Separator className="w-full bg-border/50" />
      
      <footer className="w-full bg-background">
        {/* Main Footer Content */}
        <div className="max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
          {/* Left Section: Logo, Description, Social Links */}
          <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
            <div className="flex gap-3 items-stretch justify-center">
              <div className="text-center text-foreground text-xl font-semibold leading-4">Wiredleap</div>
            </div>
            <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">
              Advanced AI-powered intelligence solutions for enterprise operations
            </p>
            <div className="flex justify-start items-start gap-3">
              <div className="w-4 h-4 flex items-center justify-center">
                <Twitter className="w-full h-full text-muted-foreground" />
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <Github className="w-full h-full text-muted-foreground" />
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <Linkedin className="w-full h-full text-muted-foreground" />
              </div>
            </div>
          </div>
          
          {/* Right Section: Platform, Company, Resources */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
            <div className="flex flex-col justify-start items-start gap-3">
              <h3 className="text-muted-foreground text-sm font-medium leading-5">Platform</h3>
              <div className="flex flex-col justify-end items-start gap-2">
                <span className="text-foreground text-sm font-normal leading-5">
                  Signal Intelligence
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Threat Detection
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Real-time Analytics
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  AI-Powered Insights
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Enterprise Security
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <h3 className="text-muted-foreground text-sm font-medium leading-5">Company</h3>
              <div className="flex flex-col justify-center items-start gap-2">
                <span className="text-foreground text-sm font-normal leading-5">
                  About us
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Our team
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Careers
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Contact
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Press
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <h3 className="text-muted-foreground text-sm font-medium leading-5">Resources</h3>
              <div className="flex flex-col justify-center items-start gap-2">
                <span className="text-foreground text-sm font-normal leading-5">
                  Documentation
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  API Reference
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Support
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Community
                </span>
                <span className="text-foreground text-sm font-normal leading-5">
                  Status
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal Footer Section */}
        <div className="border-t border-border/50 bg-muted/30">
          <div className="max-w-[1320px] mx-auto px-5 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-xs text-muted-foreground">
                © 2025 Wiredleap Technologies, Inc. All rights reserved.
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 text-xs text-muted-foreground">
                <a href="/privacy" className="cursor-pointer hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="cursor-pointer hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="cursor-pointer hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
                <a href="/dpa" className="cursor-pointer hover:text-foreground transition-colors">
                  Data Processing Agreement
                </a>
                <a href="/security" className="cursor-pointer hover:text-foreground transition-colors">
                  Security
                </a>
                <a href="/compliance" className="cursor-pointer hover:text-foreground transition-colors">
                  Compliance
                </a>
              </div>
            </div>
            
            {/* Additional Legal Information */}
            <div className="mt-4 text-xs text-muted-foreground/70 leading-relaxed">
              <p className="text-center md:text-left">
                Wiredleap is a registered trademark of Wiredleap Technologies, Inc. 
                This platform is designed for authorized government and enterprise use only. 
                All data processing complies with SOC 2 Type II, ISO 27001, and FedRAMP standards. 
                For security inquiries, contact security@wiredleap.com. 
                This service is not intended for personal or unauthorized use.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
