import React, { useState, useEffect } from 'react';

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
                          <img src="https://star-wars-lime.vercel.app/assets/logo-1.png" className="logo-1 logo active" alt="logo-1" />
                          <img src="https://star-wars-lime.vercel.app/assets/logo-2.png" className="logo-2 logo " alt="logo-2" />
                          <img src="https://star-wars-lime.vercel.app/assets/logo-3.png" className="logo-3 logo " alt="logo-3" />
                      </div>
                      <div className="titles">
                          <h2 className="title-1 title active">Un nouvel espoir</h2>
                          <h2 className="title-2 title ">L'empire contre-attaque</h2>
                          <h2 className="title-3 title ">Le retour du Jedi</h2>
                      </div>
                      <div className="descriptions">
                          <p className="description-1 description active">
                              C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon
                              l'ordre chronologique de l'histoire.
                          </p>
                          <p className="description-2 description ">
                              C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l'ordre chronologique de l'histoire.
                          </p>
                          <p className="description-3 description ">
                              Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l'Alliance rebelle.
                          </p>
                      </div>
                  </div>
                  <div className="infos-year">
                      <h1>
                          <span>19</span>
                          <span className="numbers">
                              <span className="number-1 number active">77</span>
                              <span className="number-2 number">80</span>
                              <span className="number-3 number">83</span>
                          </span>
                      </h1>
                  </div>
              </div>
              <div className="card-container-img">
                  <img src="https://star-wars-lime.vercel.app/assets/bg-1.png" className="bg-1 img-card active" alt="bg-1" />
                  <img src="https://star-wars-lime.vercel.app/assets/bg-2.png" className="bg-2 img-card" alt="bg-2" />
                  <img src="https://star-wars-lime.vercel.app/assets/bg-3.png" className="bg-3 img-card" alt="bg-3" />
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

