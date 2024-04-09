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