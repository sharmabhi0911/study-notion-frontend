import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Pagination, FreeMode } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules"; 
import "swiper/css/navigation"; 
import "swiper/css/autoplay"; 
import "swiper/css/free-mode"
import "swiper/css/pagination"

import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination , Autoplay, Navigation]}
          navigation = {true}
          pagination = {true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
