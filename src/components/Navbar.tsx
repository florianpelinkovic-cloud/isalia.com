import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Cas d\'usage', href: '/cas-usage' },
  { name: 'Méthode', href: '/methode' },
  { name: 'Technologie', href: '/technologie' },
  { name: 'Tarifs', href: '/tarifs' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-luminous-cyan to-neon-violet flex items-center justify-center glow-cyan transition-transform group-hover:scale-110">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            ISALIA<span className="text-luminous-cyan">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-luminous-cyan",
                location.pathname === link.href ? "text-luminous-cyan" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-white text-deep-blue text-sm font-bold hover:bg-luminous-cyan hover:text-white transition-all glow-cyan"
          >
            Audit IA Gratuit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-luminous-cyan"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-luminous-cyan to-neon-violet text-white text-center font-bold"
          >
            Audit IA Gratuit
          </Link>
        </motion.div>
      )}
    </nav>
  );
};
