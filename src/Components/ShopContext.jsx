import { createContext, useEffect, useState } from "react";
import { productData } from "../data";
import { toast } from "react-toastify"



export const ShopContext = createContext ()


const ShopContextProvider = ({children}) =>{
      const [products, setProducts] = useState (productData)


      // cart
      const [cart, setCart] = useState([])
      // quantity
      const [quantity,setQuantity] = useState(0)
      // total
      const [total, setTotal] = useState(0)

      useEffect (()=>{
            const total = cart.reduce ((accumulator, currentItem) =>{
                  const priceAsNumber = parseFloat(currentItem.price)
                  if(isNaN(priceAsNumber)){
                        return accumulator
                  }
                  return accumulator + priceAsNumber * currentItem.amount
            },0)
            setTotal(total)
      }, [cart])

      useEffect (()=>{
            if(cart) {
                  const amount = cart.reduce((accumulator, currentItem)=> {
                        return accumulator + currentItem.amount
                  },0)
                  setQuantity(amount)
            }
      },[cart])
      // addToCart
      const addToCart = (product, id)=> {
            const newItem = {...product, amount: 1}
            const cartItem = cart.find((item)=>{
                  return item.id === id
            })

            if(cartItem) {
                  const newCart = [...cart].map((item)=>{
                        if(item.id === id){
                              return {...item, amount: cartItem.amount}
                        }else{
                              return item
                        }
                              
                  })
                  setCart(newCart)
            }else {
                  setCart ([...cart, newItem])
                  toast.success("product added to cart")
            }
      }
      //  clearCart
      const clearCart = ()=> {
            setCart([])
            toast.success("Cart Empty")
      }
      // removeFromCart
      const removeFromCart = ()=>{
            const newCart = cart.filter((item)=>{
                  return item.id !==id;
            })
            setCart(newCart);
            toast.success("Product removed successfully")
      }
      // increaseQuantity
        const increaseQuantity = (id) =>{
            const cartItem = cart.find((item)=>{
                  return item.id === id
            });
            if(cartItem){
                  const newCart = cart.map((item)=>{
                        if(item.id === id){
                              return {...item, amount:cartItem.amount + 1}
                        } else{
                              return item
                        }
                  })
                  setCart(newCart)
            }
            else{
                  if(cartItem.amount >2){
                        removeFromCart()
                  }
            }
            
      }
      // decreaseQuantity
      const decreaseQuantity = (id) =>{
            const cartItem = cart.find((item)=>{
                  return item.id === id
            });
            if(cartItem){
                  const newCart = cart.map((item)=>{
                        if(item.id === id){
                              return {...item, amount:cartItem.amount - 1}
                        } else{
                              return item
                        }
                  })
                  setCart(newCart)
            }
            else{
                  if(cartItem.amount <2){
                        removeFromCart()
                  }
            }
            
      }






      return(
            <ShopContext.Provider value={{products, cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, quantity, total}}>
                  {children}
            </ShopContext.Provider>
      )
}
export default ShopContextProvider