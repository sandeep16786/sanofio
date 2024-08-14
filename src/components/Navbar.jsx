import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <nav className={`navbar ${isSticky ? 'sticky' : ''} navbar-expand-lg bg-body-tertiary bg-white header header-menu-wrapper main-menu`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="src/assets/img/logo-black.svg" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse desktop-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-menu menu">
                            <li className="nav-item">
                                <a className='{nav-link ? active : ""}' aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item"><a className='{nav-link ? active : ""}' href="#about">About</a></li>
                            <li className="nav-item"><a className='{nav-link ? active : ""}' href="#services">Services</a>
                            </li>
                            <li className="nav-item"><a className='{nav-link ? active : ""}' href="#resume">Resume</a></li>
                            <li className="nav-item"><a className='{nav-link ? active : ""}' href="#portfolio">Portfolio</a>
                            </li>
                        </ul>
                        <div className="header-btn-wrapper">
                            <a className="btn orange-btn btn_effect" href="#contact">
                                <span className="z-1 position-relative">contact us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
