"use client"
import Link from "next/link";
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
    style={{ backgroundImage: "url(/gemstone.jpg" }}
    className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
  >
    <Link href="/search"
              className="rounded-[20px] group relative border bg-yellow-900 hover:bg-blue-300 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-40 group-hover:opacity-20" />
              Start Search
    </Link>
            
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