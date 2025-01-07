import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ( { index, title, icon } ) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={ fadeIn( "right", "spring", index * 0.5, 0.75 ) }
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={ {
          max: 45,
          scale: 1,
          speed: 450,
        } }
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          loading="lazy" 
          src={ icon }
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          { title }
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () =>
{
  return (
    <>
      <motion.div variants={ textVariant() }>
        <p className={ styles.sectionSubText }>Introduction</p>
        <h2 className={ styles.sectionHeadText }>Overview.</h2>
      </motion.div>

      <motion.p
        variants={ fadeIn( "", "", 0.1, 1 ) }
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Dynamic Full-Stack Developer with hands-on expertise in Web Development, AI-Powered Applications, and DevOps Practices, driven by a passion for creating scalable, efficient, and impactful solutions. Inspired by Bosch's legacy of innovation and commitment to advancing technology for a better future, I am eager to contribute my technical skills and collaborative mindset to drive impactful projects, enhance operational efficiency, and deliver exceptional value to customers worldwide.  
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        { services.map( ( service, index ) => (
          <ServiceCard key={ service.title } index={ index } { ...service } />
        ) ) }
      </div>
    </>
  );
};

export default SectionWrapper( About, "about" );