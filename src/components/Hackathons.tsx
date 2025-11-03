import { Timer, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Hackathons() {
  const hackathons = [
    {
      name: 'Open Source Hack 2024 [SIH 2025]',
      role: 'Participant',
      team: 'Team Vertos',
      details: 'Developed a contribution dashboard integrating with GitHub APIs for Health Sector Projects.',
    },
    {
      name: 'City HackNight',
      role: 'Participant',
      team: 'Team Kraken',
      details: 'Designing  a chatbot for a college.',
    },
  ];

  return (
    <section id="hackathons" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Hackathons" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {hackathons.map((h, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{h.name}</h3>
                  <p className="text-slate-300">{h.details}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="inline-flex items-center gap-1"><Timer className="w-4 h-4" />{h.role}</span>
                  <span className="inline-flex items-center gap-1"><Users className="w-4 h-4" />{h.team}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


