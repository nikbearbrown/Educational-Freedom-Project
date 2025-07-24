import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Teaching Philosophy and Course Portfolio",
  description: "Overview of teaching approach and comprehensive course catalog across institutions",
}

export default function ClassesPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Course Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive overview of my educational philosophy and course offerings across multiple institutions.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
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

        {/* Teaching Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Teaching Philosophy</h2>
          <div className="prose prose-lg dark:prose-invert bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <p>
              My teaching approach emphasizes project-based learning, interdisciplinary collaboration, and real-world applications of AI. I believe in creating immersive educational environments where students develop both technical expertise and ethical awareness. Beyond traditional instruction, I lead AI-driven educational initiatives that enhance learning outcomes through adaptive, interactive tools that personalize the student experience.
            </p>
            <p>
              Through my nonprofit Humanitarians AI Incorporated, I extend my educational mission by developing AI-driven resources for social good. As an educator, I'm committed to fostering partnerships between academia and industry, helping students gain valuable real-world experience while contributing to technological innovation that serves humanitarian purposes.
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Course Portfolio</h2>
          
          {/* Northeastern University Courses */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L8 10H16L12 14Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V6C20 5.44772 19.5523 5 19 5H5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Northeastern University</h3>
            </div>
            
            <div className="grid gap-4">
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">INFO 6205: Program Structure Algorithms</h4>
                <p className="text-sm">Fundamental algorithms and data structures, examining their design, implementation, and analysis. Includes coverage of sorting algorithms, search algorithms, graph algorithms, and algorithm complexity.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CSYE 7270: Building Virtual Environments</h4>
                <p className="text-sm">Programming and design for interactive experiences and immersive virtual environments in real-time. Covers 3D rendering engines, animation, physics, audio, shaders, AI, and applications in virtual/augmented reality, games, data visualization, and industrial design.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">INFO 6105: Data Science Engineering Methods</h4>
                <p className="text-sm">Core concepts of machine learning with emphasis on computational biology. Covers supervised and unsupervised learning methods, data pipelines, and practical implementation using Python.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">INFO 7390: Advances in Data Sciences and Architecture</h4>
                <p className="text-sm">Data visualization and pipeline quality assessment. Covers statistical properties visualization, forecasting, time-series models, causal relationships, and network data analysis.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CSYE 7370: Deep Reinforcement Learning Game Engineering</h4>
                <p className="text-sm">Deep learning and reinforcement learning in game AI, including CNNs, RNNs, autoencoders, VAEs, GANs, and reinforcement learning methods like Q-learning and policy-based approaches.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">DAMG 6210: Data Management and Database Design</h4>
                <p className="text-sm">Information systems design from a data perspective for engineering and business applications, covering data modeling, database management systems, SQL, and data-driven application design.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">INFO 7375: ST: AI Engineering Apps - Prompt Engineering and GenAI</h4>
                <p className="text-sm">Prompt engineering techniques for generative AI, covering prompt patterns, LLM integration, vector databases, fine-tuning, and application development.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CSYE 7374: Special Topics: Computational Skepticism</h4>
                <p className="text-sm">Critical thinking in computational contexts, questioning assumptions in AI systems and algorithmic decision-making.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">INFO 6210: Data Management and Database Design</h4>
                <p className="text-sm">Database design, relational models, SQL, and data management for various applications.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CSYE 7245: Big Data Systems Integration Analytics</h4>
                <p className="text-sm">Big data technologies, distributed systems, and analytics frameworks for processing and analyzing large-scale data.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">DA 5030: Intro Data Mining/Machine Learning</h4>
                <p className="text-sm">Fundamental data mining techniques and machine learning algorithms, covering classification, clustering, and pattern recognition.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CS 3540: Game Programming</h4>
                <p className="text-sm">Concepts and techniques for video game development, including game loops, physics, collision detection, and game AI.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CS 4300: Computer Graphics</h4>
                <p className="text-sm">Fundamental computer graphics concepts including rendering pipelines, transformation matrices, lighting models, and texture mapping.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CS 4850: Building Game Engines</h4>
                <p className="text-sm">Architecture and implementation of game engines, covering rendering systems, physics engines, audio, and game AI.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CS 5850: Advanced Building Game Engines</h4>
                <p className="text-sm">Graduate-level extension of CS 4850, exploring advanced topics in game engine development.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">DS 6020: Collect/Store/Retrieve Data</h4>
                <p className="text-sm">Methods for data collection, storage solutions, and efficient data retrieval in data science applications.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">DS 6030: Intro Data Mining/Machine Learning</h4>
                <p className="text-sm">Fundamental concepts and algorithms in data mining and machine learning.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CS 4800: Algorithms Data</h4>
                <p className="text-sm">Advanced algorithms, data structures, and computational complexity theory.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">ENGR-0201: Organizing Academic Success - AI for Personalized Learning with Claude</h4>
                <p className="text-sm">Using AI tools for academic organization, personalized study strategies, and collaborative learning, with focus on Claude AI.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">INFO 7375: Branding and AI</h4>
                <p className="text-sm">The intersection of branding and artificial intelligence, covering corporate and agency brand teams, the Madison framework, and personal brand development using AI tools.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CSYE 7374/INFO 7374: Research Methods in Artificial Intelligence</h4>
                <p className="text-sm">Research methodologies, data analysis techniques, and reporting strategies for AI research, with focus on publishing projects and research.</p>
              </div>
            </div>
          </div>
          
          {/* UCLA Courses */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L8 10H16L12 14Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V6C20 5.44772 19.5523 5 19 5H5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">UCLA</h3>
            </div>
            
            <div className="grid gap-4">
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CS 31: Programming in C++</h4>
                <p className="text-sm">Introduction to the C++ programming language, covering fundamental programming concepts, object-oriented programming, and data structures.</p>
              </div>
            </div>
          </div>
          
          {/* Santa Monica College Courses */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L8 10H16L12 14Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V6C20 5.44772 19.5523 5 19 5H5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Santa Monica College</h3>
            </div>
            
            <div className="grid gap-4">
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">CS 52: Programming in C++</h4>
                <p className="text-sm">Fundamentals of C++ programming for beginning programmers, similar to UCLA's course.</p>
              </div>
            </div>
          </div>
          
          {/* Arts Institutes Courses */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L8 10H16L12 14Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V6C20 5.44772 19.5523 5 19 5H5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Arts Institutes</h3>
            </div>
            
            <div className="grid gap-4">
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">Programming in C++</h4>
                <p className="text-sm">Introduction to programming using C++ with focus on applications in creative fields.</p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">Game Programming</h4>
                <p className="text-sm">Fundamentals of programming for interactive games and entertainment applications.</p>
              </div>
            </div>
          </div>
          
          {/* LA Film School Courses */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L8 10H16L12 14Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V6C20 5.44772 19.5523 5 19 5H5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">LA Film School</h3>
            </div>
            
            <div className="grid gap-4">
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-bold">Game Programming</h4>
                <p className="text-sm">Programming concepts specific to game development in a film/entertainment context.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Awards Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Awards and Recognition</h2>
          <div className="grid gap-4">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <h4 className="font-bold">RISE Award 2022</h4>
              <p className="text-sm">Recognition for excellence in research, innovation, service, or education in Computer and Information Sciences.</p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <h4 className="font-bold">Fostering Engineering Innovation in Education Award (2021-22)</h4>
              <p className="text-sm">Recognized by Northeastern University for innovative approaches to engineering education.</p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <h4 className="font-bold">Dean's Award, College of Engineering (2024-25)</h4>
              <p className="text-sm">Distinguished recognition from Northeastern University's College of Engineering for outstanding contributions.</p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <h4 className="font-bold">Red Hat Academy Director's Award (2020)</h4>
              <p className="text-sm">Recognized for excellence in open source education and collaboration with Red Hat Academy.</p>
            </div>
          </div>
        </section>
        
        {/* Contact/Closing Section */}
        <section className="mt-16">
          <div className="bg-gray-900 text-white rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Educational Innovation & Collaboration</h3>
            <p className="text-lg mb-6 opacity-90">
              Interested in discussing educational technology, AI in academia, or potential collaborations? I'm always open to connecting with fellow educators, researchers, and industry professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
                Contact Me
              </PrimaryButton>
              <SecondaryButton href="/projects" className="border-white text-white hover:bg-white/10">
                View Projects
              </SecondaryButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
