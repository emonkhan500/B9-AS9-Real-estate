import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetails = () => {
    const property=useLoaderData()
    
    const {id}=useParams()
    console.log(typeof id)
    
    
    const selectedProperty=property?.find((prop)=>prop.id===id)

    const {estate_title,segment_name,description,price,status,area,location,image,facilities}=selectedProperty||{}
    return (
        <div className="  bg-base-200 lg:h-[600px] mt-20 container px-6 lg:px-0 mx-auto">
  <div className="flex items-center flex-col lg:flex-row">
    <img  src={image} className=" w-[600px] h-[570px] rounded-lg shadow-2xl" />
    <div className="card-body">
    <h2 className="card-title text-yellow-400 text-4xl mb-8">! {estate_title} !</h2>
    <div className="flex gap-2">
      <p className="text-xl text-blue-500 font-semibold"><span className='text-green-500'>Type: </span>{ segment_name}</p> <p className="text-2xl text-red-600">|</p>
      <p className="text-lg">Status: <span className="font-bold text-green-500 text-xl">{status }</span></p>
    </div>
    <div className="flex mt-3">
      <p className="text-lg">Price:<span className="font-bold text-green-500 text-xl">{price } </span></p> <p className="text-2xl text-red-600">|</p>
      <p className="text-lg "><span className="bg-slate-200 p-1 rounded-lg">Area:</span> <span className="text-sky-600">{area}</span></p>
    </div>
    <div className=" mt-3 ">
      <p className="text-xl">Location: <span className='text-teal-500'>{location}</span></p>

</div>
<p>- <span className='italic font-semibold text-xl'>{description}</span></p>

<div className='flex gap-3'><span className="font-bold text-green-500 text-xl">Facilities : </span> 
<ul className='flex gap-4'> 
{facilities.map(faci=><li className='text-teal-500 text-lg font-bold'>#{faci}</li>)}
</ul>
 </div>
  </div>
  </div>
</div>
    );
};

export default ShowDetails;