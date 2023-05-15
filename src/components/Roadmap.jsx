import React from 'react'
import { motion } from 'framer-motion'

import {styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';



const Roadmap = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>2023</p>
      <h2 className={styles.sectionHeadText}>Roadmap</h2>
    </motion.div>
   
    <motion.ul  variants={fadeIn("", "", 0.1, 1)} className='mt-8 list-disc ml-5 space-y-2'>
      <li
      > Reach 300 Holders.
      
      </li> 
      <li
      > Develop Utility for the Alterna Blockchain TBA
      
      </li> 
      <li
      > Organic Shilling Campaign to support Alterna and Baby Alternas growth. 
      
      </li> 
      <li
      > Further Lisiting and Marketing to come as the token grows. 
      
      </li> 
      <li
      > More suprises to come ;)  
      
      </li> 
      
      
  </motion.ul>

     
    
    </>
    
    

  )
}

export default SectionWrapper(Roadmap, "roadmap")


