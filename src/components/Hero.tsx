
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import myImage from '/images/pofile.webp';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  function handleResumeClick(){
    window.open("https://drive.google.com/file/d/1PracftXRPmq2svds6xKF2lzPqrj7moQa/view?usp=sharing", "_blank");
    throw new Error('Function not implemented.');
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium">
                ✨ Available for new opportunities
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Keerthi Kumar V
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
                Computer Science Graduate &{' '}
                <span className="font-medium text-gray-800">Creative Designer</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              Creative and detail-oriented Computer Science graduate with a keen interest in graphic design. 
              Eager to apply technical skills and design principles in an entry-level design role. 
              Aiming to contribute fresh ideas and enthusiasm to a creative team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium group"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
              onClick={handleResumeClick}
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg font-medium group"
                
              >
                 
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Stats or metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">2023</div>
                <div className="text-sm text-gray-600">Graduate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Passion</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Main profile container */}
              <div className="relative w-96 h-96 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-100 to-white flex items-center justify-center overflow-hidden">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-8xl"><img src={myImage} alt="Portfolio" style={{ width: '300px' }} /></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-xl">✨</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse delay-1000">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/4 -right-4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
