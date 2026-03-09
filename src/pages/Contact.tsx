import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Parlons de votre <span className="text-gradient">Futur</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Que vous ayez un projet précis ou que vous souhaitiez simplement explorer les possibilités de l'IA, nous sommes là pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-bold mb-6">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-luminous-cyan/10 flex items-center justify-center text-luminous-cyan">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                    <p className="font-bold">contact@isalia.studio</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neon-violet/10 flex items-center justify-center text-neon-violet">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Téléphone</p>
                    <p className="font-bold">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Bureau</p>
                    <p className="font-bold">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5 bg-gradient-to-br from-luminous-cyan/10 to-transparent">
              <h3 className="text-xl font-bold mb-4">Audit IA Gratuit</h3>
              <p className="text-sm text-white/60 mb-6">
                30 minutes pour analyser vos processus et identifier vos leviers de croissance.
              </p>
              <button className="w-full py-4 rounded-xl bg-white text-deep-blue font-bold flex items-center justify-center gap-2 hover:bg-luminous-cyan hover:text-white transition-all">
                <Calendar size={18} /> Prendre RDV
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="glass p-10 rounded-[2.5rem] border-white/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="Jean Dupont"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-luminous-cyan transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Email professionnel</label>
                  <input 
                    type="email" 
                    placeholder="jean@entreprise.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-luminous-cyan transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Entreprise</label>
                  <input 
                    type="text" 
                    placeholder="Nom de votre société"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-luminous-cyan transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Sujet</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-luminous-cyan transition-colors appearance-none">
                    <option>Audit IA Gratuit</option>
                    <option>Agent Conversationnel</option>
                    <option>Automatisation Workflow</option>
                    <option>Autre demande</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Décrivez brièvement vos besoins..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-luminous-cyan transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-luminous-cyan to-neon-violet text-white font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform glow-cyan">
                Envoyer ma demande <Send size={20} />
              </button>
              <p className="text-center text-xs text-white/30">
                En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
