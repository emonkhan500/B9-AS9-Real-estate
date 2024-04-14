import React from 'react';
import ban1 from '../../assets/breno-assis-r3WAWU5Fi5Q-unsplash.jpg'
import ban2 from '../../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg'
import ban3 from '../../assets/sean-pollock-PhYq704ffdA-unsplash.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src={ban1} className="w-full h-[600px] rounded-lg " />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={ban2} className="w-full h-[600px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={ban3} className="w-full h-[600px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        </div>
    );
};

export default Banner;