
import { Film, Palette, FileText, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Editing",
      description: "Professional video editing with seamless transitions, color grading, and audio enhancement to bring your stories to life."
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and animations that captivate audiences and enhance visual storytelling with modern techniques."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Poster Design",
      description: "Creative poster designs that effectively communicate your message with striking visuals and thoughtful typography."
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Logo Design",
      description: "Memorable brand identities and logos that represent your vision with clean, modern, and timeless design principles."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive design services that blend creativity with technical expertise 
            to deliver exceptional results for your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-lg hover:bg-red-50 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="text-red-500 group-hover:text-red-600 transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Have a project in mind?</h3>
            <p className="text-gray-600 mb-4">
              Let's transform your vision into a captivating reality. I'm here to make your digital presence shine.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-all hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
