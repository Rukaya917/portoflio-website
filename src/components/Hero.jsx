import React, {useState} from "react";
import '../styles/Hero.css';
import {motion} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    // hoverd function
    const [hovered, setHoverd] = useState(null);
    return(
        <section id="hero" className={`hero ${hovered === 'left' ? 'shrink-right' : hovered === 'right' ? 'shrink-left' : ''}`}>
           {/* left side */}
            <div 
            className={`hero-left ${hovered === 'left' ? 'expand' : ''}`}
                onMouseEnter={() => setHoverd('left')}
                onMouseLeave={() => setHoverd(null)}
                >
                    <div className="background-words">
                        <h2 className="background-word dream">Dream</h2>
                        <h2 className="background-word build">Build</h2>
                        <h2 className="background-word invent">Invent</h2>
                        <h2 className="background-word craft">Craft</h2>
                        <h2 className="background-word express">Express</h2>
                    </div>
                    <div className="content">
                        <motion.h1 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                            Loud Creator </motion.h1>
                            <TypeAnimation
                            sequence={[
                                'Breathing',500,
                                'Breathing life ',500,
                                'Breathing life into ',500,
                                'Breathing life into empty',500,
                                'Breathing life into empty space.',500,
                            ]}
                            wrapper= "p"
                            cursor={true}
                            repeat={0}
                            />
                    </div>
            </div>
            <div 
            className={`hero-right ${hovered === 'right' ? 'expand' : ''}`}
                onMouseEnter={() => setHoverd('right')}
                onMouseLeave={() => setHoverd(null)}
                >
                    <div className="content">
                        {/* right side */}
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                        Silent Coder
                        </motion.h1>
                        <TypeAnimation
                            sequence={[
                                'Architecting ',500,
                                'Architecting complexity',500,
                                'Architecting complexity into',500,
                                'Architecting complexity into elegance',500,
                                
                            ]}
                            wrapper= "p"
                            cursor={true}
                            repeat={0}/>
                    </div>
                </div>
        </section>
    )

}

export default Hero; 