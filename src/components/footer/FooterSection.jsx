import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';

export default function FooterSection({ mapImage }) {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src={mapImage}
          alt="Stylized aerial map of Thornhill area"
          className="w-full h-full object-cover opacity-20 saturate-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>

      {/* Glowing marker dot */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
        <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            See You on the<br />
            <span className="text-primary">Range.</span>
          </h2>
          <a
            href="http://book.sweetspot.io/clubs/within-range-golf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-[0_0_30px_rgba(191,255,0,0.3)] transition-all duration-500 text-lg"
          >
            Book Your Bay
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-border/50 pt-12">
          {/* Location */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Location</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p>8111 Leslie Street</p>
                  <p>Thornhill, Ontario</p>
                  <p>L3T 7P4</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=8111+Leslie+Street+Thornhill+Ontario"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-2"
              >
                Get Directions <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Hours</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p>Monday – Friday: 7:00 AM – 11:00 PM</p>
                  <p>Saturday – Sunday: 7:00 AM – 11:00 PM</p>
                  <p className="text-primary mt-2">Open April – November</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Connect</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:9058820320" className="hover:text-foreground transition-colors">(905) 882-0320</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@withinrange.ca" className="hover:text-foreground transition-colors">info@withinrange.ca</a>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/withinrange_thornhill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/WithinRange.Thornhill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/a489f829d_image.png"
            alt="Within Range Golf Centres Inc."
            className="h-32 w-auto"
          />
        </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Within Range Golf Centres Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}