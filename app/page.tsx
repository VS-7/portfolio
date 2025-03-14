import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { Navigation } from "./components/nav";
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import LanguageSelector from "./components/LanguageSelector";
import ScrollButton from "./components/ScrollButton";
import ProjectCarousel from "./components/ProjectCarousel";

// Import data
import { technologies } from "./data/technologies";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { content } from "./data/content";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentLang = (searchParams.lang as string) || 'pt-BR';
  const t = content[currentLang as keyof typeof content];
  const exp = experiences[currentLang as keyof typeof experiences];

  return (
    <div className="flex flex-col min-h-screen pt-0 sm:pt-40 overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        <Navigation lang={currentLang} />
      </div>

      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      {/* Initial Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="text-center space-y-12 animate-fade-in w-full">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24">
            <LanguageSelector currentLang={currentLang} />
            
            <div className="space-y-4">
              <p className="text-zinc-400 text-xl">{t.hero.greeting}</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
                Vitor Sérgio
              </h1>
              <p className="text-zinc-400 text-xl">{t.hero.role}</p>
            </div>
            
            <ScrollButton text={t.hero.cta} />
          </div>

          <ProjectCarousel 
            projects={projects} 
            viewProjectText={t.projects.viewProject} 
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-16 pb-16">
        {/* Hero Section */}
        <div id="about" className="flex flex-col items-center md:items-start gap-8 mb-16 pt-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-64 h-64 overflow-hidden rounded-full border-2 border-zinc-600/50">
              <Image
                src="/assets/profile.png"
                alt="Profile"
                className="object-cover"
                fill
                priority
              />
            </div>
            
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div>
                <h1 className="text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
                  Vitor Sérgio
                </h1>
                <h2 className="mt-2 text-xl text-zinc-500">{t.role}</h2>
              </div>
              
              <div className="flex justify-center md:justify-start gap-4">
                <Link 
                  href="https://github.com/VS-7" 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 bg-zinc-800/50 rounded-full border border-zinc-600/50 hover:border-zinc-600 transition-colors"
                  target="_blank"
                >
                  <FaGithub className="w-5 h-5" />
                  GitHub
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/vitor-s%C3%A9rgio-1a8977262/" 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 bg-zinc-800/50 rounded-full border border-zinc-600/50 hover:border-zinc-600 transition-colors"
                  target="_blank"
                >
                  <FaLinkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
                <Link 
                  href="mailto:vitorsergio.ts@hotmail.com" 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 bg-zinc-800/50 rounded-full border border-zinc-600/50 hover:border-zinc-600 transition-colors"
                >
                  <MdEmail className="w-5 h-5" />
                  Email
                </Link>
              </div>

              <p className="max-w-2xl text-zinc-400">{t.bio}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-2xl text-zinc-300 mb-8 text-center md:text-left">
              {t.technologies}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-colors bg-zinc-800/50"
                >
                  <div className={`${tech.color} transition-colors duration-300 hover:opacity-80`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm text-zinc-500">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="experience"  className="mb-16">
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
            />  
            
            <h2 className="text-2xl text-zinc-300 mb-8 text-center">
              {t.workExperience.title}
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Linha vertical central */}
              <div className="absolute left-1/2 top-3 bottom-3 w-px bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" />
              
              {/* Experiências - reduzido o space-y de 24 para 16 */}
              <div className="space-y-16">
                {exp.map((experience, index) => (
                  <div key={index} className="relative group">
                    {/* Ícone do planeta (sempre no centro) */}
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800
                        shadow-lg ${experience.glowColor} flex items-center justify-center overflow-hidden
                        transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-700`}>
                        <Image
                          src={experience.planetImage}
                          alt="Planet"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Conteúdo (alternando lados) - reduzido o gap de 8 para 6 */}
                    <div className={`grid grid-cols-2 gap-6 ${index % 2 === 0 ? '' : 'direction-rtl'}`}>
                      {/* Lado que terá o conteúdo - reduzido o padding */}
                      <div className={`${index % 2 === 0 ? 'col-start-2' : 'col-start-1'} 
                        p-4 transition-all duration-300`}>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-sm text-emerald-400 font-mono">{experience.period}</span>
                          <span className="text-zinc-500">•</span>
                          <span className="text-zinc-300">{experience.company}</span>
                        </div>
                        
                        <h3 className="text-lg text-zinc-200 mb-2 
                          transition-colors duration-300 group-hover:text-emerald-400">
                          {experience.position}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm leading-relaxed
                          transition-colors duration-300 group-hover:text-zinc-300">
                          {experience.description}
                        </p>
                      </div>
                      
                      {/* Lado vazio para manter o espaçamento */}
                      <div className={`${index % 2 === 0 ? 'col-start-1' : 'col-start-2'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h2 className="text-2xl text-zinc-300 mb-8 text-center md:text-left">
              {t.projects.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.slug}>
                  <div className="flex flex-col h-[400px]">
                    <div className="relative w-full h-48">
                      <Image
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="object-cover rounded-t-xl"
                        fill
                        priority
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex-1">
                        <h3 className="text-lg text-zinc-200 mb-2">{project.title}</h3>
                        <p className="text-zinc-400 text-sm">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center pt-4 mt-auto">
                        <Link 
                          href={`/projects/${project.slug}`}
                          className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                        >
                          {t.projects.viewProject} →
                        </Link>
                        <Link 
                          href={`https://github.com/${project.repository}`}
                          target="_blank"
                          className="text-sm text-zinc-400 hover:text-zinc-300 flex items-center gap-1"
                        >
                          <FaGithub className="w-4 h-4" />
                          GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-zinc-800/50 border-t border-zinc-600/50 py-8">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-400 mb-4 md:mb-0">
              &copy; 2025 / <span className="text-white">Vitor Sérgio</span>
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://github.com/VS-7" 
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                target="_blank"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/vitor-s%C3%A9rgio-1a8977262/" 
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                target="_blank"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="mailto:vitorsergio.ts@hotmail.com" 
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <MdEmail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
