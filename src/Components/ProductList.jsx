import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import {Link} from 'react-router-dom'
const ProductList = () => {
      const { products, addToCart } = useContext(ShopContext)
      return (
            <section className='w-full bg-orange overflow-hidden -translate-y-7'>
                  <div className=' flex sm:px-4 md:px-0 flex-col overflow-hidden justify-between items-center py-12 mt-12' data-aos='zoom-in' data-aos-duration='1200'>
                        <h2 className='font-title amber'>product us</h2>
                        <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-9  mt-12 overflow-hidden md:w-[1200px] md:overflow-hidden'>
                              {products.map((product) => {
                                    const { id, img, title, price, desc } = product
                                    return (
                                          <div key={id} className='bg-slate overflow-hidden rounded hover:scale-110 duration-300 ease-linear shadow-blue-400 cursor-pointer'>
                                                <Link to={`/product/${product.id}`}>
                                                      <img src={img} alt="" className='md:w-[830px]  md:h-[230px] rounded hover:scale-110 duration-300 ease-linear' />
                                                </Link>

                                                <div className='text-center flex-col flex items-center gap-4 px-8 mt-4'>
                                                      <h3 className='font-menu amber'>{title}</h3>
                                                      <p className='font-desc md:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum sunt blanditiis. Nemo iste quisquam consectetur unde porro praesentium deleniti officiis accusantium est, qui magni, ipsam assumenda.</p>
                                                      <p className='sm:hidden md:block font-desc'>{desc}</p>
                                                      <h5 className='font-title purple'>${price}</h5>
                                                </div>
                                                <button className='cart mx-auto mt-2 mb-12' onClick={() => addToCart(product, id)}>add to cart</button>
                                          </div>
                                    )
                              })}
                        </div>
                  </div>
            </section>
      )
}

export default ProductList