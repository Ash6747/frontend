import React, { lazy, Suspense } from "react";

const TitleTop = lazy(() => import("../../assets/svg/TitleTop"));
const TitleTopGold = lazy(() => import("../../assets/svg/TitleTopGold"));
const TitleTopWhite = lazy(() => import("../../assets/svg/TitleTopWhite"));
const TitleBottom = lazy(() => import("../../assets/svg/TitleBottom"));
const TitleBottomGold = lazy(() => import("../../assets/svg/TitleBottomGold"));
const TitleBottomWhite = lazy(() => import("../../assets/svg/TitleBottomWhite"));

const SectionTitle = ({ type, text, subtile }) => {
  return (
    <div className="sec_title_container" data-aos="fade-up">
      <Suspense fallback={null}>
        {type === "gold" ? <TitleTopGold /> : type === "white" ? <TitleTopWhite /> : <TitleTop />}
      </Suspense>

      <div className={`title_border ${type}`}></div>
      <h2
        className={`sec_title ${type}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></h2>
      <div className={`title_border ${type}`}></div>

      <Suspense fallback={null}>
        {type === "gold" ? (
          <TitleBottomGold />
        ) : type === "white" ? (
          <TitleBottomWhite />
        ) : (
          <TitleBottom />
        )}
      </Suspense>

      {subtile && (
        <p
          className={`text-center sec_subtitle`}
          dangerouslySetInnerHTML={{ __html: subtile }}
        ></p>
      )}
    </div>
  );
};

export default SectionTitle;
