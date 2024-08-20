import React, { useEffect } from 'react'
import AOS from 'aos';
import Navbar from './Navbar'
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Resume from './Resume'
import Myportfolio from './Myportfolio';
import Contactus from './Contactus';
import Footer from './Footer';

const Home = () => {


    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of the animation
            delay: 100,    // Delay before animation starts
            easing: 'ease-in-out', // Animation easing
            once: false,    // Animation only happens once
        });
    }, []);

    return (
        <>
            <Navbar />
            <Banner/>
            <About/>
            <Service/>
            <Resume/>
            <Myportfolio/>
            <Contactus/>
            <Footer/>
        </>
    )
}

export default Home
