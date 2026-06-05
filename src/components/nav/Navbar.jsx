import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Range', href: '#range' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                WITHIN RANGE
              </span>
              <span className="hidden sm:inline text-xs font-mono text-muted-foreground tracking-widest uppercase">
                Thornhill
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="http://book.sweetspot.io/clubs/within-range-golf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 tracking-wide"
              >
                Book a Bay
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-4xl font-display font-bold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="http://book.sweetspot.io/clubs/within-range-golf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-4 px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full"
              >
                Book a Bay
              </motion.a>
            </nav>

            <div className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>8111 Leslie St, Thornhill, ON</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(905) 882-0320</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}