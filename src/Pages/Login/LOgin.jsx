import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const LOgin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log('error',error.message)
        })

    }


    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);



    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            //navigate after login
            navigate(location ?.state ? location.state : '/');
        
        
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
          <form onSubmit={handleLogin} className="card-body mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleSignIn} className="btn mt-6 btn-secondary">Google Login</button>
        </div>
      </form>

      <p className="text-center mt-4">Do not have a account? <Link className=" font-bold text-red-600" to ='/register'>Register</Link></p>
         
          </div>
        </div>
    );
};

export default LOgin;