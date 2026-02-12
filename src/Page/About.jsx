import React from 'react'
import { Link } from 'react-router-dom'
import About1 from '../assets/ab1.jpg'
const About = () => {

      
      return (
            <section className='w-full py-12 overflow-hidden -translate-y-7 bg-blue'>
                  <main className='container flex justify-between flex-col items-center mt-4 gap-4'>
                        {/* textabout */}
                        <div className='flex flex-col items-center text-center justify-center mb-7 mt-12'>
                              <h1 className='font-title amber'data-aos='zoom-in' data-aos-duration='1200'>about us</h1>
                              <p className='font-desc' data-aos='zoom-in' data-aos-duration='1200'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                        {/* imgabout */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                              <div>
                                    <h3 className='font-title amber' data-aos='fade-right' data-aos-duration='1200'>CB <span className='yellow'>food</span></h3>
                                    <p className='font-desc text-justify indent-12 mt-4' data-aos='fade-right' data-aos-duration='1200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci rerum vitae unde consequatur sit distinctio id quae et sapiente iusto laborum eum alias omnis doloremque dolore debitis assumenda, veritatis numquam! Eius repellendus libero debitis quaerat cumque animi, dolor rerum dolore veritatis deserunt voluptas rem quae minima aut quod consequuntur ea placeat laborum accusantium incidunt? Iste, ratione. Molestiae impedit ratione eum nemo magni quisquam veniam modi consequuntur repudiandae odit maiores rem suscipit reprehenderit ipsa, in iste quaerat quibusdam, assumenda tempora ea! Quidem nisi ducimus officiis cumque optio, asperiores labore, nostrum minus saepe quos nihil commodi similique. Eveniet adipisci architecto facilis.</p>
                                    <Link to={'/product'} className='btn mt-4' data-aos='fade-up' data-aos-duration='1200'>buy now</Link>
                              </div>

                              <img src={About1} alt="" className='w-[430px] h-[430px] rounded' data-aos='fade-left' data-aos-duration='1200'/>
                        </div>
                  </main>
            </section>
      )
}

export default About