import { Children, createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) =>{
   // get previoulsy saved cart items
   const [ cartItems , setCartItems ] = useState(()=>{
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
   });

   // save cart whenever cartItems changes
   useEffect(() =>{
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
   },[cartItems]);

   // Add product to cart
   const addToCart = (product,quantity = 1) => {
      setCartItems((currentItems)=>{
       const existingItem = currentItems.find((item) => item._id === product._id);
       if(existingItem){
         return currentItems.map((item) =>
            item._id === product._id
          ? {
            ...item,
            quantity: item.quantity + quantity,
         } : item
      );
       }
       return [
         ...currentItems,
         {
            _id:product._id,
            name:product.name,
            image:product.image,
            pricePerItem: product.pricePerItem,
            quantity: quantity,
         },
       ];

      });
   };

   // increase quantity
   const increaseQuantity = (productId) => {
      setCartItems((currentItems) =>
      currentItems.map((item) =>
         item._id === productId
      ? {
         ...item,
         quantity:item.quantity + 1,
      }: item
      )
      );
   }
   // decrease quantity
   const decreaseQuantity = (productId) =>{
      setCartItems((currentItems) =>
      currentItems.map((item) => 
      item._id === productId ? {
         ...item,
          quantity:item.quantity - 1,
      } : item
      )
      .filter((item) => item.quantity > 0)
      );
   }
   // remove product completely
   const removeFromCart = (productId) =>{
      setCartItems((currentItems) =>
      currentItems.filter((item) => item._id !== productId)
      );
   };
   // empty entire cart 
   const clearCart = () => {
      setCartItems([]);
   }
   // total number of item in cart
   const cartCount = cartItems.reduce(
      (total,item) => total + item.quantity,
      0
   );
   // total cart price
   const cartTotal = cartItems.reduce(
      (total,item) => total + item.pricePerItem * item.quantity,
      0
   );
   return (
      <CartContext.Provider
      value={{
         cartItems,
         addToCart,
         increaseQuantity,
         decreaseQuantity,
         removeFromCart,
         clearCart,
         cartCount,
         cartTotal,
      }}
      >
         {children}
      </CartContext.Provider>
   );

};

// custom hook
export const useCart = () =>{
   const context = useContext(CartContext);
   if(!context){
      throw new Error("useCart must be used inside CartProvider");
   }
   return context;
};