import Footer from "../../Shared/Footer/Footer";
// import MetaData from "../../Shared/MetaData";
// import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { updateUserData } from "../../Shared/utils/firebase-manager";
// import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../../Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
  const { user,setUser,profilePicture } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      profilePicture(data.displayName,data.photoURL)
      .then(() =>{
        setUser({...user,displayName:data.displayName,photoURL:data.photoURL});
      })
      toast.success("Profile updated successfully");
      // consol("Profile updated successfully");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      // console.log(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Ocean Heaven|update profile</title>
      </Helmet>
      {/* <MetaData title={"Update Profile"} />
      <MetaData title={"Update Profile"}></MetaData> */}
      

      <div>
      

        <h2 className="text-3xl my-10 text-center">Update profile</h2>
        <div className="flex justify-center">
          <img className="w-[200px] object-cover h-[200px] rounded-2xl"  src={user?.photoURL} alt="" />
          
        </div>
        <div className="text-center">
        <p>Name:{user?.displayName}</p>
          <p>PhotoURL:{user?.photoURL}</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body mx-auto md:w-3/4 lg:w-1/2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="displayName"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              {...register("displayName")}
            />
            {/* {errors.displayName && (
              <span className="font-semibold text-red-500">
                Name is required
              </span>
            )} */}
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
              defaultValue={user?.email}
              {...register("email")}
              disabled
            />
            {/* {errors.email && (
              <span className="font-semibold text-red-500">
                Email is required
              </span>
            )} */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URl</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered"
              defaultValue={user?.photoURL}
              {...register("photoURL")}
            />
            {/* {errors.photo && (
              <span className="font-semibold text-red-500">
                Photo URL is required
              </span>
            )} */}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default UpdateProfile;
