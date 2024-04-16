import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const UpdateProfile = () => {

    const handleUpdate = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        console.log(email,password);
       
    }
    return (
        <div>
            <Navbar></Navbar>
            

            <div>
            <h2 className="text-3xl my-10 text-center">Update profile</h2>
          <form onSubmit={handleUpdate} className="card-body mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile URl</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
          </div>
          </form>
            </div>
            
            <Footer></Footer>
           
        </div>
    );
};

export default UpdateProfile;