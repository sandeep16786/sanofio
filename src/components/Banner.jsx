import React from 'react'

const Banner = () => {
    return (
        <section className="home-banner position-relative">
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="home-banner-wrapper row align-items-center">
                            <div className="col-12 col-lg-6 col-xl-7 home-banner-text-col position-relative">
                                <div className="sub-heading d-flex align-items-center">
                                    <img src="sanofio/src/assets/img/orangeDot.png" alt="orange-dot" />
                                    <p>I AM Sr.Frontend developer</p>
                                </div>
                                <div className="animate-heading">
                                    <h1 className="black-color h1 home-one-title ah-headline">Creative Design and Web <span
                                        className="orange-color"><span className="ah-words-wrapper">
                                            <b className="is-visible"> Developer</b>
                                            <b>Design</b>
                                        </span></span>
                                        <br />
                                    </h1>
                                </div>
                                <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                                    Over 5+ years of experience in IT industry mainly at web designer along with HTML5, CSS3, JQuery, Bootstrap, Wordpress, React Design, Vite + React Design Figma, Photoshop, illustrater. Touch framework. Responsibilities include designing a website with proper technical vision and new features. Ensuring performance, code quality and responsive website.
                                </p>
                                <a className="btn_effect btn home-banner-btn orange-btn mt-50" href="sanofio/src/assets/document/sandeep-dodiya-cv.pdf" target='_blank'><span
                                    className="z-1 position-relative">Download My CV</span>
                                </a>
                                <div className="banner-particle-one-container">
                                    <img className="position-absolute banner-particle-one d-none d-lg-inline"
                                        src="sanofio/src/assets/img/particleOne.png" alt="banner particle one" />
                                </div>
                                <div className="banner-particle-two-container">
                                    <img className="position-absolute banner-particle-two delay-one"
                                        src="sanofio/src/assets/img/particleTwo.png" alt="banner particle two" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
                                <div className="banner-particle-one-container">
                                    <img className="position-absolute banner-particle-one d-lg-none"
                                        src="sanofio/src/assets/img/particleOne.png" alt="banner particle one" />
                                </div>

                                <img className="position-absolute home-banner-shape bg-move-3d"
                                    src="sanofio/src/assets/img/homeNannerShape.png" alt="banner-shape" />
                                <img className="img-fluid position-relative z-index-10 home-banner-img"
                                    src="sanofio/src/assets/img/bannerImg.png" alt="banner-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
