import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { BookOpen, Palette, Music, Fitness, Yoga, Code } from "lucide-react"
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
                  Educator, artist, musician, and AI innovator dedicated to advancing artificial intelligence for social good.
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
                  src="https://www.youtube.com/embed/krxIXJ_Damo?si=BOtrn0StTh54ZIrW"
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
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">MY WORK & PASSIONS</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Exploring the intersection of technology, creativity, education, and wellness.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Teaching & Workshops */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">CLASSES & WORKSHOPS</h3>
              <p className="text-muted-foreground mb-4">
                Teaching AI, machine learning, and programming at Northeastern University. Offering workshops on prompt engineering, generative AI, and deep learning for students and professionals.
              </p>
              <Link href="/classes" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Explore courses
              </Link>
            </div>

            {/* Art & Music */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex space-x-2">
                <Palette className="h-10 w-10" />
                <Music className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">ART & MUSIC</h3>
              <p className="text-muted-foreground mb-4">
                Creator of AI-generated art and traditional drawings. Songwriter with over 100 songs on Spotify, exploring the fusion of technology and creative expression.
              </p>
              <Link href="/art" className="text-sm font-medium underline underline-offset-4 hover:text-foreground mr-4">
                View artwork
              </Link>
              <Link href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6" target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Listen on Spotify
              </Link>
            </div>

            {/* Fitness */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Fitness, Yoga, className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">FITNESS & WELLNESS</h3>
              <p className="text-muted-foreground mb-4">
                Former wrestler with a passion for CrossFit, yoga, and maintaining a balanced lifestyle. Committed to physical and mental wellness as a foundation for creativity and productivity.
              </p>
              <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read my fitness journey
              </Link>
            </div>

            {/* Nonprofit */}
            <div className="border p-8 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">HUMANITARIANS AI</h3>
              <p className="text-muted-foreground mb-4">
                Founder of Humanitarians AI, a 501(c)(3) nonprofit dedicated to developing ethical AI solutions for education, healthcare, and social impact through research and mentorship.
              </p>
              <Link href="/projects" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Explore our projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-4 text-sm font-medium">CONNECT WITH ME</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">LET'S COLLABORATE</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Whether you're interested in AI education, music collaboration, art projects, or nonprofit initiatives, 
              I'm always open to connecting with like-minded individuals and organizations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryButton href="/consulting">
                WORK WITH ME
              </PrimaryButton>
              <SecondaryButton href="/contact">
                GET IN TOUCH
              </SecondaryButton>
              <SecondaryButton href="https://www.youtube.com/@nikbearbrown" target="_blank" rel="noopener noreferrer">
                YOUTUBE
              </SecondaryButton>
              <SecondaryButton href="https://github.com/nikbearbrown" target="_blank" rel="noopener noreferrer">
                GITHUB
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
