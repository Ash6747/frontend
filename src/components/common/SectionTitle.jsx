import React, { lazy, Suspense } from "react";

const SectionTitle = ({ type, text, subtile }) => {
  return (
    <div className="sec_title_container" data-aos="fade-up">
      <div className={`title_border ${type}`}></div>
      <h2
        className={`sec_title ${type}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></h2>
      <div className={`title_border ${type}`}></div>

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
