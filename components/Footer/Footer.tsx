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
                    src={theme === "dark" ? "/svg-logos/NikBearBrown_white_logo.svg" : "/svg-logos/NikBearBrown_black_logo.svg"}
                    alt="NikBearBrown.com"
                    width={300}
                    height={67}
                    className="h-16 w-auto"
                  />
                ) : (
                  <div className="h-16 w-72 bg-muted animate-pulse rounded" />
                )}
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                NikBearBrown.com
                <br />Personal website of Nik Bear Brown
              </p>
              <div className="mt-6 flex space-x-4 items-center">
                <Link href="https://github.com/nikbearbrown" className="text-sm hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {/* GitHub icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/@NikBearBrown" className="text-sm hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {/* YouTube icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
                <Link href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6" className="text-sm hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {/* Spotify icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14.5c1.5 1 4 1 5.5 0" />
                    <path d="M8 11c2 1 5 1 7 0" />
                    <path d="M8.5 7.5c2.5 1 6.5 1 9 0" />
                  </svg>
                </Link>
                <Link href="https://music.apple.com/us/artist/1779725275" className="text-sm hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {/* Apple Music icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M9.5 8.5h5l-1.5 6h-2" />
                    <path d="M12 16.5V18" />
                    <path d="M12 6v1" />
                  </svg>
                </Link>
                <Link href="mailto:bear@bearbrown.co" className="text-sm hover:text-primary transition-colors">
                  {/* Mail icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {/* ⬇️ Changed md:grid-cols-4 to md:grid-cols-5 */}
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Main Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/art" className="text-muted-foreground hover:text-foreground transition-colors">Art</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/books" className="text-muted-foreground hover:text-foreground transition-colors">Books</Link></li>
                <li><Link href="/classes" className="text-muted-foreground hover:text-foreground transition-colors">Classes</Link></li>
                <li><Link href="/consulting" className="text-muted-foreground hover:text-foreground transition-colors">Consulting</Link></li>
                <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="https://github.com/nikbearbrown" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
                <li><Link href="https://www.youtube.com/@NikBearBrown" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
                <li><Link href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Spotify</Link></li>
                <li><Link href="https://music.apple.com/us/artist/1779725275" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Apple Music</Link></li>
              </ul>
            </div>

            {/* NEW: Network column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Network</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://spotify.nikbearbrown.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    spotify.nikbearbrown.com
                  </Link>
                </li>
                <li>
                  <Link href="https://muzak.nikbearbrown.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    muzak.nikbearbrown.com
                  </Link>
                </li>
                <li>
                  <Link href="https://www.nikbearbrown.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    nikbearbrown.com
                  </Link>
                </li>
                <li>
                  <Link href="https://github.nikbearbrown.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    github.nikbearbrown.com
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.nikbearbrown.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    youtube.nikbearbrown.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Have a question or want to collaborate?
                <br />
                <a href="mailto:bear@bearbrown.co" className="text-primary hover:underline">bear@bearbrown.co</a>
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Summary */}
        <div className="mt-12 pt-8 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              At NikBearBrown.com, we respect your privacy and are committed to protecting your personal information.
              For complete details, please read our{" "}
              <Link href="/privacy" className="text-primary hover:underline">full privacy policy</Link>.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; 2017 - {currentYear} NikBearBrown.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
