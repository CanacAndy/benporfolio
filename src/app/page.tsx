'use client';

import { Terminal } from '@/components/Terminal';
import { Code as Code2, Briefcase, Rocket, Shield, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Benjamin CANAC
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-red-500 transition-colors">Accueil</a>
            <a href="#about" className="text-white hover:text-red-500 transition-colors">À propos</a>
            <a href="#skills" className="text-white hover:text-red-500 transition-colors">Compétences</a>
            <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
                  Etudiant en cybersécurité
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  lorem
                  <span className="text-red-600">
                    lorem
                  </span>
                  <br />lorem
                </h1>
                <p className="text-xl text-white leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia?
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105"
                >
                  Me contacter
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-red-900 transition-colors border border-red-600"
                >
                  En savoir plus
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-900/20 blur-3xl"></div>
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black backdrop-blur-sm border border-red-600 rounded-xl p-8 hover:border-red-400 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">lorem</h3>
              <p className="text-white leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illum.
              </p>
            </div>

            <div className="bg-black backdrop-blur-sm border border-red-600 rounded-xl p-8 hover:border-red-400 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">lorem</h3>
              <p className="text-white leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestiae.
              </p>
            </div>

            <div className="bg-black backdrop-blur-sm border border-red-600 rounded-xl p-8 hover:border-red-400 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">lorem</h3>
              <p className="text-white leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">React / Next.js</span>
                  <span className="text-red-400">95%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[95%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">TypeScript</span>
                  <span className="text-red-400">90%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[90%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Node.js / Express</span>
                  <span className="text-red-400">88%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[88%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Tailwind CSS</span>
                  <span className="text-red-400">92%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[92%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Cybersécurité</span>
                  <span className="text-red-400">85%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[85%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Git / DevOps</span>
                  <span className="text-red-400">87%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[87%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Restons en contact
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="bg-black backdrop-blur-sm border border-red-600 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:contact@example.com" className="text-white hover:text-red-400 transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Disponibilité</h3>
                  <p className="text-white">Ouvert aux opportunités</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-red-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} Porfolio Benjamin. Tous droits réservés. Développé par&nbsp;
            <a href="#" target="_blank">Andy Canac</a></p>
        </div>
      </footer>
    </div>
  );
}
