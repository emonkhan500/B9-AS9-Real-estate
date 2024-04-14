import React, { useEffect, useState } from 'react';

const Huda = () => {
    const [luxury,setLuxury]=useState([])


    useEffect(()=>{
        fetch('estate.json')
        .then(res=>res.json())
        .then(data=>setLuxury(data))
    },[])
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
{
   luxury?.map(home=><ShowItem home={home}></ShowItem>)
}
            </div> 
        </div>
    );
};

export default Huda;