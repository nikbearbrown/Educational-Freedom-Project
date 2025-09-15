"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import ThemeToggle from "@/components/ThemeToggle"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const instagramLink = "https://www.instagram.com/edufreedomproj"

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info Section */}
          <div className="md:col-span-3">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center space-x-2">
                {mounted ? (
                  <Image
                    src={theme === "dark" ? "/svg-logos/EFP_white_logo.svg" : "/svg-logos/EFP_black_logo.svg"}
                    alt="Educational Freedom Project"
                    width={300}
                    height={67}
                    className="h-16 w-auto"
                  />
                ) : (
                  <div className="h-16 w-72 bg-muted animate-pulse rounded" />
                )}
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                The Educational Freedom Project
                <br />
                A student campaign to defend and fulfill the promise of higher education.
              </p>
              <div className="mt-6 flex space-x-4 items-center">
                <Link href={instagramLink} className="text-sm hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {/* Instagram icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Main Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="space-y-2">
                <li><Link href="/mission-statement" className="text-muted-foreground hover:text-foreground transition-colors">Mission Statement</Link></li>
                <li><Link href="/core-pillars" className="text-muted-foreground hover:text-foreground transition-colors">Core Pillars</Link></li>
                <li><Link href="/charter" className="text-muted-foreground hover:text-foreground transition-colors">Charter</Link></li>
                <li><Link href={instagramLink} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">In the Media</Link></li>
              </ul>
            </div>

            {/* Get Involved */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get Involved</h3>
              <ul className="space-y-2">
                <li><Link href={instagramLink} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Take Our Survey</Link></li>
                <li><Link href={instagramLink} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Join Us</Link></li>
                <li><Link href={instagramLink} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Slack</Link></li>
                <li><Link href={instagramLink} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Sign Our Club Endorsement Form</Link></li>
              </ul>
            </div>

            {/* Empty columns for spacing as the original was set up for 5 columns */}
            <div className="space-y-4"></div>
            <div className="space-y-4"></div>
            <div className="space-y-4"></div>
          </div>
        </div>

        {/* Privacy Policy Summary - Changed to EFP info */}
        <div className="mt-12 pt-8 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              The Educational Freedom Project is a grassroots campaign dedicated to transforming higher education.
              We open our arms to all students and university community members who share our goals.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {currentYear} Educational Freedom Project. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
