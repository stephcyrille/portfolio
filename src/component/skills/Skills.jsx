import React from 'react';
// Import react-circular-progressbar module and styles
import "react-circular-progressbar/dist/styles.css";
import { CircularProgress } from '../gauge/CircularProgress';
import { LanguageLine } from '../LanguageLine/LanguageLine';
import styles from './skills.module.css';

const features = [
  { name: 'Analyste Concepteur de SI', description: 'A partir d\'un besoin fonctionnel, je suis capable de monter un cahier de charge, \
          planifier un projet de développement applicatif (activités, coûts et temps) et le suivre jusqu\'a sa mise en production.' },
  { name: 'Développeur Web Fullstack', description: 'Ayant une très bonne connaissance du concept de programmation orienté objet et une \
          maitrise du langage de développement Python et de ses Frameworks pour le Web, la mise en place d\'API et l\'implementation \
          du design pattern MVC rentre parfaitement dans mes cordes' },
  { name: 'Développeur Mobile', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Intégrateur Technico-fonctionnel ERP', description: 'Hand sanded and finished with natural oil' },
  { name: 'Ingénieur de Data & Développeur de Système Décisionnel ', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Développeur d\'Algorithme de ML (IA)', description: 'Made from natural materials. Grain and color vary with each item.' },
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

