import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Network, Lock, Globe, Zap } from 'lucide-react';

const techs = [
  {
    title: "Large Language Models (LLM)",
    desc: "Nous utilisons les modèles les plus avancés du marché (GPT-4, Claude 3.5, Gemini 1.5) et les adaptons à votre contexte métier spécifique.",
    icon: Brain
  },
  {
    title: "RAG (Retrieval-Augmented Generation)",
    desc: "Vos agents accèdent en temps réel à vos propres bases de connaissances pour des réponses précises, sourcées et sans hallucinations.",
    icon: Network
  },
  {
    title: "Infrastructures Cloud & Edge",
    desc: "Déploiement hybride garantissant une latence minimale et une disponibilité mondiale via AWS, Azure ou Google Cloud.",
    icon: Globe
  },
  {
    title: "Sécurité & Confidentialité",
    desc: "Chiffrement de bout en bout et isolation des données. Nous pouvons déployer des modèles 'on-premise' pour une souveraineté totale.",
    icon: Lock
  },
  {
    title: "Intégrations API",
    desc: "Connexion native avec plus de 5000 applications via Zapier, Make ou des webhooks personnalisés pour un écosystème unifié.",
    icon: Cpu
  },
  {
    title: "Apprentissage Continu",
    desc: "Nos systèmes s'améliorent automatiquement grâce au feedback utilisateur et à l'analyse des interactions passées.",
    icon: Zap
  }
];

export const Technologie = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">L'Excellence <span className="text-gradient">Technologique</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Nous ne nous contentons pas d'utiliser l'IA, nous bâtissons des architectures robustes et sécurisées pour le futur de votre entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2rem] border-white/5 group hover:bg-white/5 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-luminous-cyan/10 flex items-center justify-center text-luminous-cyan mb-8 group-hover:scale-110 transition-transform glow-cyan">
                <tech.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass p-12 rounded-[3rem] border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-violet/10 to-transparent -z-10" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Une Stack <span className="text-gradient">Moderne</span></h2>
              <p className="text-white/60">
                Notre pile technologique est sélectionnée pour sa performance, sa sécurité et sa capacité à évoluer. Nous restons à la pointe de l'innovation pour vous offrir le meilleur de l'IA.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Python / FastAPI", "React / Next.js", "PostgreSQL / Pinecone", "Docker / Kubernetes", "OpenAI / Anthropic", "LangChain / AutoGPT"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-luminous-cyan" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video glass rounded-2xl border-white/10 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luminous-cyan/10 via-transparent to-transparent" />
               <div className="text-center space-y-4">
                 <div className="text-6xl font-bold text-gradient">99.9%</div>
                 <p className="text-xs uppercase tracking-[0.3em] text-white/40">Uptime Infrastructure</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
