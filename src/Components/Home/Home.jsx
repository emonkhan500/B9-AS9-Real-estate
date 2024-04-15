import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ShowItem from '../ShowItem/ShowItem';

const Home = () => {
    const [luxury,setLuxury]=useState([])
    const[loading,setLoading]=useState(true)
    
 useEffect(()=>{
      
        fetch('estate.json')
        .then(res=>res.json())
        .then(data=>setLuxury(data))
      setLoading(false)
    },[])
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
            {
                loading && <span className=" loading loading-bars loading-lg"></span>
            }
            </div>
<Banner></Banner>
<div className='grid px-10 lg:px-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mt-14 gap-9'>

{
   luxury && luxury.map(home=><ShowItem home={home}></ShowItem>)
}
            </div>
        </div>
    );
};

export default Home;