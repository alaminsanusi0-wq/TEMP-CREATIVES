import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold mb-8"
            >
              LET'S START <br /> SOMETHING GREAT.
            </motion.h2>
            <p className="text-white/50 text-lg font-light mb-12 max-w-md">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-medium">hello@tempcreatives.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-medium">+234 800 TEMP CREATIVE</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Visit Us</p>
                  <p className="text-lg font-medium">Kaduna State, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Project Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option className="bg-dark">Brand Identity</option>
                  <option className="bg-dark">Logo Design</option>
                  <option className="bg-dark">UI/UX Design</option>
                  <option className="bg-dark">Motion Graphics</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-primary text-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all">
                SEND MESSAGE <Send className="w-4 h-4" />
              </button>
              
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-transparent px-2 text-white/30">Or</span></div>
              </div>

              <a
                href="https://wa.me/yournumber"
                className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                CHAT ON WHATSAPP <MessageCircle className="w-4 h-4" />
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
