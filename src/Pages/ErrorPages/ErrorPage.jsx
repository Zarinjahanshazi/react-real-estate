import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-6xl text-center mx-auto font-poppins">
            <h2>OOps</h2>
            <p>Page Not Found</p>
            <Link to ='/'><button className="text-red-600">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;