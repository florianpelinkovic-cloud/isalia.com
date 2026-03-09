import React from 'react';

export const MentionsLegales = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] border-white/5">
        <h1 className="text-4xl font-bold mb-12">Mentions <span className="text-gradient">Légales</span></h1>
        
        <div className="space-y-12 text-white/70">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
            <p className="leading-relaxed">
              Le présent site est édité par Isalia Studio, Société par Actions Simplifiée (SAS) au capital de 10 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789.<br />
              Siège social : 123 Avenue de l'IA, 75001 Paris, France.<br />
              Directeur de la publication : Florian Pelinkovic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Hébergement</h2>
            <p className="leading-relaxed">
              Le site est hébergé par Google Cloud Platform (GCP).<br />
              Adresse : 8 rue de Londres, 75009 Paris, France.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
            <p className="leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, logos, animations, code source) est la propriété exclusive d'Isalia Studio ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Protection des données (RGPD)</h2>
            <p className="leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous à privacy@isalia.studio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
            <p className="leading-relaxed">
              Ce site utilise des cookies techniques nécessaires au bon fonctionnement et des cookies d'analyse d'audience anonymes. Vous pouvez configurer vos préférences via les paramètres de votre navigateur.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
