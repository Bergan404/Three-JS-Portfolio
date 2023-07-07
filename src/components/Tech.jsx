import React from "react";

import { SectionWrapper, BigSectionWrapper } from "../hoc";
import { technologies, frontEnd, backEnd } from "../constants";
import { bluePlanet, logo, redPlanet } from "../assets";


const cssRules = [];

for (let i = 1; i <= 20; i++) {
  const cssRule = `.circle-arround-two-${i} {
    cursor: pointer;
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    top: 210px;
    left: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
  }`;

  cssRules.push(cssRule);
}

const styleElement = document.createElement('style');
styleElement.innerHTML = cssRules.join('\n');
document.head.appendChild(styleElement);

const Tech = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="slidercircle">
          <div className="circle-one">
            <div className="circle-arround-one"></div>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-10 circle-two'>
            {frontEnd.map((frontend, index) => (
              <div className={`circle-arround-two-${index + 1} anima`} key={frontend.name}>
                <img className="circle-icon" src={frontend.url} alt="Frontend Languages" />
              </div>
            ))}
          </div>
          <div className="circle-middle-blue">
            <img src={bluePlanet} alt='logo' />
          </div>
        </div>
        <div className="slidercircle">
          <div className="circle-one">
            <div className="circle-arround-one"></div>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-10 circle-two'>
            {backEnd.map((backend, index) => (
              <div className={`circle-arround-two-${index + 1} anima`} key={backend.name}>
                <img className="circle-icon" src={backend.url} alt="Backend Languages" />
              </div>
            ))}
          </div>
          <div className="circle-middle-red">
            <img src={redPlanet} alt='logo' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BigSectionWrapper(Tech, "");
