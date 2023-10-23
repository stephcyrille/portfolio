import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { faGithub, faLinkedin, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './hero.module.css';

export const Hero = () => {
  let github = { url: 'https://github.com/stephcyrille', title: 'Me trouver sur Github'};
  let linkedin = { url: 'https://linkedin.com/in/stephcyrille', title: 'Me trouver sur linkedin'};
  let twitter = { url: 'https://twitter.com/steph_cyrille', title: 'Laissez moi un tweet'};
  let mail = { url: 'mailto:stephcyril.sc@gmail.com', title: 'Envoyer moi un email'};

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" id="aboutMe">
      <div className="md:p-16 sm:p-8 min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible bg-white rounded-lg shadow-lg">
        <div className="w-full flex">
          <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-8 pb-24 lg:pb-16">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Stephane Cyrille MEBENGA ATANGA</h1>
            <p className="mt-1 text-lg font-semibold text-green-400">
              <TypeAnimation
                sequence={['Data Scientist', 1000, 
                        'Développeur Fullstack', 1000, 
                        'Développeur mobile', 1000, 
                        'Intégrateur ERP Odoo', 1000]}
                            //  Replacing previous Text
                wrapper="h4"
                repeat={Infinity}
              />
            </p>
              
            <hr className="my-5" />

            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Quelques mots à mon sujet</h2>

            <p className="mt-1 text-lg/8 text-justify">
              Motivé, ayant une bonne connaissance des méthodes de gestions de projets et un background en devéloppement conséquent, 
              mon expérience construite sur près de 6 ans dans les métier du développement web et mobile m'a permis de découvrir les 
              univers des progiciels de gestions intégrés et de développer mes connaissances dans ces domaines.<br />
              Je travail actuellement sur les projets de Datascience en Finance, Banque et Assurance afin 
              de mettre l'Intélligence artificiel au service de ces métiers. Je m'intéresse aussi aussi à la finance décentralisée 
              et à la rédaction des Smarts Contracts dans le but de développer un produit Financier dans une Blockchain. 
            </p>

            <div className='py-8'>
              <p className={`bg-teal-600 ${styles.logoSocial}`}>
                <a href={github.url} title={github.title} target='new'>
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={linkedin.url} title={linkedin.title} target='new'>
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={twitter.url} title={twitter.title} target='new'>
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={mail.url} title={mail.title}>
                <FontAwesomeIcon icon={faGoogle} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
