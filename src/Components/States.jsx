import React from 'react'
import Counter from './Counter'
import { StateData } from '../assets/Data/data'
const States = () => {
      return (
            <section className='w-full py-14 bg-slate-900 -translate-y-7'>
                  <div className='container flex justify-center gap-24 text-center mr-auto items-center'>
                        {/* state */}
                        <div className='grid sm:gap-12 md:gap-24 grid-cols-2 md:grid-cols-4'>
                              {
                                    StateData.map((item) => (
                                          <div key={item} data-aos='zoom-out' data-aos-duration='1200'>
                                                <div className='text-center'>
                                                      <h4 className='font-text text-yellow-400 text-3xl mt-12'>
                                                            <Counter target={item.title} />
                                                      </h4>
                                                      <p className=' font-desc flex justify-between items-center mx-10'>{item.desc}</p>
                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </section>
      )
}

export default States
