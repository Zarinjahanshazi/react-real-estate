import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";


const Estate = () => {
    const {id} = useParams();
    const lands = useLoaderData();

    const idInt = parseInt(id);
    const land = lands.find(land => land.id === idInt);
    console.log(land.title)
    // const [land, setLand] = useState([]);

    // useEffect(() =>{
    //     fetch('estate.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    // console.log(id,facilities)
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className=" lg:grid lg:grid-cols-2 gap-10">
            <div>
                        <img className="rounded-2xl w-[700px] h-[600px]" src={land.image} alt="" />
                </div>
                <div className="col-span-3">
                <h2 className="text-5xl">{land.description}</h2>
                <p>{id}</p>
                </div>
                <div className='flex'>
                        <h1 className='flex gap-2 items-center'><span className="text-base">facilities:</span>
                        {
                        land.facilities?.map((facilitie,idx) => <p key={idx} className='flex'><span><p className=" text-[#23BE0A]  mr-1">{facilitie}</p></span></p>)
                    }
                        </h1>
                    </div>
            </div> */}

                <div  className="hero rounded-2xl mb-10 min-h-screen" style={{backgroundImage: `url(${land.image})`}}>
                <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
                <div className="hero-content rounded-2xl text-center text-neutral-content">
                    <div className="max-w-md">
                    <div className="bg-slate-500 p-8 rounded-[30px]">
                    <h1 className="mb-5 text-2xl font-bold text-red-400">{land.estate_title}</h1>
                    <p className="mb-5">{land.description}</p>
                    <div className="items-center">
                    <div className="flex justify-center gap-4">
                    <p><span className="text-red-400">Price:</span>{land.price}</p>
                    <p><span className="text-red-400">Status:</span>{land.status}</p>
                    </div>
                    <div className="flex justify-center gap-4">
                    <p><span className="text-red-400">Area:</span>{land.area}</p>
                    <p><span className="text-red-400">Location:</span>{land.location}</p>
                    </div>
                    </div>
                    
                    <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
                    </div>
                    </div>
                </div>
                </div>




            <Footer></Footer>
        </div>
    );
};

export default Estate;