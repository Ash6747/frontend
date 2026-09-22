import { useState, useMemo, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import './HighlightGallery.css';


const HighlightGallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const mainSwiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slides = useMemo(() => [
        { image: './images/highlights/high-2.webp', title: 'A Private Ascent', label: 'Every home reached by its own private lift - a quiet, singular arrival.' },
        { image: './images/highlights/high-3.webp', title: 'Living, Doubled', label: 'Soaring double-height spaces conceived to redefine grandeur.' },
        { image: './images/highlights/high-4.webp', title: 'The Grand Arrival', label: 'Majestic lobbies and grand entrances that make every homecoming iconic.' },
        // { image: './images/highlights/high-4.png', title: 'The Grand Arrival', label: 'Majestic lobbies and grand entrances that make every homecoming iconic.' },
    ], []);

    useEffect(() => {
        if (!thumbsSwiper || thumbsSwiper.destroyed || !mainSwiperRef.current) return;

        thumbsSwiper.slideToLoop(mainSwiperRef.current.realIndex, 0);
    }, [thumbsSwiper]);

    const centerActiveThumbnail = (swiper) => {
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;

        thumbsSwiper.slideToLoop(swiper.realIndex, swiper.params.speed);
    };


    return (
        <section id="highlight_gallery_wrapper" className="highlight_gallery_wrapper ">
            <div className="highlight_gallery_main">
                {/*
                <Swiper
                    loop={false}
                    spaceBetween={10}
                    navigation={false}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={1500}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}
                    onSwiper={(swiper) => {
                        mainSwiperRef.current = swiper;
                    }}
                    onSlideChange={centerActiveThumbnail}
                    modules={[Navigation, Thumbs, Autoplay, EffectFade]}
                    className="swiper_image_preview"
                >
                    {slides.map((slide, key) => (
                        <SwiperSlide key={key}>
                            <img src={slide.image} alt={`Slide ${key}`} loading="lazy" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                */}

                <div className="swiper_image_preview">
                    <img src="/images/highlights/high-1.webp" alt="Highlight Preview" loading="lazy" />
                </div>

                {/* Thumbnails Slider */}
                <div className='thumbnails-slider'>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            prevEl: ".gallery-prev",
                            nextEl: ".gallery-next",
                        }}
                        watchOverflow={false}
                        className="swiper_image_thambnail"
                        watchSlidesProgress
                        centeredSlides={false}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            552: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {slides.map((slide, key) => (
                            <SwiperSlide key={key}>
                                <div className='swipper-item-custom'>
                                    <div className="image_thambnail_container">
                                        <img
                                            src={slide.image}
                                            alt={`Thumbnail ${key}`}
                                            style={{ cursor: 'pointer', opacity: 0.7 }}
                                            loading="lazy"
                                        />
                                        <div className="image_thambnail_icon">
                                            <Star size={16} fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="thambnail-content">
                                        <h5 className='thambnail-title'>
                                            {slide.title}
                                        </h5>
                                        <p className='thambnail-caption'>
                                            {slide.label}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="gallery-nav-btns highlight-gallery-nav-btns">
                        <div
                            ref={prevRef}
                            className="gallery-prev"
                            onClick={() => thumbsSwiper?.slidePrev()}
                            aria-label="Previous highlight slide"
                            role="button"
                            tabIndex="0"
                        >
                            <ArrowLeft size={18} />
                        </div>
                        <div
                            ref={nextRef}
                            className="gallery-next"
                            onClick={() => thumbsSwiper?.slideNext()}
                            aria-label="Next highlight slide"
                            role="button"
                            tabIndex="0"
                        >
                            <ArrowRight size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightGallery;
