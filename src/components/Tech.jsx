import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { logo } from "../assets";


const cssRules = [];

for (let i = 1; i <= 100; i++) {
  const cssRule = `.circle-arround-two-${i} {
    cursor: pointer;
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    top: 210px;
    left: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
  }`;

  cssRules.push(cssRule);
}

const styleElement = document.createElement('style');
styleElement.innerHTML = cssRules.join('\n');
document.head.appendChild(styleElement);

const Tech = () => {
  return (
    <div className="slidercircle">
      <div className="circle-one">
        <div className="circle-arround-one"></div>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10 circle-two'>
        {technologies.map((technology, index) => (
          // <div className='w-28 h-28 avatar' key={technology.name}>
          //   <img src={technology.url} alt="Languages" />
          // </div>
          <div className={`circle-arround-two-${index + 1} anima`} key={technology.name}>
            <img src={technology.url} alt="Languages" />
          </div>
        ))}
      </div>
      <div className="circle-middle">
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
