import React, { lazy, Suspense } from 'react'
import './Overview2.css'
import PageBtn from '../../common/PageBtn'

const StarIcon = lazy(() => import('../../../assets/svg/StarIcon'))

const Overview2 = () => {
    return (
        <Suspense fallback={null}>
            <section id='overview' className="overview-section side-space" >
                {/* <img
                    src="/images/overview/ove-bg.webp"
                    alt=""
                    className="overview-bg"
                /> */}

                <div className="row d-flex justify-content-center  align-items-end align-items-lg-center">
                    <div className="col-md-5 col-xxl-5 d-none d-md-block">
                        <div className="overview-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="250">
                            <img
                                src="/images/overview/ove-img.webp"
                                alt=""
                                className="overview-img"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7 col-xxl-6">
                        <div className="overview-content section-space side-space py-lg-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            {/* Content */}
                            <h2 className='sec_title text-center mx-auto' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                An isle of wonder
                                <br />
                                <span className='sub_title'>held above the city</span>
                            </h2>
                            <h3 className="sub_title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Baner Next, Mahalunge</h3>

                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                Some residences rise high and stop there. Chrysos by VTP Luxe rises and expands, towering villas in the sky, in the tallest tower of the area, planned across two levels and the kind of low-density privacy that keeps the home beautifully removed from the shared nature of typical high-rise living. This is luxury that respects your life and your preference for space that stays yours.
                            </p>
                            <span className="ov-list-break" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                <StarIcon />
                            </span>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                                At VTP Realty, ultra-luxury has always meant more than a finer finish or a larger home. It is measured in planning that stays relevant year after year and craftsmanship that holds its grace.
                            </p>

                            <PageBtn text="DISCOVER CHRYSOS" isPdf={true} />
                        </div>

                    </div>
                </div>

            </section>
        </Suspense>
    )
}

export default Overview2