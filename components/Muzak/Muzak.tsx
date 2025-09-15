"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Muzak() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const instagramLink = "https://www.instagram.com/edufreedomproj"

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
    
    // Set a timeout to mark component as loaded even if other operations fail
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [])

  // Don't render anything server-side or until mounted
  if (!mounted) return null;

  return (
    <section className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* EFP Info Section */}
          <div className="md:col-span-3">
            <div className="max-w-sm">
              <h2 className="text-xl font-semibold">Educational Freedom Project</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Student Campaign to Transform Higher Education
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
              </div>
            </div>
          </div>

          {/* EFP Description */}
          <div className="md:col-span-9">
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The Educational Freedom Project is our answer to this moment. [cite_start]We are a campaign for the demoralized student that has always believed that our universities could be better, for the frustrated student that grasps the gravity of this moment, and for the student that is unafraid to roll up their sleeves and get to work[cite: 24].
                </p>
                <p className="text-sm text-muted-foreground">
                  [cite_start]Our aim is to harness the emotions students are feeling right now into an organized, purposeful, and effective front that will defend and fulfill the promise of our universities[cite: 25].
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Our Goals</h4>
                <ul className="space-y-2">
                  <li>
                    [cite_start]<Link href="/charter" className="text-muted-foreground hover:text-foreground transition-colors">Mobilize students to protect our communities and universities from government attacks [cite: 30]</Link>
                  </li>
                  <li>
                    [cite_start]<Link href="/charter" className="text-muted-foreground hover:text-foreground transition-colors">Build long-lasting student advocacy infrastructure across universities [cite: 30]</Link>
                  </li>
                  <li>
                    [cite_start]<Link href="/charter" className="text-muted-foreground hover:text-foreground transition-colors">Implement reforms to promote teaching, learning, expression, and opportunity [cite: 31]</Link>
                  </li>
                  <li>
                    <Link href={instagramLink} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">In the Media</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 pt-6 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              If there has ever been a time to act, that time is now. [cite_start]Join us[cite: 32].
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
