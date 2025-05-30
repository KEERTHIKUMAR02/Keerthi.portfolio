
import { link } from 'fs';
import { useState } from 'react';
import VideoPlayer from "./VideoPlayer";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
    

  const projects = [
    
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Logo Design",
      description: "Complete brand identity package including logo, color palette, and typography guidelines.",
      image: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Motion Graphics Reel",
      category: "Motion Graphics",
      description: "Dynamic motion graphics showcasing various animation techniques and visual effects.",
      image: "🎬",
      color: "from-blue-500 to-cyan-500",
      src: "/videos/logo-animation.mp4" 
    },
    {
      id: 3,
      title: "Poster Collection",
      category: "Poster Design",
      description: "Series of promotional posters featuring creative layouts and visual hierarchy.",
      image: "📋",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Video Edit Project",
      category: "Video Editing",
      description: "Professional video editing with seamless transitions and color grading.",
      image: "🎥",
      color: "from-red-500 to-orange-500"
      
    },
    {
      id: 5,
      title: "UI/UX Concepts",
      category: "Digital Design",
      description: "User interface designs focusing on user experience and modern aesthetics.",
      image: "💻",
      color: "from-indigo-500 to-purple-500",
      link: "https://drive.google.com/file/d/1rMFUCYl8JPWScNO71lyx85LByR0Vttxv/view?usp=sharing"
    },
    {
      id: 6,
      title: "Typography Study",
      category: "Typography",
      description: "Exploration of typeface combinations and typographic hierarchy.",
      image: "✒️",
      color: "from-gray-500 to-slate-500"
    }
  ];

  
  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-6">
            🎨 My Work
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">My Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my creative work spanning graphic design, video editing, and motion graphics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-100"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{project.image}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full mb-3">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                <div className="mt-4 flex items-center text-red-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  View Details
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
                   
                  
                    
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all"
                  >
                    ×
                  </button>
                </div>
                <div className={`h-64 bg-gradient-to-br ${projects.find(p => p.id === selectedProject)?.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <div className="text-8xl">{projects.find(p => p.id === selectedProject)?.image}</div>
                </div>
                <div className="inline-block px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4">
                  {projects.find(p => p.id === selectedProject)?.category}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed ">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>

                <a href={projects.find(p => p.id === selectedProject)?.link} target="_blank" rel="noopener noreferrer"><div className="mt-4 flex items-center text-red-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 inline-block px-4 py-2 bg-green-50 text-red-600 text-sm font-medium rounded-full mb-4">
                   Open Example in Popup
                  
                  <span className="ml-2">→</span>
                </div>
                    
                    </a>
                { /* <a href={projects.find(p => p.id === selectedProject)?.link}> <div className="mt-4 flex items-center text-red-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 inline-block px-4 py-2 bg-green-50 text-red-600 text-sm font-medium rounded-full mb-4">
                   View It...!
                  
                  <span className="ml-2">→</span>
                </div></a> */}
              {/*direct video play method*/}
                     {selectedProject && (
                     <video
                src={projects.find(p => p.id === selectedProject)?.src}
                controls
                className="w-full max-w-md rounded-lg"
                     />
                     )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
