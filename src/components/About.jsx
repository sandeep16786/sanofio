import React from 'react'
import aboutImage from '/assets/img/about.png';
import orangeDot from '/assets/img/orangeDot.png';
import aboutIconOne from '/assets/img/aboutIconOne.png';
import aboutIconTwo from '/assets/img/aboutIconTwo.png';


const About = () => {
    return (
        <section className="about" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="about-image-col col-12 col-lg-6 text-center">
                                <div className="img-overlay mx-auto mx-lg-0">
                                    <img className="img-fluid" src={aboutImage} alt="about image" />
                                </div>
                            </div>
                            <div className="about-text-col col-12 col-lg-6">
                                <div className="about-text-top">
                                    <div className="section-heading">
                                        <div className="sub-heading d-flex align-items-center">
                                            <img src={orangeDot} alt="orange-dot" />
                                            <p>About Me</p>
                                        </div>
                                        <h2 className="black-color line-height-3 h2">
                                            I Can Design Anything You Want
                                        </h2>
                                    </div>
                                    <p className="secondary-black line-height-7 mt-20">
                                        Senior Front-End Developer and UI/UX Designer with 7+ years of experience building responsive, scalable, and user-centric web applications. Expertise in HTML5, CSS3, JavaScript, React.js, Next.js, and modern UI frameworks. Proven track record of improving performance, SEO, and user experience across web platforms. Strong collaborator experienced in working with cross-functional teams and CMS platforms such as WordPress.
                                    </p>
                                </div>
                                <div className="row row-mobile-margin gy-3 gy-sm-0 mt-50">
                                    <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                                        <div className="mr-10">
                                            <img src={aboutIconOne} alt="about icon one" />
                                        </div>
                                        <div className="about-complete-project">
                                            <h4 className="fw-700 orange-color h4"><span className="counter">50</span>+</h4>
                                            <h4 className="fw-500 black-color h4">Complete Project</h4>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                                        <div className="mr-10">
                                            <img src={aboutIconTwo} alt="about icon two" />
                                        </div>
                                        <div className="about-years-experience">
                                            <h4 className="fw-700 orange-color h4"><span className="counter">7/span>+</h4>
                                            <h4 className="fw-500 black-color h4">Year of experience</h4>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500"
                                    className="row flex-column row-mobile-margin mt-50">
                                    <div className="col-12 mb-0 mb-20 ">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="mb-20 d-flex align-items-center">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>Work simple and cline design</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="mb-20 d-flex align-items-center">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>Web Design Full stack</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="d-flex align-items-center mb-20">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>New idea and user friendly design</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>Unlimited Revisions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500"
                                    className="btn btn_effect home-banner-btn orange-btn mt-3" href="src/assets/document/sandeep-dodiya-cv.pdf" target='_blank'><span
                                        className="position-relative z-1">Download My CV</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
