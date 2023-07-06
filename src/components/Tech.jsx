import React from "react";

import { BallCanvas, HtmllogoCanvas, ReactlogoCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-30 h-30 ' key={technology.name}>
          <ReactlogoCanvas icon={technology.icon} />
          {/* <img src={technology.url} alt="Languages" /> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
