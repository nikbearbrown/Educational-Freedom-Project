import type { Metadata } from "next";
import Link from "next/link";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

export default function ProfessorBearAIArtPage() {
  // Custom button components to replace the imports
  const PrimaryButton = ({ href, children }) => (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
    >
      {children}
    </a>
  );
  
  const SecondaryButton = ({ href, children }) => (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600/10 px-6 py-3 rounded-md font-medium transition-colors"
    >
      {children}
    </a>
  );

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professor Bear AI Art</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Learn to create stunning AI art with Midjourney using Style Reference (SREF) codes and 
            Personalization profiles. Every video shares Midjourney codes for you to try.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Kc9Qlsv7RxE?si=1quOfjUK7mcNKMHK"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid gap-12">
          {/* ===== SREF CODES SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Style Reference (SREF) Codes</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Style Reference is a way to capture the visual vibe of an existing image and apply it to your new Midjourney creations. 
                It doesn't copy objects or people, just the overall style—like colors, medium, textures, or lighting.
              </p>
              
              <p>
                Our YouTube playlist showcases hundreds of different SREF styles and codes you can use in your own Midjourney prompts.
                Each video demonstrates a unique artistic style with the exact code you can try yourself.
              </p>
              
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-2">Featured SREF Code</h3>
                <p className="mb-2">
                  Try this code in your next Midjourney prompt:
                </p>
                <code className="block p-3 bg-gray-200 dark:bg-gray-700 rounded text-lg mb-4">--p 84saqc</code>
                <p className="text-gray-600 dark:text-gray-400">
                  This code creates a style inspired by the works of Henri de Toulouse-Lautrec and Gustav Klimt.
                </p>
              </div>
            </div>
          </section>

          {/* ===== ARTISTIC STYLES SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Example Artistic Styles</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Below are just a few examples of the hundreds of artistic styles you can learn to create from our video series. 
                Each video provides the exact SREF and personalization codes you need to recreate these styles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Character Design Styles</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    From stylized figures to fantasy creatures, learn how to create compelling character designs 
                    with different artistic approaches. Our videos cover both 2D and 3D-looking character styles.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Illustration Techniques</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Discover codes for cartoon styles, graphic novel aesthetics, concept art approaches, 
                    and many more illustration techniques to enhance your AI art creation.
                  </p>
                </div>
              </div>
              
              <div className="my-8 text-center">
                <h3 className="text-xl font-bold mb-4">Visit Our YouTube Playlist for 100+ Styles</h3>
                <p className="mb-6">
                  The examples on this page represent just a small selection of the hundreds of styles 
                  available in our complete video series. Each video comes with the exact codes you need.
                </p>
                <a 
                  href="https://www.youtube.com/playlist?list=PLIS8mRE04MvpcgHBhR9PWx4hII8W2KeOH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Watch the Complete Series
                </a>
              </div>
            </div>
          </section>

          {/* ===== PERSONALIZATION SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Personalization Profiles</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Personalization acts like a style assistant for your image creations. By liking or ranking images and creating 
                moodboards, Midjourney gets to know what kind of images you love and uses that information to generate images 
                tailored to your personal tastes.
              </p>
              
              <p>
                Our videos show you how to effectively use both SREF codes and personalization profiles together to achieve 
                stunning and unique artistic results that match your vision.
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
              <SecondaryButton href="https://youtube.com/playlist?list=PLIS8mRE04MvpcgHBhR9PWx4hII8W2KeOH">
                YouTube Playlist
              </SecondaryButton>
              <SecondaryButton href="https://www.nikbearbrown.com">
                Learn More
              </SecondaryButton>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Nik Bear Brown Links</h3>
              <div className="grid gap-2">
                <a 
                  href="https://www.nikbearbrown.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.nikbearbrown.com/
                </a>
                <a 
                  href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6
                </a>
                <a 
                  href="https://music.apple.com/us/artist/1779725275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://music.apple.com/us/artist/1779725275
                </a>
                <a 
                  href="https://www.youtube.com/@nikbearbrown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.youtube.com/@nikbearbrown
                </a>
              </div>
            </div>
          
          </section>
        </div>
      </div>
    </div>
  );
}
