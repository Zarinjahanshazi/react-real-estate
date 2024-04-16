import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import EstateCard from "../EstateCard";


const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <Navbar></Navbar>

            {/* banner */}

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[500px] rounded-2xl">
                    <img src="https://i.ibb.co/MDNcYkS/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kem.jpg" className="w-full rounded-2xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full h-[500px] rounded-2xl">
                    <img src="https://i.ibb.co/ygmtK2p/view-pool-hotel-ocean-water.jpg" className="w-full rounded-2xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full h-[500px] rounded-2xl">
                    <img src="https://i.ibb.co/f8XdVBw/beautiful-outdoor-swimming-pool-with-coconut-palm-tree.jpg" className="w-full rounded-2xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full h-[500px] rounded-2xl">
                    <img src="https://i.ibb.co/cQLpWj5/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-vis.jpg" className="w-full rounded-2xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
                {/* estate */}
                <div className="text-center m-10 ">
                    <p className=" font-bold text-2xl">our Hospitality</p>
                    <p className="text-base">Welcome to Ocean Heaven, where azure waves meet luxurious comfort. Enjoy breathtaking views, impeccable service, and unforgettable experiences by the sea.</p>

                </div>
            <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
                {
                    estates.map( estate =><EstateCard estate={estate} key={estate.id}></EstateCard>)
                }

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;