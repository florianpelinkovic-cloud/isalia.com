import React from 'react';
import { motion } from 'motion/react';
import { Bot, MessageSquare, Zap, BarChart, Shield, Search } from 'lucide-react';

const solutions = [
  {
    title: "Agents de Support Client",
    desc: "Réduisez votre temps de réponse à zéro. Nos agents gèrent les demandes complexes, les remboursements et le suivi de commande en totale autonomie.",
    benefits: ["Disponibilité 24/7", "Multilingue (50+ langues)", "Intégration CRM native"],
    icon: MessageSquare
  },
  {
    title: "Agents de Vente & Qualification",
    desc: "Ne laissez plus aucun lead s'échapper. Nos agents engagent vos visiteurs, qualifient leurs besoins et prennent rendez-vous directement dans votre calendrier.",
    benefits: ["Augmentation du taux de conversion", "Qualification automatique", "Relances personnalisées"],
    icon: Zap
  },
  {
    title: "Automatisation Back-Office",
    desc: "Libérez vos équipes des tâches administratives. Saisie de données, génération de rapports, facturation... l'IA s'occupe de tout avec une précision de 100%.",
    benefits: ["Zéro erreur humaine", "Gain de temps massif", "Processus standardisés"],
    icon: Bot
  }
];

export const Solutions = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Nos <span className="text-gradient">Solutions IA</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Des systèmes intelligents conçus pour résoudre vos défis business les plus complexes et accélérer votre croissance.
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 rounded-2xl bg-luminous-cyan/10 flex items-center justify-center text-luminous-cyan mb-8 glow-cyan">
                  <sol.icon size={32} />
                </div>
                <h2 className="text-4xl font-bold mb-6">{sol.title}</h2>
                <p className="text-white/60 mb-8 text-lg leading-relaxed">{sol.desc}</p>
                <div className="space-y-4">
                  {sol.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-luminous-cyan/20 flex items-center justify-center text-luminous-cyan">
                        <Zap size={12} />
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`relative aspect-square glass rounded-[3rem] border-white/10 overflow-hidden flex items-center justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-luminous-cyan/10 to-neon-violet/10" />
                <div className="w-1/2 h-1/2 rounded-full border border-white/10 animate-pulse flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border border-luminous-cyan/30 animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
