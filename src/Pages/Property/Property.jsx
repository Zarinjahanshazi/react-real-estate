import { useEffect } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Property = () => {

    useEffect(() =>{
        AOS.init({
            duration: "1000"
        });
    },[])
    return (
        <div>
            <Navbar></Navbar>

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
            <div   className="hero min-h-screen bg-base-200" data-aos="fade-left">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, tenetur?</p>
</div>

<div className="hero min-h-screen bg-base-200" data-aos="fade-right">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, tenetur?</p>
</div>

<div className="hero min-h-screen bg-base-200" data-aos="zoom-in">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default Property;