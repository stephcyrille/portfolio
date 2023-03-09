import React from 'react';
import styles from './tools.module.css';
import aws from '../../assets/images/languages/aws.png';
import python from '../../assets/images/languages/python.png';
import django from '../../assets/images/languages/django.png';
import odoo from '../../assets/images/languages/odoo.png';
import nodejs from '../../assets/images/languages/nodejs.png';
import nextjs from '../../assets/images/languages/nextjs.png';
import reactjs from '../../assets/images/languages/react.png';
import oracle from '../../assets/images/languages/oracle.png';
import office from '../../assets/images/languages/office.png';
import powerbi from '../../assets/images/languages/power_bi.png';


export const Tools = () => {
  return (
    <div className={ styles.sectionTools }>
      <div className='row'>
        <div className='col-md-12 col-12 mb-5'>
          <h3 className="mt-0">Outils</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 col-4 mb-3'><img src={python} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={django} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={odoo} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={nodejs} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={nextjs} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={reactjs} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={oracle} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={office} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={powerbi} alt={''} className='img-fluid' /></div>
        <div className='col-md-3 col-4 mb-3'><img src={aws} alt={''} className='img-fluid' /></div>
      </div>
      <span id='tools' />
    </div>
  )
}
