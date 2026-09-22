import { useMemo, useRef, useState, lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "./Amenities.css";

const Amenities = () => {
  const [activeTab, setActiveTab] = useState("west");
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);
  const isUpdatingRef = useRef(false);

  // =========================
  // WEST IMAGES
  // =========================
  const westSlides = useMemo(
    () => [
      {
        image: "/images/amenities/1-new.webp",
        label: "West Amenity 1",
      },
      {
        image: "/images/amenities/2-new.webp",
        label: "West Amenity 2",
      },
      {
        image: "/images/amenities/3-new.webp",
        label: "West Amenity 3",
      },
      {
        image: "/images/amenities/4.webp",
        label: "West Amenity 4",
      },
      {
        image: "/images/amenities/5-new.webp",
        label: "West Amenity 5",
      },
      {
        image: "/images/amenities/6.webp",
        label: "West Amenity 6",
      },
    ],
    []
  );

  // =========================
  // EAST IMAGES
  // =========================
  const eastSlides = useMemo(
    () => [
      {
        image: "/images/amenities/7.webp",
        label: "East Amenity 1",
      },
      {
        image: "/images/amenities/8.webp",
        label: "East Amenity 2",
      },
      {
        image: "/images/amenities/9.webp",
        label: "East Amenity 3",
      },
      {
        image: "/images/amenities/10.webp",
        label: "East Amenity 4",
      },
      {
        image: "/images/amenities/11.webp",
        label: "East Amenity 5",
      },
      {
        image: "/images/amenities/12.webp",
        label: "East Amenity 6",
      },
    ],
    []
  );

  // =========================
  // CURRENT SLIDES
  // =========================
  const slides = activeTab === "west" ? westSlides : eastSlides;

  // =========================
  // CHANGE TAB
  // =========================
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);

    setTimeout(() => {
      if (desktopSwiperRef.current) desktopSwiperRef.current.slideToLoop(0, 0);
      if (mobileSwiperRef.current) mobileSwiperRef.current.slideToLoop(0, 0);
      if (thumbSwiperRef.current) thumbSwiperRef.current.slideToLoop(1, 0);
    }, 0);
  };

  // =========================
  // MAIN SLIDER CHANGE
  // =========================
  const handleMainSlideChange = (swiper) => {
    if (isUpdatingRef.current) return;
    const newIndex = swiper.realIndex;

    if (newIndex !== activeIndex) {
      isUpdatingRef.current = true;
      setActiveIndex(newIndex);

      const otherSwiper =
        swiper === desktopSwiperRef.current
          ? mobileSwiperRef.current
          : desktopSwiperRef.current;

      if (otherSwiper && otherSwiper.realIndex !== newIndex) {
        otherSwiper.slideToLoop(newIndex);
      }

      if (thumbSwiperRef.current) {
        const targetThumbIndex = (newIndex + 1) % slides.length;
        if (thumbSwiperRef.current.realIndex !== targetThumbIndex) {
          thumbSwiperRef.current.slideToLoop(targetThumbIndex);
        }
      }

      if (swiper.autoplay && !swiper.autoplay.running) {
        swiper.autoplay.start();
      }

      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 50);
    }
  };

  // =========================
  // THUMBNAIL SLIDE CHANGE
  // =========================
  const handleThumbSlideChange = (swiper) => {
    if (isUpdatingRef.current) return;

    const thumbRealIndex = swiper.realIndex;
    const targetPreviewIndex =
      (thumbRealIndex - 1 + slides.length) % slides.length;

    if (targetPreviewIndex !== activeIndex) {
      isUpdatingRef.current = true;
      setActiveIndex(targetPreviewIndex);

      if (
        desktopSwiperRef.current &&
        desktopSwiperRef.current.realIndex !== targetPreviewIndex
      ) {
        desktopSwiperRef.current.slideToLoop(targetPreviewIndex);
      }
      if (
        mobileSwiperRef.current &&
        mobileSwiperRef.current.realIndex !== targetPreviewIndex
      ) {
        mobileSwiperRef.current.slideToLoop(targetPreviewIndex);
      }

      if (desktopSwiperRef.current?.autoplay) {
        desktopSwiperRef.current.autoplay.start();
      }
      if (mobileSwiperRef.current?.autoplay) {
        mobileSwiperRef.current.autoplay.start();
      }

      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 50);
    }
  };

  // =========================
  // THUMBNAIL CLICK
  // =========================
  const handleThumbnailClick = (clickedIndex) => {
    if (isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    setActiveIndex(clickedIndex);

    if (
      desktopSwiperRef.current &&
      desktopSwiperRef.current.realIndex !== clickedIndex
    ) {
      desktopSwiperRef.current.slideToLoop(clickedIndex);
    }
    if (
      mobileSwiperRef.current &&
      mobileSwiperRef.current.realIndex !== clickedIndex
    ) {
      mobileSwiperRef.current.slideToLoop(clickedIndex);
    }

    const targetThumbIndex = (clickedIndex + 1) % slides.length;
    if (
      thumbSwiperRef.current &&
      thumbSwiperRef.current.realIndex !== targetThumbIndex
    ) {
      thumbSwiperRef.current.slideToLoop(targetThumbIndex);
    }

    if (desktopSwiperRef.current?.autoplay) {
      desktopSwiperRef.current.autoplay.start();
    }
    if (mobileSwiperRef.current?.autoplay) {
      mobileSwiperRef.current.autoplay.start();
    }

    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 50);
  };

  return (
    <section
      id="amenities"
      className="ps-md-0 side-space section-space"
    >
      <div className="row">

        {/* ================= MAIN PREVIEW (DESKTOP) ================= */}
        <div className="col-md-7 d-none d-md-block" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          <Swiper
            key={`desktop-${activeTab}`}
            loop={slides.length > 2}
            spaceBetween={10}
            speed={2000}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            fadeEffect={{
              crossFade: true,
            }}
            onSwiper={(swiper) => {
              desktopSwiperRef.current = swiper;
            }}
            onSlideChange={handleMainSlideChange}
            modules={[EffectFade, Autoplay]}
            className="swiper_image_preview"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={`${activeTab}-${index}`}>
                <div className="swiper_preview_item">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    loading="lazy"
                  />

                  <p className="ov-list-label">
                    {slide.label}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* ================= CONTENT ================= */}
        <div className="col-md-5 ps-md-4">
          {/* ================= EAST / WEST TABS ================= */}
          <div className="d-flex flex-md-column flex-column-reverse align-items-center justify-content-center">
            <div className="amenities-tabs mb-4 mb-md-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">

              <button
                type="button"
                className={`${activeTab === "west" ? "page-btn-tab-primary tab-primary active" : "page-btn-tab-secondary tab-secondary"}`}
                onClick={() => handleTabChange("west")}
              >
                Never before West
              </button>

              <button
                type="button"
                className={`${activeTab === "east" ? "page-btn-tab-primary tab-primary active" : "page-btn-tab-secondary tab-secondary"}`}
                onClick={() => handleTabChange("east")}
              >
                Never before east
              </button>

            </div>

            <div className="title-wrapper mt-3">

              <h2 className="sec_title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                Luxury beyond amenities
              </h2>

              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                At VTP, discover a never-before lifestyle where every detail is designed to inspire. Beyond world-class amenities lies an extraordinary experience of elegance, comfort, and exclusivity.
              </p>

            </div>
          </div>

          {/* ================= MAIN PREVIEW (MOBILE) ================= */}
          <Swiper
            key={`mobile-${activeTab}`}
            loop={slides.length > 2}
            spaceBetween={10}
            speed={1500}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              mobileSwiperRef.current = swiper;
            }}
            onSlideChange={handleMainSlideChange}
            modules={[EffectFade, Autoplay]}
            className="swiper_image_preview d-block d-md-none"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={`${activeTab}-${index}`}>
                <div className="swiper_preview_item">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    loading="lazy"
                  />

                  <p className="ov-list-label">
                    {slide.label}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ================= THUMBNAILS ================= */}
          <div className="amenities-slider" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">

            <Swiper
              key={`thumb-${activeTab}`}
              modules={[Navigation]}
              loop={slides.length > 2}
              initialSlide={1}
              slidesPerView={3} // default
              spaceBetween={20}
              onSwiper={(swiper) => {
                thumbSwiperRef.current = swiper;
              }}
              onSlideChange={handleThumbSlideChange}
              navigation={{
                nextEl: ".custom-gallery-next",
                prevEl: ".custom-gallery-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                },
              }}
              className="swiper_image_thambnail"

            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={`${activeTab}-thumb-${index}`}
                  onClick={() =>
                    handleThumbnailClick(index)
                  }
                >
                  <div className="swipper-item-custom">
                    <img
                      src={slide.image}
                      alt={`Thumbnail ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Amenities;