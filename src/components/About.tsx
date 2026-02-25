import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const designers = [
  {
    name: "Al'amin",
    role: "Founder & Creative Director",
    bio: "Visionary leader with a passion for high-end brand identities and strategic design systems.",
    image: "https://picsum.photos/seed/alamin/400/500",
    socials: { ig: "#", tw: "#", li: "#" }
  },
  {
    name: "Sulaiman",
    role: "Lead Brand Designer",
    bio: "Master of minimalism and typography, crafting timeless logos and visual narratives.",
    image: "https://picsum.photos/seed/sulaiman/400/500",
    socials: { ig: "#", tw: "#", li: "#" }
  },
  {
    name: "Shahid",
    role: "UI/UX & Motion Designer",
    bio: "Expert in creating seamless digital experiences and dynamic motion graphics that captivate.",
    image: "https://picsum.photos/seed/shahid/400/500",
    socials: { ig: "#", tw: "#", li: "#" }
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              The Creative Trio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              MEET THE MINDS <br /> BEHIND THE MAGIC.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md text-white/50 text-lg font-light"
          >
            We are more than just designers. We are storytellers, problem solvers, and your partners in visual excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designers.map((designer, i) => (
            <motion.div
              key={designer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                
                {/* Socials Overlay */}
                <div className="absolute bottom-6 left-6 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href={designer.socials.ig} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href={designer.socials.tw} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={designer.socials.li} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-display font-bold">{designer.name}</h3>
                  {designer.name === "Al'amin" && (
                    <span className="text-[10px] bg-primary text-dark px-2 py-0.5 rounded-full font-bold uppercase">
                      Founder
                    </span>
                  )}
                </div>
                <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">{designer.role}</p>
                <p className="text-white/50 font-light leading-relaxed">{designer.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
