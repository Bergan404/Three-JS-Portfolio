import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Home = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
            >
                <div
                    className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                >
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF]'>Bergan</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I'm a Software Developer creating<br className='sm:block hidden' />
                            user interfaces and web applications
                        </p>
                    </div>
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        className='xl:flex-1 xl: md:h-[600px] h-[350px]'
                    >
                        <EarthCanvas />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Home;
