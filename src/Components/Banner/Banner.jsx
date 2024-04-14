
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto mt-12'>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        
        pagination={{
            clickable: true,
        }} 
        modules={[Pagination,Autoplay,Navigation]} className="mySwiper">
        <SwiperSlide><div className='slide slide1'>
           <div className='text-center'>
           <h1 className='text-white font-bold text-5xl '>Start Your Real Estate Journey Here <br /> Dive into Our Listings</h1>
           <Link to="" className="btn btn-outline  bg-[#0BE58A] w-[180px] mt-5 text-[#150B2B] text-xl font-semibold rounded-xl">Explore Now</Link>
           </div>
           <br />
           
        </div></SwiperSlide>
        <SwiperSlide><div className='slide slide2'> <div className='text-center'>
           <h1 className='text-white font-bold text-5xl'>Experience Home Like Never Before <br /> Dive into Our Listings</h1>
           <button className="btn btn-success bg-[#0BE58A] w-[180px] mt-5 text-[#150B2B] text-xl font-semibold rounded-xl">Explore Now</button>
           </div>
           <br /></div></SwiperSlide>
        <SwiperSlide><div className='slide slide3'> <div className='text-center'>
           <h1 className='text-white font-bold text-5xl'> Experience Home Like Never Before <br /> Dive into Our Listings</h1>
           <button className="btn btn-success bg-[#0BE58A] w-[180px] mt-5 text-[#150B2B] text-xl font-semibold rounded-xl">Explore Now</button>
           </div>
           <br /></div></SwiperSlide>
        {/* <SwiperSlide><div className='slide slide4'> <div>
           <h1 className='text-white font-bold text-5xl'>Experience Home Like Never Before <br /> Dive into Our Listings</h1>
           <button className="btn btn-success bg-[#0BE58A] w-[180px] mt-5 text-[#150B2B] text-xl font-semibold rounded-xl">Explore Now</button>
           </div>
           <br /></div></SwiperSlide>
        <SwiperSlide><div className='slide slide5'> <div>
           <h1 className='text-white font-bold text-5xl'>Experience Home Like Never Before <br /> Dive into Our Listings</h1>
           <button className="btn btn-success bg-[#0BE58A] w-[180px] mt-5 text-[#150B2B] text-xl font-semibold rounded-xl">Explore Now</button>
           </div>
           <br /></div></SwiperSlide> */}
       
      </Swiper>
        </div>
    );
};

export default Banner;