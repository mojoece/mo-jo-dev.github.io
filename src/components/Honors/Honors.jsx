import React from "react";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Microsoft, Dell } from "../../assets";
import { Link } from "react-router-dom";
import Certificate from "./Certificate";

const Honors = () =>
{
    return (
        <>
            <div>
                <p className={ `${styles.sectionSubText} ` }>Achievements</p>
                <h2 className={ `${styles.sectionHeadText}` }>Honors & awards.</h2>
            </div>

            <div className='w-full flex'>
                <p
                    variants={ fadeIn( "", "", 0.1, 1 ) }
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    This section highlights key accomplishments that demonstrate your expertise and dedication. Each achievement is a testament to your ability to overcome challenges and drive results.
                </p>
            </div>
            <motion.div variants={ textVariant() } className="bg-tertiary  p-5 rounded-2xl mt-4 ">
                <div className="mb-4 flex gap-2 items-center">
                    <p className={ `${styles.heroSubText} text-white   font-bold` }>CodeRush 2023 by Algo University</p>
                    <div className='w-fit text-[15px] font-small green-pink-gradient p-[1px] rounded-[16px] shadow-card'>
                        <Link to="https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/20/Mohit%20Joshi.png" target="_blank">
                            <button className='bg-tertiary rounded-[16px] py-1 px-3  flex gap-2  items-center justify-center h-[36px]'  >
                                View
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between flex-col-reverse items-center gap-4 md:flex-row " >
                    <div className="max-w-[100%] md:max-w-[48%]">
                        <p className=" text-secondary text-[16px]" >Participated in CodeRush 2023, a programming contest organized by DevCans - Coding Club of NIT Sikkim in collaboration with AlgoUniversity. The competition, exclusive to 2nd and 3rd-year students, provided a platform to hone programming skills and compete for cash prizes, with a total prize pool of 30,000 INR. Showcased strong problem-solving abilities and competitive programming expertise within the college community.</p>
                        <p className="mt-3 text-[16px] font-semibold">Achievements:</p>
                        <ul className='mt-5 list-disc ml-5 space-y-2'>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'> 
                                Secured an institute rank of 19th and achieved 2nd rank among my year.
                            </li>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'>
                                Got Certificates & goodies from Algo University due to the rank
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-[100%] md:max-w-[48%]">
                        <img loading="lazy"  src={ Microsoft } className="rounded-2xl"/>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={ textVariant() } className="bg-tertiary  p-5 rounded-2xl mt-4 ">
                <div className="mb-4 flex gap-2 items-center">
                    <p className={ `${styles.heroSubText} text-white   font-bold` }>Dark Pattern Busters Hackathon 2023</p>
                    <div className='w-fit text-[15px] font-small green-pink-gradient p-[1px] rounded-[16px] shadow-card'>
                        <Link to="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1971567" target="_blank">
                            <button className='bg-tertiary rounded-[16px] py-1 px-3  flex gap-2  items-center justify-center h-[36px]'  >
                                View
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between flex-col-reverse items-center gap-4 md:flex-row " >
                    <div className="max-w-[100%] md:max-w-[48%]">
                        <p className=" text-secondary text-[16px]" >Participated in the Dark Pattern Busters Internal Hackathon, focusing on addressing deceptive design practices in digital interfaces. Collaborated with a team to develop an ML-powered detection app trained on website data, successfully identifying and highlighting dark patterns. The project promoted ethical web design and enhanced user awareness while fostering teamwork and creative problem-solving.</p>

                        <p className="mt-3 text-[16px] font-semibold">Achievements:</p>
                        <ul className='mt-5 list-disc ml-5 space-y-2'>
                            <li className='text-secondary text-[14px] pl-1 tracking-wider'>
                                Ranked in 1st place among 7 teams on the Internal phase.
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-[100%] md:max-w-[48%] ">
                        <img loading="lazy"  src={ Dell } className="rounded-2xl " />
                    </div>
                </div>
            </motion.div>
            <Certificate/>

        </>
    );
};

export default SectionWrapper( Honors, "honors" );
