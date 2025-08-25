import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { BookOpen, Palette, Music, Dumbbell, Code } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col justify-center space-y-4 lg:col-span-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Nik Bear Brown
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I teach, draw, code, and write songs. My work lives where
                  curiosity and craft meet—using AI to help people learn, make,
                  and do more with integrity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <PrimaryButton href="/about">
                  About Me
                </PrimaryButton>
                <SecondaryButton href="/contact">
                  Contact
                </SecondaryButton>
              </div>
            </div>
            <div className="flex items-center justify-center lg:col-span-2">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/aEjgD65h1mY?si=UX-tdS58VJ5WzIPn"
                  title="NikBearBrown.com Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Areas Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Work & Passions</h2>
              <p className="text-muted-foreground max-w-[700px]">
                These are the through-lines of my life: teaching, drawing, research, music,
                building for social good, and staying healthy enough to keep going.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Teaching & Workshops */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Teaching & Workshops</h3>
              <p className="text-muted-foreground mb-4">
                I teach AI, ML, and programming by making things with students.
                We prototype, test, and learn out loud. I run sessions on prompt
                engineering, agentic AI, and responsible deployment for classrooms
                and teams.
              </p>
              <Link href="/classes" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Explore courses
              </Link>
            </div>

            {/* Illustration */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Palette className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Illustration</h3>
              <p className="text-muted-foreground mb-4">
                I draw to think. From hand sketches to AI-assisted visuals, I build
                storyboards, diagrams, and covers for classes, research, and nonprofit
                projects. Pictures turn complex ideas into invitations.
              </p>
              <Link href="/art" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                View artwork
              </Link>
            </div>

            {/* Music */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Music className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Music</h3>
              <p className="text-muted-foreground mb-4">
                I write songs and modern takes on public-domain tunes. Music keeps me honest
                and curious. You’ll find narrative ballads and experiments that blur
                folk traditions with digital craft.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4 hover:text-foreground"
                >
                  Listen on Spotify
                </Link>
                <Link
                  href="/music"
                  className="text-sm font-medium underline underline-offset-4 hover:text-foreground"
                >
                  Project notes
                </Link>
              </div>
            </div>

            {/* Research & Writing */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Research & Writing</h3>
              <p className="text-muted-foreground mb-4">
                I publish on AI, design, and computational biology. I also write
                books about AI in creative practice and storytelling. Research
                is how I test ideas; writing is how I share them.
              </p>
              <Link href="/research" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read more
              </Link>
            </div>

            {/* Fitness */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4 flex space-x-2">
                <Dumbbell className="h-10 w-10" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M12 2a5 5 0 0 0-5 5c0 2 2 4 5 4s5-2 5-4a5 5 0 0 0-5-5z" />
                  <path d="M20 17.5c0 2.485-4 4.5-8 4.5s-8-2.015-8-4.5S8 13 12 13s8 2.015 8 4.5z" />
                  <path d="M12 13v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fitness & Wellness</h3>
              <p className="text-muted-foreground mb-4">
                Former wrestler with a passion for CrossFit, yoga, and maintaining
                a balanced lifestyle. Committed to physical and mental wellness as
                a foundation for creativity and productivity.
              </p>
              <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read my fitness journey
              </Link>
            </div>

            {/* Nonprofit */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Humanitarians AI</h3>
              <p className="text-muted-foreground mb-4">
                Founder of Humanitarians AI, a 501(c)(3) nonprofit dedicated to
                developing ethical AI solutions for education, healthcare, and
                social impact through research and mentorship.
              </p>
              <Link href="/projects" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Explore our projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-4 text-sm font-medium">CONNECT WITH ME</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">Let's Collaborate</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Whether you're interested in AI education, music collaboration, art projects,
              or nonprofit initiatives, I'm always open to connecting with like-minded
              individuals and organizations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryButton href="/consulting">
                Work with Me
              </PrimaryButton>
              <SecondaryButton href="/contact">
                Get in Touch
              </SecondaryButton>
              <SecondaryButton href="https://www.youtube.com/@nikbearbrown" target="_blank" rel="noopener noreferrer">
                YouTube
              </SecondaryButton>
              <SecondaryButton href="https://github.com/nikbearbrown" target="_blank" rel="noopener noreferrer">
                GitHub
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
