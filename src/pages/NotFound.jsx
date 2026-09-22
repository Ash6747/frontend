import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="error_page d-flex flex-column align-items-center justify-content-center min-vh-100 text-center px-3" style={{ background: "#1E150D", color: "#F7C985" }}>
            <h1 className="display-1 fw-bold mb-3">404</h1>
            <p className="fs-4 mb-4 text-white">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-outline-light px-4 py-2" style={{ borderColor: "#F7C985", color: "#F7C985", borderRadius: "30px" }}>
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
