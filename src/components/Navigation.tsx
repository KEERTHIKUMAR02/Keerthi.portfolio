
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            Keerthi Kumar V
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-gray-600 hover:text-gray-900 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
