import React, { useState } from 'react';

// Sample portfolio data
const portfolioItems = [
    { id: 'portfolioOne_1', category: 'ui', title: 'Care blue', description: 'Design Care blue website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioOne.png' },
    { id: 'portfolioOne_2', category: 'ui', title: 'Lyno', description: 'Design Lyno website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioOne.png' },
    { id: 'portfolioFive_1', category: 'app', title: 'Oldme', description: 'Oldme Application design in Adobe Xd in innopad solution.', imgSrc: 'sanofio/src/assets/img/portfolioFive.png' },
    { id: 'portfolioFive_2', category: 'app', title: 'Pelipost', description: 'Pelipost Application design in Adobe Xd in innopad solution.', imgSrc: 'sanofio/src/assets/img/portfolioFive.png' },
    { id: 'portfolioFour_1', category: 'web', title: 'Hyperlinkinfosytem', description: 'Design a company website for Hyperlinkinfosytem in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },

    { id: 'portfolioFour_2', category: 'web', title: 'Baraez', description: 'Design Baraez Website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_3', category: 'web', title: 'Beauty', description: 'Design Beauty Website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_4', category: 'web', title: 'Care blue', description: 'Design Care blue website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_5', category: 'web', title: 'Eliox', description: 'Design Eliox website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_6', category: 'web', title: 'Boondokker website', description: 'Design Boondokker website in bootstrap with php.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_7', category: 'web', title: 'Erasustainm website', description: 'Design Erasustainm website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_8', category: 'web', title: 'Foodini website', description: 'Design Foodini website in bootstrap with php.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_9', category: 'web', title: 'Greenscan website', description: 'Design Greenscan website in bootstrap with React.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_10', category: 'web', title: 'Homey website', description: 'Design Homey website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_11', category: 'web', title: 'Insight Guide website', description: 'Design Insight Guide website in bootstrap with php.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_12', category: 'web', title: 'Instacare website', description: 'Design Instacare in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_13', category: 'web', title: 'Investment Dojo website', description: 'Design Investment Dojo in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_14', category: 'web', title: 'Invoice Assist website', description: 'Design  Invoice Assist in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_15', category: 'web', title: 'Jigra website', description: 'Design Jigra website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_16', category: 'web', title: 'Smartgen website', description: 'Design Smartgen website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_17', category: 'web', title: 'Lyno website', description: 'Design Lyno website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_18', category: 'web', title: 'Stocket website', description: 'Design Stocket website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_19', category: 'web', title: 'Taze website', description: 'Design Taze website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_20', category: 'web', title: 'Vendor website', description: 'Design Vendor website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_21', category: 'web', title: 'Pornswape website', description: 'Design Pornswape website in bootstrap.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_22', category: 'web', title: 'DanberKidz website', description: 'Design DanberKidz website in bootstrap and wordpress', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_23', category: 'web', title: 'ROMUSIC website', description: 'Design ROMUSIC website in bootstrap with React.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_24', category: 'web', title: 'Uplift website', description: 'Design Uplift website in bootstrap with React.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_25', category: 'web', title: 'Mizzle website', description: 'Design Mizzle website in bootstrap with React.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
    { id: 'portfolioFour_26', category: 'web', title: 'Portfolio website', description: 'Design Portfolio in bootstrap with React.', imgSrc: 'sanofio/src/assets/img/portfolioFour.png' },
];

const PortfolioItem = ({ item }) => {
    const { id, category, title, description, imgSrc } = item;

    return (
        <div className={`portfolio-massonary-items mix ${category} all position-relative`} key={id}>
            <div className={`modal fade`} id={id} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                    <div>
                        <button type="button" className="btn-close mb-10 btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        <img className="img-fluid" src={imgSrc} alt="portfolio img" />
                    </div>
                </div>
            </div>
            <img className="img-fluid" src={imgSrc} alt="portfolio img" />
            <div className="portfolio-card-overlay w-100 position-absolute top-0"></div>
            <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                    <p className="text-white fw-400 line-height-7">{title}</p>
                    <a data-bs-toggle="modal" data-bs-target={`#${id}`} href={`#${id}`} className="h4 text-white fw-600 line-height-3">
                        {description}
                    </a>
                </div>
            </div>
        </div>
    );
};

const Myportfolio = () => {
    const [activeFilter, setActiveFilter] = useState('.all');
    const [displayedItems, setDisplayedItems] = useState(5); // Number of items to display
    const [loading, setLoading] = useState(false);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        setDisplayedItems(5); // Reset to show 5 items when filter changes
    };

    const isActive = (filter) => activeFilter === filter;

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            setDisplayedItems(prev => prev + 5); // Increase displayed items count
            setLoading(false);
        }, 1000); // Simulate network delay
    };

    // Filter and slice items based on the current filter and displayed items
    const filteredItems = portfolioItems.filter(item => activeFilter === '.all' || `.${item.category}` === activeFilter);
    const itemsToShow = filteredItems.slice(0, displayedItems);

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="portfolio-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="sanofio/src/assets/img/orangeDot.png" alt="orange-dot" />
                                    <p>My Portfolio</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    VISIT MY PORTFOLIO
                                </h2>
                            </div>
                            <div className="mt-50 row-mobile-margin">
                                <div className="controls d-flex justify-content-center flex-wrap gap-1 gap-lg-4 mb-45">
                                    <button
                                        type="button"
                                        className={`control filter btn ${isActive('.all') ? 'mixitup-control-active' : ''}`}
                                        onClick={() => handleFilterClick('.all')}
                                    >
                                        All
                                    </button>
                                    <button
                                        type="button"
                                        className={`control filter btn ${isActive('.ui') ? 'mixitup-control-active' : ''}`}
                                        onClick={() => handleFilterClick('.ui')}
                                    >
                                        UI/Ux Design
                                    </button>
                                    <button
                                        type="button"
                                        className={`control filter btn ${isActive('.app') ? 'mixitup-control-active' : ''}`}
                                        onClick={() => handleFilterClick('.app')}
                                    >
                                        App Design
                                    </button>
                                    <button
                                        type="button"
                                        className={`control filter btn ${isActive('.web') ? 'mixitup-control-active' : ''}`}
                                        onClick={() => handleFilterClick('.web')}
                                    >
                                        Front-End
                                    </button>
                                </div>
                                <div className="portfolio-massonary-container">
                                    {itemsToShow.map(item => (
                                        <PortfolioItem key={item.id} item={item} />
                                    ))}
                                </div>
                                {filteredItems.length > displayedItems && (
                                    <div className="text-center mt-4">
                                        {loading ? (
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ) : (
                                            <button onClick={loadMoreItems} className="btn orange-btn btn-orange-border">
                                                Load More
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Myportfolio;
