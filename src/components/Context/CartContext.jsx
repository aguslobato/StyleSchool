 import {createContext, useContext, useState} from "react";
 import swal from "sweetalert";

 const CartContext = createContext();

 export const useCartContext = () => useContext (CartContext);

 const CartContextProvider = ({children}) => {

     const [itemQuantity, setItemQuantity] = useState(0);
     const [cartTotal, setCartTotal] = useState(0);
     const [cartList, setCartList] = useState([]);

     const addToCartList = itemAdded => {
         setItemQuantity(itemQuantity + itemAdded.quantity)
         setCartTotal(cartTotal + (itemAdded.itemDetail.price * itemAdded.quantity))
         const findItem = cartList.find(itemInCart => itemInCart.itemDetail.id === itemAdded.itemDetail.id)        
         if (findItem) {
             findItem.quantity = findItem.quantity + itemAdded.quantity
             setCartList(cartList)
        }
         else {
             setCartList(previousItems => [...previousItems, itemAdded])
        }
    }

     const removeItem = idItemToRemove => {
         const itemToRemove = cartList.find(itemInCart => itemInCart.itemDetail.id === idItemToRemove)
         setItemQuantity(itemQuantity - itemToRemove.quantity)
         setCartTotal(cartTotal - (itemToRemove.itemDetail.price * itemToRemove.quantity))
         setCartList(cartList.filter(itemSearched => itemSearched.itemDetail.id !== idItemToRemove))
         swal({
             icon: "success",
             text: "¡Se acaba de eliminar el producto del carrito!",
        }); 
    }

     const removeCart = () => {
         setItemQuantity(0)
         setCartTotal (0)
         setCartList([])
    }

     return (
         <CartContext.Provider value={{cartList, addToCartList, removeItem, removeCart, itemQuantity, cartTotal}}>
             {children}
         </CartContext.Provider>
    )
}

 export default CartContextProvider