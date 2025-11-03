import SectionTitle from './SectionTitle';
export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Node.js', level: 88 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'SQL', level: 87 },
        { name: 'REST APIs', level: 93 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'VS Code', level: 75 },
        { name: 'Figma', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Skills & Expertise" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shadow hover:shadow-lg transition-all"
                  >
                    <span
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"
                    ></span>
                    <span
                      className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      aria-hidden
                    ></span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
