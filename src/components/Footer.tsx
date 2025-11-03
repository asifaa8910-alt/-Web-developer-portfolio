import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              Mohammad Asif
            </h3>
            <p className="text-slate-400">Full Stack Web Developer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="www.linkedin.com/in/mohammad-asif-77950923b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="asifaa8910@gmail.com"
              className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Mohammad Asif © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
