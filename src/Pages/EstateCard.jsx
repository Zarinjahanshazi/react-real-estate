import { Link } from "react-router-dom";


const EstateCard = ({estate}) => {
    const {id,estate_title,image,segment_name,description,price,status,area,location,facilities} = estate;
    return (
        <div><div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <div className="flex gap-4 text-[#17BE0A]">
            <p>{segment_name}</p>
            <p>{status}</p>
          </div>
          <p><span className="text-purple-500">Location:</span>{ location}</p>

          {

            description.length > 50
            ? <p>{description.slice(0,50)} <Link
            to={`/estate/${id}`}
            className="text-blue-600 font-bold">See More..</Link> </p>
            : <p>{description}</p>  
            }

          
          <div className="flex gap-4 text-blue-400">
            <p>{price}</p>
            <p>{area}</p>
          </div>
          <div className='flex'>
                        <h1 className='flex gap-2 items-center'><span className="">facilities:</span>
                        {
                        facilities?.map((facilitie,idx) => <p key={idx} className='flex'><span><p className=" text-[#23BE0A]  mr-1">{facilitie}</p></span></p>)
                    }
                        </h1>
                    </div>        

                    <p className='border-b-2'></p>
          <div className="card-actions text-center">
            <Link to={`/estate/${id}`}><button className="btn btn-primary">View Property</button></Link>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default EstateCard;