import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
// import { CiLinkedin } from "react-icons/ci";
// import { FaSnapchat } from "react-icons/fa";


const About = () => {
    return (
        <div>
            <Helmet>
        <title>About Us</title>
      </Helmet>
        
            <div className="mt-10 text-center">
                <p className="text-[16px] md:text-2xl">About Us</p>
                <p className="text-black">Welcome to Ocean Heaven, where azure skies meet shimmering seas. Nestled along pristine coastlines, our hotel offers a sanctuary of tranquility and luxury. Indulge in spacious accommodations, breathtaking ocean views, and impeccable service. Dive into relaxation, adventure, and culinary delights, as we make your stay a heavenly experience.</p>

                {/* <div>
                    <p className="text-[16px] md:text-xl">contact With us via</p>
                    <div className="flex flex-col md:flex-row items-center  gap-4">
                        <p><CiLinkedin /></p>
                        <p><FaSnapchat /></p>
                    </div>
                </div> */}
            
            </div>
        </div>
    );
};

export default About;