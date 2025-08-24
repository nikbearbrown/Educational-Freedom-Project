import type { Metadata } from "next";
import Link from "next/link";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

export const metadata: Metadata = {
  title: "Convert a Video to a New Style with Midjourney Pcodes",
  description:
    "Step-by-step guide to restyle a source video using Midjourney (or Kling, VEO 3, Runway) with pcodes: extract frames, host them, generate prompts, render, and reassemble.",
};

export default function ConvertWithPcodesPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO ===== */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Converting One Video into Another Style Using Midjourney Pcodes
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            This guide explains the process to transform a source video into a new artistic style
            using Midjourney pcodes (or compatible tools like Kling, VEO 3, Runway). The workflow
            extracts still frames, generates prompts, renders styled imagery, and re-assembles a new
            video.
          </p>

          {/* Optional: keep your playlist embed or swap with any demo/reel */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=caS7A9UMCFewuuRB&list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo"
              title="Workflow examples playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="#step-1">Get Started</PrimaryButton>
            <SecondaryButton href="#workflow-diagram">View Diagram</SecondaryButton>
            <SecondaryButton href="#links">Links</SecondaryButton>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid gap-12">

          {/* Step 1 */}
          <section id="step-1">
            <h2 className="text-3xl font-bold mb-6">Step 1. Extract Frames from Your Source Video</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Use the <code>sample_videos.py</code> script below to sample frames from your video.
                By default, it saves every 111th frame as a PNG.
              </p>

              <pre>
                <code className="language-python">{`#!/usr/bin/env python3
import os
import cv2
import re

# Constants
SAMPLE_RATE = 111  # Save every 111th frame

def clean_filename(filename):
    """
    Clean a filename by:
    - Replacing spaces with underscores
    - Removing non-alphanumeric characters (except _ and .)
    - Collapsing consecutive underscores
    """
    cleaned = re.sub(r'\\s+', '_', filename)
    cleaned = re.sub(r'[^\\w\\.]', '', cleaned)
    cleaned = re.sub(r'_{2,}', '_', cleaned)
    return cleaned

def sample_frames(video_path):
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Unable to open video file {video_path}")
        return

    video_name = clean_filename(os.path.splitext(os.path.basename(video_path))[0])
    frame_count, saved_count = 0, 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if frame_count % SAMPLE_RATE == 0:
            output_filename = f"{video_name}_frame_{frame_count:06}.png"
            cv2.imwrite(output_filename, frame)
            saved_count += 1

        frame_count += 1

    cap.release()
    print(f"Saved {saved_count} frames from {video_path}")

def process_videos_in_directory(directory):
    for file in os.listdir(directory):
        if file.lower().endswith(".mp4"):
            video_path = os.path.join(directory, file)
            print(f"Processing video: {video_path}")
            sample_frames(video_path)

if __name__ == "__main__":
    current_directory = os.getcwd()
    print(f"Current directory: {current_directory}")
    process_videos_in_directory(current_directory)`}</code>
              </pre>

              <p>Run the script in the same directory as your <code>.mp4</code> files:</p>
              <pre><code className="language-bash">{`python3 sample_videos.py`}</code></pre>

              <p>This will generate frames like:</p>
              <pre><code>{`video_name_frame_000000.png
video_name_frame_000111.png
video_name_frame_000222.png`}</code></pre>
            </div>
          </section>

          {/* Step 2 */}
          <section id="step-2">
            <h2 className="text-3xl font-bold mb-6">Step 2. Host Frames Online</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Midjourney requires publicly accessible image URLs. You can upload frames to GitHub
                (or another host). For GitHub, the raw URL format looks like this:
              </p>
              <pre><code>{`https://raw.githubusercontent.com/<user>/<repo>/<branch>/<path>/<file.png>`}</code></pre>
              <p>Example root path:</p>
              <pre><code>{`https://raw.githubusercontent.com/nikbearbrown/YouTube/refs/heads/main/Art/Fuzzy_Wuzzy/`}</code></pre>
            </div>
          </section>

          {/* Step 3 */}
          <section id="step-3">
            <h2 className="text-3xl font-bold mb-6">Step 3. Generate Midjourney Prompts</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Upload 10 frames at a time to an assistant and use this instruction:</p>
              <pre><code>{`Generate prompts for each uploaded image in the format:
[content description], {style} --ar {aspect} --p {pcode} --ow {weight} --oref {url}[filename.png]`}</code></pre>

              <p>Example generated prompt:</p>
              <pre><code>{`A stylish woman with a vivid blue afro and henna-decorated arms rests her chin on her hand in a cluttered retro kitchen, wearing a yellow dress and jeweled choker, {style} --ar 16:9 --p abcd1234 --ow 77 --oref https://raw.githubusercontent.com/.../Beautiful_Marge_Official_Music_Video_frame_003663.png`}</code></pre>
            </div>
          </section>

          {/* Step 4 */}
          <section id="step-4">
            <h2 className="text-3xl font-bold mb-6">Step 4. Generate Stills in Target Style</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Feed the prompts into Midjourney with your chosen pcode. You can also render with
                Kling, VEO 3, or Runway Gen-3 using the same prompt pattern.
              </p>
              <ul>
                <li>Midjourney</li>
                <li>Kling AI</li>
                <li>VEO 3</li>
                <li>Runway Gen-3</li>
              </ul>
            </div>
          </section>

          {/* Step 5 */}
          <section id="step-5">
            <h2 className="text-3xl font-bold mb-6">Step 5. Re-Assemble Styled Frames into Video</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Recompile styled frames into a video with ffmpeg:</p>
              <pre><code className="language-bash">{`ffmpeg -framerate 24 -i frame_%06d.png -c:v libx264 -pix_fmt yuv420p styled_video.mp4`}</code></pre>
              <p>Adjust <code>-framerate</code> to match your target motion.</p>
            </div>
          </section>

          {/* Diagram */}
          <section id="workflow-diagram">
            <h2 className="text-3xl font-bold mb-6">Workflow Diagram</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* If you load Mermaid on the client, this <code> block will render. Otherwise it shows the source. */}
              <pre>
                <code className="language-mermaid">{`flowchart LR
A[Source Video] --> B[Extract frames with sample_videos.py<br/>(every 111th frame)]
B --> C[Frames (.png)]
C --> D[Host frames online<br/>(GitHub raw URLs)]
D --> E[Generate prompt lines<br/>"[desc], {style} --ar {aspect} --p {pcode} --ow {weight} --oref {url}[file.png]"]
E --> F{Renderer}
F -->|Midjourney| G[Styled Stills]
F -->|Kling / VEO 3 / Runway| H[Styled Clips]
G --> I[Reassemble with ffmpeg<br/>(image sequence → video)]
H --> J[Concatenate / Edit in NLE]
I --> K[Final Styled Video]
J --> K`}</code>
              </pre>
            </div>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Summary Workflow</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ol>
                <li>Extract frames from the source video (<code>sample_videos.py</code>).</li>
                <li>Host frames online (GitHub raw links or another host).</li>
                <li>Generate prompts with placeholders for <code>{`{style}`}</code>, <code>{`{pcode}`}</code>, and hosted image URLs.</li>
                <li>Render styled stills/clips with Midjourney, Kling, VEO 3, or Runway.</li>
                <li>Re-assemble frames into a final styled video.</li>
              </ol>
            </div>
          </section>

          {/* Resources / Links */}
          <section id="links">
            <h2 className="text-3xl font-bold mb-6">Links</h2>

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap mb-6">
              <PrimaryButton href="https://github.com/nikbearbrown">GitHub Repository</PrimaryButton>
              <SecondaryButton href="https://youtube.com/playlist?list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo&si=caS7A9UMCFewuuRB">
                YouTube Playlist
              </SecondaryButton>
              <SecondaryButton href="https://www.nikbearbrown.com">Website</SecondaryButton>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ul>
                <li><strong>Nik Bear Brown</strong></li>
                <li><Link className="text-primary hover:underline" href="https://github.com/nikbearbrown" target="_blank">@nikbearbrown</Link></li>
                <li><Link className="text-primary hover:underline" href="https://www.nikbearbrown.com/" target="_blank">NikBearBrown.com</Link></li>
                <li><Link className="text-primary hover:underline" href="https://spotify.nikbearbrown.com" target="_blank">spotify.nikbearbrown.com</Link></li>
                <li><Link className="text-primary hover:underline" href="https://muzak.nikbearbrown.com" target="_blank">muzak.nikbearbrown.com</Link></li>
                <li><Link className="text-primary hover:underline" href="https://github.nikbearbrown.com" target="_blank">github.nikbearbrown.com</Link></li>
                <li><Link className="text-primary hover:underline" href="https://youtube.nikbearbrown.com" target="_blank">youtube.nikbearbrown.com</Link></li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
