import React from 'react'
import { ReactTyped } from "react-typed";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import me from '../../assets/images/moi.png'

export const Hero = () => {
  let github = { url: 'https://github.com/stephcyrille', title: 'Me trouver sur Github'};
  let linkedin = { url: 'https://linkedin.com/in/stephcyrille', title: 'Me trouver sur linkedin'};
  let twitter = { url: 'https://twitter.com/steph_cyrille', title: 'Laissez moi un tweet'};
  let mail = { url: 'mailto:stephcyril.sc@gmail.com', title: 'Envoyer moi un email'};

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 pt-28 lg:pt-36 lg:px-8 lg:pb-16" id="aboutMe">
      <div className="md:p-16 sm:p-8 lg:grid lg:grid-cols-2 lg:static lg:max-h-full lg:overflow-visible bg-white rounded-lg shadow-lg">
        <div className="">
          <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-8 pb-8 lg:pb-8">
            <h1 className="text-2xl lg:text-3xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Stephane Mebenga</h1>
            <p className="mt-1 text-lg font-semibold text-green-400">
                <ReactTyped
                  strings={['Data Scientist', 
                            'Développeur Fullstack', 
                            'Développeur mobile', 
                            'Intégrateur ERP Odoo']}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                />
            </p>
              
            <hr className="my-5" />

            <div className="p-6 flex justify-center md:hidden lg:hidden">
                <img className='' src={me} alt="Stephane Cyrille" width={'70%'}/>
            </div>

            <h2 className="text-xl lg:text-2xl md:text-2xl font-bold text-gray-900 tracking-tight text-center md:text-left lg:text-left pt-1 pb-5">Quelques mots à mon sujet</h2>

            <p className="mt-1 lg:text-lg/8 md:text-lg/8 text-justify text-sm" id="contact">
              Développeur passionné avec 6 ans d'expérience, spécialisé en gestion de projets et développement web/mobile. 
              Actuellement, j'utilises l'IA pour les métiers de la finance, la banque et l'assurance. 
              Mon parcours allie technicité et vision stratégique, explorant les opportunités émergentes 
              du secteur financier.
            </p>

            <div className="py-8 flex justify-center md:justify-start">
              <p className="bg-teal-500 inline-block p-3 lg:p-5 md:p-5 rounded-md">
                <a href={github.url} title={github.title} target="new" className="text-white mr-4 text-xl lg:text-3xl md:text-3xl hover:text-yellow-300 ease-in-out delay-200 duration-200">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={linkedin.url} title={linkedin.title} target="new" className="text-white mr-4 text-xl lg:text-3xl md:text-3xl hover:text-yellow-300 ease-in-out delay-200 duration-200">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={twitter.url} title={twitter.title} target="new" className="text-white mr-4 text-xl lg:text-3xl md:text-3xl hover:text-yellow-300 ease-in-out delay-200 duration-200">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={mail.url} title={mail.title} className="text-white text-xl lg:text-3xl md:text-3xl hover:text-yellow-300 ease-in-out delay-200 duration-200">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </p>
            </div>

          </div>
        </div>

        <div className="p-6 hidden md:flex lg:flex md:justify-center lg:justify-center">
          <img className='h-80 self-center' src={me} alt="Stephane Cyrille" />
        </div>
      </div>
    </div>
  )
}
