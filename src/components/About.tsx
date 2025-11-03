import { Code2, Palette, Zap, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function About() {
  const skills = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable, and efficient code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed and best practices' },
    { icon: Users, title: 'Collaboration', description: 'Working effectively in team environments' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="About Me" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-300 leading-relaxed mb-12 text-center">
            I'm a passionate web developer  building modern web applications.
            I specialize in React, TypeScript, and Node.js, creating seamless digital experiences that combine
            aesthetic design with powerful functionality. When I'm not coding, you'll find me exploring new
            technologies, contributing to open source, or sharing knowledge with the developer community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                    <p className="text-slate-300">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
