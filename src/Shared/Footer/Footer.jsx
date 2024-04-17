import { FaHotel } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div >
            <footer className="footer mt-10 p-10 bg-purple-500 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Hotels</a>
    <a className="link link-hover">Motels</a>
    <a className="link link-hover">Resorts</a>
    <a className="link link-hover">Vacation Rentals</a>
    <a className="link link-hover">Lodges</a>
    <a className="link link-hover">Guesthouses</a>
  </nav> 

  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">Property</a>
    <a className="link link-hover">Estate</a>
    
  </nav> 
  
  <nav className="pl">
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      
      <p className="text-xl"><FaHotel /></p>
      <p className="text-xl"><FaFacebook /></p>
      <p className="text-xl"><FaInstagram /></p>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;