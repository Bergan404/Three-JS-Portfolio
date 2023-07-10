import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas, EarthPixelCanvas } from "./canvas";
import { SectionWrapper, BigSectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Laptop = () => {

    return (
        <>
            <div
                className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
            >
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='xl:flex-1 md:h-[1050px] h-[350px]'
                >
                    <EarthPixelCanvas />
                </motion.div>
            </div >
        </>
    );
};


export default Laptop;
