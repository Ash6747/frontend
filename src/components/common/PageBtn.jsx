import { useRef, lazy, Suspense } from "react";
import Pdf from "../../assets/images/general/pdf";

const PageBtnBg = lazy(() => import("../../assets/svg/PageBtnBg"));
const PageBtnArrow = lazy(() => import("../../assets/svg/PageBtnArrow"));
const Submit = lazy(() => import("../../assets/images/general/Submit"));

const PageBtn = ({ type="", text, isPdf, isSubmit, className='' }) => {
  const btnRef = useRef(null);

  return (
    <button
      ref={btnRef}
      className={`page_btn ${type} ${className}`}
      data-aos="fade-up"
      data-aos-delay="200"
      data-bs-toggle="modal"
      data-bs-target="#enquirynowmodal"
      onClick={() => {
        localStorage.setItem("downloadBrochure", "yes");
      }}
    >

      {type === "gold" && (
        <Suspense fallback={null}>
          <PageBtnBg
            className="page_btn-bg"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          />
        </Suspense>
      )}
      <div className="page_btn-content center-flex">
        <span className={`page_btn-text ${type === "gold" ? "gold-text" : ""}`}>
          {text} {isPdf && <Suspense fallback={null}><PageBtnArrow /></Suspense>} {isSubmit && <Suspense fallback={null}><Submit /></Suspense>}
        </span>
      </div>
    </button>
  );
};

export default PageBtn;
