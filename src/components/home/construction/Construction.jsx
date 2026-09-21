import { useRef, useState } from 'react';
import './Construction.css';

const Construction = () => {
    const frameRef = useRef(null);
    const [loadIframe, setLoadIframe] = useState(false);

    return (
        <section id="youtubeiframe" className="construction side-space section-space">

            <div className="construction-wrapper">

                <div className="title-wrapper bottom-border center" data-aos="fade-up">
                    <h2 className="page-text-color">
                        <span className="f-thin">Construction</span> Update
                    </h2>
                </div>

                <div className="row justify-content-center w-100">
                    <div className="col-lg-7 col-md-9 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="frame-wrapper youtube-placeholder" ref={frameRef} role="button" onClick={() => setLoadIframe(true)}>
                            {loadIframe ? (
                                <iframe
                                    id="video"
                                    title="Project Walkthrough"
                                    height="425px"
                                    width="100%"
                                    src="https://www.youtube.com/embed/vuECh_Nc9kM?si=UJydkFsnhuQJfgxf&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="youtube-placeholder">
                                    <img src="https://i.ytimg.com/vi/vuECh_Nc9kM/maxresdefault.jpg" alt="VTP Realty Video Thumbnail" loading="lazy" />
                                    <span className="play-button" aria-hidden="true">
                                        <svg width="65px" height="65px" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FF0000">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier"><defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#FF0000   "> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g>
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

export default Construction;