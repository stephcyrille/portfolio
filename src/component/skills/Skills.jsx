import React from 'react';
// Import react-circular-progressbar module and styles
import "react-circular-progressbar/dist/styles.css";
import { CircularProgress } from '../gauge/CircularProgress';
import { LanguageLine } from '../LanguageLine/LanguageLine';
import styles from './skills.module.css';


export const Skills = () => {

  return (
    <div className={ styles.sectionSkills }>
      <div className='row'>
        <div className='col-md-6 col-12 mb-5'>
          <h3 className="mt-0">Programmation</h3>
          <div className='row'>
            <LanguageLine language='Python' />
            <LanguageLine language='R' />
            <LanguageLine language='Javascript' />
            <LanguageLine language='Typescript' />
            <LanguageLine language='DART' />
            <LanguageLine language='SQL' />
            <LanguageLine language='VBA' />
          </div>
        </div>
        <div className='col-md-6 mb-2'>
          <h3 className="mt-0">Mes qualités</h3>
          <div className='row'>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Discipliné"} percent={90} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Multitâche"} percent={80} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Ponctuel"} percent={80} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Sens de l'initiative"} percent={90} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Sens Analytique"} percent={85} />
            </div>
          </div>
        </div>
        <span id="experience" />
      </div>
    </div>
  )
}
