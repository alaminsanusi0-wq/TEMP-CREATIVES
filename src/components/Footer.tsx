import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-display font-bold tracking-tighter mb-6">
              TEMP <span className="text-primary">CREATIVES</span>
            </h2>
            <p className="text-white/40 max-w-sm mb-8 font-light leading-relaxed">
              We are a high-end graphic design agency dedicated to crafting exceptional visual experiences. 
              Our mission is to turn your vision into a powerful brand story.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Work', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 font-light">Subscribe to get the latest design insights and agency updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary w-full"
              />
              <button className="px-4 py-2 bg-primary text-dark font-bold rounded-lg text-xs hover:bg-white transition-all">
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs uppercase tracking-widest">
            © 2026 TEMP CREATIVES. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            BACK TO TOP <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
