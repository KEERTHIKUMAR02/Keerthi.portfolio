
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-6">
            ✨ Get to know me
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about bridging the gap between technology and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-80 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-8xl">👨‍🎓</div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-xl">🎓</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse delay-700">
                <span className="text-white text-2xl">💡</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              I'm Keerthi Kumar V, A Computer Science Graduate Based in{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                India
              </span>
            </h3>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              I've always been fascinated by the intersection of technology and creativity. 
              My career has been dedicated to finding the perfect balance between the two.
            </p>

            <div className="grid gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    🎓
                  </span>
                  Education
                </h4>
                <p className="text-gray-700">
                  Bachelor of Engineering in Computer Science from VTU University (2023)
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    🎨
                  </span>
                  Passion
                </h4>
                <p className="text-gray-700">
                  Graphic design, video editing, and motion graphics with a focus on bringing fresh, 
                  innovative ideas to creative projects.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    🎯
                  </span>
                  Goal
                </h4>
                <p className="text-gray-700">
                  To contribute technical expertise and creative enthusiasm to a dynamic team 
                  while continuously learning and growing in the design field.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">2023</div>
                <div className="text-gray-600 font-medium">Graduate Year</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">CS</div>
                <div className="text-gray-600 font-medium">Major</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">VTU</div>
                <div className="text-gray-600 font-medium">University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
