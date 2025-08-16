import type { Metadata } from "next";
import Link from "next/link";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

export const metadata: Metadata = {
  title: "Ultimate Suno Meta Tags Glossary",
  description: "Comprehensive glossary of all meta tags for Suno AI music generation",
};

export default function SunoMetaTagsGlossaryPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ultimate Suno Meta Tags Glossary</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This comprehensive glossary organizes all Suno meta tags by category for easy reference. Use these tags to enhance your AI-generated music by adding specific instructions within square brackets throughout your lyrics.
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
          {/* ===== SONG STRUCTURE TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">🎵 Song Structure Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-muted/50 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Basic Structure</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Intro]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Verse]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Pre-Chorus]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Chorus]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Post-Chorus]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Bridge]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Outro]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Hook]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Break]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Fade Out]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Fade In]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Call and Response]</code>
                </div>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Advanced Structure</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Acapella]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Drop]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Refrain]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Vamp]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Middle 8]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Interlude]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Segue]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Coda]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Reprise]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Extended Intro]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Extended Outro]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Breakdown Section]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Build-Up]</code>
                </div>
              </div>
            </div>
          </section>

          {/* ===== INSTRUMENTAL TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">🎸 Instrumental Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-muted/50 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Solo Instruments</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Instrumental]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Guitar Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Piano Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Drum Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Bass Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Saxophone Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Trumpet Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Violin Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Synth Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Organ Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Harp Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Flute Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Cello Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Mandolin Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Banjo Solo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Harmonica Solo]</code>
                </div>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Instrument Sections</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Acoustic Guitar]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Electric Guitar]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[String Section]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Brass Section]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Woodwind Section]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Percussion Ensemble]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Instrumental Break]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[DJ Scratch]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Turntable]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Steel Drums]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Ukulele]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Bagpipes]</code>
                </div>
              </div>
            </div>
          </section>

          {/* ===== VOCAL TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">🎤 Vocal Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-muted/50 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Vocal Types</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Male Vocal]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Female Vocal]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Duet]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Choir]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Spoken Word]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Harmonies]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Vulnerable Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Whisper]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Falsetto]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Baritone]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Soprano]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Alto]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Tenor]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Bass]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Belting]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Growl]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Rap Verse]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Scat Singing]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Vibrato]</code>
                </div>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Vocal Techniques</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Ad Libs]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Backing Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Call and Response Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Group Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Melismatic Runs]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Child Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Voice Distortion]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Chopped Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Layered Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Pitch-Shifted Vocals]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Vocoder Effect]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Auto-Tune Effect]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Robotic Voice]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Megaphone Effect]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Telephone Effect]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Radio Voice]</code>
                </div>
              </div>
            </div>
          </section>

          {/* ===== MUSICAL ELEMENTS TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">✨ Musical Elements Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-muted/50 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Melody & Harmony</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Catchy Hook]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Emotional Bridge]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Powerful Outro]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Soft Intro]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Melodic Interlude]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Key Change]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Countermelody]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Call-Back]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Musical Quotation]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Motif Development]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Melodic Hook]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Hook Variation]</code>
                </div>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Rhythm & Timing</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Percussion Break]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Tempo Change]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Time Signature Change]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Four on the Floor]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Beat Drop]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Riff]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Breakdown]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Staccato Section]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Legato Section]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Rhythmic Breakdown]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Hemiola]</code>
                </div>
              </div>
            </div>
          </section>

          {/* ===== ATMOSPHERE & MOOD TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">🌟 Atmosphere & Mood Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-muted/50 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Emotional Atmospheres</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Eerie Whispers]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Ghostly Echoes]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Ominous Drone]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Spectral Melody]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Melancholic Atmosphere]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Euphoric Build]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Tense Underscore]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Serene Ambience]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Nostalgic Tones]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Dreamy Texture]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Triumphant Feeling]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Contemplative Mood]</code>
                </div>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Environmental Moods</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Mysterious Aura]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Romantic Mood]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Anthemic Quality]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Ethereal Soundscape]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Cinematic Atmosphere]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Epic Atmosphere]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Haunting Melody]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Foreboding Tension]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Hopeful Aura]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Whimsical Feel]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Majestic Atmosphere]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Intimate Setting]</code>
                </div>
              </div>
            </div>
          </section>

          {/* ===== DYNAMICS & PROGRESSION TAGS ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">📈 Dynamics & Progression Tags</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="p-6 bg-muted/50 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Dynamic Changes</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Building Intensity]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Climactic]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Emotional Swell]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Layered Arrangement]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Orchestral Build]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Stripped Back]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Sudden Break]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Crescendo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Decrescendo]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Dynamics Contrast]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Pulsing Rhythm]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Dramatic Pause]</code>
                </div>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Tempo & Timing</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Gradual Acceleration]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Ritardando]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Syncopation]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Polyrhythm]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Rubato]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Staggered Entry]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Textural Shift]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Accelerando]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Rallentando]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Half-Time Feel]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Double-Time Feel]</code>
                  <code className="block bg-black/10 dark:bg-white/10 p-2 rounded text-center">[Grand Pause]</code>
                </div>
              </div>
            </div>
          </section>

          {/* ===== EXAMPLE USAGE ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Meta Tag Usage Example</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-4">
                Here's an example of how to combine different meta tags in your Suno creation:
              </p>
              
              <pre className="bg-black/10 dark:bg-white/10 p-4 rounded overflow-x-auto mb-6">
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
              
              <p>
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
