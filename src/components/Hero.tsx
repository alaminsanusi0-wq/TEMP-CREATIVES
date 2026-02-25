import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-primary">
            Premium Design Agency
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] text-white"
          >
            WE DESIGN <br />
            <span className="text-primary italic">VISUAL</span> EXPERIENCES <br />
            THAT SPEAK.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light"
        >
          A Creative Trio Turning Ideas into Powerful Visual Stories. 
          Crafting the future of brands through bold aesthetics and strategic design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group relative px-8 py-4 bg-primary text-dark font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW OUR WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-dark transition-all duration-300"
          >
            HIRE US
          </a>
        </motion.div>
      </div>

      {/* Car Drift Animation Component */}
      <div className="absolute bottom-10 left-0 w-full pointer-events-none overflow-hidden h-40 flex items-end">
        <motion.div
          initial={{ x: "-20vw", rotate: 0 }}
          animate={{ 
            x: "120vw",
            rotate: [0, -1, 1, 0],
            y: [0, -1, 1, 0]
          }}
          transition={{ 
            x: {
              duration: 8, 
              repeat: Infinity, 
              ease: "linear"
            },
            rotate: {
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative flex flex-col items-center"
        >
          {/* Sports Car Silhouette */}
          <div className="relative w-32 h-10">
            {/* Car Body */}
            <div className="absolute bottom-0 w-full h-6 bg-primary rounded-b-sm rounded-t-[2rem] skew-x-[-10deg]">
              {/* Spoiler */}
              <div className="absolute -top-3 right-0 w-6 h-1 bg-primary rounded-full" />
              <div className="absolute -top-3 right-1 w-1 h-3 bg-primary" />
            </div>
            {/* Cabin */}
            <div className="absolute bottom-5 left-8 w-14 h-5 bg-dark/80 rounded-t-full skew-x-[-20deg] border-t border-white/20" />
            
            {/* Wheels */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
              className="absolute -bottom-2 left-4 w-5 h-5 bg-black rounded-full border-2 border-white/30 flex items-center justify-center"
            >
              <div className="w-3 h-[1px] bg-white/20 rotate-45" />
              <div className="w-3 h-[1px] bg-white/20 -rotate-45" />
            </motion.div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
              className="absolute -bottom-2 right-4 w-5 h-5 bg-black rounded-full border-2 border-white/30 flex items-center justify-center"
            >
              <div className="w-3 h-[1px] bg-white/20 rotate-45" />
              <div className="w-3 h-[1px] bg-white/20 -rotate-45" />
            </motion.div>

            {/* Headlights Glow */}
            <div className="absolute top-4 left-0 w-4 h-2 bg-white/80 blur-sm rounded-full" />
          </div>

          <div className="text-[10px] font-black uppercase tracking-tighter text-primary mt-2 bg-dark/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
            TEMP CREATIVES
          </div>

          {/* Screeching White Smoke Particles */}
          <div className="absolute -left-8 bottom-0 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 2, 4],
                  x: [-10, -40 - (i * 10)],
                  y: [0, -10 - (i * 5)]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="w-6 h-6 bg-white/40 rounded-full blur-lg"
              />
            ))}
          </div>
          
          {/* Tire Marks (Screech) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute -left-20 bottom-1 w-20 h-[2px] bg-white/20 blur-[1px]"
          />
        </motion.div>
      </div>
    </section>
  );
};
