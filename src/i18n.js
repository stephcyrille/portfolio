import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detectBrowserLanguage from 'detect-browser-language'

console.log("==============", detectBrowserLanguage())
i18n.use(initReactI18next).init({
  lng: detectBrowserLanguage().split('-')[0],
  fallbackLng: "en",
  interpolation: {
      escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'My personal online portfolio',
        french: "French",
        english: "English",
        navbar: {
          home: "Home",
          about_me: "About me",
          skills: "Skills",
          experience: "Experience",
          education: "Education",
          f1Link: "F1 Predictor",
          ressources: {
            menu: "Resources",
            ask_for_quotation: { 
              title: "Ask for quotation",
              text: "You want to realize a dev project ?"
            },
            my_projects: {
              title: "My projects",
              text: "You cand find all my wbe & mobile dev projects, and also data science projects"
            },
            my_resources: {
              title: "Some resources",
              text: "You can find all the documents and customs librairies who can help you there"
            },
            f1_predictor: {
              title: "F1 Predictor",
              text: "It is one of the project in which I work now, you can see the progress if you would like"}
              ,
            blog: {
              title: "Blog",
                text: "This section will be available soon"
            },
            call_to_action: {
              movie: "My youtube channel",
              contact: "Call me"
            }
          }
        },
        social_title: {
          github: 'Find me on Github',
          linkedin: 'Find me on LinkedIn',
          twitter: 'Post me a tweet',
          mail: 'Send me an email'
        },
        hero: {
          role1: 'Data Scientist',
          role2: 'Fullstack developer',
          role3: 'Mobile developer',
          role4: 'Odoo ERP Integretor',
          summary: {
            title: 'Summary',
            content: 'Passionate developer with more than 6 years of experience, specializing in project management and web/mobile development. Currently, I am using AI for finance, banking, and insurance industries. My journey combines technical expertise and strategic vision, exploring emerging opportunities in the financial sector.'
          }
        },
        skills: {
          skill_resume: "I wear many hats but overall I consider myself an engineer without dwelling too much on the title, due to my approach to understanding problems from all angles, which allows me to position myself from the perspective of the client and at the same time of the developer.",
          skill1: {
            title: "Systems Analyst/Designer",
            content: "Starting from a functional requirement, I am able to create a specification document, plan an application development project (activities, costs, and time), and follow it through to production."
          },
          skill2: {
            title: "Fullstack Developer",
            content: "With a strong understanding of object-oriented programming concepts and proficiency in Python development language and its frameworks for the web, including API implementation."
          },
          skill3: {
            title: "Mobile Developer",
            content: "Leveraging the power of tools such as Flutter and Dart, I create high-performance, cross-platform applications tailored to user needs."
          },
          skill4: {
            title: "ERP Technical-Functional Integrator",
            content: "Recognizing that the developer serves the business, I continue to work with stakeholders to create and integrate numerous operational modules in Odoo."
          },
          skill5: {
            title: "Data Engineer & Business Intelligence Developer",
            content: "With expertise in delivering advanced analytical solutions, combining skills in data engineering and development to provide strategic insights."
          },
          skill6: {
            title: "Machine Learning Algorithm Developer (AI)",
            content: "Proficient in creating and optimizing advanced algorithms, leveraging AI to solve complex problems and generate high-precision predictive models."
          }
        },
        experience:{
          apprenticeship: 'Apprenticeship',
          intership_alternation: 'Internship Alternation'
        },
        cameroon: 'Cameroon',
        in_progress: 'in progress',
        january: 'january',
        march: 'march',
        april: 'april',
        august: 'august',
        september: 'september',
        month: 'month',
        year: 'year',
        footer:{
          moto: "I always respond if you need my services",
          all_right: "All rights reserved"
        }
      }
    },
    fr: {
      translation: {
        title: 'Mon portfolio personnek en ligne',
        french: "Français",
        english: "Anglais",
        navbar: {
          home: "Accueil",
          about_me: "A propos de moi",
          skills: "Compétences",
          experience: "Expérience",
          education: "Formation",
          f1Link: "F1 Predictor",
          ressources: {
            menu: "Réssources",
            ask_for_quotation: { 
              title: "Demander un dévis",
              text: "Vous avez besoin de réaliser un devis pour vos projet de Dev ?"
            },
            my_projects: {
              title: "Mes projets",
              text: "Retrouvez tous mes projets de développemnt web / mobile et Data Science."
            },
            my_resources: {
              title: "Mes ressources",
              text: "Retrouvez tous les documents dont vous avez besoins et librairies ici."
            },
            f1_predictor: {
              title: "Project actuel sur lequel je bosses. Venez jetter un coup d'oeil!",
              text: "Project actuel sur lequel je bosses. Venez jetter un coup d'oeil!"
            }
              ,
            blog: {
              title: "Blog",
                text: "Bientôt je ferais des publications sur des sujets intéressants"
            },
            call_to_action: {
              movie: "Mes videos Youtube",
              contact: "Contactez moi"
            }
          }
        },
        social_title: {
          github: 'Me trouver sur Github',
          linkedin: 'Me trouver sur linkedin',
          twitter: 'Laissez moi un tweet',
          mail: 'Envoyer moi un email'
        },
        hero: {
          role1: 'Data Scientist',
          role2: 'Développeur Fullstack',
          role3: 'Développeur mobile',
          role4: 'Intégrateur ERP Odoo',
          summary: {
            title: 'Quelques mots à mon sujet',
            content: "Développeur passionné avec plus de 6 ans d'expérience, spécialisé en gestion de projets et développement web/mobile. Actuellement, j'utilises l'IA pour les métiers de la finance, la banque et l'assurance. Mon parcours allie technicité et vision stratégique, explorant les opportunités émergentes du secteur financier."
          }
        },
        skills: {
          skill_resume: "Je possède plusieurs casquettes mais en général je me considère comme un ingénieur sans vouloir trop m'attarder sur le titre, de par ma manière d'appréhender les problèmes à 360 dégrés ce qui me permet de me positionner à la place du client et en même temps du développeur.",
          skill1: {
            title: 'Analyste Concepteur de SI',
            content: 'A partir d\'un besoin fonctionnel, je suis capable de monter un cahier de charge, planifier un projet de développement applicatif (activités, coûts et temps) et le suivre jusqu\'a sa mise en production.'
          },
          skill2: {
            title: 'Développeur Web Fullstack',
            content: 'Ayant une très bonne connaissance du concept de programmation orienté objet et une  maitrise du langage de développement Python et de ses Frameworks pour le Web, la mise en place d\'API.'
          },
          skill3: {
            title: 'Développeur Mobile',
            content: 'Grace à la puissance des outils tels que Flutter et Dart je crée des applications performantes et multi plateformes adaptées aux besoins utilisateurs.'
          },
          skill4: {
            title: 'Intégrateur Technico-fonctionnel ERP',
            content: 'Sachant que le développeur est au service du métier, je continue de travailler avec ces derniers afin de créer et d\'intégrer de nombreux modules opérationnels Odoo'
          },
          skill5: {
            title: 'Ingénieur de Data & Développeur de Système Décisionnel',
            content: 'Avec une expertise dans la réalisation de solutions analytiques avancées, alliant compétences en ingénierie des données et développement pour fournir des insights stratégiques.'
          },
          skill6: {
            title: 'Développeur d\'Algorithme de ML (IA)',
            content: 'Avec une forte compétence dans la création et l\'optimisation d\'algorithmes avancés, exploitant l\'IA pour résoudre des problèmes complexes et générer des modèles prédictifs de haute précision.'
          }
        },
        experience:{
          apprenticeship: 'Alternance',
          intership_alternation: 'Stage alterné'
        },
        cameroon: 'Cameroun',
        in_progress: 'en cours',
        january: 'janvier',
        march: 'mars',
        april: 'avril',
        august: 'aout',
        september: 'septembre',
        month: 'mois',
        year: 'an',
        footer:{
          moto: "Je répond toujours présent si vous avez besoin de mes services",
          all_right: "Tous les droits reservés"
        }
      }
    },
  },
  });;

export default i18n;