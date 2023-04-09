import React from 'react'
import {WhatDoIHelp, projectExperience} from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'

const Experties = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{once: false, amount: 0.25}}
    className={css.wrapper}>

        <a className="anchor" id="experties"></a>
        <div 
            className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
        >
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i)=>{
                        return (
                            <motion.div
                        variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                        className={css.exp} key={i}>
                        <div className="flexCenter" style={{background: exp.bg}}>
                            <exp.icon size={25} color="white" />
                        </div>
                        <div>
                            <span>
                                {exp.name}
                            </span>
                            <span className="secondaryText"> 
                                {exp.projects} Projects
                            </span>
                        </div>
                        </motion.div>
                        )
                        
                        
                    })
                }
            </div>

            <motion.div 
            variants={textVariant(0.5)}
            className={css.rightSide}>
                <span className="primaryText">What do i help? </span>
                {
                    WhatDoIHelp.map((paragraph, i)=>{
                        return <p className="secondaryText" key={i}>{paragraph}</p>
                    })
                }

                
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Experties
