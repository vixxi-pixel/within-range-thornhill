import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const buckets = [
  {
    name: 'Small Bucket',
    balls: '40 balls',
    price: '$8',
    features: ['Standard mat access', 'Open tee area'],
    popular: false,
  },
  {
    name: 'Medium Bucket',
    balls: '70 balls',
    price: '$12',
    features: ['Standard mat access', 'Open tee area', 'Extended session time'],
    popular: false,
  },
  {
    name: 'Large Bucket',
    balls: '105 balls',
    price: '$16',
    features: ['Premium mat access', 'Open tee area', 'Full warm-up session'],
    popular: true,
  },
  {
    name: 'Toptracer Bay',
    balls: '1 Hour',
    price: '$40',
    features: ['Toptracer technology', 'Ball flight analysis', 'Virtual games', 'Premium bay'],
    popular: false,
  },
];

export default function PricingSection({ ballImage }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
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
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Pricing</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Choose Your<br />
            <span className="text-primary">Practice.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            From quick warmups to full technology-powered sessions. Every visit brings you closer to your best game.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {buckets.map((bucket, idx) => (
            <motion.div
              key={bucket.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`relative group rounded-2xl border transition-all duration-500 ${
                bucket.popular
                  ? 'border-primary/50 bg-card'
                  : 'border-border/50 bg-card/50 hover:border-border'
              } ${hoveredIdx === idx ? 'scale-[1.02] shadow-xl shadow-primary/5' : ''}`}
            >
              {bucket.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Popular
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Ball silhouette indicator */}
                <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30 group-hover:bg-primary/50 transition-colors" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {bucket.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{bucket.balls}</p>

                <div className="mb-8">
                  <span className="font-mono text-4xl font-bold text-foreground">{bucket.price}</span>
                  {bucket.name === 'Toptracer Bay' && (
                    <span className="text-sm text-muted-foreground ml-1">/hr</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {bucket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="http://book.sweetspot.io/clubs/within-range-golf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    bucket.popular
                      ? 'bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(191,255,0,0.2)]'
                      : 'border border-border text-foreground hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  Select
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Prices are subject to change. Grass tees available seasonally. Tax not included.
        </motion.p>
      </div>
    </section>
  );
}