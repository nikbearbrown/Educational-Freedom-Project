import type { Metadata } from "next";
import Link from "next/link";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

export const metadata: Metadata = {
  title: "Ultimate Suno Meta Tags Guide",
  description: "Comprehensive reference guide for using meta tags in Suno AI music generation",
};

export default function SunoMetaTagsPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ultimate Suno Meta Tags Guide</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Enhance your AI-generated music with Suno meta tags. This comprehensive guide organizes all Suno meta tags by category, helping you create more dynamic and professionally structured songs with precise control over instruments, vocals, and production elements.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=caS7A9UMCFewuuRB&amp;list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid gap-12">
          {/* ===== WHAT ARE META TAGS SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">What Are Suno Meta Tags?</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Meta tags in Suno allow you to provide detailed instructions beyond your initial prompts, giving you greater control over your AI-generated songs. They act as special directives that help shape the structure, instrumentation, and production of your music.
              </p>
              
              <p>
                Without meta tags, you might find yourself hoping that Suno correctly interprets your genre prompts for features like guitar solos or specific instrumental sections. Meta tags give you direct control instead of relying on chance.
              </p>
              
              <div className="p-6 bg-muted/50 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">Meta Tag Syntax</h3>
                <p className="text-muted-foreground mb-2">
                  All meta tags use square brackets around the instruction:
                </p>
                <code className="block bg-black/10 dark:bg-white/10 p-3 rounded">
                  [Instrumental: guitar solo with bluesy feel]
                </code>
              </div>
            </div>
          </section>

          {/* ===== SONG STRUCTURE TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Song Structure Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                These tags help define the overall architecture of your song, creating a professional structure similar to commercial music.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Basic Structure</h3>
                  <ul className="space-y-2">
                    <li><code>[Intro]</code> - Song introduction</li>
                    <li><code>[Verse]</code> - Main storytelling section</li>
                    <li><code>[Pre-Chorus]</code> - Builds tension before chorus</li>
                    <li><code>[Chorus]</code> - Main hook section</li>
                    <li><code>[Bridge]</code> - Contrasting section</li>
                    <li><code>[Outro]</code> - Song conclusion</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Advanced Structure</h3>
                  <ul className="space-y-2">
                    <li><code>[Drop]</code> - For EDM intensity moments</li>
                    <li><code>[Acapella]</code> - Vocals with no instruments</li>
                    <li><code>[Breakdown Section]</code> - Reduced instrumentation</li>
                    <li><code>[Build-Up]</code> - Increasing intensity</li>
                    <li><code>[Call and Response]</code> - Musical dialogue</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ===== INSTRUMENTAL TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Instrumental Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                These tags allow you to specify exactly which instruments should be playing and when, including solos and instrumental sections.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Solo Instruments</h3>
                  <ul className="space-y-2">
                    <li><code>[Guitar Solo]</code> - Electric or acoustic guitar feature</li>
                    <li><code>[Piano Solo]</code> - Piano feature</li>
                    <li><code>[Saxophone Solo]</code> - Saxophone feature</li>
                    <li><code>[Drum Solo]</code> - Percussion feature</li>
                    <li><code>[Bass Solo]</code> - Bass guitar feature</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Instrument Sections</h3>
                  <ul className="space-y-2">
                    <li><code>[String Section]</code> - Violins, violas, cellos</li>
                    <li><code>[Brass Section]</code> - Trumpets, trombones, etc.</li>
                    <li><code>[Acoustic Guitar]</code> - Unplugged guitar sounds</li>
                    <li><code>[Electric Guitar]</code> - Amplified guitar sounds</li>
                  </ul>
                </div>
              </div>
              
              <p>
                You can combine instrumental tags with technique or mood tags for more precise control:
              </p>
              <code className="block bg-black/10 dark:bg-white/10 p-3 rounded">
                [Instrumental: guitar solo with distortion and wah-wah pedal]
              </code>
            </div>
          </section>

          {/* ===== VOCAL TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Vocal Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Shape the vocal performance of your Suno creation with these tags that specify voice types and techniques.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Vocal Types</h3>
                  <ul className="space-y-2">
                    <li><code>[Male Vocal]</code> - Male singer</li>
                    <li><code>[Female Vocal]</code> - Female singer</li>
                    <li><code>[Duet]</code> - Two vocalists together</li>
                    <li><code>[Choir]</code> - Group of singers</li>
                    <li><code>[Spoken Word]</code> - Rhythmic speaking</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Vocal Techniques</h3>
                  <ul className="space-y-2">
                    <li><code>[Whisper]</code> - Quiet, breathy vocals</li>
                    <li><code>[Falsetto]</code> - High, head voice</li>
                    <li><code>[Harmonies]</code> - Multiple vocal layers</li>
                    <li><code>[Rap Verse]</code> - Hip-hop vocal style</li>
                    <li><code>[Auto-Tune Effect]</code> - Pitch correction effect</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ===== ATMOSPHERE & MOOD TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Atmosphere & Mood Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                These tags help set the emotional tone and sonic atmosphere of your song, creating more immersive and evocative music.
              </p>
              
              <div className="p-6 bg-muted/50 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">Emotional Atmospheres</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <ul className="space-y-2">
                      <li><code>[Melancholic Atmosphere]</code></li>
                      <li><code>[Euphoric Build]</code></li>
                      <li><code>[Serene Ambience]</code></li>
                      <li><code>[Dreamy Texture]</code></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li><code>[Triumphant Feeling]</code></li>
                      <li><code>[Dark Undertones]</code></li>
                      <li><code>[Uplifting Atmosphere]</code></li>
                      <li><code>[Playful Energy]</code></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p>
                Atmosphere tags work well when combined with other meta tags:
              </p>
              <code className="block bg-black/10 dark:bg-white/10 p-3 rounded">
                [Ethereal Soundscape][Synth Solo][Reverb]
              </code>
            </div>
          </section>

          {/* ===== PRODUCTION DIRECTION TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Production Direction Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Shape the sonic characteristics and production style of your track with these technical tags.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Mix Characteristics</h3>
                  <ul className="space-y-2">
                    <li><code>[Lo-Fi Production]</code> - Vintage, imperfect sound</li>
                    <li><code>[Wall of Sound]</code> - Dense, layered production</li>
                    <li><code>[Minimalist Production]</code> - Sparse arrangement</li>
                    <li><code>[Spacious Mix]</code> - Wide stereo field</li>
                    <li><code>[Intimate Production]</code> - Close, personal feel</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Audio Effects</h3>
                  <ul className="space-y-2">
                    <li><code>[Reverb]</code> - Echo and space effects</li>
                    <li><code>[Vinyl Crackle]</code> - Record player noise</li>
                    <li><code>[Telephone Effect]</code> - Filtered vocal sound</li>
                    <li><code>[Ambient Reverb]</code> - Spacious atmosphere</li>
                    <li><code>[Distortion]</code> - Gritty, overdriven sound</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ===== USAGE TIPS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Meta Tag Usage Tips</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-muted/50 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4">Best Practices</h3>
                <ol className="space-y-2">
                  <li>Insert meta tags in square brackets at specific points in your lyrics</li>
                  <li>Place tags before sections where you want the instruction to take effect</li>
                  <li>Combine multiple tags for more precise control over your song</li>
                  <li>Experiment with different tag combinations to find what works best</li>
                  <li>If Suno sings your meta tags as lyrics, edit them out afterward using Suno's editor</li>
                </ol>
              </div>
              
              <p className="font-bold">Example Usage:</p>
              <pre className="bg-black/10 dark:bg-white/10 p-4 rounded overflow-x-auto">
{`[Soft Intro][Whisper]
The night falls gently as stars appear
[Building Intensity][Electric Guitar]
Memories cascade like a waterfall
[Chorus][Layered Vocals]
Hold on to this moment, it won't last forever
[Instrumental][Guitar Solo][Dreamy Texture]
[Verse][Vulnerable Vocals]
The morning light breaks through the clouds`}
              </pre>
              
              <p className="mt-6">
                Remember that meta tags don't always work perfectly, but they significantly enhance your control over Suno's compositions. Experiment freely to discover what works best for your creative vision!
              </p>
            </div>
          </section>

          {/* ===== RESOURCES SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Further Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://suno.com">
                Suno Official Website
              </PrimaryButton>
              <SecondaryButton href="https://youtube.com/playlist?list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo&si=caS7A9UMCFewuuRB">
                Suno Tutorial Videos
              </SecondaryButton>
              <SecondaryButton href="https://ai.tech">
                More AI Music Tools
              </SecondaryButton>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="https://twitter.com/SunoAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Twitter
                </a>
                <a 
                  href="https://www.youtube.com/@SunoAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  YouTube
                </a>
                <a 
                  href="https://discord.gg/suno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Discord
                </a>
                <a 
                  href="https://www.reddit.com/r/SunoAI/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Reddit
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
