import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Rocket, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">L'IA au service de <span className="text-gradient">l'Humain</span></h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Isalia Studio est née d'une conviction simple : l'intelligence artificielle ne doit pas être une barrière technologique, mais un catalyseur de créativité et d'efficacité humaine.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Depuis notre création à Paris, nous accompagnons les entreprises dans leur transition vers un modèle hybride où l'IA gère la complexité technique, permettant aux équipes de se concentrer sur ce qui compte vraiment : l'innovation et la relation client.
            </p>
          </motion.div>
          <div className="relative aspect-square glass rounded-[3rem] border-white/10 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-luminous-cyan/20 to-neon-violet/20" />
             <div className="text-center">
                <div className="text-8xl font-bold text-white/10 mb-4">2026</div>
                <p className="text-sm uppercase tracking-[0.5em] text-luminous-cyan">Fondation</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: "Notre Mission", desc: "Démocratiser l'IA de pointe pour toutes les entreprises.", icon: Target },
            { title: "Notre Vision", desc: "Un monde où l'IA libère le potentiel créatif humain.", icon: Rocket },
            { title: "Nos Valeurs", desc: "Transparence, éthique et excellence technique.", icon: Heart },
            { title: "Notre Équipe", desc: "Des experts passionnés par l'innovation utile.", icon: Users },
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-white/5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-luminous-cyan/10 flex items-center justify-center text-luminous-cyan mx-auto mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass p-16 rounded-[3rem] border-white/10 text-center">
          <h2 className="text-4xl font-bold mb-8">Rejoignez la <span className="text-gradient">Révolution</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            Nous sommes toujours à la recherche de talents passionnés par l'IA et l'automatisation. Si vous voulez construire le futur avec nous, n'hésitez pas à nous contacter.
          </p>
          <button className="px-10 py-4 rounded-full bg-white text-deep-blue font-bold hover:bg-luminous-cyan hover:text-white transition-all">
            Voir nos opportunités
          </button>
        </div>
      </div>
    </div>
  );
};
