import Footer from "../../Shared/Footer/Footer";
import MetaData from "../../Shared/MetaData";
import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //TODO: Write logic to save the updated information to firebase
  };

  return (
    <div>
      {/* <MetaData title={"Update Profile"} /> */}
      <MetaData title={"Update Profile"}></MetaData>
      <Navbar />

      <div>
        <h2 className="text-3xl my-10 text-center">Update profile</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
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
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="font-semibold text-red-500">
                Email is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile URl</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <span className="font-semibold text-red-500">
                Photo URL is required
              </span>
            )}
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
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="font-semibold text-red-500">
                Photo URL is required
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
