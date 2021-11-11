import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([]);

  const addItem = (product) => {

    const itemInCart = isInCart(product.id);

    if(!itemInCart){
      setCartList([...cartList, product])
    }else{
      const newCartList = cartList.map((item) => {
        if(item.id === itemInCart.id){
          return {
            ...item,
            quantity: item.quantity + product.quantity
          }
        }
        
        return item;
      })

      setCartList(newCartList);
    }
    
  }

  const isInCart = (id) => cartList.find(item => item.id === id) || false;

  const showCartList = () => {
    console.log(cartList)
  }

  showCartList();

  return (
    <CartContext.Provider value={{
      cartList,
      showCartList,
      addItem
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider 