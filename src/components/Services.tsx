
import { Film, Palette, FileText, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description: "Professional video editing with seamless transitions, color grading, and audio enhancement to bring your stories to life.",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and animations that captivate audiences and enhance visual storytelling with modern techniques.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Poster Design",
      description: "Creative poster designs that effectively communicate your message with striking visuals and thoughtful typography.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Logo Design",
      description: "Memorable brand identities and logos that represent your vision with clean, modern, and timeless design principles.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-6">
            💼 What I Offer
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive design services that blend creativity with technical expertise 
            to deliver exceptional results for your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors">{service.description}</p>
                
                <div className="mt-6 flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a project in mind?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Let's transform your vision into a captivating reality. I'm here to make your digital presence shine.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium group"
            >
              Book Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
