import { Trophy } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Competitions() {
  const competitions = [
    {
      name: 'Smart India Hackathon',
      award: 'Participated',
      year: '2025',
      details: 'Built a full-stack app solving real-time collaboration problems.'
    },
    {
      name: 'University HackFest',
      award: 'Semifinalist',
      year: '2022',
      details: 'Designed and developed a website for a Wheather Forecast.'
    },
  ];

  return (
    <section id="competitions" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Competitions" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.map((c, idx) => (
            <div key={idx} className="group bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600">
                  <Trophy className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                  <p className="text-slate-300">{c.details}</p>
                  <div className="mt-2 text-sm text-slate-400">{c.award} • {c.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


