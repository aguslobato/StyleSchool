 import { useCartContext } from "../../Context/CartContext";
 import {Link} from "react-router-dom";
 import './Cart.css';

 const Cart = () => {
    
     const {cartList, removeItem, removeCart, cartTotal} = useCartContext()

     return (
         <div className="CartContenedor">
             <div className="CartContenedorContainer">
                 {cartList.length
                     ? <h2 className="TituloPrincipal">Carrito de <span>Compras</span></h2>
                     : <div className="ContenidoCarritoVacio">
                         <p className="CarritoVacio">El carrito está vacío</p>
                         <Link to="/" className="VolverHome"> Ir al <span> inicio </span></Link>
                     </div>
                 }
             <div className=
                 {cartList.length
                     ? "filled-cart"
                     : "not-filled-cart"
                }> 
                 {cartList.map(itemAdded => 
                     <table className="table table-dark" key={itemAdded.itemDetail.id}>
                         <thead>
                             <tr className="table-active">
                                 <th scope="col">Imagen</th>
                                 <th scope="col">Titulo</th>
                                 <th scope="col">Cantidad</th>
                                 <th scope="col">Precio</th>
                                 <th scope="col">Eliminar Producto</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <th scope="row"><img src={itemAdded.itemDetail.image} alt={itemAdded.itemDetail.title} className="ImagenCard" /></th>
                                 <td><h5 className="TituloCard">{itemAdded.itemDetail.title}</h5></td>
                                 <td><p className="CantidadCard">Cantidad: {itemAdded.quantity}</p></td>
                                 <td><span className="PrecioCard">Precio: USD$ {itemAdded.itemDetail.price}</span></td>
                                 <td><button className="RemoveItem" onClick={() => removeItem(itemAdded.itemDetail.id)}>X</button></td>
                             </tr>
                         </tbody>
                     </table>
                )}
                 <div>
                     <center><button className="RemoveCart" onClick={() => removeCart()}>Vaciar carrito</button></center>
                     <p className="TotalItemCarrito">Total de la compra: USD$ {cartTotal}</p>
                 </div>
             </div>
             </div>
         </div>
     )
 }

 export default Cart