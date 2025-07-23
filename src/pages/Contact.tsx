import React from 'react';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Let's Work
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Together
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-8 tracking-tight">Get In Touch</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hello, I'll do my best to get back to you.
                  </p>
                </div>

                <div className="space-y-8">
                  <a
                    href="mailto:ngojasperryan@gmail.com?subject=Hello!&body=Hi Jasper,"
                    className="group block"
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:border-white transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-mono">Email</p>
                        <p className="text-white font-medium">ngojasperryan@gmail.com</p>
                      </div>
                      <ArrowRight size={16} className="ml-auto text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>

                  <a
                    href="tel:+639612000696"
                    className="group block"
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:border-white transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-mono">Phone</p>
                        <p className="text-white font-medium">+63 961 2000 696</p>
                      </div>
                      <ArrowRight size={16} className="ml-auto text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/maps/place/Valenzuela,+Metro+Manila,+Philippines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:border-white transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-mono">Location</p>
                        <p className="text-white font-medium">Valenzuela, Metro Manila</p>
                      </div>
                      <ArrowRight size={16} className="ml-auto text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                </div>

                <div className="pt-8 border-t border-gray-800">
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-6">Connect</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/jasper890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 p-3 rounded-lg border border-gray-800 hover:border-white transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        {/* GitHub Icon */}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..." clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jasper-ryan-ngo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 p-3 rounded-lg border border-gray-800 hover:border-white transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        {/* LinkedIn Icon */}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569...z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="border border-gray-800 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm">
                <form
                  action="https://formsubmit.co/ngojasperryan@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://jrndev.vercel.app/contact" />

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">Send a Message</h3>
                    <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-mono text-gray-400 uppercase tracking-wider mb-3">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 focus:border-white text-white placeholder-gray-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-mono text-gray-400 uppercase tracking-wider mb-3">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 focus:border-white text-white placeholder-gray-500 focus:outline-none transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-mono text-gray-400 uppercase tracking-wider mb-3">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 focus:border-white text-white placeholder-gray-500 focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-gray-400 uppercase tracking-wider mb-3">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 focus:border-white text-white placeholder-gray-500 focus:outline-none resize-none transition-colors duration-300"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group relative w-full md:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
