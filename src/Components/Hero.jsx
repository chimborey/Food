import React, { useEffect, useState } from 'react'

import Img1 from '../assets/img01.jpg' // import Img1
import Img2 from '../assets/img02.webp' // import Img2
import Img3 from '../assets/img03.jpg' // import Img3
import Img4 from '../assets/img04.jpg' // import Img4
import { FaArrowLeft } from "react-icons/fa"; // <--- FaArrowLeft
import { FaArrowRight } from "react-icons/fa"; // <--- FaArrowRight
const Hero = (
  {
    autoSlide = false,
    autoSlideInterval = 3000,
  }
) => {
  // Images
  const Images = [
    {
      id: '1',
      img: Img1,
      title: 'Burger',
      desc: 'food'
    },
    {
      id: '2',
      img: Img2,
      title: 'ice cream',
      desc: 'food'
    },
    {
      id: '3',
      img: Img3,
      title: 'chicken',
      desc: 'food'
    },
    {
      id: '4',
      img: Img4,
      title: 'potato casserole',
      desc: 'food'
    },
  ]
  const [curr, setCurr] = useState (0)
  const prev = () => setCurr((curr) => (curr === 0 ? Images.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === Images.length - 1 ? 0 : curr + 1))
  // Auto slide
  useEffect(() => {
    if (!autoSlide)
      return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)

    
  })
  return (
    <section className='w-full flex py-12 mt-8 justify-center h-screen items-center'>
      <div className='md:w-[1600px] sm:w-full overflow-hidden h-[93vh]'>
        <div className='flex'>
          {
            Images.map((items, index) => (
              <div key={index.id}>
                {/* img */}
                <div className='md:w-[1600px] md:h-[93vh] object-cover transition-transform ease-out duration-500 flex-shrink-0 flex sm:w-[490px] sm:h-[270px]' style={{transform: `translateX(-${curr * 100}%)`}}>
                  <img src={items.img} alt="" className='w-[1600px] h-[93vh] '/>
                  {/* text */}
                  <div className='absolute md:top-[40%] md:left-[10%] md:translate-[50%] sm:top-[40%]  sm:px-24 sm:right-12 sm:-translate-x-9'>
                    <h5 className='font-desc text-md text-green-500'>{items.desc}</h5>
                    <h1 className=' text-blue-400 text-3xl font-title'>{items.title}</h1>
                    <p className='text-sm text-justify text-gray-400 mt-4 font-desc indent-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure ratione nisi eligendi, nobis rerum libero esse cupiditate alias, <br /> aperiam vitae laudantium architecto provident officia quo magnam iusto deleniti aliquam aspernatur asperiores ex dolore laboriosam <br /> reiciendis distinctio! Cumque, quaerat nisi. Laboriosam similique nesciunt illo, ullam perferendis reprehenderit. Consequuntur perspiciatis <br /> tenetur quidem nulla quos blanditiis quo, ducimus laudantium atque architecto minima dignissimos hic. Velit, quaerat quia?</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {/* FaArrowLeft / FaArrowRight Icon */}
        <div className='md:block sm:hidden'>
          <FaArrowLeft onClick={prev} className='text-black absolute bottom-[40%] left-12 w-10 h-10 p-2 text-4xl bg-slate-100 rounded-full hover:scale-105 duration-300 cursor-pointer' data-aos='fade-right' data-aos-duration='1200' />
          <FaArrowRight onClick={next} className='text-black absolute bottom-[40%]  right-12 w-10 h-10 p-2 text-4xl bg-slate-100 rounded-full hover:scale-105 duration-300 cursor-pointer' data-aos='fade-left' data-aos-duration='1200' />
        </div>
        {/* _ */}
         <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {Images.map((_, i) => (
              <div className={`transition-all w-3 h-3 bg-gray-400 rounded-full ${curr === i ? "p-2" : "bg-opcity-50"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
