import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, ChevronDown } from 'lucide-react';
import { useLocation, LOCATIONS } from '@/lib/LocationContext';

const navLinks = [
{ label: 'Range', href: '#range' },
{ label: 'Pricing', href: '#pricing' },
{ label: 'Technology', href: '#technology' },
{ label: 'Contact', href: '#contact' }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const { location, locationId, setLocationId } = useLocation();

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
        scrolled ?
        'bg-background/90 backdrop-blur-xl border-b border-border/50' :
        'bg-transparent'}`
        }>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'md:h-32 h-20'}`}>
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img
                src="https://media.base44.com/images/public/6a22de3ad9f241f8bbb551d5/a489f829d_image.png"
                alt="Within Range Golf Centres Inc."
                className={`w-auto ml-2 md:ml-6 drop-shadow-[0_4px_12px_rgba(255,255,255,0.25)] hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-105 ${scrolled ? 'h-10 mt-0' : 'md:h-40 md:mt-10 h-14 mt-0'}`} />
              
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {/* Location Selector */}
              <div className="relative">
                <button
                  onClick={() => setLocOpen(!locOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {location.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {locOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-2 left-0 bg-card border border-border/50 rounded-xl overflow-hidden shadow-xl min-w-[160px] z-50"
                    >
                      {Object.values(LOCATIONS).map((loc) => (
                        <button
                          key={loc.id}
                          onClick={() => { setLocationId(loc.id); setLocOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-secondary ${locationId === loc.id ? 'text-primary font-semibold' : 'text-foreground'}`}
                        >
                          {loc.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {navLinks.map((link) =>
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide">
                
                  {link.label}
                </a>
              )}
              <a
                href="http://book.sweetspot.io/clubs/within-range-golf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 tracking-wide">
                
                Book a Bay
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-foreground">
              
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col justify-center items-center">
          
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) =>
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-4xl font-display font-bold text-foreground hover:text-primary transition-colors">
              
                  {link.label}
                </motion.a>
            )}
              <motion.a
              href="http://book.sweetspot.io/clubs/within-range-golf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-4 px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full">
              
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
        }
      </AnimatePresence>
    </>);

}