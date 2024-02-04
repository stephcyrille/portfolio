import React from 'react';

const features = [
  { name: 'Analyste Concepteur de SI', description: 'A partir d\'un besoin fonctionnel, je suis capable de monter un cahier de charge, \
          planifier un projet de développement applicatif (activités, coûts et temps) et le suivre jusqu\'a sa mise en production.' },
  { name: 'Développeur Web Fullstack', description: 'Ayant une très bonne connaissance du concept de programmation orienté objet et une \
          maitrise du langage de développement Python et de ses Frameworks pour le Web, la mise en place d\'API.' },
  { name: 'Développeur Mobile', description: "Grace à la puissance des outils tels que Flutter et Dart je créer des application performantes et multi\
          plateformes adaptées aux besoins utilisateurs." },
  { name: 'Intégrateur Technico-fonctionnel ERP', description: 'Sachant que le développeur est au service du métier, je continue de travailler \
          avec ces derniers afin de créer et d\'intégrer de nombreux modules opérationnels Odoo' },
  { name: 'Ingénieur de Data & Développeur de Système Décisionnel ', description: 'Avec une expertise dans la réalisation de solutions analytiques \
          avancées, alliant compétences en ingénierie des données et développement pour fournir des insights stratégiques.' },
  { name: 'Développeur d\'Algorithme de ML (IA)', description: 'Avec une forte compétence dans la création et l\'optimisation d\'algorithmes \
          avancés, exploitant l\'IA pour résoudre des problèmes complexes et générer des modèles prédictifs de haute précision.' },
]

const skill_resume = "Je possède plusieurs casquettes mais en en général je me considère comme un ingénieur sans vouloir \
                     trop m'attarder sur le titre, de par ma manière d'appréhender les problèmes à 360 dégrés ce qui \
                     me permet de me positionner à la place du client et en même temps du développeur."

export const Skills = () => {

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Compétences</h2>
          <p className="mt-4 text-gray-500 text-justify">
            { skill_resume }
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://images.unsplash.com/photo-1579882392185-581038fbc8c5?auto=format&fit=crop&q=80&w=3174&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://images.unsplash.com/photo-1590098563176-07884b06d7f7?auto=format&fit=crop&q=80&w=2667&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://images.unsplash.com/photo-1654604506255-977e359977c9?auto=format&fit=crop&q=80&w=3135&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://images.unsplash.com/photo-1698338956399-bf6a91f44de5?auto=format&fit=crop&q=80&w=2104&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}

