
import { useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Logo Design",
      description: "Complete brand identity package including logo, color palette, and typography guidelines.",
      image: "🎨"
    },
    {
      id: 2,
      title: "Motion Graphics Reel",
      category: "Motion Graphics",
      description: "Dynamic motion graphics showcasing various animation techniques and visual effects.",
      image: "🎬"
    },
    {
      id: 3,
      title: "Poster Collection",
      category: "Poster Design",
      description: "Series of promotional posters featuring creative layouts and visual hierarchy.",
      image: "📋"
    },
    {
      id: 4,
      title: "Video Edit Project",
      category: "Video Editing",
      description: "Professional video editing with seamless transitions and color grading.",
      image: "🎥"
    },
    {
      id: 5,
      title: "UI/UX Concepts",
      category: "Digital Design",
      description: "User interface designs focusing on user experience and modern aesthetics.",
      image: "💻"
    },
    {
      id: 6,
      title: "Typography Study",
      category: "Typography",
      description: "Exploration of typeface combinations and typographic hierarchy.",
      image: "✒️"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my creative work spanning graphic design, video editing, and motion graphics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-red-500 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-8xl">{projects.find(p => p.id === selectedProject)?.image}</div>
                </div>
                <p className="text-gray-700">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
