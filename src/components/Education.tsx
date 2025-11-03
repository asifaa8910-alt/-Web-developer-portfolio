import SectionTitle from './SectionTitle';
export default function Education() {
  const education = [
    {
      degree: 'Master in Computer Application ',
      school: 'Lovely Professional University',
      period: '2025 — Present',
      details: 'Focused on software engineering, data structures, algorithms, and web development'
    },
    {
      degree: 'BCA in Computer Science',
      school: 'Veer Bhadur Purvanchal University',
      period: '2022 — 2025',
      details: 'Learned about the basics of computer science and programming.'
    },
    
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Education" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="text-slate-300">{item.school}</p>
                </div>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-slate-700 text-slate-300">{item.period}</span>
              </div>
              <p className="mt-4 text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


