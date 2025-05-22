import React, {useEffect, useState} from "react";
import {Link} from 'react-scroll'
import '../styles/Navbar.css';
import {motion} from 'framer-motion';

const Navbar = () =>{
    const [isScrolled, setIsScrolled]= useState(false);

    useEffect(() => {
        const handleScroll =()=>{
            if(window.scrollY>50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
},[]);
    return(
        <motion.nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
>
            <ul>
                <li><Link to="hero"  smooth={true} duration={500} activeClass="active">Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} activeClass="active">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} activeClass="active">Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} activeClass="active">Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} activeClass="active">Contact</Link></li>
            </ul>
        </motion.nav>
    );
};
export default Navbar;