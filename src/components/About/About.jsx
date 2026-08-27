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
      I work at the intersection of Data, Analytics, and AI, with experience in Business Intelligence, data analysis, Generative AI, and Agentic AI.
<br></br>
<br></br>
My technical toolkit includes Power BI, Tableau, SQL, Python, DAX, and Excel, along with technologies and concepts around RAG, Knowledge Graphs, Semantic Layers, APIs, and cloud infrastructure.
<br></br>
<br></br>
I enjoy solving complex problems, learning new technologies, and finding practical ways to make data more accessible, intelligent, and useful.  
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