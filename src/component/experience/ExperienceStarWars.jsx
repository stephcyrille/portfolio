import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import bpop from '../../assets/images/logo_bp_aura.jpeg'
import basf from '../../assets/images/basf.svg'
import ewonga from '../../assets/images/logoEwonga.png'
import eneo from '../../assets/images/eneo.png'

export const ExperienceStarWarComponent = () => {
  const { t } = useTranslation();

  const refImgCards = useRef([]);
  const refLogos = useRef([]);
  const refTitles = useRef([]);
  const refNumbers = useRef([]);
  const refDescriptions = useRef([]);

  useEffect(() => {

  }, []);

  const onArrowRightClick = () => {
    const elementImCardList = refImgCards.current;
    const elementLogoList = refLogos.current;
    const elementTitleList = refTitles.current;
    const elementDescriptionList = refDescriptions.current;
    const elementNumbersList = refNumbers.current;
    // console.log("........>>>>>>>>>>>>>>>", elementImCardList)
    const circles = document.querySelectorAll(".circle");
    const lines = document.querySelectorAll(".line");

    changeRight(elementImCardList)
    changeRight(elementLogoList)
    changeRight(elementTitleList)
    changeRight(elementDescriptionList)
    changeRight(elementNumbersList)
    changeCircleRight(circles)
    changeLineRight(lines)
  }
  
  const onArrowLeftClick = () => {
    const elementImCardList = refImgCards.current;
    const elementLogoList = refLogos.current;
    const elementTitleList = refTitles.current;
    const elementDescriptionList = refDescriptions.current;
    const elementNumbersList = refNumbers.current;
    // console.log("........>>>>>>>>>>>>>>>", elementImCardList)
    const circles = document.querySelectorAll(".circle");
    const lines = document.querySelectorAll(".line");
    

    changeLeft(elementImCardList)
    changeLeft(elementLogoList)
    changeLeft(elementTitleList)
    changeLeft(elementDescriptionList)
    changeLeft(elementNumbersList)
    changeCircleLeft(circles)
    changeLineLeft(lines)
  }
  
  const changeRight = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        var index = i + 1;
      }
    }
    if (index > arr.length - 1) {
      index = 0;
    }
    let next = arr[index];
    next.classList.add("active");
  };
  
  const changeLeft = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        var index = i - 1;
      }
    }
    if (index < 0) {
      index = arr.length - 1;
    }
    let next = arr[index];
    next.classList.add("active");
  };
  
  const changeCircleRight = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el.classList.contains("active")) {
        var index = i + 1;
      }
    }
    if (index > arr.length - 1) {
      index = 0;
    }
    let next = arr[index];
    next.classList.add("active");
  };
  
  const changeCircleLeft = (arr) => {
    let tab = []
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el.classList.contains("active")) {
        tab.push(el)
      }
    }
    if (tab.length >= 2 ) {
      tab[tab.length - 1].classList.remove("active")
    }
  };
  
  const changeLineRight = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[0].classList.contains("active")) {
        arr[0].classList.add("active")
        return
      }
      const el = arr[i];
      if (el.classList.contains("active")) {
        var index = i + 1;
      }
    }
    if (index > arr.length - 1) {
      index = 0;
    }
    let next = arr[index];
    next.classList.add("active");
  };
  
  const changeLineLeft = (arr) => {
    let tab = []
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el.classList.contains("active")) {
        tab.push(el)
      }
    }
    if (tab.length >= 1 ) {
      tab[tab.length - 1].classList.remove("active")
    }
  };

  let logoListObject = [
    {
      id: 1,
      img: bpop,
      className: 'logo-1 logo active rounded-full',
      alt: 'logo-1'
    },
    {
      id: 2,
      img: basf,
      className: 'logo-2 logo rounded-full',
      alt: 'logo-2'
    },
    {
      id: 3,
      img: eneo,
      className: 'logo-3 logo rounded-full',
      alt: 'logo-3'
    },
    {
      id: 4,
      img: ewonga,
      className: 'logo-4 logo rounded-full',
      alt: 'logo-4'
    },
  ]

  let titleListElement = [
    {
      id: 1,
      className: 'title-1 title active',
      value: `[${t('experience.apprenticeship')}] Datascientist`,
    },
    {
      id: 2,
      className: 'title-2 title',
      value: `[${t('intership_alternation')}] Data Analyst`
    },
    {
      id: 3,
      className: 'title-3 title',
      value: '[CDD] Data Analyst'
    },
    {
      id: 4,
      className: 'title-4 title',
      value: `[Consultant] ${t('skills.skill2.title')}`
    },
  ]

  let descriptionListElement = [
    {
      id: 1,
      line_1: 'Banque Populaire AURA (en cours)',
      line_2: 'Corenc, France',
      line_3: `${t('september')} 2023 - ${t('september')} 2024 [12 ${t('month')}]`,
      className: 'description-1 description active',
    },
    {
      id: 2,
      line_1: 'BASF Division Agronomique',
      line_2: 'Ecully, France',
      line_3: `${t('april')} 2023 - ${t('august')} 2023 [5 ${t('month')}]`,
      className: 'description-2 description',
    },
    {
      id: 3,
      line_1: 'ENEO',
      line_2: `Douala ${t('cameroon')}`,
      line_3: `${t('march')} 2022 - ${t('august')} 2022 [6 ${t('month')}]`,
      className: 'description-3 description',
    },
    {
      id: 4,
      line_1: 'Ewonga Sarl',
      line_2: `Douala, ${t('cameroon')}`,
      line_3: `${t('january')} 2018 - ${t('january')} 2023 [6 ${t('year')}]`,
      className: 'description-4 description',
    },
  ]

  let numberListElement = [
    {
      id: 1,
      className: 'number-1 number active',
      value: '24'
    },
    {
      id: 2,
      className: 'number-2 number',
      value: '23'
    },
    {
      id: 3,
      className: 'number-3 number',
      value: '22'
    },
    {
      id: 4,
      className: 'number-4 number',
      value: '18'
    },
  ]

  let imageListObject = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1565347878219-552c839f1447?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "bg-1 img-card active",
      alt: "bg-1"
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1678988086482-2665e9394d73?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "bg-2 img-card",
      alt: "bg-2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/uploads/14114004461850596b57a/4855d5d2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "bg-3 img-card",
      alt: "bg-3"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "bg-4 img-card",
      alt: "bg-4"
    },
  ]

  return (
    // Your JSX structure here
    // Make sure to use elements.imgCards, elements.logos, etc., instead of document.querySelectorAll
    <div className="card-wrapper" id='experience'>
      <div className="card">
          <div className="card-container">
              <div className="card-container-infos">
                  <div className="infos-title">
                      <div className="logos">
                        {logoListObject.map(item => (
                          <img key={item.id} ref={(element) => refLogos.current.push(element)} src={item.img} alt={item.alt} className={item.className} />
                        ))}
                      </div>
                      <div className="titles">
                        {titleListElement.map(item => (
                          <h2 key={item.id} ref={(element) => refTitles.current.push(element)} className={item.className}>{item.value}</h2>
                        ))}
                      </div>
                      <div className="descriptions">
                        {descriptionListElement.map(item => (
                          <p key={item.id} ref={(element) => refDescriptions.current.push(element)} className={item.className}>
                            <span>{item.line_1}</span><br />
                            <span>{item.line_2}</span><br />
                            <span>{item.line_3}</span><br />
                          </p>
                        ))}
                      </div>
                  </div>
                  <div className="infos-year">
                      <h1>
                          <span>20</span>
                          <span className="numbers">
                            {numberListElement.map(item => (
                              <span key={item.id} ref={(element) => refNumbers.current.push(element)} className={item.className}>{item.value}</span>
                            ))}
                          </span>
                      </h1>
                  </div>
              </div>
              <div className="card-container-img">
                {imageListObject.map(item => (
                  <img key={item.id} ref={(element) => refImgCards.current.push(element)} src={item.src} alt={item.alt} className={item.className} />
                ))}
              </div>
          </div>
          <div className="card-evolution">
              <div className="card-evolution-arrow">
                  <img 
                    src="https://star-wars-lime.vercel.app/assets/arrow-left.png" 
                    className="arrow-left"
                     alt="arrow-left"
                     onClick={onArrowLeftClick}
                  />
                  <img 
                    src="https://star-wars-lime.vercel.app/assets/arrow-right.png" 
                    className="arrow-right" 
                    alt="arrow-right"
                    onClick={onArrowRightClick}
                  />
              </div>
              <div className="circles">
                  <div className="circle active" />
                  <div className="line" />
                  <div className="circle" />
                  <div className="line" />
                  <div className="circle" />
                  <div className="line" />
                  <div className="circle" />
                  <div className="line" />
                  <div className="circle" />
              </div>
          </div>
      </div>
    </div>
  );
};

