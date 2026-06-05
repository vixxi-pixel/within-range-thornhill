import React from 'react';
import { motion } from 'framer-motion';

export default function GallerySection({ bayPovImage, ballImage }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Your Practice<br />
            <span className="text-primary">Sanctuary.</span>
          </h2>
        </motion.div>

        {/* Asymmetric Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group"
          >
            <img
              src={bayPovImage}
              alt="POV from a driving range bay looking over the expansive green range"
              className="w-full aspect-[16/9] md:aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-xs text-primary tracking-widest">250 YDS</span>
              <p className="font-display text-xl font-semibold text-foreground mt-1">The View From Your Bay</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={ballImage}
              alt="Macro shot of a premium golf ball on synthetic turf"
              className="w-full aspect-square md:aspect-auto md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-xs text-primary tracking-widest">PREMIUM</span>
              <p className="font-display text-xl font-semibold text-foreground mt-1">Quality Equipment</p>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: '27', label: 'Toptracer Bays' },
            { value: '250', label: 'Yard Range' },
            { value: '7am', label: 'Daily Open' },
            { value: '11pm', label: 'Closing Time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <span className="font-mono text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}