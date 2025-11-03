import { Code2, Palette, Server, Smartphone } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Application Development',
      desc: 'Modern, performant web apps using React, TypeScript, and best practices.'
    },
    {
      icon: Server,
      title: 'API & Backend Development',
      desc: 'Scalable REST APIs, database design, and cloud-ready deployments.'
    },
    {
      icon: Smartphone,
      title: 'Responsive UI & PWAs',
      desc: 'Mobile-first interfaces with offline support and app-like experiences.'
    },
    {
      icon: Palette,
      title: 'UI/UX Implementation',
      desc: 'Pixel-perfect interfaces from Figma to production with accessibility in mind.'
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Services" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, idx) => (
            <div key={idx} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 transition-colors">
                <s.icon className="w-6 h-6 text-cyan-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


