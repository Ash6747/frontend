import './township.css'
const Township = ({ data }) => {
    return (
        <section id="township" className="township_wrapper side-space section-space">
            <div className="container-fluid">
                <div className="township-row row">
                    <div className="col-md-12 p-0" data-aos="fade-up">
                        <div>
                            <div className="title-wrapper  aos-init aos-animate">
                                <h2 className="page-title sec_title">{data?.title1}{" "}<br /> <span className="page-text-color"> {data?.title2}</span></h2>
                            </div>
                            <div className="township-content">
                                <p className="m-0">
                                    {data?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-0">
                        <div className="th-wrapper">
                            <div className="flex-column center-flex h-100">
                                <div className="title-wrapper aos-init aos-animate" data-aos="fade-up">
                                    <h2 className="page-title sec_title">{data?.highlightsTitle1}{" "} <br /> <span className="page-text-color">{data?.highlightsTitle2}</span></h2>
                                </div>
                            </div>
                            <div className="township-highlights" data-aos="fade-up">
                                <ul className="township-ul" data-aos="fade-up">
                                    {data?.townshipHighlights?.map((highlight, index) => {
                                        return (
                                            <li key={index} className="township-box">
                                                <div className="box-title">
                                                    <img src={`${highlight.icon.data.attributes.url}`} alt={highlight.title} loading="lazy" />
                                                </div>
                                                <p className="m-0">{highlight.title}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Township;
