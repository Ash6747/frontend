import { useEffect } from "react";
import { Modal } from "bootstrap";

const PopupModal = ({ data }) => {
  useEffect(() => {
    const modalElement = document.getElementById("welcomeModal");
    const modal = new Modal(modalElement);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 10) {
        modal.show();
        window.removeEventListener("scroll", handleScroll); // show only once
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      modal.dispose();
    };
  }, []);

  const handleCloseModal = () => {
    const modalElement = document.getElementById("welcomeModal");
    const modal = Modal.getInstance(modalElement);
    if (modal) modal.hide();
  };

  return (
    <div
      className="modal fade"
      id="welcomeModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              aria-label="Close exclusive offer pop-up modal"
            ></button>
            {/* <a href={data[0]?.url} rel="noreferrer" target="black"> */}
              <img
                className="popup-img"
                src={`${data[0]?.OfferImage.data.attributes.url}`}
                alt="Chrysos VTP Luxe Exclusive Offer Announcement"
                loading="lazy"
              />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
