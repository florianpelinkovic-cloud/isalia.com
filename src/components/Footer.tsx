import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-deep-blue border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-luminous-cyan to-neon-violet flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter">
                ISALIA<span className="text-luminous-cyan">STUDIO</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              L'agence leader en automatisation IA pour les entreprises ambitieuses. Nous transformons la technologie en levier de croissance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-luminous-cyan transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-luminous-cyan transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-luminous-cyan transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/solutions" className="hover:text-luminous-cyan transition-colors">Solutions</Link></li>
              <li><Link to="/services" className="hover:text-luminous-cyan transition-colors">Services</Link></li>
              <li><Link to="/cas-usage" className="hover:text-luminous-cyan transition-colors">Cas d'usage</Link></li>
              <li><Link to="/tarifs" className="hover:text-luminous-cyan transition-colors">Tarifs</Link></li>
              <li><Link to="/blog" className="hover:text-luminous-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/a-propos" className="hover:text-luminous-cyan transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-luminous-cyan transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-luminous-cyan transition-colors">FAQ</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-luminous-cyan transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-luminous-cyan" />
                contact@isalia.studio
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-luminous-cyan" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-luminous-cyan" />
                Paris, France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © 2026 Isalia Studio. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="/mentions-legales" className="hover:text-white transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
