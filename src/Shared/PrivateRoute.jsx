import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const PrivateRoute = ({children}) => {
    <Navbar></Navbar>
   
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
   

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>

    }
    
    if(user){
        return children;
    }
   
    // return <Navigate state={location.pathname} to='/login'></Navigate>
    return <Navigate state={location} replace to="/login"></Navigate>;

    
};

export default PrivateRoute;