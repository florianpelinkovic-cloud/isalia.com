import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "Audit & Analyse",
    desc: "Nous plongeons dans vos processus pour identifier les goulots d'étranglement.",
    icon: "01"
  },
  {
    title: "Conception Stratégique",
    desc: "Architecture de votre solution IA personnalisée et choix des modèles.",
    icon: "02"
  },
  {
    title: "Développement & Test",
    desc: "Création de vos agents et intégration sécurisée dans votre écosystème.",
    icon: "03"
  },
  {
    title: "Déploiement & Suivi",
    desc: "Mise en production et optimisation continue basée sur les performances réelles.",
    icon: "04"
  }
];

export const MethodSection = () => {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Une Méthode <span className="text-gradient">Éprouvée</span>
            </h2>
            <p className="text-white/60 mb-12 text-lg">
              L'implémentation de l'IA ne doit pas être complexe. Notre approche structurée garantit un déploiement fluide et un ROI mesurable dès les premières semaines.
            </p>
            
            <div className="space-y-6">
              {["Sécurité des données garantie", "Intégration transparente", "Support technique dédié", "Formation de vos équipes"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-luminous-cyan" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className="text-5xl font-bold text-white/5 absolute -top-2 -right-2 group-hover:text-luminous-cyan/10 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-luminous-cyan">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
