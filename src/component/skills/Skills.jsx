import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export const Skills = () => {
  const { t } = useTranslation();

  const skill_resume = t('skills.skill_resume')
  const features = [
    { name: t('skills.skill1.title'), description: t('skills.skill1.content'), img: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: t('skills.skill2.title'), description: t('skills.skill2.content'), img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: t('skills.skill3.title'), description: t('skills.skill3.content'), img: "https://images.unsplash.com/photo-1605224307451-c86d7093f375?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: t('skills.skill4.title'), description: t('skills.skill4.content'), img: "https://plus.unsplash.com/premium_photo-1689700527514-0bb200cb945b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: t('skills.skill5.title'), description: t('skills.skill5.content'), img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: t('skills.skill6.title'), description: t('skills.skill6.content'), img: "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ]
  
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: 2 % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: false }}
    >
      <div className="bg-white dark:bg-gray-700" id='skills'>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">{t('navbar.skills')}</h2>
            <p className="mt-4 text-gray-500 text-justify dark:text-gray-300">
              { skill_resume }
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <img src={feature.img} alt={feature.name} className='w-124 pb-2 rounded-lg bg-gray-100 md:hidden lg:hidden' />
                  <dt className="font-medium text-gray-900 dark:text-gray-200 dark:font-semibold">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 text-justify dark:text-gray-300">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden lg:grid md:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 md:grid-cols-2 md:grid-rows-2 md:gap-8">
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
    </motion.div>
  )
}

