import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import pImg from '../assets/p.png';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight animate-slide-up">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mohammad Asif</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 animate-slide-up animate-delay-100">Full Stack Web Developer</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed animate-slide-up animate-delay-200">
              Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
              Passionate about clean code and innovative solutions.
            </p>

            <div className="flex gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-slate-600 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="www.linkedin.com/in/mohammad-asif-77950923b" target="_blank" rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="asifaa8910@gmail.com.com"
                className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={pImg}
                alt="Professional headshot"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-slate-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
