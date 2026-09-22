import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./TownshipGallery.css";

const townshipTabs = [
  {
    title: "Sports",
    value: "sports",
  },
  {
    title: "Central Park",
    value: "central_park",
  },
  {
    title: "Master Layout",
    value: "masterplan-township",
  },
];

const banners = [
  {
    src: "/images/townshipGallery/RP_Coverpage-new.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-6.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-7.webp",
    alt: "Central Park",
    category: "central_park",
  },


  {
    src: "/images/townshipGallery/Exterior.webp",
    alt: "Sports",
    category: "sports",
  },
  {
    src: "/images/townshipGallery/Exterior2-new.webp",
    alt: "Sports",
    category: "sports",
  },
  {
    src: "/images/townshipGallery/Interior.webp",
    alt: "Sports",
    category: "sports",
  },
  {
    src: "/images/townshipGallery/Interior2.webp",
    alt: "Sports",
    category: "sports",
  },
  {
    src: "/images/townshipGallery/Interior4-new.webp",
    alt: "Sports",
    category: "sports",
  },

  {
    src: "/images/townshipGallery/RP-8.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-9.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-10.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-11.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-12.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-13.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-15.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-17.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-18.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-19.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-20.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-22.webp",
    alt: "Sports",
    category: "sports",
  },
  {
    src: "/images/townshipGallery/RP-25.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-26.webp",
    alt: "Sports",
    category: "sports",
  },
  {
    src: "/images/townshipGallery/RP-27.webp",
    alt: "Sports",
    category: "sports",
  },
  {
    src: "/images/townshipGallery/RP-29.webp",
    alt: "Central Park",
    category: "central_park",
  },
  {
    src: "/images/townshipGallery/RP-30.webp",
    alt: "Central Park",
    category: "central_park",
  },
];

const GallerySlider = ({ images = [], fancyboxGroup = "gallery" }) => {
  if (!images.length) {
    return null;
  }

  return (
    <div className="township-gallery-slider">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-township-gallery-next",
          prevEl: ".custom-township-gallery-prev",
        }}
        spaceBetween={20}
        loop={images.length > 2}
        centeredSlides
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 1.75,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image.category}-${index}`}>
            <div className="township-little-gallery">
              <a href={image.src} data-fancybox={fancyboxGroup} aria-label="View gallery image">
                <img
                  src={image.src}
                  alt={image.alt}
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="township-gallery-nav-btns">
        <div className="custom-township-gallery-prev">
          <ChevronLeft size={20} />
        </div>
        <div className="custom-township-gallery-next">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

const TownshipGallery = () => {
  // const [activeTab, setActiveTab] = useState(townshipTabs[0].value);
  const [activeTab, setActiveTab] = useState(townshipTabs[0].value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const getImagesByCategory = (category) => {
    if (category === "all") {
      return banners;
    }

    return banners.filter((item) => item.category === category);
  };

  return (
    <section id="TownshipGallery" className="township-gallery section-space">
      <div className="title-wrapper center mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
        <h2 className="title-mini page-title sec_title f-thin center">VTP township codename Pegasus
          <br />
          <span className="page-text-color">
            Township gallery
          </span>
        </h2>

      </div>

      <div className="title-wrapper mx-auto">

        <ul
          className="township-gallery-tabs nav nav-tabs primary_section justify-content-center"
          id="township_gallery_tab"
          role="tablist"
          data-aos="fade-left"
        >
          {townshipTabs.map((item) => (
            <li
              key={item.value}
              className="nav-item"
              role="presentation"
            >
              <button
                className={`btn ${activeTab === item.value ? "page-btn-tab-primary tab-primary active" : "page-btn-tab-secondary tab-secondary"}`}
                id={`${item.value}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${item.value}`}
                type="button"
                role="tab"
                aria-controls={item.value}
                aria-selected={activeTab === item.value}
                onClick={() => setActiveTab(item.value)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div
          ref={dropdownRef}
          className={`township-gallery-select ${isDropdownOpen ? "open" : ""
            }`}
        >
          <button
            type="button"
            className="township-gallery-select-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>
              {
                townshipTabs.find(
                  (item) => item.value === activeTab
                )?.title
              }
            </span>

            <ChevronDown size={18} />
          </button>

          <ul className="township-gallery-dropdown">
            {townshipTabs.map((item) => (
              <li
                key={item.value}
                className={
                  activeTab === item.value ? "active" : ""
                }
                onClick={() => {
                  setActiveTab(item.value);
                  setIsDropdownOpen(false);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row">
        <div
          className="tab-content"
          id="township_gallery_content"
          data-aos="fade-up"
        >
          {/* .filter((tab) => tab.value !== "masterplan-township") */}
          {townshipTabs
            .map((tab) => (
              <div
                key={tab.value}
                className={`tab-pane fade ${activeTab === tab.value ? "show active" : ""
                  }`}
                id={tab.value}
                role="tabpanel"
                aria-labelledby={`${tab.value}-tab`}
              >
                <GallerySlider
                  key={`${tab.value}-${activeTab === tab.value ? "active" : "inactive"}`}
                  images={getImagesByCategory(tab.value)}
                  fancyboxGroup={tab.value}
                />
              </div>
            ))}

          <div
            className={`tab-pane fade ${activeTab === "masterplan-township" ? "show active" : ""
              }`}
            id="masterplan-township"
            role="tabpanel"
            aria-labelledby="masterplan-township-tab"
          >
            <a
              href="/images/townshipGallery/RP-2A-1.webp"
              data-fancybox="masterplan-township "
              aria-label="View master plan"
            >
              <img
                className="township-img-master-plan"
                src="/images/townshipGallery/RP-2A-1-new.webp"
                alt="Master Layout"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownshipGallery;
