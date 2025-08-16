import type { Metadata } from "next";
import Link from "next/link";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

export const metadata: Metadata = {
  title: "VW Bus AI Commercial Recreation",
  description: "Recreating Simon Meyer's miniature VW Bus commercial using AI tools",
};

export default function VWBusAIPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recreating a Miniature VW Bus Commercial with AI</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comparative analysis of GPT-5, Topaz, and Veo 3 in recreating Simon Meyer's viral tilt-shift commercial.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DrE0MbsskOM?si=EZxOrxK_ceaW7a7h"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid gap-12">
          {/* ===== PROJECT OVERVIEW ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Do you remember when making a commercial like this cost hundreds of thousands of dollars? 
                Simon Meyer created an ultra-realistic miniature car commercial and shared the prompts on Instagram. 
                This is my recreation using only GPT-5, Topaz, and Veo 3.
              </p>
              
              <p>
                GPT-5 is slow, but it remembers that all of your images are related, which keeps consistency across shots — 
                for example, maintaining the correct proportion between the hand size and the VW Bus. Midjourney fails to do that. 
                However, one can use GPT-5 images as references for Midjourney, and the consistency improves.
              </p>
              
              <p>
                Veo 3 limited me to five videos despite my very expensive Ultra subscription. 
                Google does not design their tools for real video production; they treat Veo 3 like a toy — 
                even watermarking every image whether you want it or not. Its strength is adding sound, 
                but Kling is probably better at sound. Veo 3 is better at the physics.
              </p>
            </div>
          </section>

          {/* ===== EXACT PROMPTS SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Exact Prompts Used</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="font-semibold">These are the exact prompts used to generate each scene:</p>
              
              <div className="space-y-8 mt-6">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Image 1 – African Savanna with Giraffe</h3>
                  <div className="bg-background/50 p-4 rounded border border-border overflow-auto max-h-60">
                    <pre className="text-sm whitespace-pre-wrap">
                      An oversized hand moves a 1960 Volkswagen Kombi Bus in white and pink with silver fenders and German license plates through an African savanna with a startled giraffe. Tilt-shift photography technique creates a distinctive depth of field that makes the scene appear miniaturized and toy-like. The color grading emphasizes sunburnt yellows, dusty browns, and pale greens beneath a shimmering, heat-hazed sky. Flecks of dust and startled birds are frozen mid-flight, while distant acacia trees and termite mounds blur into a dreamy, ochre-toned bokeh. The composition employs forced perspective as a colossal hand emerges between the tall grasses, brushing past a giraffe frozen in mid-step, its elongated neck craning skyward in confusion. Tilt-shift effect, selective focus, miniature illusion, forced perspective, moody color grading, surreal wildlife interference.
                    </pre>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Image 2 – Stormy Coastal Cliffside</h3>
                  <div className="bg-background/50 p-4 rounded border border-border overflow-auto max-h-60">
                    <pre className="text-sm whitespace-pre-wrap">
                      An oversized hand moves a 1960 Volkswagen Kombi Bus in white and pink with silver fenders and German license plates along a stormy coastal cliffside. Tilt-shift photography technique creates a distinctive depth of field that makes the scene appear miniaturized and toy-like. The color grading emphasizes slate grays, deep sea greens, and desaturated turquoise under a bruised, lightning-streaked sky. Spray from crashing waves and flying debris are captured with precision focus, while the jagged cliff edges and wind-battered trees fade into a painterly bokeh. The composition employs forced perspective with a giant hand interaction mid-motion, water droplets suspended in the air, creating a heightened sense of drama and scale. Tilt-shift effect, selective focus, miniature illusion, forced perspective, moody color grading, high-motion intensity.
                    </pre>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Image 3 – Underwater Coral Canyon</h3>
                  <div className="bg-background/50 p-4 rounded border border-border overflow-auto max-h-60">
                    <pre className="text-sm whitespace-pre-wrap">
                      An oversized hand moves a 1960 Volkswagen Kombi Bus in white and pink with silver fenders and German license plates through an underwater coral canyon. Tilt-shift photography technique creates a distinctive depth of field that makes the scene appear miniaturized and toy-like. The color grading emphasizes deep teals, soft cyans, and radiant coral reds beneath a filtered, sun-dappled water surface. Air bubbles drift in slow motion, captured with crystal clarity, while reef structures and schools of fish fade into a velvety, blue-green bokeh. The composition employs forced perspective as a giant hand moves silently between swaying anemones and ancient coral arches, casting rippling shadows over curious stingrays and the suspended vintage van. Tilt-shift effect, selective focus, miniature illusion, forced perspective, moody color grading, submerged surrealism.
                    </pre>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Image 4 – Snow-Covered Alpine Pass</h3>
                  <div className="bg-background/50 p-4 rounded border border-border overflow-auto max-h-60">
                    <pre className="text-sm whitespace-pre-wrap">
                      An oversized hand moves a 1960 Volkswagen Kombi Bus in white and pink with silver fenders and German license plates through a snow-covered alpine pass. Tilt-shift photography technique creates a distinctive depth of field that makes the scene appear miniaturized and toy-like. The color grading emphasizes crisp whites, icy blues, and muted pine greens beneath a heavy, overcast sky. Fine snowflakes drift in slow motion, captured with surgical sharpness, while distant tree lines and winding roads disappear into a soft, powdery bokeh. The composition employs forced perspective as a massive hand pushes through fresh snow beside miniature snowplows and road signs, creating a surreal break in an otherwise serene winter scene. Tilt-shift effect, selective focus, miniature illusion, forced perspective, moody color grading, atmospheric realism.
                    </pre>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Image 5 – Nighttime Cityscape</h3>
                  <div className="bg-background/50 p-4 rounded border border-border overflow-auto max-h-60">
                    <pre className="text-sm whitespace-pre-wrap">
                      An oversized hand moves a 1960 Volkswagen Kombi Bus in white and pink with silver fenders and German license plates through a glowing nighttime cityscape. Tilt-shift photography technique creates a distinctive depth of field that makes the scene appear miniaturized and toy-like. The color grading emphasizes deep asphalt blacks, neon reds, and electric blues reflected off rain-slicked streets under a low, glowing haze. Headlights cut sharp beams through mist; taillights smear into long exposure streaks. Towering glass buildings fade into soft-focus bokeh, their windows flickering like stars. The composition employs forced perspective as a massive hand gently maneuvers the vintage van between toy-sized taxis and streetlights, its glossy two-tone paint catching pockets of city glow. Tilt-shift effect, selective focus, miniature illusion, forced perspective, moody color grading, nighttime urban surrealism.
                    </pre>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Image 6 – Indoor Shelf Scene</h3>
                  <div className="bg-background/50 p-4 rounded border border-border overflow-auto max-h-60">
                    <pre className="text-sm whitespace-pre-wrap">
                      An oversized hand moves a 1960 Volkswagen Kombi Bus in white and pink with silver fenders and German license plates on a wall-mounted shelf in a personal living space. Tilt-shift photography technique creates a distinctive depth of field that makes the scene appear miniaturized and toy-like. The color grading emphasizes textured forest greens on the wall, soft natural wood tones, and the polished two-tone sheen of the Kombi under warm, ambient light. The shelf is cluttered but full of character: a Polaroid photo of two friends at a gas station leans against the wall, next to a ceramic mug filled with old pens, a cracked CD case, and a paperback held shut with a rubber band. A houseplant's leaves dip into frame from above, and a half-burnt incense stick rests in a bottle cap nearby. The composition employs forced perspective as a massive hand reaches between the objects, gently adjusting the model Kombi with exaggerated scale — as if shaping memory in a miniature museum of someone's life. Tilt-shift effect, selective focus, miniature illusion, forced perspective, moody color grading, authentic personal clutter.
                    </pre>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Image 7 – Weimaraner Dog at Burning Man</h3>
                  <div className="bg-background/50 p-4 rounded border border-border overflow-auto max-h-60">
                    <pre className="text-sm whitespace-pre-wrap">
                      A sleek Weimaraner dog, seen from behind, runs toward a 1960 Volkswagen Kombi Bus in white and pink with silver fenders and German license plates, parked beside a polished silver Airstream travel trailer in the surreal desert landscape of Burning Man. Tilt-shift photography technique creates a distinctive depth of field that miniaturizes the scene into a toy-like diorama. The color grading emphasizes warm sand tones, sun-faded pinks, brushed silver, and the golden glow of cinematic sunset lighting. Dust swirls lazily in the air as blurred festival structures and art installations recede into a dreamy bokeh horizon. The composition employs forced perspective, with the Weimaraner's sleek frame leading the viewer's eye toward the bus and trailer, capturing the motion in mid-stride. Tilt-shift effect, selective focus, miniature illusion, forced perspective, moody desert color grading, atmospheric festival realism.
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== FINDINGS SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Key Findings</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                GPT-5 maintains consistency across shots but requires Topaz for upscaling. It's the consistency winner.
                Veo 3 excels with sound and physics but has significant limitations for serious production.
              </p>
              
              <p>
                I'll be rebuilding this spot with GPT-5, Midjourney, Higgsfield, Veo 3, and Kling, comparing what each can do — 
                their strengths, weaknesses, and the edges where they still need human hands. Until Google takes AI film seriously 
                and allows AI filmmakers to really use the tool, it will remain a TikTok toy.
              </p>
              
              <p>
                Also, I'll take responsibility for the bad edits — that part's still on me. But even as production evolves, 
                this means that great direction is more valuable than ever. This video is about testing what's now possible 
                when the tools change everything.
              </p>
            </div>
          </section>

          {/* ===== RESOURCES SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Further Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://github.com/nikbearbrown">
                GitHub Repository
              </PrimaryButton>
              <SecondaryButton href="https://youtube.com/playlist?list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo&si=caS7A9UMCFewuuRB">
                YouTube Playlist
              </SecondaryButton>
              <SecondaryButton href="https://www.nikbearbrown.com">
                Learn More
              </SecondaryButton>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Connect with Nik Bear Brown</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="https://twitter.com/nikbearbrown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Twitter
                </a>
                <a 
                  href="https://www.youtube.com/@nikbearbrown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.nikbearbrown.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Website
                </a>
                <a 
                  href="https://www.linkedin.com/in/nikbearbrown/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Spotify
                </a>
                <a 
                  href="https://music.apple.com/us/artist/1779725275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Apple Music
                </a>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 mt-6">Humanitarians AI (501c3 Non-Profit)</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="https://music.apple.com/us/artist/humanitarians-ai/1781414009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Apple Music
                </a>
                <a 
                  href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Spotify
                </a>
                <a 
                  href="https://www.humanitarians.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Website
                </a>
                <a 
                  href="https://www.youtube.com/@humanitariansai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  YouTube
                </a>
                <a 
                  href="https://github.com/Humanitariansai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/company/105696953/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
