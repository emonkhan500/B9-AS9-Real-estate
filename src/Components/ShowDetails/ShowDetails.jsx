import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetails = () => {
    const property=useLoaderData()
    
    const {id}=useParams()
    console.log(typeof id)
    
    
    const selectedProperty=property?.find((prop)=>prop.id===id)

    const {estate_title,segment_name,description,price,status,area,location,image,facilities}=selectedProperty||{}
    return (
        <div>
            <h1>details {estate_title}</h1>
        </div>
    );
};

export default ShowDetails;