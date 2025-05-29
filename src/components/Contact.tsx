
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-6">
            📞 Let's Connect
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Talk</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Feel free to reach out for any design inquiries or just to say hello!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Email</h4>
                    <a 
                      href="mailto:keerthikumar6317@gmail.com" 
                      className="text-gray-600 hover:text-red-500 transition-colors text-lg"
                    >
                      keerthikumar6317@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Phone</h4>
                    <a 
                      href="tel:+919108866317" 
                      className="text-gray-600 hover:text-blue-500 transition-colors text-lg"
                    >
                      +91 9108866317
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium group"
              >
                Send Message
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
