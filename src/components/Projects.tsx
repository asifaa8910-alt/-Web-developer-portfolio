import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
    },
    // {
    //   title: 'Task Management App',
    //   description: 'Collaborative project management tool with real-time updates, team chat, and advanced analytics.',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    //   github: '#',
    //   demo: '#',
    // },
    // {
    //   title: 'Social Media Dashboard',
    //   description: 'Analytics dashboard for tracking social media metrics across multiple platforms with beautiful visualizations.',
    //   image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'Chart.js', 'REST API', 'Material UI'],
    //   github: '#',
    //   demo: '#',
    // },
    {
      title: 'Weather Forecast App',
      description: 'Modern weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'OpenWeather API', 'Geolocation', 'PWA'],
      github: '#',
      demo: '#',
    },
    // {
    //   title: 'Fitness Tracking Platform',
    //   description: 'Comprehensive fitness app with workout plans, progress tracking, nutrition logging, and AI-powered recommendations.',
    //   image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['Vue.js', 'Express', 'MongoDB', 'TensorFlow'],
    //   github: '#',
    //   demo: '#',
    // },
    {
      title: 'Portfolio Website',
      description: 'A portfolio website showcasing my projects and skills.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AWS', 'Docker'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Featured Projects" />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a href={project.github} className="p-2 bg-slate-900 border border-slate-700 text-white rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.demo} className="p-2 bg-slate-900 border border-slate-700 text-white rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-sm bg-slate-700 text-slate-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
