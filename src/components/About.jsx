import React from 'react'
import { motion } from 'framer-motion'

import {styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]'>
      Baby Altarna offers rewards in Alterna Network a High Security, Lightning-fast Transaction and 
      Cheap Gas Fee chain. Hold and see your tokens grow. 
      Join us in our Telegram where we have experienced Mods and team. 
    </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")