import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Building2, Stethoscope, GraduationCap, Plane, Scale } from 'lucide-react';

const cases = [
  {
    industry: "E-commerce",
    title: "Support Client Automatisé",
    result: "-70% de tickets support",
    desc: "Mise en place d'un agent IA gérant les retours, les suivis de colis et les conseils produits personnalisés.",
    icon: ShoppingCart
  },
  {
    industry: "Immobilier",
    title: "Qualification de Leads",
    result: "+45% de mandats signés",
    desc: "Agent conversationnel qualifiant les acheteurs et vendeurs 24/7 et planifiant les visites automatiquement.",
    icon: Building2
  },
  {
    industry: "Santé",
    title: "Gestion de Rendez-vous",
    result: "Zéro rendez-vous manqué",
    desc: "Système de rappel intelligent et gestion d'agenda optimisée par IA pour les cliniques médicales.",
    icon: Stethoscope
  },
  {
    industry: "Éducation",
    title: "Tuteur IA Personnalisé",
    result: "+30% de réussite",
    desc: "Plateforme d'apprentissage adaptative répondant aux questions des étudiants en temps réel.",
    icon: GraduationCap
  },
  {
    industry: "Voyage",
    title: "Conciergerie 24/7",
    result: "Satisfaction client 4.9/5",
    desc: "Assistant de voyage gérant les réservations, les modifications et les recommandations locales.",
    icon: Plane
  },
  {
    industry: "Juridique",
    title: "Analyse de Contrats",
    result: "Gain de temps de 80%",
    desc: "Outil d'extraction automatique des clauses critiques et analyse de conformité réglementaire.",
    icon: Scale
  }
];

export const CasUsage = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cas <span className="text-gradient">d'Usage</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Découvrez comment nos solutions IA transforment concrètement les opérations de nos clients dans divers secteurs d'activité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-luminous-cyan/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-luminous-cyan group-hover:bg-luminous-cyan group-hover:text-deep-blue transition-colors">
                  <item.icon size={28} />
                </div>
                <div className="px-3 py-1 rounded-full bg-luminous-cyan/10 text-[10px] font-bold text-luminous-cyan uppercase tracking-widest">
                  {item.industry}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-luminous-cyan font-bold text-sm mb-4">{item.result}</p>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
