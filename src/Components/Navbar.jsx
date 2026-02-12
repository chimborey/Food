import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.jpg'
import { MdCloseFullscreen } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ShopContext } from './ShopContext';
const Navbar = () => {
      // quantity
      const {cart} = useContext(ShopContext)
      // srcolled navbar
      const [isSrcolled, setIsSrcolled] = useState(false)
      useEffect(() => {
            const handleSrcolled = () => {
                  setIsSrcolled(window.scrollY > 100)
            }
            window.addEventListener("srcoll", handleSrcolled)
            return () => window.removeEventListener("scroll", handleSrcolled)
      }, [])

      //  burger


      const [isOpenLink, setOpenLink] = useState(false)
      return (
            <section className={`fixed top-0 left-0 w-full z-50 shadow-md border-blue-300 transition-all duration-500 ${isSrcolled ? "  bg-slate shadow-md" : "bg-transparent amber"}`}>
                  <nav className='h-14 -translate-y-1 container flex justify-between items-center'>
                        {/* logo */}
                        <div className='flex items-center gap-2 cursor-pointer' data-aos='zoom-in' data-aos-duration='1200'>
                              <img src={Logo} alt="" className='w-[8%] h-[8%] rounded-full' />
                              <Link to={"/"} className='font-title'>CB <span className='yellow'>food</span></Link>
                        </div>
                        {/* menu */}
                        <div className='py-14 hidden md:block' data-aos='zoom-in' data-aos-duration='1200'>
                              <div className='flex justify-between items-center gap-12  -translate-x-[18%]'>
                                    <Link to={'/'} className='font-text'>home</Link>
                                    <Link to={'/about'} className='font-text'>abouct</Link>
                                    <Link to={'/product'} className='font-text'>product</Link>
                                    <Link to={'/service'} className='font-text'>service</Link>
                                    <Link to={'/contact'} className='font-text'>contact</Link>
                              </div>
                        </div>
                        {/* btn */}
                        <div className='flex justify-between items-center gap-4 p-4 cursor-pointer' data-aos='zoom-in' data-aos-duration='1200'>
                              {/* shopping */}
                              <Link to={'/cart'} className='relative py-4 font-title '>
                                    <FaShoppingCart className='w-10 p-2 h-10' />
                                    {/* {qauntity > 0 && (
                                          <span >{qauntity}</span>
                                    )} */}
                                    <span className='absolute w-5 p-4 h-5 -top-2 -right-2 yellow'>{cart.length}</span>
                              </Link>
                              {/* burger */}
                              <button className='md:hidden sm:block'>
                                    {
                                          isOpenLink ?
                                                <MdCloseFullscreen className='w-10 p-2 h-10' onClick={() => setOpenLink(!isOpenLink)} />
                                                :
                                                <GiHamburgerMenu className='w-10 p-2 h-10' onClick={() => setOpenLink(!isOpenLink)} />
                                    }
                              </button>
                        </div>
                  </nav>
                  {/* menu mobile */}
                   <div className={`${isOpenLink ? "block" : "hidden"} py-12 flex bg-white justify-center items-center`} onClick={() => setOpenLink(!isOpenLink)}>
                              <div className='flex-col gap-12 flex justify-center text-center items-center'>
                                    <Link to={'/'} className='font-text'>home</Link>
                                    <Link to={'/about'} className='font-text'>abouct</Link>
                                    <Link to={'/product'} className='font-text'>product</Link>
                                    <Link to={'/service'} className='font-text'>service</Link>
                                    <Link to={'/contact'} className='font-text'>contact</Link>
                              </div>
                        </div>
            </section>
      )
}

export default Navbar