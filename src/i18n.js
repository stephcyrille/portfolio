import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
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
          about_me: "About me",
          skills: "Skills",
          experience: "Experience",
          education: "Education",
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
        }
      }
    },
    fr: {
      translation: {
        title: 'Mon portfolio personnek en ligne',
        french: "Français",
        english: "Anglais",
        navbar: {
          about_me: "A propos de moi",
          skills: "Compétences",
          experience: "Expérience",
          education: "Formation",
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
        }
      }
    },
  },
  });;

export default i18n;