import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ShowItem from '../ShowItem/ShowItem';

const Home = () => {
    const [luxury,setLuxury]=useState([])


    useEffect(()=>{
        fetch('estate.json')
        .then(res=>res.json())
        .then(data=>setLuxury(data))
    },[])
    return (
        <div className='container mx-auto'>
<Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-14 gap-5'>
{
   luxury && luxury.map(home=><ShowItem home={home}></ShowItem>)
}
            </div>
        </div>
    );
};

export default Home;