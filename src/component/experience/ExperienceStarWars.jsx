import React, { useEffect } from 'react';
import bpop from '../../assets/images/logo_bp_aura.jpeg'
import basf from '../../assets/images/basf.svg'
import ewonga from '../../assets/images/logoEwonga.png'
import eneo from '../../assets/images/eneo.png'

export const ExperienceStarWarComponent = () => {

  var imgCards = [];
  var logos = [];
  var numbers = [];
  var titles = [];
  var descriptions = [];
  var circles = [];
  var lines = [];

  useEffect(() => {
    imgCards =  document.querySelectorAll(".img-card");
    logos = document.querySelectorAll(".logo");
    numbers = document.querySelectorAll(".number");
    titles = document.querySelectorAll(".title");
    descriptions = document.querySelectorAll(".description");
    circles = document.querySelectorAll(".circle");
    lines = document.querySelectorAll(".line");
  }, []);

  const onArrowRightClick = () => {
    changeRight(imgCards)
    changeRight(logos)
    changeRight(numbers)
    changeRight(titles)
    changeRight(descriptions)
    changeCircleRight(circles)
    changeLineRight(lines)
  }
  
  const onArrowLeftClick = () => {
    changeLeft(imgCards)
    changeLeft(logos)
    changeLeft(numbers)
    changeLeft(titles)
    changeLeft(descriptions)
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

  return (
    // Your JSX structure here
    // Make sure to use elements.imgCards, elements.logos, etc., instead of document.querySelectorAll
    <div className="card-wrapper">
      <div className="card">
          <div className="card-container">
              <div className="card-container-infos">
                  <div className="infos-title">
                      <div className="logos">
                          <img src={bpop} className="logo-1 logo active rounded-full" alt="logo-1" />
                          <img src={basf} className="logo-2 logo rounded-full" alt="logo-2" />
                          <img src={eneo} className="logo-3 logo rounded-full" alt="logo-3" />
                          <img src={ewonga} className="logo-4 logo rounded-full" alt="logo-4" />
                      </div>
                      <div className="titles">
                          <h2 className="title-1 title active">[Alternace] Datascientist</h2>
                          <h2 className="title-2 title ">[Stage Alterné] Data Analyst</h2>
                          <h2 className="title-3 title ">[CDD] Data Analyst</h2>
                          <h2 className="title-4 title ">[Consultant] Développeur Fullstact</h2>
                      </div>
                      <div className="descriptions">
                          <p className="description-1 description active">
                            <span>Banque Populaire AURA (en cours)</span><br />
                            <span>Corenc, France</span><br />
                            <span>De septembre 2023 - Septembre 2024 [12 mois]</span><br />
                          </p>
                          <p className="description-2 description ">
                            <span>BASF Division Agronomique</span><br />
                            <span>Ecully, France</span><br />
                            <span>Avril 2023 - Aout 2023 [5 mois]</span><br />
                          </p>
                          <p className="description-3 description ">
                            <span>ENEO</span><br />
                            <span>Douala, Cameroun</span><br />
                            <span>Mars 2022 - Aout 2022 [6 mois]</span><br />
                          </p>
                          <p className="description-4 description ">
                            <span>Ewonga Sarl</span><br />
                            <span>Douala, Cameroun</span><br />
                            <span>janvier 2018 - Janvier 2023 [6 ans]</span><br />
                          </p>
                      </div>
                  </div>
                  <div className="infos-year">
                      <h1>
                          <span>20</span>
                          <span className="numbers">
                              <span className="number-1 number active">24</span>
                              <span className="number-2 number">23</span>
                              <span className="number-3 number">22</span>
                              <span className="number-4 number">18</span>
                          </span>
                      </h1>
                  </div>
              </div>
              <div className="card-container-img">
                  <img src="https://images.unsplash.com/photo-1565347878219-552c839f1447?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-1 img-card active" alt="bg-1" />
                  <img src="https://plus.unsplash.com/premium_photo-1678988086482-2665e9394d73?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-2 img-card" alt="bg-2" />
                  <img src="https://images.unsplash.com/uploads/14114004461850596b57a/4855d5d2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-3 img-card" alt="bg-3" />
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-4 img-card" alt="bg-4" />
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
                  <div className="circle active"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
              </div>
          </div>
      </div>
    </div>
  );
};

