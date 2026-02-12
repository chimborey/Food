import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../data'
import { ShopContext } from '../Components/ShopContext'

const ProductDetail = () => {

      const {addToCart} = useContext (ShopContext)
      
      const {id} = useParams ()
      const product = productData.find((product) => product.id === parseInt(id))
  return (
   <section className='w-full py-14 overflow-hidden mt-14 bg-orange '>
      <main className='container overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-12'>
            <img src={product.img} alt="" className='w-[430px] h-[430px] rounded' data-aos='fade-right' data-aos-duration='1200'/>

            <div className=' gap-4 h-[430px] flex flex-col items-center' data-aos='fade-left' data-aos-duration='1200'>
                  <h3 className='mr-auto font-title amber'>{product.title}</h3>
                  <p className='font-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni non autem cum rem dolor ducimus veniam hic accusamus a molestiae, incidunt necessitatibus eaque nihil animi fugit saepe officia officiis iusto sequi totam eos nostrum esse illum. Impedit perferendis, soluta laudantium provident at quae quibusdam quam iusto eaque, in ad, assumenda eius commodi? Animi delectus, consequuntur nesciunt impedit, accusamus, explicabo optio maiores ullam et placeat quam temporibus laboriosam laudantium deleniti? Commodi porro labore iste voluptas repudiandae qui, quas reiciendis aliquam maxime doloribus nostrum obcaecati ab quasi sunt dicta earum esse beatae facere eum? Blanditiis corporis hic impedit, aliquid labore consequatur sed.</p>
                 <div className='flex justify-between items-center mt-4 gap-12'>
                  <h5 className='font-title purple mr-auto -translate-y-4'>${product.price}</h5>
                 <button className='cart mb-12' onClick={() => addToCart(product, id)}>add to cart</button>
                 </div>
            </div>
            
      </main>
   </section>
  )
}

export default ProductDetail