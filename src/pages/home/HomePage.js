import React from 'react'
import { Hero } from '../../component/Hero';
import { ExperienceStarWarComponent } from '../../component/experience/ExperienceStarWars';
import { Skills } from '../../component/skills/Skills';
import { Footer } from '../../component/footer/Footer';

export const HomePage = () => {

  return (
    <>
      <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-teal-300 max-h-auto dark:from-lime-200 dark:via-gray-600 dark:to-gray-600'>
          <Hero />
      </div>
      
      <div>
        <Skills />
        <ExperienceStarWarComponent />
      </div>

      <Footer />
    </>
  )
}
