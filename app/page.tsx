import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { BookOpen, Palette, Music, Dumbbell, Code } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const instagramLink = "https://www.instagram.com/edufreedomproj"
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col justify-center space-y-4 lg:col-span-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Educational Freedom Project
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  [cite_start]We are a group of students organizing to defend and fulfill the promise of higher education—a promise rooted in learning, teaching, expression, and opportunity—which today faces an existential threat[cite: 78, 79, 80].
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <PrimaryButton href="/charter">
                  Read Our Charter
                </PrimaryButton>
                <SecondaryButton href={instagramLink} target="_blank" rel="noopener noreferrer">
                  Join Us
                </SecondaryButton>
              </div>
            </div>
            <div className="flex items-center justify-center lg:col-span-2">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=UX-tdS58VJ5WzIPn" // Placeholder video
                  title="EFP Mission"
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Core Pillars</h2>
              <p className="text-muted-foreground max-w-[700px]">
                [cite_start]American institutions of higher education rest upon an aspirational promise that envisions universities as havens for learning, teaching, expression, and opportunity[cite: 44, 45].
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Learning */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning</h3>
              <p className="text-muted-foreground mb-4">
                [cite_start]A university education is centered on learning about the world and ourselves[cite: 35]. [cite_start]To us, learning requires accessibility, inclusivity, safety, and affordability[cite: 36].
              </p>
              <Link href="/core-pillars" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read More
              </Link>
            </div>

            {/* Teaching */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Palette className="h-10 w-10" /> {/* Reused icon, can be changed */}
              </div>
              <h3 className="text-xl font-bold mb-2">Teaching</h3>
              <p className="text-muted-foreground mb-4">
                [cite_start]Professors are stewards of intellectual exploration, dedicating their experience to training the next generation[cite: 37]. [cite_start]We will fight for the independence of our universities and the job security of our professors[cite: 38].
              </p>
              <Link href="/core-pillars" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read More
              </Link>
            </div>

            {/* Expression */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Music className="h-10 w-10" /> {/* Reused icon, can be changed */}
              </div>
              <h3 className="text-xl font-bold mb-2">Expression</h3>
              <p className="text-muted-foreground mb-4">
                [cite_start]The cornerstone of a good education is the ability for students to freely express their ideas and themselves[cite: 39]. [cite_start]Our campuses must be sanctuaries for freedom of speech, assembly, and expression[cite: 40].
              </p>
              <Link href="/core-pillars" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read More
              </Link>
            </div>

            {/* Opportunity */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Dumbbell className="h-10 w-10" /> {/* Reused icon, can be changed */}
              </div>
              <h3 className="text-xl font-bold mb-2">Opportunity</h3>
              <p className="text-muted-foreground mb-4">
                [cite_start]Universities are hubs of opportunity, providing students with necessary skills to join the workforce, and offering research and upskilling opportunities[cite: 41].
              </p>
              <Link href="/core-pillars" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-4 text-sm font-medium">GET INVOLVED</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">Join the Movement</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              [cite_start]We are a campaign for the demoralized student that has always believed that our universities could be better[cite: 24]. [cite_start]Our aim is to harness the emotions students are feeling right now into an organized, purposeful, and effective front that will defend and fulfill the promise of our universities[cite: 25].
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryButton href={instagramLink} target="_blank" rel="noopener noreferrer">
                Follow Us on Instagram
              </PrimaryButton>
              <SecondaryButton href="/charter">
                Learn How to Get Started
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
