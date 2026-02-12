import React from 'react'
// import img
import Img1 from '../assets/img01.jpg'
import Img2 from '../assets/img02.webp'
import Img3 from '../assets/img03.jpg'
const Service = () => {
  return (
      <section  class="pt-14  relative bg-blue -translate-y-7 overflow-hidden px-2 py-2 sm:px-5 sm:py-5">
	  <div class="mx-auto max-w-md lg:max-w-7xl mt-16">
	    <div class="px-4 py-4 lg:px-5 lg:py-3">
	      <div class="font-Poppins text-center text-2xl font-bold leading-5 tracking-widest lg:text-3xl">Our <span class="from-30% from-[#FF8E26] to-55% to-[#0163E0] inline-block bg-gradient-to-r bg-clip-text text-transparent"> Service </span></div>
	    </div>
	  </div>
	  <div class="mx-auto max-w-full px-4 py-4 md:max-w-screen-lg">
	    <div class="grid grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            <div class="shadow-custom-white shadow-gray-500 rounded-lg bg-slate-600" data-aos='fade-down' data-aos-duration='1200'>
	        <div class="px-4 py-4">
	          <div class="flex items-center justify-start">
	            <div class="flex h-24 w-24 items-center justify-center rounded-full bg-blue-300">
	              <img src={Img1} alt="" className='w-[95px] rounded-full h-[95px]'/>
	            </div>
	            <div class="px-3 py-3">
	              <p class="font-Poppins text-sm font-semibold tracking-tight font text-white text-logo md:font-bold md:tracking-wider">pizza fiamma</p>
	            </div>
	          </div>
	          <div class="mt-4 max-w-full md:max-w-md">
	            <p class="text-[9px] font-Poppins font-medium leading-4 tracking-wider font text-blue-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dignissimos ratione vel minus ullam dolore debitis iure, perspiciatis magnam consequatur illum. Maiores quis dolorem beatae ut odit, ab magnam alias.</p>
	          </div>
	        </div>
	      </div>
            <div class="shadow-custom-white shadow-gray-500 rounded-lg bg-slate-600"data-aos='zoom-out' data-aos-duration='1200'>
	        <div class="px-4 py-4">
	          <div class="flex items-center justify-start">
	            <div class="flex h-24 w-24 items-center justify-center rounded-full bg-blue-300">
	              <img src={Img2} alt="" className='w-[95px] rounded-full h-[95px]'/>
	            </div>
	            <div class="px-3 py-3">
	              <p class="font-Poppins text-sm font-semibold tracking-tight font text-white text-logo md:font-bold md:tracking-wider">pizza fiamma</p>
	            </div>
	          </div>
	          <div class="mt-4 max-w-full md:max-w-md">
	            <p class="text-[9px] font-Poppins font-medium leading-4 tracking-wider font text-blue-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dignissimos ratione vel minus ullam dolore debitis iure, perspiciatis magnam consequatur illum. Maiores quis dolorem beatae ut odit, ab magnam alias.</p>
	          </div>
	        </div>
	      </div>
            <div class="shadow-custom-white shadow-gray-500 rounded-lg bg-slate-600" data-aos='zoom-in' data-aos-duration='1200'>
	        <div class="px-4 py-4">
	          <div class="flex items-center justify-start">
	            <div class="flex h-24 w-24 items-center justify-center rounded-full bg-blue-300">
	              <img src={Img3} alt="" className='w-[95px] rounded-full h-[95px]'/>
	            </div>
	            <div class="px-3 py-3">
	              <p class="font-Poppins text-sm font-semibold tracking-tight font text-white text-logo md:font-bold md:tracking-wider">pizza fiamma</p>
	            </div>
	          </div>
	          <div class="mt-4 max-w-full md:max-w-md">
	            <p class="text-[9px] font-Poppins font-medium leading-4 tracking-wider font text-blue-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dignissimos ratione vel minus ullam dolore debitis iure, perspiciatis magnam consequatur illum. Maiores quis dolorem beatae ut odit, ab magnam alias.</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
        {/* service2 */}
      <div class="container px-6 py-8 mx-auto" data-aos='zoom-out'>
            <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  <div
                        class="px-6 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg services1">
                        <p class="text-lg font-medium text-logo dark:text-gray-100">Intro</p>
                        <h4 class="mt-2 text-4xl font-semibold text-red-600 dark:text-gray-100">$19
                              <span class="text-base font-normal text-blue-600 dark:text-gray-400">/ Month</span></h4>
                        <p class="mt-4 text-white dark:text-gray-300 font">For most businesses that want to optimaize web
                              queries.</p>
                        <div class="mt-8 space-y-8">
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>
                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">All limited links</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Own analytics platform</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Chat support</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Optimize hashtags</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Unlimited users</span>
                              </div>
                        </div>
                        <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform font bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Choose plan</button>
                  </div>
                  <div
                        class="px-6 mb-4 -mt-3.5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg services1">
                        <p class="text-lg font-medium text-gray-100 text-logo mt-4">Popular</p>
                        <h4 class="mt-2 text-4xl font-semibold text-red-600 ">$99
                              <span class="text-base font-normal text-blue-600">/ Month</span></h4>
                        <p class="mt-4 text-white font">For most businesses that want to optimaize web queries.</p>

                        <div class="mt-8 space-y-8">
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300 font">All limited links</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300 font">Own analytics platform</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>
                                    <span class="mx-4 text-gray-300 font">Chat support</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300 font">Optimize hashtags</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-300 font">Unlimited users</span>
                              </div>
                        </div>
                        <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 font transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Choose plan</button>
                  </div>
                  <div
                        class="px-6 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg services1">
                        <p class="text-lg font-medium text-white dark:text-gray-100 text-logo">Exterprise</p>
                        <h4 class="mt-2 text-4xl font-semibold  text-red-600 dark:text-gray-100">$199
                              <span class="text-base font-normal text-blue-600 dark:text-gray-400">/ Month</span></h4>
                        <p class="mt-4 text-white dark:text-gray-300 font">For most businesses that want to optimaize web
                              queries.</p>
                        <div class="mt-8 space-y-8">
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">All limited links</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>
                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Own analytics platform</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>
                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Chat support</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>
                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Optimize hashtags</span>
                              </div>
                              <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400"
                                          viewBox="0 0 20 20" fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                    </svg>
                                    <span class="mx-4 text-gray-400 dark:text-gray-300 font">Unlimited users</span>
                              </div>
                        </div>
                        <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font">Choose plan</button>
                  </div>
            </div>
      </div>
	</section>
  )
}

export default Service