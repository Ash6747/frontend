import "./UnitPlans.css";
import { LuSparkles as Sparkles, LuStar as Star } from "react-icons/lu";

const UnitPlans = () => {
  const bhkPlans = [
    {
      title: "2 BED",
      area: "671 - 809 Sq.Ft",
      subtitle: "Premium Residences",
      features:
        "1 Bedroom + Living + Dining Kitchen + Family Area + Storage Servant Room + Private Garden + Party Terrace",
    },
    {
      title: "3 BED",
      area: "1009 - 1093 Sq.Ft",
      subtitle: "Premium Residences",
      features:
        "2 Bedrooms + Living + Dining Modular Kitchen + Balcony Utility + Study Room",
    },
    {
      title: "Simplex",
      area: "1342 - 1462 Sq.Ft",
      subtitle: "Premium Residences",
      features:
        "3 Bedrooms + Hall + Dining Kitchen + Utility + Store Room Balcony + Servant Room",
    },
    {
      title: "Duplex",
      area: "1462 Sq.Ft",
      subtitle: "Premium Residences",
      features:
        "3 Bedrooms + Hall + Dining Kitchen + Utility + Store Room Balcony + Servant Room",
    },
  ];

  const overviewList = [
    {
      icon: Sparkles,
      breakIcon: Star,
      title: "Prive Villa",
      area: "1835.80 Sq.Ft",
      // description: "Exclusive residences crafted for privacy, sophistication, and modern family living.",
    },
    {
      icon: Sparkles,
      breakIcon: Star,
      title: "Prive Villa Max",
      area: "2044.73 Sq.Ft",
      // description: "The most spacious villa collection designed for an unmatched luxury lifestyle.",
    },
    {
      icon: Sparkles,
      breakIcon: Star,
      title: "Aristo Villa",
      area: "2453.22 Sq.Ft",
      // description: "Elegant private villa residences thoughtfully designed with expansive layouts and premium living experiences.",
    },
    {
      icon: Sparkles,
      breakIcon: Star,
      title: "Aristo Villa Max",
      area: "2531.37 Sq.Ft",
      // description: "Enhanced villa residences offering larger spaces, refined interiors, and elevated luxury.",
    },
  ];

  return (
    <section
      id="floor_plan"
      className="unitplans-section"
    >
        <div className="unitplans_content side-space section-space">
          <div className="row justify-content-center ">
            <div className="col-12 col-lg-9">
              <div className="title-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="sec_title mx-auto">A ‘Never Before’ way of living, made beautifully real</h2>
              </div>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                Exclusive 3 and 4 BHK residences planned as private villas in the sky, spread across two thoughtfully connected levels and framed with floor-to-ceiling glass that brings the sky into your home. The result is a home that is unmistakably aligned with your stature, allowing family living, hosting, and everyday comfort to sit naturally within a more elevated standard.
              </p>
            </div>
          </div>
        </div>
        <div className="side-space">
          <ul className="ov-list-container gradient-border-mask">
            {overviewList.map((item, index) => {
              const Icon = item.icon;
              const BreakIcon = item.breakIcon;

              return (
                <li className="ov-list-item" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                  <div className="ov-list-icon">
                    <Icon size={24} />
                  </div>

                  <h3 className="ov-list-title">
                    {item.title}
                  </h3>
                  {/* <h5 className="ov-list-subtitle">
                    {item.area}
                  </h5> */}

                  <span className="ov-list-break">
                    <BreakIcon size={16} fill="currentColor" />
                  </span>

                  {/* <p className="ov-list-desc">
                    {item.description}
                  </p> */}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
  );
};

export default UnitPlans;
