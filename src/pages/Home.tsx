import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesPreview } from '../components/ServicesPreview';
import { MethodSection } from '../components/MethodSection';
import { motion } from 'motion/react';
import { ArrowRight, Star, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 glass border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Clients Satisfaits", val: "150+", icon: Users },
            { label: "Processus Automatisés", val: "2.5k+", icon: TrendingUp },
            { label: "Heures Gagnées", val: "450k+", icon: Star },
            { label: "Pays Couverts", val: "12", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-2"><stat.icon className="text-luminous-cyan" size={20} /></div>
              <p className="text-3xl font-bold">{stat.val}</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesPreview />

      {/* Interactive Feature */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass p-12 rounded-[3rem] border-white/10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-luminous-cyan/20 blur-[100px] rounded-full" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">L'IA n'est plus une option, <br /><span className="text-gradient">c'est votre futur moteur.</span></h2>
              <p className="text-white/60 mb-8">
                Les entreprises qui adoptent l'automatisation intelligente aujourd'hui domineront leur marché demain. Ne restez pas à la traîne.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-luminous-cyan" /> Réduction drastique des erreurs humaines</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-luminous-cyan" /> Disponibilité totale 24h/24 et 7j/7</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-luminous-cyan" /> Scalabilité instantanée sans recrutement</li>
              </ul>
              <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-deep-blue font-bold hover:bg-luminous-cyan hover:text-white transition-all">
                Démarrer ma transformation
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="w-3/4 h-3/4 rounded-full border border-luminous-cyan/30 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                   <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-luminous-cyan to-neon-violet glow-cyan flex items-center justify-center">
                      <Cpu className="text-white w-12 h-12" />
                   </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 glass p-4 rounded-2xl text-xs font-bold"
              >
                Analyse en cours...
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 left-0 glass p-4 rounded-2xl text-xs font-bold"
              >
                Optimisation +42%
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <MethodSection />

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-[3rem] border-luminous-cyan/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à automatiser <br /><span className="text-gradient">votre succès ?</span></h2>
            <p className="text-white/60 mb-10 text-lg">
              Réservez votre audit IA gratuit de 30 minutes avec l'un de nos experts pour découvrir votre potentiel d'automatisation.
            </p>
            <Link to="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-luminous-cyan to-neon-violet text-white font-bold text-lg hover:scale-105 transition-transform glow-cyan inline-flex items-center gap-3">
              Réserver mon audit gratuit <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

import { Cpu } from 'lucide-react';
