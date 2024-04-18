import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from "react-helmet-async";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
// import { setDataInLocalStorage } from "../../utils/storage-manager";
// import { setDataInLocalStorage } from "../../Shared/utils/storage-manager";
// import { toast } from "react-toastify";
import MetaData from "../../Shared/MetaData";

const LOgin = () => {
  // const [user,setUser] = useState(null);
  const { signIn,googleLogin,updateProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("location in the login page", location);

  

  const auth = getAuth(app);
  // const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("hello")
      googleLogin()
      .then((result) => {
        toast.success("Account successfully login.");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);
      })
      .catch((error) => {
        toast.error("Something was wrong.");
      })
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        updateProfile(user.displayName,user.photoURL);
        
        // setDataInLocalStorage("auth-info", {
        //   email: user?.email,
        //   displayName: user?.displayName,
        //   photoURL: user?.photoURL,
        // });

        toast.success("Login successfully");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);

        //navigate after login
        // navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        const user = result.user;
        // setDataInLocalStorage("auth-info", {
        //   email: user?.email,
        //   displayName: user?.displayName,
        //   photoURL: user?.photoURL,
        // });
        e.target.reset();
        toast.success("Login successfully");
        setTimeout(() => {
          navigate(location.state ? location.state : "/")
        }, 1000);

        //navigate after login
        // navigate(from);
      })
      .catch((error) => {
        toast.error('incorrect email or password');
      });
  };

  return (
    <div>
      <Helmet>
        <title>Ocean Heaven|Login</title>
      </Helmet>
      <ToastContainer />
      <MetaData title={"Login"} />
      
      <div>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form
          onSubmit={handleLogin}
          className="card-body mx-auto md:w-3/4 lg:w-1/2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn mt-6 btn-secondary"
            >
              Google Login
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn mt-6 btn-secondary"
            >
              Github Login
            </button>
            {/* {
                user && <div>
                    <img src={user.photoURL} alt="" />
                </div>
            } */}
          </div>
        </form>

        <p className="text-center mt-4">
          Do not have a account?{" "}
          <Link className=" font-bold text-red-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LOgin;
