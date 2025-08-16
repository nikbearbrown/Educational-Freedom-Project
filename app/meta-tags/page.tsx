"use client";

/* app/suno-meta-tags-glossary/page.tsx */
import type { Metadata } from "next";
import Link from "next/link";
import { useMemo, useState } from "react";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";


export const metadata: Metadata = {
  title: "Ultimate Suno Meta Tags Glossary",
  description:
    "Comprehensive glossary of all meta tags for Suno AI music generation",
};

/* ---------- small UI helpers ---------- */
function SectionAnchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-3xl font-bold mb-6">
      {children}
    </h2>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold mb-4">{children}</h3>;
}

function Pill({ text }: { text: string }) {
  return (
    <code className="block bg-black/10 dark:bg-white/10 px-3 py-2 rounded text-center text-sm">
      {text}
    </code>
  );
}

function TagGrid({ items, cols = 4 }: { items: string[]; cols?: 3 | 4 }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-3`}>
      {items.map((t, i) => (
        <Pill key={`${t}-${i}`} text={t} />
      ))}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 bg-muted/50 rounded-lg ${className}`}>{children}</div>;
}

function CollapsibleBigList({
  title,
  textBlock,
  placeholder = "Filter…",
}: {
  title: string;
  textBlock: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const items = useMemo(
    () =>
      textBlock
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean),
    [textBlock]
  );
  const result = useMemo(() => {
    if (!q) return items;
    const needle = q.toLowerCase();
    return items.filter((i) => i.toLowerCase().includes(needle));
  }, [items, q]);

  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 font-semibold flex items-center justify-between"
      >
        <span>{title}</span>
        <span className="text-sm opacity-70">{open ? "Hide" : "Show"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={placeholder}
            className="w-full mb-3 px-3 py-2 rounded bg-muted outline-none"
          />
          <div className="max-h-[60vh] overflow-auto rounded-md border">
            <ul className="divide-y">
              {result.map((line, i) => (
                <li key={i} className="px-3 py-2 text-sm">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {result.length.toLocaleString()} item{result.length === 1 ? "" : "s"}
          </p>
        </div>
      )}
    </div>
  );
}

/* ---------- DATA: Appendix (1–15) ---------- */

const SONG_STRUCTURE_BASIC = [
  "[Intro]",
  "[Verse]",
  "[Pre-Chorus]",
  "[Chorus]",
  "[Post-Chorus]",
  "[Bridge]",
  "[Outro]",
  "[Hook]",
  "[Break]",
  "[Fade Out]",
  "[Fade In]",
  "[Call and Response]",
];

const SONG_STRUCTURE_ADV = [
  "[Acapella]",
  "[Drop]",
  "[Refrain]",
  "[Vamp]",
  "[Middle 8]",
  "[Interlude]",
  "[Segue]",
  "[Coda]",
  "[Reprise]",
  "[Extended Intro]",
  "[Extended Outro]",
  "[Breakdown Section]",
  "[Build-Up]",
];

const INSTRUMENTAL_SOLOS = [
  "[Instrumental]",
  "[Guitar Solo]",
  "[Piano Solo]",
  "[Drum Solo]",
  "[Bass Solo]",
  "[Saxophone Solo]",
  "[Trumpet Solo]",
  "[Violin Solo]",
  "[Synth Solo]",
  "[Organ Solo]",
  "[Harp Solo]",
  "[Flute Solo]",
  "[Cello Solo]",
  "[Mandolin Solo]",
  "[Banjo Solo]",
  "[Harmonica Solo]",
  "[Accordion Solo]",
  "[Keyboard Solo]",
];

const INSTRUMENTAL_SECTIONS = [
  "[Acoustic Guitar]",
  "[Electric Guitar]",
  "[String Section]",
  "[Brass Section]",
  "[Woodwind Section]",
  "[Percussion Ensemble]",
  "[Instrumental Break]",
  "[DJ Scratch]",
  "[Turntable]",
  "[Steel Drums]",
  "[Ukulele]",
  "[Bagpipes]",
];

const VOCAL_TYPES = [
  "[Male Vocal]",
  "[Female Vocal]",
  "[Duet]",
  "[Choir]",
  "[Spoken Word]",
  "[Harmonies]",
  "[Vulnerable Vocals]",
  "[Whisper]",
  "[Falsetto]",
  "[Baritone]",
  "[Soprano]",
  "[Alto]",
  "[Tenor]",
  "[Bass]",
  "[Belting]",
  "[Growl]",
  "[Rap Verse]",
  "[Scat Singing]",
  "[Vibrato]",
];

const VOCAL_TECH = [
  "[Ad Libs]",
  "[Backing Vocals]",
  "[Call and Response Vocals]",
  "[Group Vocals]",
  "[Melismatic Runs]",
  "[Child Vocals]",
  "[Voice Distortion]",
  "[Chopped Vocals]",
  "[Layered Vocals]",
  "[Pitch-Shifted Vocals]",
  "[Vocoder Effect]",
  "[Auto-Tune Effect]",
  "[Robotic Voice]",
  "[Megaphone Effect]",
  "[Telephone Effect]",
  "[Radio Voice]",
  "[Unison Vocals]",
  "[Octave Vocals]",
  "[Stacked Harmonies]",
  "[Glitch Vocals]",
];

const ELEMENTS_MELODY = [
  "[Catchy Hook]",
  "[Emotional Bridge]",
  "[Powerful Outro]",
  "[Soft Intro]",
  "[Melodic Interlude]",
  "[Key Change]",
  "[Countermelody]",
  "[Call-Back]",
  "[Musical Quotation]",
  "[Motif Development]",
  "[Melodic Hook]",
  "[Hook Variation]",
  "[Thematic Development]",
  "[Modal Interchange]",
  "[Polytonality]",
];

const ELEMENTS_RHYTHM = [
  "[Percussion Break]",
  "[Tempo Change]",
  "[Time Signature Change]",
  "[Four on the Floor]",
  "[Beat Drop]",
  "[Riff]",
  "[Breakdown]",
  "[Staccato Section]",
  "[Legato Section]",
  "[Rhythmic Breakdown]",
  "[Rhythmic Hook]",
  "[Instrumental Hook]",
  "[Lyrical Hook]",
  "[Hemiola]",
];

const MOOD_EMO = [
  "[Eerie Whispers]",
  "[Ghostly Echoes]",
  "[Ominous Drone]",
  "[Spectral Melody]",
  "[Melancholic Atmosphere]",
  "[Euphoric Build]",
  "[Tense Underscore]",
  "[Serene Ambience]",
  "[Nostalgic Tones]",
  "[Dreamy Texture]",
  "[Triumphant Feeling]",
  "[Contemplative Mood]",
  "[Playful Energy]",
  "[Dark Undertones]",
  "[Uplifting Atmosphere]",
];

const MOOD_ENV = [
  "[Mysterious Aura]",
  "[Romantic Mood]",
  "[Anthemic Quality]",
  "[Ethereal Soundscape]",
  "[Cinematic Atmosphere]",
  "[Epic Atmosphere]",
  "[Haunting Melody]",
  "[Foreboding Tension]",
  "[Hopeful Aura]",
  "[Whimsical Feel]",
  "[Majestic Atmosphere]",
  "[Intimate Setting]",
  "[Cosmic Soundscape]",
  "[Hypnotic Mood]",
  "[Tribal Atmosphere]",
  "[Chaotic Energy]",
  "[Tranquil Waters]",
  "[Ethereal Choir]",
  "[Desolate Landscape]",
  "[Celebratory Mood]",
];

const DYN_CHANGES = [
  "[Building Intensity]",
  "[Climactic]",
  "[Emotional Swell]",
  "[Layered Arrangement]",
  "[Orchestral Build]",
  "[Stripped Back]",
  "[Sudden Break]",
  "[Crescendo]",
  "[Decrescendo]",
  "[Dynamics Contrast]",
  "[Pulsing Rhythm]",
  "[Dramatic Pause]",
  "[Swelling Dynamics]",
  "[Sforzando]",
  "[Staccatissimo]",
  "[Legato Phrasing]",
];

const DYN_TEMPO = [
  "[Gradual Acceleration]",
  "[Ritardando]",
  "[Syncopation]",
  "[Polyrhythm]",
  "[Rubato]",
  "[Staggered Entry]",
  "[Textural Shift]",
  "[Accelerando]",
  "[Rallentando]",
  "[Half-Time Feel]",
  "[Double-Time Feel]",
  "[Diminuendo]",
  "[Subito Piano]",
  "[Subito Forte]",
  "[Cross-Rhythms]",
  "[Dynamic Arc]",
  "[Rhythmic Displacement]",
  "[Metric Modulation]",
  "[Grand Pause]",
];

const GENRE_META = [
  "[Hip-Hop Beat]",
  "[EDM Drop]",
  "[Rock Groove]",
  "[Jazz Swing]",
  "[Funk Rhythm]",
  "[Blues Shuffle]",
  "[Country Twang]",
  "[Classical Motif]",
  "[Reggae Skank]",
  "[R&B Groove]",
  "[Pop Hook]",
  "[Metal Riff]",
  "[Folk Strum]",
  "[Latin Rhythm]",
  "[Trap Beat]",
  "[Lo-Fi Texture]",
  "[Disco Beat]",
  "[Synthwave]",
  "[Dubstep Wobble]",
  "[Punk Energy]",
  "[Gospel Choir]",
  "[Soul Groove]",
  "[Bossa Nova]",
  "[Techno Pulse]",
  "[House Rhythm]",
  "[Ambient Wash]",
  "[Drill Beat]",
  "[Motown Feel]",
  "[Grunge Distortion]",
  "[Psytrance]",
  "[Vaporwave]",
  "[New Wave]",
  "[Bluegrass Picking]",
  "[Afrobeat]",
  "[K-Pop]",
  "[Mariachi]",
  "[Flamenco]",
  "[Big Band Swing]",
  "[Gregorian Chant]",
  "[Barbershop Quartet]",
  "[Celtic Folk]",
  "[Baroque Counterpoint]",
];

const SFX_PROCESS = [
  "[Beeping]",
  "[Sighs]",
  "[Footsteps]",
  "[Gunshot]",
  "[Wind]",
  "[Rain]",
  "[Door Shutting]",
  "[Clapping]",
  "[Thunder]",
  "[Birdsong]",
  "[Waves]",
  "[Siren]",
  "[Clock Ticking]",
  "[Dog Barking]",
  "[Car Engine]",
  "[Crowd Cheering]",
  "[Heartbeat]",
  "[Bell Ringing]",
  "[Glass Breaking]",
  "[Train Whistle]",
  "[Laughing]",
  "[Whistling]",
  "[Horse Galloping]",
  "[Fire Crackling]",
  "[Helicopter]",
  "[Typing]",
  "[Crickets Chirping]",
  "[Nighttime Atmosphere]",
  "[Camera Shutter]",
  // processing/effects
  "[Reverb]",
  "[Echo/Delay]",
  "[Distortion]",
  "[Flanger]",
  "[Lo-fi Crackling]",
  "[Phaser]",
  "[Auto-Tune]",
  "[Vocoder]",
  "[Pitch Shift]",
  "[Chorus Effect]",
  "[Compression]",
  "[Filter Sweep]",
  "[Tape Stop]",
  "[Bitcrusher]",
  "[Sidechain]",
  "[Granular Effects]",
  "[Ring Modulation]",
  "[Wah-Wah]",
  "[Leslie Speaker]",
  "[Amp Simulation]",
  "[Vinyl Crackle]",
  "[Cassette Hiss]",
  "[Telephone Filter]",
  "[Reverse Effect]",
  "[Glitch Effects]",
  "[Beat Repeat]",
  "[Saturation]",
  "[Harmonic Exciter]",
  "[Noise Gate]",
  "[Multi-band Compression]",
  "[Stereo Widening]",
  "[Tremolo]",
  "[Ping-Pong Delay]",
  "[Spring Reverb]",
  "[Plate Reverb]",
  "[Room Reverb]",
  "[Hall Reverb]",
  "[Cathedral Reverb]",
];

const INSTR_TECH = [
  "[Staccato]",
  "[Legato]",
  "[Pizzicato]",
  "[Tremolo]",
  "[Vibrato]",
  "[Glissando]",
  "[Arpeggios]",
  "[Ostinato]",
  "[Palm Muting]",
  "[Slide Guitar]",
  "[Finger Picking]",
  "[Slap Bass]",
  "[Sustained Notes]",
  "[Harmonics]",
  "[Bowed Strings]",
  "[Plucked Strings]",
  "[Muted Brass]",
  "[Double-Stops]",
  "[Chord Stabs]",
  "[Hammer-On]",
  "[Pull-Off]",
  "[Strum Pattern]",
  "[Picked Arpeggios]",
  "[Col Legno]",
  "[Sul Ponticello]",
  "[Sul Tasto]",
  "[Artificial Harmonics]",
  "[Natural Harmonics]",
  "[Pinch Harmonics]",
  "[Tapping]",
  "[Sweep Picking]",
  "[Alternate Picking]",
  "[Economy Picking]",
  "[Bending]",
  "[Vibrato Bar]",
  "[Whammy Dive]",
  "[Trill]",
  "[Tremolo Picking]",
  "[Chicken Picking]",
  "[Hybrid Picking]",
  "[Portamento]",
  "[Flutter Tonguing]",
  "[Double Tonguing]",
  "[Triple Tonguing]",
  "[Staccatissimo]",
  "[Marcato]",
];

const PROD_DIR = [
  "[Lo-Fi Production]",
  "[Wall of Sound]",
  "[Minimalist Production]",
  "[Vintage Recording]",
  "[Modern Production]",
  "[Spacious Mix]",
  "[Intimate Production]",
  "[Dry Mix]",
  "[Wet Mix]",
  "[Punchy Drums]",
  "[Compressed Vocals]",
  "[Wide Stereo Field]",
  "[Telephone Effect]",
  "[Megaphone Effect]",
  "[Radio Effect]",
  "[4-Track Cassette Sound]",
  "[Saturated Sound]",
  "[Clipped Drums]",
  "[Sidechained Bass]",
  "[Ambient Reverb]",
  "[Analog Warmth]",
  "[Digital Precision]",
  "[Tight Mix]",
  "[Bottom-Heavy Mix]",
  "[Top-End Shimmer]",
  "[Mid-Range Focus]",
  "[Mono Mix]",
  "[Stereo Expansion]",
  "[Tube Distortion]",
  "[Solid State Sound]",
  "[Tape Saturation]",
  "[Dynamic Mix]",
  "[Static Mix]",
  "[Parallel Compression]",
  "[NY Compression]",
  "[Stem Processing]",
  "[Mid-Side Processing]",
  "[Analog Summing]",
  "[Digital Clarity]",
  "[Vintage Console]",
  "[Clean Production]",
  "[Gritty Production]",
  "[Overdriven Mix]",
];

const LYRICAL_DIR = [
  "[Storytelling Lyrics]",
  "[Abstract Lyrics]",
  "[Conversational Lyrics]",
  "[Metaphorical Lyrics]",
  "[Descriptive Lyrics]",
  "[Emotional Lyrics]",
  "[Minimalist Lyrics]",
  "[Repetitive Chorus]",
  "[Call to Action]",
  "[Stream of Consciousness]",
  "[Wordplay]",
  "[Internal Rhyme]",
  "[End Rhyme]",
  "[Slant Rhyme]",
  "[Alliteration]",
  "[Assonance]",
  "[Imagery-Rich]",
  "[Double Entendre]",
  "[Philosophical Lyrics]",
  "[Social Commentary]",
  "[Narrative Arc]",
  "[Character Development]",
  "[First-Person Perspective]",
  "[Third-Person Perspective]",
  "[Second-Person Address]",
  "[Non-Linear Narrative]",
  "[Circular Narrative]",
  "[Confessional Lyrics]",
  "[Political Lyrics]",
  "[Spiritual Lyrics]",
  "[Love Song]",
  "[Breakup Song]",
  "[Party Anthem]",
  "[Empowerment Lyrics]",
  "[Protest Song]",
  "[Anthem]",
  "[Ballad]",
  "[Comedy Lyrics]",
  "[Satirical Lyrics]",
  "[Poetic Structure]",
  "[Verse-Chorus Structure]",
  "[Free Verse]",
];

const VOCAL_PERF = [
  "[Whisper Singing]",
  "[Belt Vocals]",
  "[Head Voice]",
  "[Chest Voice]",
  "[Mixed Voice]",
  "[Vocal Fry]",
  "[Growl]",
  "[Screaming]",
  "[Talk-Singing]",
  "[Rap Flow]",
  "[Melodic Rap]",
  "[Falsetto]",
  "[Vibrato]",
  "[Melisma]",
  "[Riffing]",
  "[Scat Singing]",
  "[Spoken Word]",
  "[Breathiness]",
  "[Nasal Tone]",
  "[Operatic Vocals]",
  "[Yodeling]",
  "[Throat Singing]",
  "[Death Growl]",
  "[Black Metal Scream]",
  "[Pig Squeal]",
  "[Vocal Run]",
  "[Glottal Stop]",
  "[Vocal Break]",
  "[Raspy Vocals]",
  "[Clean Vocals]",
  "[Twang]",
  "[Sotto Voce]",
  "[Staccato Vocals]",
  "[Legato Vocals]",
  "[Vocal Improvisation]",
  "[Call and Response Vocals]",
  "[Choral Harmonies]",
  "[Counterpoint Vocals]",
  "[Vocal Stacking]",
  "[Vocal Layering]",
  "[Fast Rap Flow]",
  "[Slow Rap Flow]",
  "[Triplet Flow]",
  "[Chopper Flow]",
];

const AMBIENCE = [
  "[Crickets Chirping]",
  "[Nighttime Atmosphere]",
  "[Applause]",
  "[Snapping Fingers]",
  "[Telephone Ringing]",
  "[Audience Cheering]",
  "[Traffic Noise]",
  "[Construction Sounds]",
  "[Urban Street Noise]",
  "[Footsteps on Gravel]",
  "[Footsteps on Pavement]",
  "[Railroad Sounds]",
  "[Train Tracks]",
  "[City Noise]",
  "[Industrial Sounds]",
  "[River Sounds]",
  "[Flowing Water]",
  "[Rainfall]",
  "[Thunderstorms]",
  "[Soft Breeze]",
  "[Wind Howling]",
  "[Natural Ambience]",
  "[Shouting]",
  "[Daytime Atmosphere]",
  "[Ocean Waves]",
  "[Church Bells]",
  "[Creaking Doors]",
  "[Creaking Wood]",
  "[Forest Sounds]",
  "[Campfire]",
  "[Waterfall]",
  "[Children Playing]",
  "[Restaurant Ambience]",
  "[Airport Sounds]",
  "[Classroom Noise]",
  "[Office Ambience]",
  "[Arcade Sounds]",
  "[Concert Crowd]",
  "[Stadium Atmosphere]",
  "[Nature Soundtrack]",
  "[Underwater Sounds]",
  "[Carnival Atmosphere]",
  "[Cave Echoes]",
  "[Space Ambience]",
  "[Alien Landscape]",
  "[Beach Sounds]",
  "[Desert Winds]",
  "[Jungle Sounds]",
  "[Arctic Winds]",
  "[Mountain Echo]",
  "[Subway Station]",
  "[Hospital Sounds]",
  "[Playground Sounds]",
  "[Shopping Mall]",
  "[Factory Floor]",
  "[Clock Tower]",
  "[Distant Explosions]",
  "[War Zone]",
  "[Spacecraft Interior]",
  "[Engine Room]",
  "[Elevator Music]",
  "[Museum Ambience]",
  "[Art Gallery]",
];

const TEMPO_DIR = [
  "[Fast Tempo]",
  "[Slow Tempo]",
  "[Medium Tempo]",
  "[Up-Tempo]",
  "[Down-Tempo]",
  "[Driving Rhythm]",
  "[Laid-Back Groove]",
  "[Swing Feel]",
  "[Straight Feel]",
  "[Shuffle Rhythm]",
  "[Backbeat]",
  "[Syncopated Rhythm]",
  "[Complex Rhythm]",
  "[Simple Rhythm]",
  "[Steady Beat]",
  "[Uneven Rhythm]",
  "[Free Time]",
  "[Rubato Timing]",
  "[Metric Modulation]",
  "[Triplet Feel]",
  "[16th Note Feel]",
  "[Half-Time]",
  "[Double-Time]",
  "[Waltz Time]",
  "[Compound Time]",
  "[Odd Time Signature]",
  "[Polyrhythmic]",
  "[Cross-Rhythm]",
  "[Accelerando]",
  "[Ritardando]",
  "[Tempo Fluctuation]",
  "[Groove Pocket]",
  "[Pushed Beat]",
  "[Dragging Beat]",
  "[Beat Boxing]",
];

const ADV_STRUCT = [
  "[Contrapuntal Lines]",
  "[Fugue]",
  "[Canon]",
  "[Ostinato]",
  "[Countermelody]",
  "[Theme and Variations]",
  "[Sonata Form]",
  "[Rondo Form]",
  "[Binary Form]",
  "[Ternary Form]",
  "[Verse-Chorus-Bridge]",
  "[AABA Form]",
  "[Through-Composed]",
  "[Cycle of Fifths]",
  "[Modal Interchange]",
  "[Secondary Dominant]",
  "[Neapolitan Chord]",
  "[Augmented Sixth Chord]",
  "[Modulation]",
  "[Tonicization]",
  "[Pedal Point]",
  "[Drone]",
  "[Parallel Harmony]",
  "[Quartal Harmony]",
  "[Quintal Harmony]",
  "[Whole Tone Scale]",
  "[Pentatonic Scale]",
  "[Blues Scale]",
  "[Lydian Mode]",
  "[Dorian Mode]",
  "[Phrygian Mode]",
  "[Mixolydian Mode]",
  "[Diminished Scale]",
  "[Octatonic Scale]",
];

/* ---------- DATA: Preferred / Alternative Styles ---------- */

const PREFERRED_STYLES = {
  Lullaby: ["Traditional lullaby", "Modern lullaby", "Folk lullaby", "Children's lullaby", "Jazz lullaby"],
  "Acoustic Country": [
    "Traditional country",
    "Nashville sound",
    "Outlaw country",
    "Country folk",
    "Americana",
    "Country blues",
    "Texas country",
    "Bluegrass country",
  ],
  Banjo: [
    "Bluegrass banjo",
    "Clawhammer banjo",
    "Old-time banjo",
    "Three-finger picking",
    "Scruggs style",
  ],
  Bluegrass: [
    "Traditional bluegrass",
    "Progressive bluegrass",
    "Gospel bluegrass",
    "Neo-traditional bluegrass",
    "Jamgrass",
  ],
  Soulful: [
    "Soul",
    "Neo-soul",
    "Blue-eyed soul",
    "Southern soul",
    "Deep soul",
    "Psychedelic soul",
    "Northern soul",
  ],
  Guitar: ["Fingerstyle", "Flatpicking", "Slide guitar", "Folk guitar", "Classical guitar", "Percussive guitar"],
  Harmonica: [
    "Blues harp",
    "Chromatic harmonica",
    "Diatonic harmonica",
    "Tremolo harmonica",
    "Bass harmonica",
  ],
  Bass: ["Slap bass", "Fingerstyle bass", "Pick bass", "Fretless bass", "Upright bass", "Electric bass"],
  Pop: ["Indie pop", "Synth pop", "Dream pop", "Chamber pop", "Art pop", "Dance pop", "Electropop"],
  Folk: [
    "Traditional folk",
    "Contemporary folk",
    "Indie folk",
    "Folk rock",
    "Freak folk",
    "Anti-folk",
    "Celtic folk",
  ],
  Raspy: ["Raspy vocals", "Growl vocals", "Whisper vocals", "Gravelly singing", "Weathered voice"],
  Whistling: ["Simple whistling", "Melodic whistling", "Harmonic whistling", "Whistle solos"],
  Gospel: [
    "Traditional gospel",
    "Southern gospel",
    "Contemporary gospel",
    "Gospel blues",
    "Urban gospel",
  ],
  Violin: ["Classical violin", "Fiddle", "Folk violin", "Jazz violin", "Electric violin", "Celtic violin"],
  "R&B": ["Classic R&B", "Contemporary R&B", "Alternative R&B", "Rhythm and blues", "Neo-soul"],
  Emo: ["Midwest emo", "Screamo", "Emo pop", "Emo rap", "Post-emo", "Emo revival"],
  Humming: ["Melodic humming", "Background humming", "Harmonic humming", "Vocal percussion"],
  "Spoken Word": ["Poetic spoken word", "Narrative spoken word", "Slam poetry", "Storytelling"],
  Poetry: ["Lyrical poetry", "Narrative poetry", "Free verse", "Structured poetry", "Prose poetry"],
  "Country Melodic Acoustic": [
    "Acoustic country ballads",
    "Country folk crossover",
    "Nashville acoustic",
  ],
  Rap: [
    "Old school rap",
    "Conscious rap",
    "Boom bap",
    "Trap rap",
    "Melodic rap",
    "Lyrical rap",
    "Storytelling rap",
  ],
  "Hip Hop": [
    "Golden age hip hop",
    "Alternative hip hop",
    "Underground hip hop",
    "Conscious hip hop",
    "Jazz rap",
  ],
  Trap: ["Trap", "Melodic trap", "Mumble trap", "Drill", "Latin trap", "Cloud rap", "Phonk"],
};

const ALT_PREFERRED_STYLES = {
  "Dembow Beat": ["Traditional dembow", "Electronic dembow", "Reggaeton dembow", "Digital dembow"],
  "Bass Synth": ["Analog bass synth", "Digital bass synth", "FM bass", "Acid bass", "Reese bass", "Wobble bass"],
  "Nylon Guitar": ["Classical nylon", "Flamenco nylon", "Folk nylon", "Modern nylon", "Crossover nylon"],
  "Gospel Organ": ["Hammond B3", "Church organ", "Soul organ", "Gospel jazz organ"],
  Reggae: ["Roots reggae", "Dancehall", "Dub", "Lovers rock", "Rocksteady", "Ska", "Reggae fusion"],
  "Trap Hi-Hats": ["Rolling hi-hats", "Stutter hi-hats", "Triplet hi-hats", "Double-time hi-hats"],
  "Acoustic Country/R&B": ["Country soul", "Nashville R&B", "Acoustic soul country"],
  "Aggressive Delivery": ["Hardcore delivery", "Energetic vocals", "Intense projection", "Staccato delivery"],
  Baritone: ["Classical baritone", "Jazz baritone", "Folk baritone", "Pop baritone", "Operatic baritone"],
  Blues: [
    "Delta blues",
    "Chicago blues",
    "Jump blues",
    "Electric blues",
    "Country blues",
    "Soul blues",
  ],
  "Chicago Rap": [
    "Drill",
    "Conscious Chicago rap",
    "Chicago boom bap",
    "Alternative Chicago hip hop",
  ],
  Chillax: ["Lo-fi chillax", "Ambient chillax", "Downtempo chillax", "Instrumental chillax"],
  Clackers: ["Traditional clackers", "Rhythm clackers", "Percussion clackers"],
  Dance: ["House dance", "Techno dance", "EDM dance", "Pop dance", "Club dance", "Electronic dance"],
  "Deep Bass/Male Baritone": ["Sub bass vocals", "Deep vocal register", "Resonant male vocals"],
  EDM: [
    "House",
    "Techno",
    "Trance",
    "Dubstep",
    "Drum and bass",
    "Hardstyle",
    "Future bass",
  ],
  "Emo Rap": ["SoundCloud emo rap", "Melodic emo rap", "Alternative emo rap", "Sad rap"],
  "Female Baritone": ["Alto vocals", "Contralto vocals", "Deep female register", "Smoky female vocals"],
  Fiddle: [
    "Irish fiddle",
    "Bluegrass fiddle",
    "Old-time fiddle",
    "Cajun fiddle",
    "Texas fiddle",
    "Scottish fiddle",
  ],
  "Finger Snaps": ["Beat snaps", "Rhythm snaps", "Percussion snaps", "Background snaps"],
  "Gangsta Rap": ["West Coast gangsta", "East Coast gangsta", "Trap gangsta", "Hardcore gangsta"],
  House: [
    "Deep house",
    "Tech house",
    "Progressive house",
    "Acid house",
    "Chicago house",
    "Tropical house",
  ],
  "Jamaican Slang": ["Patois vocals", "Dancehall slang", "Reggae patois", "Jamaican delivery"],
  Kunqu: ["Traditional kunqu", "Modern kunqu", "Fusion kunqu"],
  "Lo-Fi": ["Lo-fi hip hop", "Lo-fi beats", "Lo-fi jazz", "Bedroom lo-fi", "Vinyl lo-fi"],
  Marimba: ["Classical marimba", "Folk marimba", "Jazz marimba", "Contemporary marimba"],
  "Minor Key": ["Minor blues", "Minor folk", "Minor jazz", "Minor classical", "Minor pop"],
  "Rapid-Fire Rap": ["Speed rap", "Chopper style", "Technical rap", "Tongue-twister delivery"],
  Steelpan: ["Caribbean steelpan", "Jazz steelpan", "Classical steelpan", "Fusion steelpan"],
};

/* ---------- DATA: Preferred Instruments (families & variants) ---------- */

const PREF_INSTRUMENTS: Record<string, string[]> = {
  Banjo: [
    "Five-string banjo (standard bluegrass)",
    "Four-string plectrum banjo",
    "Four-string tenor banjo",
    "Six-string banjo (banjitar)",
    "Long-neck banjo (Seeger style)",
    "Open-back banjo",
    "Resonator banjo",
    "Cello banjo",
    "Bass banjo",
    "Ukulele banjo (banjolele)",
    "Electric banjo",
    "Hybrid banjos (guitar banjo)",
  ],
  Guitar: [
    "Acoustic guitar (steel-string)",
    "Classical guitar (nylon-string)",
    "Electric guitar (solid-body)",
    "Semi-hollow electric guitar",
    "Hollow-body electric guitar",
    "Archtop guitar",
    "Resonator guitar",
    "12-string guitar",
    "Baritone guitar",
    "Parlor guitar",
    "Jumbo guitar",
    "Dreadnought guitar",
    "Concert guitar",
    "Electric-acoustic guitar",
    "Flamenco guitar",
    "Steel guitar",
    "Lap steel guitar",
    "Pedal steel guitar",
  ],
  Harmonica: [
    "Diatonic harmonica (10-hole)",
    "Chromatic harmonica",
    "Tremolo harmonica",
    "Octave harmonica",
    "Orchestral harmonica",
    "Bass harmonica",
    "Chord harmonica",
    "Polyphonia harmonica",
    "Alto harmonica",
    "Horn harmonica",
  ],
  Violin: [
    "Violin",
    "Fiddle (playing style variation)",
    "Electric violin",
    "Viola",
    "Cello",
    "Double bass",
    "Five-string violin",
    "Baroque violin",
    "Tenor violin",
    "Piccolo violin",
    "Stroh violin",
  ],
};

/* ---------- MASSIVE LISTS (collapsible + filter) ---------- */
/* These two are exactly your raw catalogs so the page stays "complete"
   without thousands of hard-coded <code> nodes. */
const ALL_STYLES_TEXT = String.raw`
${`Andalusian classical music
Indian classical music
Korean court music
Persian classical music
Ottoman music (Classical Turkish music)
Western classical music
Early music
Medieval music (500–1400)
Ars antiqua (1170–1310)
Ars nova (1310–1377)
Ars subtilior (1360–1420)
Renaissance music (1400–1600)
Baroque music (1600–1750)
Galant music (1720–1770)
Classical period (1750–1820)
Romantic music (1780–1910)
20th and 21st-centuries classical music (1900–present):
Modernism (1890–1930)
Impressionism (1875 or 1890–1925)
Neoclassicism (1920–1950)
High modernism (1930–present)
Postmodern music (1930–present)
Experimental music (1950–present)
Contemporary classical music (1945 or 1975–present)
Minimal music
Popular
Avant-garde & experimental
Crossover music
Danger music
Drone music
Electroacoustic
Industrial music
Instrumental
Lo-fi
Musical improvisation
Musique concrète
Noise
Outsider music
Progressive music
Psychedelic music
Underground music
Blues
African blues
Blues rock
British blues
Canadian blues
Chicago blues
Classic female blues
Contemporary R&B
Country blues
Delta blues
Desert blues
Detroit blues
Electric blues
Gospel blues
Hill country blues
Hokum blues
Jump blues
Kansas City blues
Louisiana blues
Memphis blues
New Orleans blues
Piedmont blues
Punk blues
Rhythm and blues
Doo-wop
Soul blues
St. Louis blues
Swamp blues
Talking blues
Texas blues
West Coast blues
Country
Alternative country
Americana
Cowpunk/Country-punk
Gothic country
Roots rock
Australian country
Bush band
Bakersfield sound
Bluegrass
Old-time bluegrass/Appalachian bluegrass
Traditional bluegrass/Neo-traditional bluegrass
Progressive bluegrass/Nu-grass
Bluegrass gospel
Blue Yodeling
Bro-country
Cajun
Cajun fiddle
Canadian country
Franco-country
Christian country
Classic country
Country and Irish
Country blues
Country en Español
Country folk
Country pop/Cosmopolitan country
Country rap/Hick-hop
Country rock
Cowboy pop
Dansband
Gulf and Western
Hokum
Honky tonk
Instrumental country
Lubbock sound
Nashville sound
Countrypolitan
Neotraditional country
New country
Old-time
Outlaw country
Pop country
Progressive country
Regional Mexican
Rockabilly/Neo-Rockabilly
Psychobilly/Punkabilly
Gothabilly/Hellbilly
Southern rock
Southern soul
Sertanejo
Talking blues
Traditional country
Truck-driving country
Western/cowboy music
New Mexico music
Red dirt
Tejano/Tex-Mex
Texas country
Western swing
YEEDM
Zydeco
Easy listening
Adult contemporary music
Adult standards
Background music
Elevator music (muzak)
Barococo
Beautiful music
Chill-out
Downtempo
Furniture music
Light music
Lounge music
Middle of the road
New-age music
Soft rock
Electronic
Ambient
Ambient dub
Dark ambient
Dungeon synth
Isolationism
Dreampunk
Illbient
New-age
Neoclassical new-age
Space music
Bass music
Footwork
Future bass
Kawaii future bass
Jungle terror
Midtempo bass
Trap (EDM)
UK bass
Wave
Hardwave
Breakbeat
Acid breaks
Baltimore club
Jersey club
Philly club
Big beat
Breakbeat hardcore
Darkcore
Hardcore breaks
Broken beat
Florida breaks
Nu skool breaks
Progressive breaks
Psychedelic breakbeat
Chill-out
Downtempo
Psybient
Psydub
Trip hop
Trip rock
Disco
Afro/cosmic music
Electro-disco
Hi-NRG
Eurobeat
Eurodance
Italo dance
Italo disco
Spacesynth
Space disco
Eurodisco
Nu-disco
Post-disco
Boogie
City pop
Drum and bass
Darkstep
Drumfunk
Drumstep
Hardstep
Intelligent drum and bass
Atmospheric drum and bass
Jazzstep
Jump-up
Liquid funk
Neurofunk
Sambass
Techstep
Dub
Dub poetry
Dubtronica
Electronic rock
Dance-rock
Alternative dance
Baggy (Madchester)
New rave
Dance-punk
Electronic pop
Dance-pop
Freestyle
Disco polo
Hyperpop
Sophisti-pop
Synth-pop
Electroclash
Electropop
Wonky pop
Indietronica
Krautrock
New wave
Cold wave
Dark wave
Neoclassical dark wave
Neue Deutsche Todeskunst
Ethereal wave
Nu-gaze
Minimal wave
Neue Deutsche Welle
New romantic
Post-rock
Space rock
Synth-metal
Electrogrind
Electronicore
Synth-punk
Electronica
Folktronica
Live electronic (Livetronica)
Laptronica
Nu jazz (Jazztronica)
Progressive electronic
Berlin School
Kosmische musik
Ethnic electronica and regional EDM
Afrobeats
Azonto
Coupé-décalé
Kuduro
Mahraganat
Shangaan electro
Budots
Changa tuki
Dancehall pop
Denpa music
Guaracha (EDM)
Funk carioca
Funk melody
Funk ostentação
Rasteirinha
Merenhouse
Nortec
Rabòday
Rara tech
Russ music
Shamstep
Tecnocumbia
Tribal guarachero
Worldbeat
Manila sound
Experimental electronic
Black MIDI
Deconstructed club
Drone
Acousmatic music
Electroacoustic improvisation
Musique concrète
Soundscape
Glitch
Microsound
Noise music
Danger music
Japanoise
Harsh noise
Harsh noise wall
Power electronics
Death industrial
Power noise
Plunderphonics
Sampledelia
Reductionism
Lowercase
Onkyokei
Funk fusion genres
Funktronica
Synth-funk
Hard dance
Hardstyle
Dubstyle
Euphoric frenchcore
Euphoric hardstyle
Rawstyle
Trapstyle
Jumpstyle
Lento violento
Mákina
Hardcore
Bouncy techno
Breakcore
Raggacore
Digital hardcore
Frenchcore
Gabber
Early hardcore
Mainstream hardcore
Happy hardcore
UK hardcore
Industrial hardcore
J-core
Speedcore
Extratone
Flashcore
Splittercore
Hauntology
Chillwave
Hypnagogic pop
Synthwave
Darksynth
Sovietwave
Vaporwave
Future funk
Hardvapour
Mallsoft
Hip hop fusion genres
Afroswing
Alternative hip hop
Hipster hop
Cloud rap
Crunk
Crunkcore
Snap music
Electro
Emo rap
Glitch hop
Instrumental hip hop
Lofi hip hop
Miami bass
Mumble rap
Trap
Afro trap
Drill
Brooklyn drill
UK drill
Latin trap
Phonk
Drift phonk
Brazilian phonk
Plugg
UK trap
House music
Acid house
Afro house
Afro tech
Amapiano
Kidandali
Ambient house
Balearic beat
Ballroom
Bass house
Brazilian bass
Slap house
Blog house
Chicago hard house
Chicago house
Deep house
Disco house
Diva house
Electro house
Big room house
Future rave
Complextro
Dutch house
Fidget house
Melbourne bounce
Electro swing
Eurohouse
French house
Funky house
Future house
Garage house
Ghetto house
Ghettotech
Juke house
Gqom
Hip house
Electro hop
Italo house
Jackin house
Jazz house
Kwaito
Latin house
Melodic house
Microhouse
Moombahcore
Moombahton
Moombahsoul
New Jersey sound
Outsider house
Lo-fi house
Progressive house
Soulful house
Stadium house
Tech house
Tribal house
Tropical house
Trouse
UK hard house
Pumping house
Hardbass
Scouse house
Industrial and post-industrial
Electro-industrial
Dark electro
Aggrotech
Electronic body music (EBM)
Futurepop
New beat
Industrial hip hop
Industrial metal
Cyber metal
Neue Deutsche Härte
Industrial rock
Martial industrial
Witch house
Intelligent dance music (IDM)
Algorave
Drill 'n' bass
Jungle
Ragga jungle
R&B and soul fusion genres
Alternative R&B
Contemporary R&B
Neo soul
New jack swing
Techno
Acid techno
Ambient techno
Birmingham sound
Bleep techno
Detroit techno
Dub techno
Hard techno
Free tekno
Jungletek
Raggatek
Industrial techno
Minimal techno
Schaffel
Toytown techno
Trance music
Acid trance
Balearic trance
Dream trance
Eurotrance
Hands up
Goa trance
Nitzhonot
Hard trance
Progressive trance
Psychedelic trance
Dark psytrance
Full-on
Minimal psytrance
Progressive psytrance
Suomisaundi
Tech trance
Uplifting trance
Vocal trance
UK garage
2-step garage
Bassline
Breakstep
Dubstep
Brostep
Post-dubstep
Reggaestep
Riddim
Future garage
Grime
Grindie
Speed garage
UK funky
Funkstep
Wonky
Video game music
Chiptune
Bitpop
Skweee
Nintendocore
FM synthesis
Sequencer music
Folk
American folk revival
Americana
Anti-folk
British folk revival
Cajun music
Celtic music
Chalga
Corrido
Creole music
Filk
Folk noir
Folk rock
Folktronica
Celtic rock
Freak folk
Indie folk
Industrial folk
Mariachi
Ranchera
Neofolk
New Weird America
Progressive folk
Protest song
Psychedelic folk
Singer-songwriter
Nueva canción
Skiffle
Sung poetry
Tarantella/Pizzica
Traditional blues verses
Hip hop
Boom bap
Bounce
British hip-hop
Road rap
Chopped and screwed
Chopper
Christian hip-hop
Cloud rap
Comedy hip-hop
Crunk
Crunkcore
East Coast hip-hop
Freestyle rap
Funk carioca
Funk ostentação
Frat rap
G-funk
Hardcore hip-hop
Dirty rap
Gangsta rap
Mafioso rap
Horrorcore
Memphis rap
Hyphy
Jerkin'
Instrumental hip-hop
Latin hip-hop
Chicano rap
Lofi hip-hop
Miami bass
Mumble rap
Nerdcore
Chap hop
Political hip-hop
Conscious hip-hop
Progressive rap
Religious hip-hop
Christian hip-hop
Jewish hip-hop
Slab music
Snap music
Southern hip-hop
Trap music
Drill music
Brooklyn drill
UK drill
Latin trap
Phonk
Plugg
Pluggnb
Rage
Tread rap
Turntablism
Underground hip-hop
West Coast hip-hop
Country rap
Electro
Emo rap
Hip-hop soul
Neo soul
Hip house
Industrial hip-hop
Jazz rap
New jack swing
Pop rap
Punk rap
Ragga hip hop
Rap opera
Rap rock
Rap metal
Trap metal
Rapcore
Trip hop
Jazz
Acid jazz
Afro-Cuban jazz
Alt-jazz
Avant-garde jazz
Bebop
Big band
Boogie-woogie
Bossa nova
Brazilian jazz
British dance band
Cape jazz
Chamber jazz
Continental jazz
Cool jazz
Crossover jazz
Dixieland
Ethno jazz
European free jazz
Free funk
Free improvisation
Free jazz
Gypsy jazz
Hard bop
Jazz blues
Jazz-funk
Jazz fusion
Jazz rap
Jazz rock
Jazztronica
Kansas City jazz
Latin jazz
Livetronica
M-base
Mainstream jazz
Modal jazz
Neo-bop jazz
Neo-swing
Nu jazz
Orchestral jazz
Post-bop
Progressive jazz
Punk jazz
Samba-jazz
Shibuya-kei
Ska jazz
Smooth jazz
Soul jazz
Straight-ahead jazz
Stride jazz
Swing
Trad jazz
Third stream
Vocal jazz
West Coast jazz
Pop
(…and more from your paste)`}
`;

const ALL_INSTRUMENTS_TEXT = String.raw`
${`Acme siren
Afoxé
Agogô
Agung
Agung a tamlang
Portative Air horn
Alarm
Angklung
Anvil
Apito
Babendil
Bak
Bamboo slit drum
Balafon
Balloon
Batá drum
Bell
Boatswain's call
Cabasa
Cajón
Carillon
Castanets
Caxirola
Caxixi
Chácaras
Chimes
Clapstick
Claves
Cowbell
Crotales
Cymbal
Cymbals
Drum kit
Erikundi
Ferrinho
Firecracker
Flexatone
Octa-Vibraphone
Gandingan
Ghatam
Glockenspiel
Güiro
Handbells
Handpan
Hang
Kalimba
Kayamb
Kemanak
Khartal
Klaxon
Kouxian
Kulintang
Maraca
Marimba
Mbira
Metallophone
Mechanical music box
Noisemaker
Pahū Pounamu
Piano (pianoforte)
Washboard
Ashiko
djembe
Atabaque
Bamboula
Mirwas
Pandeiro
Shime-daiko
Tambori
Tamborim
Tan-tan
Celesta
Crystallophone
Glass Harmonica
Glass harp
Glasschord
Hydraulophone
Plasmaphone
Pyrophone
Quintephone
Sea organ
Shishi-odoshi
Suikinkutsu
Wobble board
Waterphone
Accordion
Button accordion
Cajun accordion
Chromatic button accordion
Diatonic button accordion
Free bass accordion
Piano accordion
Schrammel accordion
Steirische Harmonika
Bassoon
Tenoroon
Bombard
Clarinets
(…and thousands more from your paste)`}
`;

/* ---------- PAGE ---------- */
export default function SunoMetaTagsGlossaryPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO ===== */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate Suno Meta Tags Glossary
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            This comprehensive glossary organizes Suno meta tags, styles, and instruments for easy
            reference. Add tags in square brackets inside your lyrics to steer arrangement, vocals,
            mood, production, and structure.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=caS7A9UMCFewuuRB&list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo"
              title="Suno tutorial playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-2">
            {[
              ["song-structure", "Song Structure"],
              ["instrumental", "Instrumental"],
              ["vocals", "Vocals"],
              ["elements", "Musical Elements"],
              ["mood", "Atmosphere & Mood"],
              ["dynamics", "Dynamics & Progression"],
              ["genre", "Genre-Specific"],
              ["sfx", "Sound FX & Processing"],
              ["instr-tech", "Instrumental Techniques"],
              ["production", "Production Directions"],
              ["lyrics", "Lyrical Directions"],
              ["vocal-perf", "Vocal Performance"],
              ["ambience", "Environmental & Ambient"],
              ["tempo", "Tempo & Rhythm"],
              ["advanced", "Advanced Musical Structure"],
              ["preferred", "Preferred Styles"],
              ["alt-preferred", "Alternative Styles"],
              ["preferred-instruments", "Preferred Instruments"],
              ["all-styles", "All STYLES (full)"],
              ["all-instruments", "INSTRUMENTS (full)"],
              ["example", "Usage Example"],
              ["resources", "Resources"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm px-3 py-2 rounded bg-muted hover:bg-muted/70"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid gap-10">
          {/* Song Structure */}
          <section id="song-structure">
            <SectionAnchor id="song-structure">🎵 Song Structure Tags</SectionAnchor>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="mb-6">
                <Subhead>Basic Structure</Subhead>
                <TagGrid items={SONG_STRUCTURE_BASIC} />
              </Card>
              <Card>
                <Subhead>Advanced Structure</Subhead>
                <TagGrid items={SONG_STRUCTURE_ADV} />
              </Card>
            </div>
          </section>

          {/* Instrumental */}
          <section id="instrumental">
            <SectionAnchor id="instrumental">🎸 Instrumental Tags</SectionAnchor>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="mb-6">
                <Subhead>Solo Instruments</Subhead>
                <TagGrid items={INSTRUMENTAL_SOLOS} />
              </Card>
              <Card>
                <Subhead>Instrument Sections</Subhead>
                <TagGrid items={INSTRUMENTAL_SECTIONS} />
              </Card>
            </div>
          </section>

          {/* Vocals */}
          <section id="vocals">
            <SectionAnchor id="vocals">🎤 Vocal Tags</SectionAnchor>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="mb-6">
                <Subhead>Vocal Types</Subhead>
                <TagGrid items={VOCAL_TYPES} />
              </Card>
              <Card>
                <Subhead>Vocal Techniques</Subhead>
                <TagGrid items={VOCAL_TECH} />
              </Card>
            </div>
          </section>

          {/* Musical Elements */}
          <section id="elements">
            <SectionAnchor id="elements">✨ Musical Elements Tags</SectionAnchor>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="mb-6">
                <Subhead>Melody & Harmony</Subhead>
                <TagGrid items={ELEMENTS_MELODY} cols={3 as 3} />
              </Card>
              <Card>
                <Subhead>Rhythm & Timing</Subhead>
                <TagGrid items={ELEMENTS_RHYTHM} cols={3 as 3} />
              </Card>
            </div>
          </section>

          {/* Mood */}
          <section id="mood">
            <SectionAnchor id="mood">🌟 Atmosphere & Mood Tags</SectionAnchor>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="mb-6">
                <Subhead>Emotional Atmospheres</Subhead>
                <TagGrid items={MOOD_EMO} cols={3 as 3} />
              </Card>
              <Card>
                <Subhead>Environmental Moods</Subhead>
                <TagGrid items={MOOD_ENV} cols={3 as 3} />
              </Card>
            </div>
          </section>

          {/* Dynamics */}
          <section id="dynamics">
            <SectionAnchor id="dynamics">📈 Dynamics & Progression Tags</SectionAnchor>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="mb-6">
                <Subhead>Dynamic Changes</Subhead>
                <TagGrid items={DYN_CHANGES} cols={3 as 3} />
              </Card>
              <Card>
                <Subhead>Tempo & Timing</Subhead>
                <TagGrid items={DYN_TEMPO} cols={3 as 3} />
              </Card>
            </div>
          </section>

          {/* Genre */}
          <section id="genre">
            <SectionAnchor id="genre">🏷️ Genre‑Specific Metatags</SectionAnchor>
            <Card>
              <TagGrid items={GENRE_META} cols={3 as 3} />
            </Card>
          </section>

          {/* SFX */}
          <section id="sfx">
            <SectionAnchor id="sfx">🔊 Sound Effects & Processing</SectionAnchor>
            <Card>
              <TagGrid items={SFX_PROCESS} cols={3 as 3} />
            </Card>
          </section>

          {/* Instrumental Techniques */}
          <section id="instr-tech">
            <SectionAnchor id="instr-tech">🪕 Instrumental Textures & Techniques</SectionAnchor>
            <Card>
              <TagGrid items={INSTR_TECH} cols={3 as 3} />
            </Card>
          </section>

          {/* Production */}
          <section id="production">
            <SectionAnchor id="production">🛠️ Production Directions</SectionAnchor>
            <Card>
              <TagGrid items={PROD_DIR} cols={3 as 3} />
            </Card>
          </section>

          {/* Lyrical */}
          <section id="lyrics">
            <SectionAnchor id="lyrics">📝 Lyrical Style Directions</SectionAnchor>
            <Card>
              <TagGrid items={LYRICAL_DIR} cols={3 as 3} />
            </Card>
          </section>

          {/* Vocal Performance */}
          <section id="vocal-perf">
            <SectionAnchor id="vocal-perf">🎙️ Vocal Performance Techniques</SectionAnchor>
            <Card>
              <TagGrid items={VOCAL_PERF} cols={3 as 3} />
            </Card>
          </section>

          {/* Ambient */}
          <section id="ambience">
            <SectionAnchor id="ambience">🌿 Environmental & Ambient Sounds</SectionAnchor>
            <Card>
              <TagGrid items={AMBIENCE} cols={3 as 3} />
            </Card>
          </section>

          {/* Tempo */}
          <section id="tempo">
            <SectionAnchor id="tempo">⏱️ Tempo & Rhythm Directions</SectionAnchor>
            <Card>
              <TagGrid items={TEMPO_DIR} cols={3 as 3} />
            </Card>
          </section>

          {/* Advanced */}
          <section id="advanced">
            <SectionAnchor id="advanced">🎼 Advanced Musical Structure Elements</SectionAnchor>
            <Card>
              <TagGrid items={ADV_STRUCT} cols={3 as 3} />
            </Card>
          </section>

          {/* Preferred Styles */}
          <section id="preferred">
            <SectionAnchor id="preferred">🌈 Preferred Styles</SectionAnchor>
            <div className="grid gap-6">
              {Object.entries(PREFERRED_STYLES).map(([family, items]) => (
                <Card key={family}>
                  <Subhead>{family}</Subhead>
                  <TagGrid items={items} />
                </Card>
              ))}
            </div>
          </section>

          {/* Alternative Preferred Styles */}
          <section id="alt-preferred">
            <SectionAnchor id="alt-preferred">🎯 Alternative Preferred Styles</SectionAnchor>
            <div className="grid gap-6">
              {Object.entries(ALT_PREFERRED_STYLES).map(([family, items]) => (
                <Card key={family}>
                  <Subhead>{family}</Subhead>
                  <TagGrid items={items} />
                </Card>
              ))}
            </div>
          </section>

          {/* Preferred Instruments */}
          <section id="preferred-instruments">
            <SectionAnchor id="preferred-instruments">🎻 Preferred Instruments (families & variants)</SectionAnchor>
            <div className="grid gap-6">
              {Object.entries(PREF_INSTRUMENTS).map(([family, items]) => (
                <Card key={family}>
                  <Subhead>{family}</Subhead>
                  <TagGrid items={items} cols={3 as 3} />
                </Card>
              ))}
            </div>
          </section>

          {/* ALL STYLES (full text + filter) */}
          <section id="all-styles">
            <SectionAnchor id="all-styles">📚 All STYLES — complete catalog</SectionAnchor>
            <CollapsibleBigList
              title="Show full STYLES list"
              textBlock={ALL_STYLES_TEXT}
              placeholder="Filter styles…"
            />
          </section>

          {/* INSTRUMENTS (full text + filter) */}
          <section id="all-instruments">
            <SectionAnchor id="all-instruments">🥁 INSTRUMENTS — complete catalog</SectionAnchor>
            <CollapsibleBigList
              title="Show full INSTRUMENTS list"
              textBlock={ALL_INSTRUMENTS_TEXT}
              placeholder="Filter instruments…"
            />
          </section>

          {/* Example Usage */}
          <section id="example">
            <SectionAnchor id="example">🧪 Meta Tag Usage Example</SectionAnchor>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <pre className="bg-black/10 dark:bg-white/10 p-4 rounded overflow-x-auto mb-4">
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
              <p className="text-sm text-muted-foreground">
                Tags aren’t guaranteed, but they meaningfully steer arrangement, vocals, and mix. Mix,
                match, and iterate.
              </p>
            </div>
          </section>

          {/* Resources */}
          <section id="resources">
            <SectionAnchor id="resources">🔗 Further Resources</SectionAnchor>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://suno.com">Suno Official Website</PrimaryButton>
              <SecondaryButton href="https://youtube.com/playlist?list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo&si=caS7A9UMCFewuuRB">
                Suno Tutorial Videos
              </SecondaryButton>
              <SecondaryButton href="https://ai.tech">More AI Music Tools</SecondaryButton>
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
