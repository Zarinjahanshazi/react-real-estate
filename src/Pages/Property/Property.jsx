import { useEffect } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from "react-helmet-async";

import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Property = () => {

    useEffect(() =>{
        AOS.init({
            duration: "2000"
        });
    },[])
    return (
        <div>
          <Helmet>
        <title>Property</title>
      </Helmet>
            

            <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={2}
      
    >
      <SwiperSlide>
        <img src="https://i.ibb.co/nm6wW5K/light-garden-luxury-pool-nature.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/zGVttjB/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/HGf92wS/leisure-beautiful-health-garden-landscape.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/s9Mcr23/hotel-reflected-water.jpg" alt="" />
      </SwiperSlide>
      
    </Swiper>
            </div>
            <div   className="hero my-10 bg-base-200" data-aos="fade-up">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/ygmtK2p/view-pool-hotel-ocean-water.jpg" className="w-[100%] md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hotels</h1>
      <p className="py-6"> Where dreams meet the sea. Dive into luxury, unwind with stunning views, and immerse yourself in an oasis of serenity and comfort.</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>



<div className="hero my-10 bg-base-200" data-aos="fade-up" >
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/7CkvhKc/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration.jpg" className="w-[100%] md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Motels</h1>
      <p className="py-6">Ocean Heaven Motel: Your coastal retreat. Experience comfort by the shore with stunning ocean vistas, warm hospitality, and a serene ambiance for a memorable stay.</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>



<div className="hero my-10 bg-base-200" data-aos="fade-up" >
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/X8Npxsr/colonial-style-house-night-scene.jpg" className="w-[100%] md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> Resorts</h1>
      <p className="py-6">Your gateway to paradise. Indulge in luxury amidst coastal serenity. Enjoy pristine beaches, world-class amenities, and unforgettable moments by the sea.</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
<div className="hero my-10 bg-base-200" data-aos="fade-up">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/rMpWfb4/spa-salon-with-beach-view.jpg" className="w-[100%] md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> Vacation Rentals</h1>
      <p className="py-6">Escape to coastal bliss with our exquisite rentals. Enjoy ocean views, relaxation, and cherished memories in paradise.</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
<div className="hero my-10 bg-base-200" data-aos="fade-up">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/VVXrWGB/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tek.jpg" className="w-[100%] md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> Lodges</h1>
      <p className="py-6"> Nestled amidst nature embrace, discover tranquility, comfort, and adventure. Experience serenity and rejuvenation in our rustic yet luxurious lodgings.</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
<div className="hero my-10 bg-base-200" data-aos="fade-up" >
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/f8XdVBw/beautiful-outdoor-swimming-pool-with-coconut-palm-tree.jpg" className="md:max-w-sm w-[100%] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Guesthouses</h1>
      <p className="py-6">Experience warmth, comfort, and personalized hospitality. Immerse yourself in seaside charm and create cherished memories in our welcoming accommodations.</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Property;