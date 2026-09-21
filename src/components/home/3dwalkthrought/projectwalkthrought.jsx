import { useRef, useState } from "react";
import SectionTitle from "../../common/SectionTitle";

const Projectwalkthrought = () => {
  const [dolcevitaLoadIframe, setDolcevitaLoadIframe] = useState(false);
  return (
    <section id="3dwalk" className="shot side-space section-space">
      <div className="mb-5 shot-row">
        <SectionTitle text="VTP chrysos Walkthrough Video" />
      </div>
      <div className="row align-items-start justify-content-center">
        <div className="col-md-7">
          <div className="walkthrough_content_wrapper">
            <div
              className="frame-wrapper youtube-placeholder"
              role="button"
              onClick={() => setDolcevitaLoadIframe(true)}
            >
              {dolcevitaLoadIframe ? (
                <iframe
                  width="100%"
                  height="100%"
                  // src="https://www.youtube.com/embed/x0JVoM18giE?si=j2rNJ-bGDsx--oG2"
                  src="https://www.youtube.com/embed/_Bi6s0kQFKQ?si=PP14z1P6x5NjQwVd"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  data-aos="fade-right"
                />
              ) : (
                <div className="youtube-placeholder">
                  <img
                    // src="https://i.ytimg.com/vi/x0JVoM18giE/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVyhFMA8=&rs=AOn4CLDXneU-ErnKNERFkNfOEgLcwvTiWQ"
                    src="https://i.ytimg.com/vi/_Bi6s0kQFKQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGD4gZSgZMA8=&rs=AOn4CLDPLTaVE_SBiMdrt2DDl2tlKms3Xw"
                    alt="VTP Realty Video Thumbnail"
                    loading="lazy"
                  />
                  <span className="play-button" aria-hidden="true">
                    <svg
                      width="65px"
                      height="65px"
                      viewBox="0 -3 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#FF0000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-300.000000, -7442.000000)"
                            fill="#FF0000   "
                          >
                            {" "}
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              {" "}
                              <path
                                d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                                id="youtube-[#168]"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectwalkthrought;
