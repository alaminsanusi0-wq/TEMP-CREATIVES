import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Luxe Fashion",
    text: "TEMP CREATIVES transformed our brand identity into something truly remarkable. Their attention to detail is unmatched.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "TechFlow Systems",
    text: "The UI/UX design they provided for our app was world-class. Intuitive, beautiful, and highly functional.",
    rating: 5
  },
  {
    name: "David Okoro",
    company: "Green Horizon",
    text: "Working with Al'amin and his team was a breeze. They understood our vision perfectly and delivered beyond expectations.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            CLIENT STORIES.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl glass relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/70 italic mb-8 font-light leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-primary text-xs font-bold uppercase tracking-widest">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
