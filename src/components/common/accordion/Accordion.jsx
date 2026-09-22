import { useState, useEffect } from "react";
import { LuPlus, LuSparkle } from "react-icons/lu";
import PropTypes from "prop-types";
import "./Accordion.css";

const Accordion = ({
  items = [],
  defaultOpenIndex = 0,
  accordionId = "customAccordion",
  className = "",
}) => {
  const [activeAccordion, setActiveAccordion] = useState(defaultOpenIndex);

  useEffect(() => {
    const accordionEl = document.getElementById(accordionId);
    if (!accordionEl) return;

    const handleShow = (e) => {
      const targetId = e.target.id;
      const index = parseInt(targetId.replace(`${accordionId}-collapse-`, ""), 10);
      if (!isNaN(index)) {
        setActiveAccordion(index);
      }
    };

    const handleHide = (e) => {
      const targetId = e.target.id;
      const index = parseInt(targetId.replace(`${accordionId}-collapse-`, ""), 10);
      if (!isNaN(index)) {
        setActiveAccordion((prev) => (prev === index ? -1 : prev));
      }
    };

    accordionEl.addEventListener("show.bs.collapse", handleShow);
    accordionEl.addEventListener("hide.bs.collapse", handleHide);

    return () => {
      accordionEl.removeEventListener("show.bs.collapse", handleShow);
      accordionEl.removeEventListener("hide.bs.collapse", handleHide);
    };
  }, [accordionId]);

  return (
    <div className={`custom-accordion-wrapper ${className}`}>
      <div className="accordion custom-accordion-container" id={accordionId}>
        {items.map((item, index) => {
          const isOpen = activeAccordion === index;
          const collapseId = `${accordionId}-collapse-${index}`;
          const headingId = `${accordionId}-heading-${index}`;
          const itemNum = item.num || (index < 9 ? `0${index + 1}` : `${index + 1}`);
          const itemTitle = item.question || item.title || "";
          const itemContent = item.answer || item.description || item.content || "";

          return (
            <div
              key={index}
              className={`accordion-item custom-accordion-item ${isOpen ? "open active" : "closed"
                }`}
            >
              <h3 className="accordion-header" id={headingId}>
                <button
                  className={`accordion-button custom-accordion-btn ${isOpen ? "" : "collapsed"
                    }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-controls={collapseId}
                >
                  <span className="custom-accordion-num">{itemNum}</span>
                  <span className="custom-accordion-title">{itemTitle}</span>
                  <span className="custom-accordion-icon-wrap">
                    <LuPlus className="custom-accordion-icon" />
                  </span>
                </button>
              </h3>
              <div
                id={collapseId}
                className={`accordion-collapse collapse custom-accordion-collapse ${isOpen ? "show" : ""
                  }`}
                aria-labelledby={headingId}
                data-bs-parent={`#${accordionId}`}
              >
                <div className="accordion-body custom-accordion-body">
                  {typeof itemContent === "string" ? (
                    <p className="mb-0">{itemContent}</p>
                  ) : (
                    itemContent
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string,
      question: PropTypes.string,
      title: PropTypes.string,
      answer: PropTypes.node,
      description: PropTypes.node,
      content: PropTypes.node,
    })
  ),
  defaultOpenIndex: PropTypes.number,
  accordionId: PropTypes.string,
  badgeText: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Accordion;
