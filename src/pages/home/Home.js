import React from 'react'
import styles from './home.module.css';
import { AboutMe } from '../../component/AboutMe';
import { Skills } from '../../component/skills/Skills';
import { Experience } from '../../component/experience/Experience';
import { Education } from '../../component/education/Education';
import { Certification } from '../../component/certification/Certification';
import { Tools } from '../../component/tools/Tools';

export const Home = (props) => {

  return (
    // <div className="py-4 px-3">
    <div>
      <div className={ styles.wrapper }>
        <div className={ styles.blockWrapperImage }>
          <div className={ styles.backgroundCircleEffect }>
            <div className={ styles.blockBckgImage } />
          </div>
        </div>
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Certification />
        <Tools />
      </div>
    </div>
  )
}
