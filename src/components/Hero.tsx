import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bot, Zap, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-luminous-cyan/30 text-xs font-bold text-luminous-cyan mb-6">
            <Zap size={14} /> L'AVENIR DE L'AUTOMATISATION EST ICI
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Propulsez votre <br />
            <span className="text-gradient">Business avec l'IA</span>
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-xl">
            Isalia Studio conçoit des agents IA sur-mesure qui automatisent vos processus complexes, 
            réduisent vos coûts et décuplent votre productivité.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-luminous-cyan to-neon-violet text-white font-bold flex items-center gap-2 hover:scale-105 transition-transform glow-cyan"
            >
              Réserver un audit IA gratuit <ArrowRight size={18} />
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition-colors"
            >
              Découvrir nos solutions
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-white/40 grayscale opacity-50">
            <div className="flex items-center gap-2 font-bold"><Shield size={20} /> Sécurisé</div>
            <div className="flex items-center gap-2 font-bold"><BarChart3 size={20} /> ROI Garanti</div>
            <div className="flex items-center gap-2 font-bold"><Bot size={20} /> Agents 24/7</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 animate-float">
            <div className="glass p-8 rounded-[2rem] border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luminous-cyan to-neon-violet" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-luminous-cyan/20 flex items-center justify-center">
                  <Bot className="text-luminous-cyan" />
                </div>
                <div>
                  <h3 className="font-bold">Isalia Agent v2.4</h3>
                  <p className="text-xs text-white/40">Statut: Opérationnel</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-white/5 rounded-full w-3/4 animate-pulse" />
                <div className="h-4 bg-white/5 rounded-full w-full animate-pulse delay-75" />
                <div className="h-4 bg-white/5 rounded-full w-5/6 animate-pulse delay-150" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-luminous-cyan">+85%</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Efficacité</p>
                </div>
                <div className="glass p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-neon-violet">-60%</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Coûts Opé.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-luminous-cyan/10 blur-[120px] rounded-full -z-10" />
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-neon-violet/20 blur-[80px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
