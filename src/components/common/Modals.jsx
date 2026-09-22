import { useRef, useEffect } from "react";
import { Modal } from "bootstrap";
import { LuPhone as Phone, LuHeadphones as Headphones } from "react-icons/lu";
import ContactForm from "./ContactForm";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ color: "#25D366" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.95-.19-.3A8.2 8.2 0 0 1 3.8 11.9c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.23-.17-.48-.3z" />
  </svg>
);

const Modals = ({ data }) => {
  const thankYou = useRef();
  const hasShown = useRef(false); // prevent multiple triggers

  useEffect(() => {
    const handleMouseLeave = (e) => {
      const modalElement = document.getElementById("enquirynowmodal");

      // check if modal exists AND already open
      const isModalOpen = modalElement?.classList.contains("show");

      if (e.clientY <= 0 && !hasShown.current && !isModalOpen) {
        hasShown.current = true;

        if (modalElement) {
          const modal = new Modal(modalElement);
          modal.show();
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="modals-wrapper">
      <div className="float-button-desktop">
        <a
          className="whatsapp-icon"
          target="_blank"
          href={data?.whatsappURL}
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <WhatsAppIcon size={40} />
        </a>
      </div>

      {/* Disclaimer Modal */}
      <div className="modal fade" id="disclaimerModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">Disclaimer</h5>
              <button
                type="button"
                className="page-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close disclaimer modal"
              ></button>
            </div>
            <div
              className="modal-body"
              dangerouslySetInnerHTML={{
                __html: data?.Disclaimer || "",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <div className="modal fade" id="termsModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">Terms and Conditions</h5>
              {/* <button
                type="button"
                className="page-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#enquirynowmodal"
                className="text-decoration-underline  bold-text"
                aria-label="Close Terms and Conditions modal"
              >
                <strong className="clsedPopUp">x</strong>
              </a>
            </div>
            <div
              className="modal-body"
            >
              <ul>
                <li>
                  To protect your privacy and peace of mind, the VTP Direct
                  Program offers a no–follow-up experience. Customers enrolled
                  in the program will receive an additional discount over and
                  above all ongoing offers at VTP Realty. You must obtain your
                  exclusive coupon code and share it only at the project site
                  office reception. The code must be successfully validated in
                  the official VTP system to activate your benefits.
                </li>
                <li>
                  To avail the offer benefits, the site visit must be completed
                  within 15 days from the date the lead is received.
                  Registration and booking for the selected project must be
                  completed within 30 days from the date of the site visit.
                </li>
                <li>
                  If the VTP Direct site visit is not completed within 15 days
                  from registration, the offer will no longer remain valid.
                  After this period, the VTP Realty presales team may contact
                  you for regular project updates and assistance.
                </li>
                <li>
                  This offer is valid only for customers visiting the project
                  site directly under the VTP Direct Program.
                </li>
                <li>
                  If you have already visited any VTP Realty project sales
                  office with a channel partner, you cannot opt for the VTP
                  Direct Program for 30 days from the date of your last visit.
                </li>
                <li>
                  Do not share your Unique ID Code with anyone. If you are
                  contacted by any third-party channel partners or agents
                  claiming to represent VTP Realty and you choose to visit
                  through them, this offer will be considered invalid.
                </li>
                <li>
                  All official communication related to this program will be
                  sent only through verified VTP Realty Email, WhatsApp, and SMS
                  channels.
                </li>
                <li>
                  This offer is non-transferable and valid only for the customer
                  to whom it has been issued. It cannot be assigned to any other
                  individual, including relatives or friends. The VTP Direct
                  Program benefits cannot be clubbed with Loyalty Benefits and
                  Referral Programs.
                </li>
                <li>
                  VTP Realty management reserves the right to modify, withdraw,
                  or discontinue any or all offers at its sole discretion
                  without prior notice.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade enquirynow-modal"
        id="enquirynowmodal"
        tabIndex="-1"
        aria-labelledby="enquirynowmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <img
              className="project-contact-ban"
              src="/videos/banner/ban-1.webp"
              alt="Chrysos VTP Luxe Banner Animation"
              loading="lazy"
            />
            <button
              type="button"
              className="page-btn-close modal-close-btn"
              data-bs-dismiss="modal"
              aria-label="Close enquiry modal"
              ref={thankYou}
            ></button>
            <div className="modal-body">
              <ContactForm closePopup={thankYou} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="mobile-btns">
        <ul className="mob-foot-list">
          <li className="mob-foot-li">
            <a
              className="bottom-btn"
              href="tel:07969292608"
              aria-label="Call sales team at 07969292608"
            >
              <Phone size={20} />
            </a>
          </li>
          <li className="mob-foot-li">
            <button
              className="page-btn primary bottom-btn bottom-btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enquirynowmodal"
              aria-label="Open Get Quote form modal"
            >
              GET QUOTE
            </button>
          </li>
          <li className="mob-foot-li">
            <a
              className="whatsapp-logo bottom-btn"
              target="_blank"
              href={data?.whatsappURL}
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <span>
                <WhatsAppIcon size={22} />
              </span>
            </a>
          </li>
          <li className="mob-foot-li">
            <a
              className="pre-con"
              target="_blank"
              href="#/"
              rel="noopener noreferrer"
              aria-label="Open Premium Connect section"
            >
              <Headphones size={24} />
              <span>
                <b className="d-block">PREMIUM</b>
                CONNECT
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* <PopupModal /> */}
    </section>
  );
};

export default Modals;
