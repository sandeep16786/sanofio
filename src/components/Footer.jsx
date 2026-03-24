import React from 'react'
import logowhite from '/assets/img/logo-white.svg';


const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                                <div className="footer-col-one">
                                    <img src={logowhite} className="footer-logo" alt="footer logo" />
                                    <p className="p text-white line-height-7 mb-30 footer-col-one-texts">
                                        With over 7 years in the IT industry, I am a web designer with frontend developer specializing in creating innovative, high-performing websites.
                                    </p>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                                <h4 className="h4 fw-500 text-white">
                                    Explore Link
                                </h4>
                                <div className="footer-col-links">
                                    <ul className="footer-col-link-container">
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="#about">About</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="#resume">Resume</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="#portfolio">Portfolio</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="#blog">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                                <h4 className="h4 fw-500 text-white">
                                    My Services
                                </h4>
                                <div className="footer-col-links">
                                    <ul className="footer-col-link-container">
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="#services">UI/UX
                                                Design</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="#services">Graphics
                                                Design</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="#services">Web
                                                Developer</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                                <h4 className="h4 fw-500 text-white">
                                    Follow me
                                </h4>
                                <div className="footer-social-media">
                                    <ul className="footer-social-container d-flex align-items-center mb-35">
                                        <li className="footer-social-item-2">
                                            <a href="https://www.linkedin.com/in/sandeep-dodiya-596a05120?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-linkedin-in text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="footer-social-item-2">
                                            <a href="https://twitter.com/" target='_blank'>
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-twitter text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="footer-social-item-2">
                                            <a href="https://dribbble.com/" target='_blank'>
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-dribbble text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="footer-social-item-2">
                                            <a href="https://www.behance.net/" target='_blank'>
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-behance text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-container">
                            <div className="row">
                                <div className="footerbottom-left col-12 col-sm-12 col-md-12 text-center">
                                    <p className="p text-white line-height-7">
                                        All rights reserved &copy; 2024 Sanfolio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
