import React, { createContext, useState } from "react"
import { products } from "../products"

export const ShopContext = createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=0;i<=products.length;i++){
        cart[i]=0
    } 
    return cart
}

export const ShopContextProvider = (props) => {

    const [cartItems,setCartItems]=useState(getDefaultCart())

    const getTotalAmount=()=>{
        let totalAmount=0
        for(let item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=products.find((product)=>product.id==Number(item))
                totalAmount+=cartItems[item]*itemInfo.price
            }
        }
        return totalAmount
    }

    const totalCartItems = () => {
      let totalItems = 0
      for (let item in cartItems) {
        if (cartItems[item] > 0) {
          
          totalItems += cartItems[item]
        }
      }
      return totalItems
    }

    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {
      cartItems,
      removeFromCart,
      addToCart,
      updateCartItemCount,
      getTotalAmount,
      totalCartItems
    }
    

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
