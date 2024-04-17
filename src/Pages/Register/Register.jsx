import { Link, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
// import { ToastContainer, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { setDataInLocalStorage } from "../../utils/storage-manager";
// import { setDataInLocalStorage } from "../../Shared/utils/storage-manager";
// import { toast } from "react-toastify";
import MetaData from "../../Shared/MetaData";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  const from = location?.state?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(name,email,password,photo)
    
     //  reset error and success
    setRegisterError("");
    setSuccess("");


    if(name === "" || email === "" || password === "" || photo === ""){
      console.log("Input field must not be empty.");
    }else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      console.log("Password should contain both uppercase and lowercase characters.");
    
    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      console.log("Please provide an valid Email.");
    }else if(password.length < 6){
      console.log("Password must be at least 6 characters.");
    }
    else{
      createUser(email, password)
      .then((result)=>{
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo
        }).then(() => {
        }).catch((error) => {
          console.log(error)
        });
        console.log("Account created successfully.")
        console.log(result.user)
        e.target.reset();
      })
      .catch((error)=>{
        console.log("An account already exists!")
      })
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* <Helmet>
        <title>Register</title>
      </Helmet> */}
      {/* <MetaData title={"Register"} /> */}
      <Navbar></Navbar>


      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form
          onSubmit={handleRegister}
          className="card-body mx-auto md:w-3/4 lg:w-1/2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <div className="relative  mb-4">
              <input
                className="border-red-600 w-full py-2 px-4"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                id=""
                required
              />
              <span
                className="absolute top-3 right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        {registerError && <p className="text-red-700">{registerError}</p>}

        {success && <p className="text-green-700">{success}</p>}

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className=" font-bold text-red-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
