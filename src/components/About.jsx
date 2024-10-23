import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from "../utils/motion.js";

const About = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <p className= {styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn('', '', 0.1,1)}
        className= "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software engineer with a strong foundation in both backend and frontend technologies. 
        I have extensive experience working with backend technologies such as Java, Node.js, and PHP, as well as proficiency in frontend frameworks 
        like React, Next.js, and core web technologies including JavaScript, HTML5, and CSS3. Additionally, I am experienced in using Docker for managing databases, 
        which enhances my ability to deliver scalable and efficient solutions. I am passionate about solving complex problems and continually learning new technologies 
        to improve my craft.
      </motion.p>
      
      <div className= "mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
            <ServiceCard key = {service.title} index={index}></ServiceCard>
        ))}
      </div>
    </>
  )
}

export default About