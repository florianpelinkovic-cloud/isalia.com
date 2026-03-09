import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "Comment l'IA va transformer le support client en 2026",
    excerpt: "Découvrez les tendances majeures de l'automatisation conversationnelle et comment vous y préparer.",
    date: "15 Mai 2026",
    author: "Florian P.",
    category: "Stratégie",
    image: "https://picsum.photos/seed/ai1/800/600"
  },
  {
    title: "5 Workflows à automatiser absolument dans votre PME",
    excerpt: "Gagnez 10 heures par semaine en automatisant ces processus simples mais chronophages.",
    date: "12 Mai 2026",
    author: "Sarah L.",
    category: "Guide",
    image: "https://picsum.photos/seed/ai2/800/600"
  },
  {
    title: "Sécurité des données et LLM : Ce qu'il faut savoir",
    excerpt: "Comment déployer des agents IA tout en garantissant une confidentialité totale de vos données métier.",
    date: "08 Mai 2026",
    author: "Marc D.",
    category: "Technique",
    image: "https://picsum.photos/seed/ai3/800/600"
  }
];

export const Blog = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Notre <span className="text-gradient">Blog IA</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Analyses, guides et actualités sur l'intelligence artificielle et l'automatisation business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[2.5rem] border-white/5 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-deep-blue/80 backdrop-blur-md text-[10px] font-bold text-luminous-cyan uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                  <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
                  <div className="flex items-center gap-1"><User size={14} /> {post.author}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-luminous-cyan transition-colors">{post.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{post.excerpt}</p>
                <Link to="#" className="text-sm font-bold flex items-center gap-2 text-luminous-cyan hover:gap-3 transition-all">
                  Lire l'article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
