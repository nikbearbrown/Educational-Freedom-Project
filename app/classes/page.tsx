import { useState } from "react";

export default function ClassesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Courses Taught</h1>
          </div>

          {/* Teaching Philosophy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Teaching Philosophy</h2>
            <div className="border border-[#2c1f12] rounded-lg p-6 bg-gradient-to-r from-[#2c1f12] to-gray-900">
              <p className="text-gray-300 mb-4">
                My teaching approach emphasizes project-based learning, interdisciplinary collaboration, and real-world applications of AI. I foster an inclusive environment where students can explore complex concepts through collaborative problem-solving and hands-on experience.
              </p>
              <p className="text-gray-300">
                I lead AI-driven educational initiatives like the AI for Education Project and the Educational Bot Effort, creating adaptive learning tools and AI-powered chatbots for STEM courses. These initiatives enhance student engagement and provide personalized learning experiences.
              </p>
            </div>
          </section>

          {/* Awards Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Teaching Awards</h2>
            <div className="grid gap-4">
              <div className="border border-[#2c1f12] rounded-lg p-4 bg-gradient-to-r from-[#2c1f12] to-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">RISE Award 2022</h3>
                    <p className="text-sm text-gray-400">Computer and Information Sciences</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#2c1f12] rounded-lg p-4 bg-gradient-to-r from-[#2c1f12] to-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Fostering Engineering Innovation in Education Award</h3>
                    <p className="text-sm text-gray-400">Northeastern University (2021-22)</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#2c1f12] rounded-lg p-4 bg-gradient-to-r from-[#2c1f12] to-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Dean's Award, College of Engineering</h3>
                    <p className="text-sm text-gray-400">Northeastern University (2024-25)</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#2c1f12] rounded-lg p-4 bg-gradient-to-r from-[#2c1f12] to-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Red Hat Academy Director's Award</h3>
                    <p className="text-sm text-gray-400">2020</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Courses Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">All Courses</h2>
            
            {/* Northeastern Courses */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white border-b border-[#2c1f12] pb-2">Northeastern University</h3>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="border border-[#2c1f12] rounded-lg p-5 bg-black">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">INFO 6205: Program Structure Algorithms</span>
                        <p className="text-gray-400 text-sm">Algorithms and data structures, examining their design, implementation, and analysis.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CSYE 7270: Building Virtual Environments</span>
                        <p className="text-gray-400 text-sm">Programming and design for interactive experiences and immersive virtual environments.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">INFO 6105: Data Science Engineering Methods</span>
                        <p className="text-gray-400 text-sm">Core concepts of machine learning with emphasis on computational biology.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">INFO 7390: Advances in Data Sciences and Architecture</span>
                        <p className="text-gray-400 text-sm">Data visualization and pipeline quality assessment.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CSYE 7370: Deep Reinforcement Learning Game Engineering</span>
                        <p className="text-gray-400 text-sm">Deep learning and reinforcement learning in game AI.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">DAMG 6210: Data Management and Database Design</span>
                        <p className="text-gray-400 text-sm">Information systems design from a data perspective.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">INFO 7375: ST: AI Engineering Apps - Prompt Engineering and GenAI</span>
                        <p className="text-gray-400 text-sm">Prompt engineering techniques for generative AI.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CSYE 7374: Special Topics: Computational Skepticism</span>
                        <p className="text-gray-400 text-sm">Critical thinking in computational contexts.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">INFO 6210: Data Management and Database Design</span>
                        <p className="text-gray-400 text-sm">Database design, relational models, and SQL.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CSYE 7245: Big Data Systems Integration Analytics</span>
                        <p className="text-gray-400 text-sm">Big data technologies and analytics frameworks.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">DA 5030: Intro Data Mining/Machine Learning</span>
                        <p className="text-gray-400 text-sm">Fundamental data mining techniques and machine learning algorithms.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CS 3540: Game Programming</span>
                        <p className="text-gray-400 text-sm">Concepts and techniques for video game development.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CS 4300: Computer Graphics</span>
                        <p className="text-gray-400 text-sm">Fundamental computer graphics concepts.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CS 4850: Building Game Engines</span>
                        <p className="text-gray-400 text-sm">Architecture and implementation of game engines.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CS 5850: Advanced Building Game Engines</span>
                        <p className="text-gray-400 text-sm">Advanced topics in game engine development.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">DS 6020: Collect/Store/Retrieve Data</span>
                        <p className="text-gray-400 text-sm">Methods for data collection, storage, and retrieval.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">DS 6030: Intro Data Mining/Machine Learning</span>
                        <p className="text-gray-400 text-sm">Concepts and algorithms in data mining and machine learning.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">CS 4800: Algorithms Data</span>
                        <p className="text-gray-400 text-sm">Advanced algorithms and computational complexity.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">ENGR-0201: AI for Personalized Learning</span>
                        <p className="text-gray-400 text-sm">Using AI tools for academic organization and personalized learning.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="text-white font-medium">INFO 7375: Branding and AI</span>
                        <p className="text-gray-400 text-sm">Intersection of branding and artificial intelligence.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Other Institutions */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white border-b border-[#2c1f12] pb-2">Other Institutions</h3>
              <div className="border border-[#2c1f12] rounded-lg p-5 bg-black">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-3">UCLA</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                        <span className="text-gray-300">CS 31: Programming in C++</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-3">Santa Monica College</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                        <span className="text-gray-300">CS 52: Programming in C++</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-3">Arts Institutes</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                        <span className="text-gray-300">Programming in C++</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                        <span className="text-gray-300">Game Programming</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-3">LA Film School</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                        <span className="text-gray-300">Game Programming</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
