import { lazy, Suspense } from "react";
import SectionTitle from "../../common/SectionTitle";

import "./Promise.css";

const Promise1 = lazy(() => import("../../../assets/images/promise/Promise1"));
const Promise2 = lazy(() => import("../../../assets/images/promise/Promise2"));
const Promise3 = lazy(() => import("../../../assets/images/promise/Promise3"));
const Promise4 = lazy(() => import("../../../assets/images/promise/Promise4"));
const Promise5 = lazy(() => import("../../../assets/images/promise/Promise5"));
const Promise6 = lazy(() => import("../../../assets/images/promise/Promise6"));
const Promise7 = lazy(() => import("../../../assets/images/promise/Promise7"));

const iconComponents = [
  <Promise1 />,
  <Promise2 />,
  <Promise3 />,
  <Promise4 />,
  <Promise5 />,
  <Promise6 />,
  <Promise7 />,
];

const Promise = ({ data }) => {
  const brandData = data?.brandData || [];

  return (
    <Suspense fallback={null}>
      <section id="promise" className="promise-section section-space side-space">
        {/* DESKTOP */}
        <div className="row p-0 promise-row g-3 desktop">
          {/* LEFT column */}
          <div
            className="col-4 m-0 p-0 d-flex flex-column justify-content-start margint gap-xxl-5 left"
            data-aos="fade-right"
          >
            {brandData.slice(0, 3).map((item, index) => (
              <div className={`card ${index === 0 ? "card-3" : "card-2"} align-items-end`} key={index}>
                {iconComponents[index]}
                <h3>{item.title}</h3>
                <p className="text-end">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CENTER column */}
          <div className="col-4 m-0 p-0 d-flex flex-column gap-xxl-5 gap-xl-5 gap-lg-5 gap-md-5 gap-sm-5">
            <div className="card card-1 align-items-center">
              {iconComponents[3]}
              <h3>{brandData[3]?.title}</h3>
              <p className="text-center">{brandData[3]?.description}</p>
            </div>
            <div className="main-content1" data-aos="fade-up">
              <div className="promise-heading px-3">
                <SectionTitle text="vtp <br />brand Promise" />
              </div>
            </div>
          </div>

          {/* RIGHT column */}
          <div
            className="col-4 m-0 p-0 d-flex flex-column justify-content-start margint gap-xxl-5 right"
            data-aos="fade-left"
          >
            {brandData.slice(4, 7).map((item, index) => (
              <div className={`card ${index === 0 ? "card-3" : "card-2"}`} key={index + 4}>
                {iconComponents[index + 4]}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="promise-row-mobile p-0 mobile">
          <div className="row m-0 w-100">
            <div className="main-content1" data-aos="fade-up">
              <div className="promise-heading d-flex justify-content-center align-items-center flex-column">
                <SectionTitle text="vtp <br />brand Promise" />
              </div>
            </div>
          </div>

          {Array.from({ length: Math.ceil(brandData.length / 2) }).map((_, rowIndex) => (
            <div className="row m-0 gap-2 promise-monile-row" key={rowIndex}>
              {brandData.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => {
                const cardIndex = rowIndex * 2 + index;
                return (
                  <div className={`col-md-3 p-0 card card-${cardIndex + 1}`} key={cardIndex} data-aos="fade-up">
                    {iconComponents[cardIndex] || (<div className="missing-icon">Icon</div>)}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default Promise;
