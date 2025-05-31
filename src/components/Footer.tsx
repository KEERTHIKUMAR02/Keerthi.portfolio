
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Keerthi Kumar V
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Computer Science Graduate & Creative Designer passionate about bringing 
              innovative ideas to life through design and technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                K
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Services', id: 'services' }
              ].map((link) => (
                <button 
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <a href="mailto:keerthikumar6317@gmail.com" className="hover:text-white transition-colors">
                  keerthikumar6317@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  📱
                </div>
                <a href="tel:+919108866317" className="hover:text-white transition-colors">
                  +91 9108866317
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  💼
                </div>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            &copy; 2024 Keerthi Kumar V. All rights reserved. 
            <span className="ml-2 text-red-400">Made with ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
