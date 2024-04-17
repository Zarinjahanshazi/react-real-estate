import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
// import { ToastContainer, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { setDataInLocalStorage } from "../../utils/storage-manager";
import { setDataInLocalStorage } from "../../Shared/utils/storage-manager";
import { toast } from "react-toastify";
import MetaData from "../../Shared/MetaData";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  const from = location?.state?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name,photo,email,password);

    //  reset error and success
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "your password should have at least one uppercase characters"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "your password should have at least one LowerCase characters"
      );
      return;
    }

    // create user

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user created successfully");
        const user = result.user;
        setDataInLocalStorage("auth-info", {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        });

        toast.success("Registration Successful");

        // navigate after successful registration
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <MetaData title={"Register"} />
      <Navbar />

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
