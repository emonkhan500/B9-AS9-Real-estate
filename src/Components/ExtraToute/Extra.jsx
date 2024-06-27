import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import img1 from '../../assets/Agent-2x-1be0e4.png'
import img2 from '../../assets/Property-manager-2x-865bcd.png'
import img3 from '../../assets/Landlord-2x-14539b.png'
import img4 from '../../assets/Lender-2x-2c744a.png'
import img5 from '../../assets/Builder-2x-d8b9c6.png'
import img6 from '../../assets/Brand-advertiser-2x-ba73a6.png'

const Extra = () => {
    useEffect(()=>{
        document.title='Deals'
    },[])

    useEffect(()=>{
      Aos.init({duration:2000})
  
  },[])
    return (
        <div>
           <div className='text-center mt-20'>
            <h1 className='text-4xl font-bold text-black mb-4'>Find Your Business Opportunity !!</h1>
            <p className='text-xl mb-5'>Reach millions of buyers, sellers and renters on the largest real estate network on the web.</p>
            
            <hr className='mx-96 mb-4 text-yellow-400'/>
            
            <p className='text-2xl font-bold'>Select your industry to get started</p>
           </div>
           <div data-aos = "fade-down-right" className='container mt-5 gap-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">I’m an agent or broker</h2>
   
    <div className="">
      <button className="btn btn-primary w-full">Get Started</button>
    </div>
  </div>
</div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">I’m a property manager</h2>
   
    <div className="">
      <button className="btn btn-primary w-full">Get Started</button>
    </div>
  </div>
</div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">I’m a landlord</h2>
   
    <div className="">
      <button className="btn btn-primary w-full">Get Started</button>
    </div>
  </div>
</div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img4} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">I’m a lender or loan officer</h2>
   
    <div className="">
      <button className="btn btn-primary w-full">Get Started</button>
    </div>
  </div>
</div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">I’m a builder</h2>
   
    <div className="">
      <button className="btn btn-primary w-full">Get Started</button>
    </div>
  </div>
</div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img6} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">I am a brand or local advertiser</h2>
   
    <div className="">
      <button className="btn btn-primary w-full">Get Started</button>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default Extra;