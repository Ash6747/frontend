import { lazy, Suspense } from "react";
import BrandBuilding from "../../../assets/images/brand/building.webp";
import BrandMsg from "../../../assets/images/brand/no_1.webp";
import './Brand.css';

const BrandHash = lazy(() => import("../../../assets/images/brand/BrandHash"));

const Brand = () => {
    return (
        <section className="no1_sec_wrap">
            <div className="col-md-6 h-100">
                <img
                    data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"
                    alt="Properties In Pune | Real Estate Developers In Pune"
                    loading="lazy" width="1033" height="946"
                    className="no1_building aos-init aos-animate"
                    style={{ color: "transparent" }}
                    src={BrandBuilding} />
            </div>

            <img data-aos="fade-left" data-aos-delay="300" data-aos-duration="500" alt="Pune's no.1 real estate brand in Pune - VTP Realty" loading="lazy"
                width="100%" height="100%" decoding="async" className="no1_copy aos-init aos-animate"
                style={{ color: "transparent" }} src={BrandMsg} />
            <div>
                <Suspense fallback={null}>
                    <BrandHash />
                </Suspense>
            </div>
        </section>
    )
}

export default Brand;