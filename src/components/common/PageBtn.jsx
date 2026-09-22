import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const PageBtn = ({ type = "", text, isPdf, isSubmit, className = '' }) => {
  const btnRef = useRef(null);

  return (
    <button
      ref={btnRef}
      className={`page-btn primary ${type} ${className}`}
      data-aos="fade-up"
      data-aos-delay="200"
      data-bs-toggle="modal"
      data-bs-target="#enquirynowmodal"
      onClick={() => {
        localStorage.setItem("downloadBrochure", "yes");
      }}
    >
      <div className="page_btn-content center-flex">
        <span className={`page_btn-text ${type === "gold" ? "gold-text" : ""}`}>
          {text} {(isPdf || isSubmit) && <ArrowRight size={18} className="ms-2" />}
        </span>
      </div>
    </button>
  );
};

export default PageBtn;
