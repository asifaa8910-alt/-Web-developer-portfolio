import { Users, Lightbulb, MessagesSquare, Rocket } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function SoftSkills() {
  const softSkills = [
    { icon: MessagesSquare, name: 'Communication' },
    { icon: Users, name: 'Teamwork' },
    { icon: Lightbulb, name: 'Problem Solving' },
    { icon: Rocket, name: 'Proactivity' },
    { icon: Users, name: 'Leadership' },
  ];

  return (
    <section id="soft-skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Soft Skills" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          {softSkills.map((s, idx) => (
            <div
              key={idx}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shadow hover:shadow-lg transition-all"
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600">
                <s.icon className="w-4 h-4 text-cyan-600 group-hover:text-white" />
              </span>
              <span className="font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


