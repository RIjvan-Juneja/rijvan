import React from 'react';
import {Data} from "./Data";
import "./testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {  Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';


const Testimonial = () => {
    SwiperCore.use([Autoplay])
  return (
    <section className="testimonial container section">
        <h2 className="section__title">Developer Friends</h2>
        <span className="section__subtitle">⌜Grateful for friends who inspire and support my professional growth with their invaluable expertise and guidance ⌟</span>

        <Swiper className="testimonial__container"
        loop= {true}
        autoplay={{
                    delay: 1700,
                    disableOnInteraction: false
                }}
        grabCursor = {true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        
        >
            {Data.map(({id, image, title ,sub_title, description}) => {
                return (
                    <a href="www.google.com" target='_blank'>
                    <SwiperSlide className="testimonial__card" key={id}>
                    <div className="testimonial__top">
                        <img src={image} alt="" className="testimonial__img" />
                        <div>
                        <h3 className="testimonial__name">{title}</h3>
                        <h2 className="testimonial__sub_title">{sub_title}</h2>
                        </div>
                    </div>
                        <div className="testimonial__description">{description}</div>
                    </SwiperSlide>
                    </a>

                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonial;