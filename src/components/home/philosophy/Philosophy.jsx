import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SectionTitle from "../../common/SectionTitle";
import "./Philosophy.css";
import { LuCompass as Compass, LuBuilding2 as Building2, LuHeartHandshake as HeartHandshake, LuStar as Star } from "react-icons/lu";

const philosophyData = [
  {
    icon: Compass,
    animation: "fade-right",
    alt: "VTP Realty philosophy – trust, quality and innovation in real estate",
  },
  {
    icon: Building2,
    animation: "fade-up",
    alt: "VTP Realty philosophy – creating value homes with modern amenities",
  },
  {
    icon: HeartHandshake,
    animation: "fade-left",
    alt: "VTP Realty philosophy – better design and lifestyle amenities",
  },
];

const PhilosophyCard = ({ item, icon: Icon, delay, animation }) => {
  return (
    <div
      className="col-md-4 col-sm-6 mb-4 mb-md-0"
      data-aos={animation || "fade-up"}
      data-aos-duration="1000"
      data-aos-delay={delay || 100}
    >
      <div className="philosophy-card">
        <div className="philosophy-content">
          <div className="philosophy-icon">
            <Icon />
          </div>

          <h4 className="philosophy-h4">{item.title}</h4>

          <span className="ov-list-break">
            <Star size={16} fill="currentColor" />
          </span>

          <p>{item.description}</p>

        </div>

      </div>
    </div>
  );
};

const BrandPhilosophy = ({ data }) => {
  const brandData = data?.brandData || [];

  return (
    <section className="brand-philosophy-wrapper section-space side-space">

        {/* Title */}
        <div className="text-center p-0 philosophy-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <h2 className="sec_title">
            <span className="sub_title-overview sub_title">
              Designed with purpose
            </span>
            <br />
            VTP brand philosophy
            <br />
          </h2>
        </div>

        {/* Cards */}
        <div className="row justify-content-center mt-5 g-md-4 g-xl-5">
          {brandData.map((item, index) => (
            <PhilosophyCard
              key={index}
              item={item}
              delay={100 + index * 150}
              image={philosophyData[index]?.image}
              animation={philosophyData[index]?.animation}
              alt={philosophyData[index]?.alt}
              icon={philosophyData[index]?.icon}
            />
          ))}
        </div>

      </section>
  );
};

export default BrandPhilosophy;
