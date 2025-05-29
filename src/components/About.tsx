
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-red-500 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-8xl text-gray-400">👨‍🎓</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              I'm Keerthi Kumar V, A Computer Science Graduate Based in India
            </h3>
            
            <p className="text-gray-700 leading-relaxed">
              I've always been fascinated by the intersection of technology and creativity. 
              My career has been dedicated to finding the perfect balance between the two.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-700">
                  Bachelor of Engineering in Computer Science from VTU University (2023)
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Passion</h4>
                <p className="text-gray-700">
                  Graphic design, video editing, and motion graphics with a focus on bringing fresh, 
                  innovative ideas to creative projects.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Goal</h4>
                <p className="text-gray-700">
                  To contribute technical expertise and creative enthusiasm to a dynamic team 
                  while continuously learning and growing in the design field.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">2023</div>
                <div className="text-gray-600">Graduate Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">CS</div>
                <div className="text-gray-600">Major</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">VTU</div>
                <div className="text-gray-600">University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
