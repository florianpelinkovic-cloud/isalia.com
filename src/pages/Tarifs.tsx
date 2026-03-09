import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Bot, BarChart } from 'lucide-react';

const plans = [
  {
    name: "Starter IA",
    price: "1 490€",
    period: "/mois",
    desc: "Idéal pour les TPE souhaitant automatiser leurs premiers processus.",
    features: [
      "1 Agent IA spécialisé",
      "Automatisation de 2 workflows",
      "Support par email 48h",
      "Audit trimestriel",
      "Intégration Slack/Discord"
    ],
    cta: "Démarrer",
    popular: false
  },
  {
    name: "Business Pro",
    price: "3 990€",
    period: "/mois",
    desc: "Pour les PME en pleine croissance cherchant une efficacité maximale.",
    features: [
      "3 Agents IA avancés",
      "Workflows illimités",
      "Support prioritaire 24h",
      "Audit mensuel",
      "Dashboard de performance",
      "Formation d'équipe"
    ],
    cta: "Choisir Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    desc: "Solutions sur-mesure pour les grandes organisations et besoins complexes.",
    features: [
      "Agents IA illimités",
      "Infrastructure LLM privée",
      "Support dédié 24/7",
      "SLA garanti 99.9%",
      "Sécurité bancaire",
      "Déploiement sur site"
    ],
    cta: "Contacter Sales",
    popular: false
  }
];

export const Tarifs = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Investissez dans votre <span className="text-gradient">Croissance</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Des tarifs transparents conçus pour s'adapter à la taille de votre entreprise et à vos ambitions d'automatisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-10 rounded-[2.5rem] border-white/5 relative flex flex-col ${plan.popular ? 'border-luminous-cyan/50 glow-cyan scale-105 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-luminous-cyan text-deep-blue text-xs font-bold rounded-full">
                  PLUS POPULAIRE
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-white/40">{plan.period}</span>
                </div>
                <p className="text-sm text-white/50">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-luminous-cyan shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-luminous-cyan to-neon-violet text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-luminous-cyan/10 flex items-center justify-center text-luminous-cyan mx-auto mb-4">
              <Zap size={24} />
            </div>
            <h4 className="font-bold mb-2">Mise en place rapide</h4>
            <p className="text-sm text-white/50">Vos premiers agents opérationnels en moins de 14 jours.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-neon-violet/10 flex items-center justify-center text-neon-violet mx-auto mb-4">
              <Shield size={24} />
            </div>
            <h4 className="font-bold mb-2">Sans engagement</h4>
            <p className="text-sm text-white/50">Flexibilité totale, annulez ou changez de plan à tout moment.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto mb-4">
              <BarChart size={24} />
            </div>
            <h4 className="font-bold mb-2">ROI Mesurable</h4>
            <p className="text-sm text-white/50">Suivez chaque euro économisé grâce à notre dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
