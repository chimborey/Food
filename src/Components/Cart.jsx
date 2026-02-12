import React, { useContext } from 'react'
import { ShopContext } from './ShopContext';
import { FaTrash } from "react-icons/fa";
import { IoRemove } from 'react-icons/io5';
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoMdAdd } from 'react-icons/io';
import "react-icons/fa"
const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, quantity, total } = useContext(ShopContext)
  return (
    <div className='w-full bg-blue mx-auto py-12 mt-14 flex flex-col md:flex-row gap-8 md:px-24'>
      {/* left section */}
      <div className=' container p-6' data-aos='zoom-in' data-aos-duration='1200'>
        {/* header */}
        <div className='flex justify-between items-center border-b pb-4'>
          <h1 className='font-menu bg-purple'>shopping cart</h1>
          <h1 className='font-menu bg-purple '>items: ({quantity})</h1>
          <FaTrash onClick={clearCart} className='text-red-500 text-2xl cursor-pointer' />
        </div>
        {/* subheader */}
        <div className='grid grid-cols-4 font-menu yellow font-semibold mt-6 pb-2 border-b '>
          <span>produt</span>
          <span>quantity</span>
          <span>price</span>
          <span>total</span>
        </div>
        {/* cart item */}
        <div>
          {cart.length > 0 ? (
            cart.map((item) => {
              const { id, img, price, title, amount } = item
              return (
                <div key={id} className='grid grid-cols-4 items-center py-4 border-b text-gray-700'>
                  <div className='flex items-center space-x-4'>
                    <img src={img} alt="" className='w-16 h-16 rounded-md' />
                    <div>
                      <h3 className='font-semibold mb-7 font-menu bg-purple'>{title}</h3>
                      <button onClick={() => removeFromCart(id)} className='text-red-600 text-sm flex items-center gap-1 mt-2 '><FaTrash />Remove</button>
                    </div>
                  </div>

                  <div className='flex items-center space-x-2'>
                    <button onClick={() => decreaseQuantity(id)} className='w-5 flex h-5 text-center bg-gray-200 rounded-full items-center justify-center text-xl'><IoRemove /></button>
                    <span className='text-lg'>{amount}</span>
                    <button onClick={() => increaseQuantity(id)} className='w-5 flex h-5 text-center bg-gray-200 rounded-full items-center justify-center text-xl'>< IoMdAdd /></button>
                  </div>
                  <p className='text-lg font-medium font-menu bg-purple'>${price}</p>
                  <p className='tetx-lg font-mono font-menu bg-purple'>${price * amount}</p>
                </div>
              )
            })
          ) : (
            <div className='items-center justify-center flex flex-col'>
              <p className='font-menu bg-purple mt-4 text-center'>your cart is empty</p>
              <RiShoppingBag3Line className='w-36 h-36 text-gray-200 '/>
            </div>
          )}
        </div>
      </div>

      {/* rihgt section */}
      <div className='md:w-1/3 bg-slate p-6 rounded-lg pb-4' data-aos='zoom-in' data-aos-duration='1200'>
        <h2 className='tetx-xl font-semibold border-b border-blue-600 font-menu bg-purple  pb-4'>cart summary</h2>

        <div className='flex justify-between mt-2'>
          <span className='font-menu amber'>items:</span>
          <span className='font-menu yellow'>{quantity}</span>
        </div>

        <div className='flex justify-between mt-2'>
          <span className='font-menu amber'>subtotal</span>
          <span className='font-menu yellow'>${isNaN(total) ? 0 : total}</span>
        </div>

        <div className='flex justify-between mt-2'>
          <span className='font-menu amber '>delivery</span>
          <span className='font-menu yellow'>Free</span>
        </div>

        <div className='flex justify-between mt-2'>
          <span className='font-menu amber'>total cost</span>
          <span className='font-menu yellow'>${isNaN(total) ? 0 : total}</span>
        </div>
        <button className='check'>checkout</button>
      </div>
    </div>
  )
}

export default Cart