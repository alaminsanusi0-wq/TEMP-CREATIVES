import React from 'react';
import { motion } from 'framer-motion';
import { Palette, PenTool, Share2, Layout, Video, Zap } from 'lucide-react';

const services = [
  {
    title: "Brand Identity",
    description: "Crafting unique visual identities that resonate with your target audience and stand the test of time.",
    icon: Palette,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Logo Design",
    description: "Creating iconic marks that represent your brand's core values in the simplest yet most powerful way.",
    icon: PenTool,
    color: "from-primary/20 to-yellow-500/20"
  },
  {
    title: "Social Media",
    description: "Designing engaging social graphics that stop the scroll and build a loyal community around your brand.",
    icon: Share2,
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "UI/UX Design",
    description: "Building intuitive and beautiful digital interfaces that provide seamless user experiences across all devices.",
    icon: Layout,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Motion Graphics",
    description: "Bringing your brand to life with dynamic animations and video content that tells a compelling story.",
    icon: Video,
    color: "from-purple-500/20 to-violet-500/20"
  },
  {
    title: "Strategic Consulting",
    description: "Providing expert guidance on visual strategy to ensure your brand communicates effectively in a crowded market.",
    icon: Zap,
    color: "from-orange-500/20 to-amber-500/20"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            OUR SERVICES.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-dark transition-colors duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Zap className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
