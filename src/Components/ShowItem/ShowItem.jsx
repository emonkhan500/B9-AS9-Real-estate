import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ShowItem = ({home}) => {
    const{estate_title,id,segment_name,description,price,status,area,location,image,facilities}=home || {}

    useEffect(()=>{
      Aos.init({duration:2000})
  
  },[])
    
    return (
        <div data-aos = "fade-down-right" className=" card card-compact w-full  bg-base-100 lg:shadow-xl">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{estate_title}</h2>
    <div className="flex gap-2">
      <p className="text-xl text-blue-500 font-semibold">#{ segment_name}</p> <p className="text-2xl text-red-600">|</p>
      <p className="text-lg">Ststus: <span className="font-bold text-green-500 text-xl">{status }</span></p>
    </div>
    <div className="flex mt-3">
      <p className="text-lg">Price:<span className="font-bold text-green-500 text-xl">{price } </span></p> <p className="text-2xl text-red-600">|</p>
      <p className="text-lg "><span className="bg-slate-200 p-1 rounded-lg">Area:</span> <span className="text-sky-600">{area}</span></p>
    </div>
    <div className="flex items-center mt-3 ">
      <p className="text-xl">Location: <span>{location}</span></p>
      <Link to={`/details/${id}`}><button className="btn btn-accent">View Property</button></Link>
    </div>
  </div>
</div>
    );
};

export default ShowItem;