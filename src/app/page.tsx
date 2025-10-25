'use client';

import { Terminal } from '@/components/Terminal';
import { Code as Code2, Briefcase, Rocket, Shield, Mail, Github, Linkedin, Twitter, Target, Award, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-red-600/50 shadow-lg shadow-red-900/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
            Benjamin CANAC
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-red-500 transition-all duration-300 font-medium">Accueil</a>
            <a href="#about" className="text-white hover:text-red-500 transition-all duration-300 font-medium">À propos</a>
            <a href="#skills" className="text-white hover:text-red-500 transition-all duration-300 font-medium">Compétences</a>
            <a href="#tryhackme" className="text-white hover:text-red-500 transition-all duration-300 font-medium">TryHackMe</a>
            <a href="#contact" className="text-white hover:text-red-500 transition-all duration-300 font-medium">Contact</a>
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

      <section id="about" className="py-32 px-6 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-red-950/20 to-black border border-red-600/50 rounded-xl p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">lorem</h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illum.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-red-950/20 to-black border border-red-600/50 rounded-xl p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">lorem</h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestiae.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-red-950/20 to-black border border-red-600/50 rounded-xl p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">lorem</h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">React / Next.js</span>
                  <span className="text-red-400">95%</span>
                </div>
                <div className="h-3 bg-gray-900 rounded-full overflow-hidden border border-red-900/50">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[95%] rounded-full shadow-lg shadow-red-500/50"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">TypeScript</span>
                  <span className="text-red-400">90%</span>
                </div>
                <div className="h-3 bg-gray-900 rounded-full overflow-hidden border border-red-900/50">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[90%] rounded-full shadow-lg shadow-red-500/50"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Node.js / Express</span>
                  <span className="text-red-400">88%</span>
                </div>
                <div className="h-3 bg-gray-900 rounded-full overflow-hidden border border-red-900/50">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[88%] rounded-full shadow-lg shadow-red-500/50"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Tailwind CSS</span>
                  <span className="text-red-400">92%</span>
                </div>
                <div className="h-3 bg-gray-900 rounded-full overflow-hidden border border-red-900/50">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[92%] rounded-full shadow-lg shadow-red-500/50"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Cybersécurité</span>
                  <span className="text-red-400">85%</span>
                </div>
                <div className="h-3 bg-gray-900 rounded-full overflow-hidden border border-red-900/50">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[85%] rounded-full shadow-lg shadow-red-500/50"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Git / DevOps</span>
                  <span className="text-red-400">87%</span>
                </div>
                <div className="h-3 bg-gray-900 rounded-full overflow-hidden border border-red-900/50">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[87%] rounded-full shadow-lg shadow-red-500/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tryhackme" className="py-32 px-6 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Profil TryHackMe
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-red-950/20 to-black border border-red-600/50 rounded-xl p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-red-400">150</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rooms Completed</h3>
              <p className="text-gray-400 text-sm">Challenges résolus avec succès</p>
            </div>

            <div className="group bg-gradient-to-br from-red-950/20 to-black border border-red-600/50 rounded-xl p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-red-400">Top 5%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Rank</h3>
              <p className="text-gray-400 text-sm">Parmi les meilleurs utilisateurs</p>
            </div>

            <div className="group bg-gradient-to-br from-red-950/20 to-black border border-red-600/50 rounded-xl p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-red-400">365</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Day Streak</h3>
              <p className="text-gray-400 text-sm">Jours consécutifs d'activité</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-600/50 rounded-xl p-8 md:p-12 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Badges & Achievements</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Passionné par la cybersécurité, je perfectionne mes compétences à travers des challenges pratiques sur TryHackMe. Mon parcours inclut des spécialisations en pentesting, analyse de malware, et réseaux.
                </p>
                <a
                  href="https://tryhackme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <Shield className="w-5 h-5" />
                  Voir mon profil TryHackMe
                </a>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-lg border border-red-600/50 flex items-center justify-center">
                  <Shield className="w-24 h-24 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Restons en contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6"></div>
            <p className="text-xl text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-950/20 to-black backdrop-blur-sm border border-red-600/50 rounded-xl p-8 md:p-12 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
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
