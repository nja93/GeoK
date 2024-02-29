
"use client"

import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {SkillData} from '@/constants'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'

const page = () => {
  return (
    <div
    style={{ backgroundImage: "url(/basalts.jpg" }}
    className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
  >
    
      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      speed={10000}
      modules={[Autoplay]}
      className="w-full h-full"
      >
          {Projects.map((project, index)=> (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center w-full h-full'>
              <ProjectCard
          key={index}
          title={project.title}
          text={project.text}
          image={project.src}
        />
        </div>
            </SwiperSlide>
          ))}
            </Swiper>
      </div>
 
   
  )
}

export default page