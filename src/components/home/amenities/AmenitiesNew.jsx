import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./AmenitiesNew.css";

const AmenitiesSlider = ({ slides = [], currentIndex, setCurrentIndex, swiperReady }) => {
  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <div className="gallery-slider">
        {swiperReady && (
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={slides.length > 1}
            speed={2000}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-gallery-next",
              prevEl: ".custom-gallery-prev",
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex + 1);
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              550: { slidesPerView: 1 },
            }}
            modules={[Autoplay, Navigation, A11y]}
          >
            {slides.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="gal_image">
                  <a
                    target="_blank"
                    href={data.src}
                    data-fancybox="fancygallery"
                    rel="nofollow noopener"
                    aria-label={data.label}
                  >
                    <img
                      src={data.src}
                      alt={data.label}
                      className="cover"
                      height={217}
                      width={386}
                      loading="lazy"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

const AmenitiesNew = () => {
  const [activeTab, setActiveTab] = useState("exterior");
  const [swiperReady, setSwiperReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const currentSlides =
    activeTab === "gallery"
      ? slides
      : activeTab === "exterior"
      ? slides2
      : activeTab === "interior"
      ? slides3
      : [];

  return (
    <section id="Gallery" className="gallery side-space pe-lg-0">
      {/* Tabs */}
      <div className="row">
        <div className=" col-lg-4 col-xxl-3">
          <div className="side-space ps-lg-0 section-space" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
            {/* Title */}
            <div
              className="title-wrapper center"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2 className="sec_title mb-2 mb-xxl-4">The way we see a finer life</h2>
              <p className="">
                Every space reveals a story of refinement. This is luxury you can see. And perfection you can feel.
              </p>
            </div>
            <ul
              id="little_thing_tab"
              className="nav nav-tabs"
              role="tablist"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "exterior" ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab("exterior");
                    setCurrentIndex(1);
                  }}
                  type="button"
                  role="tab"
                >
                  Exterior
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "interior" ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab("interior");
                    setCurrentIndex(1);
                  }}
                  type="button"
                  role="tab"
                >
                  Interior
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "gallery" ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab("gallery");
                    setCurrentIndex(1);
                  }}
                  type="button"
                  role="tab"
                >
                  Amenities
                </button>
              </li>
              {/* <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "master" ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab("master")
                    setCurrentIndex(1);
                  }}
                  type="button"
                  role="tab"
                >
                  Master Plan
                </button>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="col-lg-8 col-xxl-9" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          {/* Tab Content */}
          <div className="tab-content">
            {currentSlides.length > 0 && (
              <AmenitiesSlider
                key={activeTab}
                slides={currentSlides}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                swiperReady={swiperReady}
              />
            )}

            {currentSlides.length > 0 && (
              <div className="gallery-nav-btns amenities-slider-nav-btns">
                <div className="custom-gallery-prev">
                  <ArrowLeft size={20} />
                </div>
                <div className="gallery-counter">
                  <span>{String(currentIndex).padStart(2, "0")}</span>
                  <span className="counter-separator">/</span>
                  <span>{String(currentSlides.length).padStart(2, "0")}</span>
                </div>
                <div className="custom-gallery-next">
                  <ArrowRight size={20} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesNew;

// Static slides array
const slides = [
  { src: "/images/amenities/13.webp", label: "gallery image" },
  { src: "/images/amenities/14.webp", label: "gallery image" },
  { src: "/images/amenities/15.webp", label: "gallery image" },
  { src: "/images/amenities/17.webp", label: "gallery image" },
];

const slides2 = [
  { src: "/images/gallery/1-new.webp", label: "gallery image" },
  { src: "/images/gallery/2-new.webp", label: "gallery image" },
  { src: "/images/gallery/3-new.webp", label: "gallery image" },
  { src: "/images/gallery/4-new.webp", label: "gallery image" },
  { src: "/images/gallery/5-new.webp", label: "gallery image" },
  { src: "/images/gallery/6-new.webp", label: "gallery image" },
  { src: "/images/gallery/7-new.webp", label: "gallery image" },
];

const slides3 = [
  { src: "/images/townshipGallery/Interior.webp", label: "gallery image" },
  { src: "/images/townshipGallery/Interior2.webp", label: "gallery image" },
  { src: "/images/townshipGallery/Interior4-new.webp", label: "gallery image" },
];
