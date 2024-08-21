import React from 'react'
import orangeDot from '/assets/img/orangeDot.png';
import serviceOne from '/assets/img/serviceOne.png';
import serviceThree from '/assets/img/serviceThree.png';
import serviceFour from '/assets/img/serviceFour.png';
import serviceFive from '/assets/img/serviceFive.png';
import serviceSix from '/assets/img/serviceSix.png';
import serviceSeven from '/assets/img/serviceSeven.png';
import serviceEight from '/assets/img/serviceEight.png';


const Service = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading-middle">
                            <div className="sub-heading d-flex align-items-center mx-auto">
                                <img src={orangeDot} alt="orange-dot" />
                                <p>My Service</p>
                            </div>
                            <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                Services I offer
                            </h2>
                        </div>
                        <div className="service-grid-container mt-50 row-mobile-margin">
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src={serviceOne} alt="service-img-one" />
                                <h3 className="h3 fw-500 service-item-heading black-color">UI/UX Design</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    We provide UI/UX design that combines user research with sleek, functional design to create intuitive and visually engaging digital experiences.
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src={serviceThree} alt="service-img-three" />
                                <h3 className="h3 fw-500 service-item-heading black-color">Graphic Design</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    We create compelling graphic designs that enhance your brand’s identity, from logos to marketing materials, ensuring clear communication and visual appeal.
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src={serviceFour} alt="service-img-four" />
                                <h3 className="h3 fw-500 service-item-heading black-color">Web Designer</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    We design visually stunning and user-friendly websites tailored to your brand, ensuring an optimal experience for your visitors.
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src={serviceFive} alt="service-img-five" />
                                <h3 className="h3 fw-500 service-item-heading black-color">SEO Optimisation</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    We enhance your website’s search rankings with targeted keyword strategies and technical optimizations to boost visibility and drive traffic.
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src={serviceSix} alt="service-img-six" />
                                <h3 className="h3 fw-500 service-item-heading black-color">WordPress Developer</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    We build and customize WordPress websites to fit your needs, handling everything from theme setup to plugin integration for a seamless online presence.
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src={serviceSeven} alt="service-img-seven" />
                                <h3 className="h3 fw-500 service-item-heading black-color">Vite + React js Developer</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    We develop fast, modern web apps using Vite and React.js, ensuring high performance and dynamic user experiences.
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src={serviceEight} alt="service-img-eight" />
                                <h3 className="h3 fw-500 service-item-heading black-color">Business Strategy</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    We craft actionable business strategies to drive growth, with a focus on market analysis and strategic planning for optimal performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
