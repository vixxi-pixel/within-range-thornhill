import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Calendar, ChevronUp } from 'lucide-react';

export default function FloatingActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-xl border border-border/50 rounded-full shadow-2xl shadow-black/20">
            <a
              href="http://book.sweetspot.io/clubs/within-range-golf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full text-sm hover:shadow-[0_0_20px_rgba(191,255,0,0.2)] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Book a Bay</span>
              <span className="sm:hidden">Book</span>
            </a>

            <a
              href="https://www.parkgolf.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border/50 text-foreground font-medium rounded-full text-sm hover:border-primary/50 hover:text-primary transition-all"
            >
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Reload Key</span>
              <span className="sm:hidden">Key</span>
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 border border-border/50 text-muted-foreground rounded-full hover:border-primary/50 hover:text-primary transition-all"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}