import React from 'react'
import orangeDot from '/assets/img/orangeDot.png';
import particleOne from '/assets/img/particleOne.png';
import particleTwo from '/assets/img/particleTwo.png';
import bannerImg from '/assets/img/bannerImg.png';
import homeNannerShape from '/assets/img/homeNannerShape.png';



const Banner = () => {
    return (
        <section className="home-banner position-relative">
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="home-banner-wrapper row align-items-center">
                            <div className="col-12 col-lg-6 col-xl-7 home-banner-text-col position-relative">
                                <div className="sub-heading d-flex align-items-center">
                                    <img src={orangeDot} alt="orange-dot" />
                                    <p>I AM Sr.Frontend developer</p>
                                </div>
                                <div className="animate-heading">
                                    <h1 className="black-color h1 home-one-title ah-headline">Creative Design and Web <span
                                        className="orange-color"><span className="ah-words-wrapper">
                                            <b className="is-visible"> Developer</b>
                                            {/* <b>Design</b> */}
                                        </span></span>
                                        <br />
                                    </h1>
                                </div>
                                <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                                    Senior Front-End Developer and UI/UX Designer with 7+ years of experience building scalable, high-performance, and user-centric web applications. Expertise in React.js, Next.js, and modern UI frameworks with a strong focus on performance, SEO, and responsive design. Proven ability to deliver impactful solutions and collaborate with cross-functional teams.
                                </p>
                                <a className="btn_effect btn home-banner-btn orange-btn mt-50" href="https://sanofio.netlify.app/assets/document/sandeep-dodiya-cv.pdf" target='_blank'><span
                                    className="z-1 position-relative">Download My CV</span>
                                </a>
                                <div className="banner-particle-one-container">
                                    <img className="position-absolute banner-particle-one d-none d-lg-inline"
                                        src={particleOne} alt="banner particle one" />
                                </div>
                                <div className="banner-particle-two-container">
                                    <img className="position-absolute banner-particle-two delay-one"
                                        src={particleTwo} alt="banner particle two" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
                                <div className="banner-particle-one-container">
                                    <img className="position-absolute banner-particle-one d-lg-none"
                                        src={particleOne} alt="banner particle one" />
                                </div>

                                <img className="position-absolute home-banner-shape bg-move-3d"
                                    src={homeNannerShape} alt="banner-shape" />
                                <img className="img-fluid position-relative z-index-10 home-banner-img"
                                    src={bannerImg} alt="banner-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
