import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Qu'est-ce qu'un agent IA exactement ?",
    a: "Un agent IA est un système autonome capable de comprendre des instructions complexes, de raisonner, d'utiliser des outils (comme vos logiciels internes) et d'accomplir des tâches de manière indépendante pour atteindre un objectif donné."
  },
  {
    q: "Combien de temps faut-il pour déployer une solution ?",
    a: "Pour un projet standard, les premiers résultats sont visibles en 2 semaines. Un déploiement complet prend généralement entre 4 et 8 semaines selon la complexité des intégrations."
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Absolument. Nous utilisons des protocoles de sécurité de niveau bancaire. Vos données ne sont jamais utilisées pour entraîner des modèles publics et peuvent être stockées sur vos propres serveurs si nécessaire."
  },
  {
    q: "L'IA va-t-elle remplacer mes employés ?",
    a: "L'IA est conçue pour augmenter l'humain, pas le remplacer. Elle prend en charge les tâches répétitives et chronophages, permettant à vos équipes de se concentrer sur des missions à haute valeur ajoutée et créatives."
  },
  {
    q: "Quels sont les coûts de maintenance ?",
    a: "Nos plans incluent la maintenance, les mises à jour de modèles et l'optimisation continue. Il n'y a pas de frais cachés, tout est transparent dès le départ."
  },
  {
    q: "Proposez-vous une formation pour nos équipes ?",
    a: "Oui, chaque déploiement s'accompagne d'une phase de formation complète pour garantir que vos collaborateurs tirent le meilleur parti de leurs nouveaux outils IA."
  }
];

interface FAQItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a, isOpen, onClick }) => (
  <div className="glass rounded-2xl border-white/5 overflow-hidden transition-all">
    <button 
      onClick={onClick}
      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
    >
      <span className="font-bold text-lg">{q}</span>
      {isOpen ? <Minus className="text-luminous-cyan" /> : <Plus className="text-luminous-cyan" />}
    </button>
    {isOpen && (
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        className="px-8 pb-6 text-white/60 leading-relaxed"
      >
        {a}
      </motion.div>
    )}
  </div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Questions <span className="text-gradient">Fréquentes</span></h1>
          <p className="text-white/60 text-lg">
            Tout ce que vous devez savoir sur l'automatisation IA et notre accompagnement.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              q={faq.q} 
              a={faq.a} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-[2.5rem] border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Vous avez d'autres questions ?</h3>
          <p className="text-white/60 mb-8">Notre équipe est là pour vous répondre personnellement.</p>
          <button className="px-8 py-4 rounded-full bg-luminous-cyan text-deep-blue font-bold hover:bg-white transition-all">
            Nous contacter directement
          </button>
        </div>
      </div>
    </div>
  );
};
