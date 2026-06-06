import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Sun, ArrowDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section id="range" className="relative min-h-screen flex items-end overflow-hidden pt-24 md:pt-48">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Within Range Thornhill driving range at golden hour"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      {/* Vector Trace Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
          className="absolute top-[30%] h-px w-1/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear', repeatDelay: 6, delay: 2 }}
          className="absolute top-[50%] h-px w-1/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left: Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Now Open — 2026 Season
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.9] tracking-tight"
            >
              The
              <br />
              Modern
              <br />
              <span className="text-primary">Range.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              27 Toptracer bays. Premium grass tees. Power Tee automation.
              Practice with precision at Thornhill's premier driving range.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="http://book.sweetspot.io/clubs/within-range-golf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-[0_0_30px_rgba(191,255,0,0.3)] transition-all duration-500 tracking-wide"
              >
                Book a Bay
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-primary/50 hover:text-primary transition-all duration-500 tracking-wide"
              >
                View Pricing
              </a>
            </motion.div>
          </div>

          {/* Right: Range Pulse Status */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="lg:justify-self-end"
          >
            <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 min-w-[280px]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                  Range Pulse
                </span>
              </div>

              <div className="space-y-4">
                <StatusRow
                  icon={<Clock className="w-4 h-4" />}
                  label="Status"
                  value="Open until 11:00 PM"
                />
                <StatusRow
                  icon={<Sun className="w-4 h-4" />}
                  label="Weather"
                  value="22°C Clear"
                />
                <StatusRow
                  icon={<MapPin className="w-4 h-4" />}
                  label="Location"
                  value="8111 Leslie St"
                />
              </div>

              <div className="mt-5 pt-5 border-t border-border/50">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-foreground">0</span>
                  <span className="text-sm text-muted-foreground">min wait</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted-foreground tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatusRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}