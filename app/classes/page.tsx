import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Courses | Nik Bear Brown",
  description: "Courses taught by Professor Nik Bear Brown in artificial intelligence, machine learning, virtual environments, and computational biology at Northeastern University.",
}

export default function ClassesPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Courses Taught</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Courses in artificial intelligence, computational biology, machine learning, virtual environments, and more. Designed to empower students with cutting-edge knowledge and practical skills for the rapidly evolving technological landscape.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/juYjI3cncug?si=WqvsOj98AZuo_B-V"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Teaching Philosophy</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                My teaching approach emphasizes hands-on learning, real-world applications, and the integration of cutting-edge research into the classroom. I believe in fostering an inclusive environment where students can explore complex concepts through project-based learning and collaborative problem-solving.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 my-8 border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">Teaching Recognition</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-0">Award-winning educational innovation and student engagement</p>
                  </div>
                </div>
                <p className="mb-0">
                  Recipient of the RISE Award 2022 for Computer and Information Sciences, the Fostering Engineering Innovation in Education Award (2021-22), the Dean's Award from the College of Engineering (2024-25), and the Red Hat Academy Director's Award (2020).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
            <div className="grid gap-6">
              
              <div className="border rounded-lg p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 21H9.154a3.374 3.374 0 00-2.548-1.146l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">INFO 7375: Prompt Engineering for Generative AI</h3>
                    <p className="mb-4">
                      A comprehensive exploration of prompt engineering and fine-tuning for Large Language Models (LLMs). Master the art and science of crafting prompts that drive LLMs to create captivating and context-aware content across various domains.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-emerald-500">
                      <p className="text-sm mb-2"><strong>Key Topics:</strong></p>
                      <p className="text-sm">
                        Prompt patterns, LangChain integration, vector databases, fine-tuning techniques, and advanced deployment strategies for generative AI applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">CSYE 7270: Building Virtual Environments</h3>
                    <p className="mb-4">
                      Examines how to program and design interactive experiences and immersive virtual environments in real-time. Students learn to create applications in areas such as virtual/augmented reality, games, data visualization, medicine, and industrial design.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-sm mb-2"><strong>Key Topics:</strong></p>
                      <p className="text-sm">
                        3D rendering engines, animation, collision, physics, audio, trigger systems, shading, AI, Unity and Unreal Engine development, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">INFO 6105: Data Science Engineering Methods</h3>
                    <p className="mb-4">
                      Introduces core concepts of machine learning with unique emphasis on computational biology. Covers supervised and unsupervised learning methods, implementation, evaluation, and best practices.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-sm mb-2"><strong>Key Topics:</strong></p>
                      <p className="text-sm">
                        Statistical learning, regression, classification, clustering, neural networks, feature engineering, model validation, and biological applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">CSYE 7370: Deep Reinforcement Learning Game Engineering</h3>
                    <p className="mb-4">
                      Explores deep learning and reinforcement learning techniques applied to game AI and simulation. Covers convolutional neural networks, recurrent neural networks, autoencoders, and various reinforcement learning algorithms.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-amber-500">
                      <p className="text-sm mb-2"><strong>Key Topics:</strong></p>
                      <p className="text-sm">
                        CNN, RNN, Autoencoders, VAEs, GANs, Q-learning, Deep Q-learning, policy-based methods, multi-agent reinforcement learning, and imitation learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">INFO 7390: Advances in Data Sciences and Architecture</h3>
                    <p className="mb-4">
                      Explores how to assess quality at each step in a data analysis pipeline using visualization. Covers understanding statistical properties of data, fixing data issues, and demonstrating improvements visually.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-pink-500">
                      <p className="text-sm mb-2"><strong>Key Topics:</strong></p>
                      <p className="text-sm">
                        Data visualization, forecasting, time-series models, causal relationships, network data, and principles of visual design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Complete Course Listing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
                  <h3 className="text-xl font-bold text-white">Northeastern University</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>INFO 6205: Program Structure Algorithms*</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CSYE 7270: Building Virtual Environments*</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>INFO 6105: Data Sci Eng Methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>INFO 7390: Advances Data Sci/Architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CSYE 7370: Deep Reinforcement Learning Game Eng*</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>DAMG 6210: Data Mgt and Database Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>INFO 7375: ST: AI Engineering Apps* - Prompt Engineering and GenAI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CSYE 7374: Special Topics: Computational Skepticism*</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>INFO 6210: Data Mgt and Database Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CSYE 7245: Big Data Sys Int Analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
                  <h3 className="text-xl font-bold text-white">Northeastern University (cont.)</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>DA 5030: Intro Data Mining/Machine Lrn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CS 3540: Game Programming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CS 4300: Computer Graphics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CS 4850: Building Game Engines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CS 5850: Advanced Building Game Engines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>DS 6020: Collect/Store/Retrieve Data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>DS 6030: Intro Data Mining/Machine Lrn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>CS 4800: Algorithms Data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>ENGR-0201: AI for Personalized Learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      <span>INFO 7375: Branding and AI</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4">
                  <h3 className="text-xl font-bold text-white">Other Institutions</h3>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">UCLA</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                        <span>CS 31: Programming in C++</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Santa Monica College</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                        <span>CS 52: Programming in C++</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Arts Institutes</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                        <span>Programming in C++</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                        <span>Game Programming</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">LA Film School</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                        <span>Game Programming</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4">
                  <h3 className="text-xl font-bold text-white">Course Materials & Resources</h3>
                </div>
                <div className="p-4">
                  <p className="mb-4">Course materials, lecture notes, and code samples are available through the following channels:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="block text-green-700 dark:text-green-300">GitHub Repositories</strong>
                        <a href="https://github.com/nikbearbrown" className="text-sm text-green-600 dark:text-green-400 hover:underline">github.com/nikbearbrown</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="block text-green-700 dark:text-green-300">YouTube Channel</strong>
                        <a href="https://www.youtube.com/user/nikbearbrown" className="text-sm text-green-600 dark:text-green-400 hover:underline">youtube.com/user/nikbearbrown</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.967 19.771l-4.971-9.771h9.942l-4.971 9.771zM12.967 19.771v-9.771h-4.971l4.971 9.771zM7.996 10h-4.996v4h4.996v-4zM7.996 10v-5h-4.996v5h4.996zM7.996 10h4.971v-5h-4.971v5zM12.967 5v5h4.971v-5h-4.971z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="block text-green-700 dark:text-green-300">Canvas Course Sites</strong>
                        <span className="text-sm text-green-600 dark:text-green-400">Available to enrolled students</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Teaching Awards & Recognition</h2>
            <div className="grid gap-4">
              
              <div className="border rounded-lg p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800 dark:text-amber-300">RISE Award 2022</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Computer and Information Sciences</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800 dark:text-amber-300">Fostering Engineering Innovation in Education Award</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Northeastern University (2021-22)</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800 dark:text-amber-300">Dean's Award, College of Engineering</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400">Northeastern University (2024-25)</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800 dark:text-amber-300">Red Hat Academy Director's Award</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400">2020</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="pt-12">
            <h2 className="text-3xl font-bold mb-6">Current Projects & Initiatives</h2>
            <div className="grid gap-6">
              <div className="border rounded-lg p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 21H9.154a3.374 3.374 0 00-2.548-1.146l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">AI for Education Project (AI4ED)</h3>
                    <p className="mb-4">
                      Leading efforts to integrate AI into educational practices at Northeastern University, focusing on developing adaptive, interactive, and personalized learning experiences through the Provost's office.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-indigo-500">
                      <p className="text-sm mb-2"><strong>Key Innovations:</strong></p>
                      <p className="text-sm">
                        Custom data sets and chatbots for STEM courses, AI-enhanced grading tools, personalized learning pathways, and interactive AI teaching assistants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Educational Bot Effort, College of Engineering</h3>
                    <p className="mb-4">
                      Spearheading the development of AI-powered educational bots and custom datasets for mathematics, physics, engineering, and computer science courses, enhancing the learning experience for students.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="text-sm mb-2"><strong>Current Focus:</strong></p>
                      <p className="text-sm">
                        Managing student teams building specialized chatbots, creating domain-specific training data, and evaluating educational effectiveness of AI interventions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">AI Skunkworks, Northeastern University</h3>
                    <p className="mb-4">
                      Serving as a founding partner and faculty mentor for AI Skunkworks, fostering collaborations between businesses and Northeastern students to create innovative AI solutions for real-world challenges.
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-emerald-500">
                      <p className="text-sm mb-2"><strong>Recent Projects:</strong></p>
                      <p className="text-sm">
                        Industry partnerships in healthcare AI, reinforcement learning applications, computer vision systems, and natural language processing implementations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="pt-12">
            <h2 className="text-3xl font-bold mb-6">Education & Background</h2>
            <div className="grid gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Academic Credentials</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-medium">MS in Finance/MBA (In Progress)</h4>
                      <p className="text-muted-foreground">Northeastern University, Boston</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Expected December 2025 (GPA: 3.7)</div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-medium">MS in Information Design and Visualization</h4>
                      <p className="text-muted-foreground">Northeastern University</p>
                    </div>
                    <div className="text-sm text-muted-foreground">GPA: 3.7</div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-medium">PhD in Computer Science</h4>
                      <p className="text-muted-foreground">University of California, Los Angeles</p>
                    </div>
                    <div className="text-sm text-muted-foreground">GPA: 3.7</div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-medium">MS in Computer Science</h4>
                      <p className="text-muted-foreground">University of California, Los Angeles</p>
                    </div>
                    <div className="text-sm text-muted-foreground">GPA: 3.7</div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-medium">BA in Biochemistry and Molecular Biology</h4>
                      <p className="text-muted-foreground">University of California, Santa Cruz</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-medium">Associate Teaching Professor</h4>
                        <p className="text-muted-foreground">Northeastern University - College of Engineering</p>
                      </div>
                      <div className="text-sm text-muted-foreground">2022-Present</div>
                    </div>
                    <p className="text-sm">
                      Teaching AI and machine learning courses, developing curriculum, and mentoring students in research projects.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-medium">Assistant Teaching Professor</h4>
                        <p className="text-muted-foreground">Northeastern University - College of Engineering</p>
                      </div>
                      <div className="text-sm text-muted-foreground">2017-2022</div>
                    </div>
                    <p className="text-sm">
                      Taught courses in AI, machine learning, game programming, algorithms, and data science.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-medium">Lecturer</h4>
                        <p className="text-muted-foreground">Northeastern University - College of Computer Science</p>
                      </div>
                      <div className="text-sm text-muted-foreground">2013-2017</div>
                    </div>
                    <p className="text-sm">
                      Taught C++, Game Programming, and Algorithms courses.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Research Interests</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Artificial Intelligence</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Machine Learning</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Computational Biology</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Reinforcement Learning</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Educational Technology</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Game AI</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Data Visualization</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Prompt Engineering</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span>Virtual Environments</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="publications" className="pt-12">
            <h2 className="text-3xl font-bold mb-6">Selected Publications</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Mapping the Typographic Latent Space of Digits</h3>
                <p className="text-sm text-muted-foreground mb-2">A. A. Issak, S. Kakkar, S. Goetz, N. B. Brown, and C. Harteveld</p>
                <p className="text-sm mb-2">The Eleventh International Conference on Learning Representations (ICLR), Kigali, Rwanda, May 2023</p>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View Paper</a>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Deep learning and alignment of spatially resolved single-cell transcriptomes with Tangram</h3>
                <p className="text-sm text-muted-foreground mb-2">Raghav Avasthi, Ziqing Lu, Nik Bear Brown</p>
                <p className="text-sm mb-2">Nature Methods 18, 1352–1362 (2021)</p>
                <a href="https://doi.org/10.1038/s41592-021-01264-7" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View Paper</a>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">DC-Art-GAN: Stable Procedural Content Generation using DC-GANs for Digital Art</h3>
                <p className="text-sm text-muted-foreground mb-2">Rohit Gandikota, Nik Bear Brown (2022)</p>
                <a href="https://arxiv.org/abs/2209.02847" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View Paper</a>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Typography-MNIST (TMNIST): an MNIST-Style Image Dataset to Categorize Glyphs and Font-Styles</h3>
                <p className="text-sm text-muted-foreground mb-2">Nimish Magre, Nicholas Brown (2021)</p>
                <a href="https://doi.org/10.48550/arXiv.2202.08112" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View Paper</a>
              </div>
            </div>
            
            <div className="mt-6">
              <PrimaryButton href="/publications" className="w-full sm:w-auto">
                View All Publications
              </PrimaryButton>
            </div>
          </section>

          <section className="pt-12">
            <h2 className="text-3xl font-bold mb-6">Connect & Learn More</h2>
            <div className="grid gap-4">
              <PrimaryButton href="https://github.com/nikbearbrown" className="w-full">
                GitHub Repositories
              </PrimaryButton>
              <SecondaryButton href="https://www.youtube.com/user/nikbearbrown" className="w-full">
                YouTube Channel
              </SecondaryButton>
              <PrimaryButton href="https://www.linkedin.com/in/nikbearbrown/" className="w-full">
                LinkedIn Profile
              </PrimaryButton>
              <SecondaryButton href="/contact" className="w-full">
                Contact for Course Materials
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
