import React from 'react'

const Contact = () => {
      return (
            <section className='w-full mt-14 py-12 -translate-y-7'>
                  <div className='container'>
                        <section className='w-full '>
                              <div class="container mx-auto flex  items-center flex-col ">
                                    <div className='flex flex-col items-center justify-center text-center' data-aos='zoom-in' data-aos-duration='1200'>
                                          <h3 className='font-title amber'>contact us</h3>
                                          <p className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur excepturi at odio!</p>
                                    </div>
                                    <div className='flex text-white flex-col  items-center gap-4 mb-4'>
                                          <h3 className='font-text capitalize text-6xl' data-aos='zoom-in' data-aos-duration='1200'>Contact us</h3>
                                          <p className='font-desc text-md' data-aos='zoom-in' data-aos-duration='1200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti sapiente nesciunt ab iste veritatis voluptate excepturi dolorum cumque! Fuga quasi error cupiditate nam laboriosam!</p>
                                    </div>
                                    <div class="max-w-md mx-auto bg-slate-900 rounded-lg overflow-hidden md:max-w-xl" data-aos='fade-right' data-aos-duration='1200'>
                                          <div class="md:flex">
                                                <div class="w-full px-6 py-8 md:p-8">
                                                      <h2 class="text-2xl font-bold text-yellow-500 text">Checkout</h2>
                                                      <p class="mt-4 text-gray-600 font-desc">Please fill out the form below to complete your purchase.</p>
                                                      <form class="mt-6">
                                                            <div class="mb-6 ">
                                                                  <label class="block font-bold mb-2  text-one text-blue-500" for="name">
                                                                        Name
                                                                  </label>
                                                                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
                                                            </div>
                                                            <div class="mb-6">
                                                                  <label class="block font-bold mb-2  text-one text-blue-500" for="email">
                                                                        Email
                                                                  </label>
                                                                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" />
                                                            </div>
                                                            <div class="mb-6">
                                                                  <label class="block text-one text-blue-500 font-bold mb-2" for="card_number">
                                                                        Card Number
                                                                  </label>
                                                                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="**** **** **** 1234" />
                                                            </div>
                                                            <div class="mb-6">
                                                                  <label class="block  text-one text-blue-500 font-bold mb-2" for="expiration_date">
                                                                        Expiration Date
                                                                  </label>
                                                                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration_date" type="text" placeholder="MM / YY" />
                                                            </div>
                                                            <div class="mb-6">
                                                                  <label class="block  text-one text-blue-500 font-bold mb-2" for="cvv">
                                                                        CVV
                                                                  </label>
                                                                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="***" />
                                                            </div>
                                                            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                                  Submit
                                                            </button>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </div>
            </section>
      )
}

export default Contact