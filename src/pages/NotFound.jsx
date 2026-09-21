import ErrorPage from '../assets/images/general/errorpage.webp';

const NotFound = () => {
    return (
        <>
            <div className="error_page">
                <a href="/" 
                aria-label='Back to Home'
                >
                    <div className="">
                        <img
                            className="fill_img"
                            src={ErrorPage}
                            alt="pagenot found"
                            loading="lazy"
                        />
                    </div>
                </a>
            </div>
        </>
    );
};

export default NotFound;
