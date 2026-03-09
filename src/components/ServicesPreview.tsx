import React from 'react';
import { motion } from 'motion/react';
import { Bot, MessageSquare, Database, Workflow, Search, BarChart } from 'lucide-react';

const services = [
  {
    title: "Agents IA Conversationnels",
    desc: "Des agents intelligents qui gèrent votre support client et vos ventes 24/7 avec une empathie humaine.",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Automatisation de Workflows",
    desc: "Connectez vos outils et automatisez vos tâches répétitives pour libérer le potentiel de vos équipes.",
    icon: Workflow,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Analyse de Données IA",
    desc: "Transformez vos données brutes en décisions stratégiques grâce à nos modèles prédictifs avancés.",
    icon: BarChart,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Extraction d'Informations",
    desc: "Analysez des milliers de documents instantanément pour en extraire l'essentiel sans erreur humaine.",
    icon: Search,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Infrastructure IA",
    desc: "Déploiement de serveurs et modèles LLM privés pour une sécurité et une confidentialité totale.",
    icon: Database,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Audit & Stratégie IA",
    desc: "Nous analysons votre business pour identifier les leviers d'automatisation les plus rentables.",
    icon: Bot,
    color: "from-violet-600 to-purple-600"
  }
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Nos <span className="text-gradient">Solutions IA</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Nous créons des systèmes intelligents qui s'adaptent à vos besoins spécifiques et évoluent avec votre entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 border-white/5 hover:border-luminous-cyan/30"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 glow-cyan group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-luminous-cyan transition-colors">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
