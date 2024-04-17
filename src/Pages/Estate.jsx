import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


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
            <Helmet>
        <title>Estate Details {id}</title>
      </Helmet>
            
            

                <div  className="hero rounded-2xl mb-10 min-h-screen" style={{backgroundImage: `url(${land.image})`}}>
                <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
                <div className="hero-content rounded-2xl text-center text-neutral-content">
                    <div className="max-w-md">
                    <div className="bg-slate-500 p-8 rounded-[30px]">
                    <h1 className="mb-5 text-2xl font-bold text-red-400">{land.estate_title}</h1>
                    <p className="mb-5">{land.description}</p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p><span className="text-red-400">Price:</span>{land.price}</p>
                    <p><span className="text-red-400">Status:</span>{land.status}</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p><span className="text-red-400">Area:</span>{land.area}</p>
                    <p><span className="text-red-400">Location:</span>{land.location}</p>
                    </div>
                    <p className='border-b-2'></p>
                    <div className='flex flex-col md:flex-row'>
                    <span className="text-red-400">Facilities:</span>
                    {
                        land.facilities?.map((facilitie) => <p className="   mr-3 ">{facilitie}</p>)
                    }
                    </div>
                    <p className='border-b-2'></p>
                    <button className="btn btn-outline btn-info m-2">{land.segment_name}</button>
                    
                    <Link to='/'><button className="btn w-full m-2 btn-primary">Back to Home</button></Link>
                    </div>
                    </div>
                </div>
                </div>




            
        </div>
    );
};

export default Estate;