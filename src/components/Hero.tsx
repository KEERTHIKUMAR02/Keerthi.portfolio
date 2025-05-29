
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hello, I'm <span className="text-red-500">Keerthi Kumar V</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
                Computer Science Graduate & Creative Designer
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Creative and detail-oriented Computer Science graduate with a keen interest in graphic design. 
              Eager to apply technical skills and design principles in an entry-level design role. 
              Aiming to contribute fresh ideas and enthusiasm to a creative team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-all hover:scale-105"
              >
                Let's Talk
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg transition-all hover:scale-105"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-red-500 flex items-center justify-center overflow-hidden">
                <div className="w-72 h-72 rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">👨‍💻</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
