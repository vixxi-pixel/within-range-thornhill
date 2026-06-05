import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, BarChart3, Gamepad2, Smartphone, Gauge, Target } from 'lucide-react';

const features = [
  {
    icon: Crosshair,
    title: 'Ball Flight Tracking',
    description: 'Real-time trajectory data for every shot. See carry distance, ball speed, and launch angle instantly.',
  },
  {
    icon: BarChart3,
    title: 'Shot Analytics',
    description: 'Track your session history and monitor improvement over time with detailed performance charts.',
  },
  {
    icon: Gamepad2,
    title: 'Virtual Games',
    description: 'Play virtual courses, closest-to-the-pin, and long drive challenges with friends and family.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description: 'Connect your smartphone to view data, save sessions, and share results from the Toptracer app.',
  },
  {
    icon: Gauge,
    title: 'Power Tee System',
    description: 'Automatic ball dispensing with height-adjustable tees. Focus on your swing, not your setup.',
  },
  {
    icon: Target,
    title: '27 Premium Bays',
    description: 'Spacious, well-maintained bays with premium mats for a consistent and comfortable practice experience.',
  },
];

export default function TechSection({ techImage, nightImage }) {
  return (
    <section id="technology" className="relative py-24 md:py-32 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Technology</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Powered by<br />
            <span className="text-primary">Toptracer.</span>
          </h2>
        </motion.div>

        {/* Tech Image + Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Sticky Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={techImage}
                alt="Toptracer technology bay with ball flight data display"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Scan line effect */}
              <motion.div
                initial={{ top: '-10%' }}
                whileInView={{ top: '110%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, ease: 'linear' }}
                className="absolute left-0 right-0 h-px bg-primary/60 shadow-[0_0_10px_rgba(191,255,0,0.5)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={nightImage}
                alt="Driving range illuminated at night with stadium floodlights"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-6 rounded-xl border border-border/30 bg-card/30 hover:bg-card/60 hover:border-border/60 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}