 import { useCartContext } from "../../Context/CartContext";
 import { useState } from "react";
 import {Link} from "react-router-dom";
 import './Cart.css';
 import {GetFechFirebase} from '../../Services/GetFechFirebase'
 import firebase from "firebase/app";
 import 'firebase/firestore'

 const Cart = () => {
    
     const {cartList, removeItem, removeCart, cartTotal} = useCartContext()
     const [orderId, setOrderId] = useState("");
     const [userForm, setUserForm] = useState({name:"", surname:"", phone:"", email:""});
     const createOrder = (e) => {

         e.preventDefault()

         let order = {}
         order.date = firebase.firestore.Timestamp.fromDate(new Date());
         order.buyer = userForm;
         order.total = cartTotal;
         order.items = cartList.map(itemAdded => {
             const id = itemAdded.itemDetail.id;
             const title = itemAdded.itemDetail.title;
             const subtotal = itemAdded.itemDetail.price * itemAdded.quantity;
             return {id, title, subtotal}
        })
         const dataBase = GetFechFirebase()

         dataBase.collection("orders").add(order)
         .then(response => setOrderId(response.id))
         .catch (error => alert("Error:", error))
         .finally(() => removeCart())

         const updateStock = dataBase.collection("items").where
         (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.itemDetail.id))

         const batch = dataBase.batch();

         updateStock.get()
         .then(response => {
             response.docs.forEach(docSnapshot => {
                 batch.update(docSnapshot.ref, {
                 stock: docSnapshot.data().stock - cartList.find(idToUpdate => idToUpdate.itemDetail.id === docSnapshot.id).quantity
                })
            })
        
         batch.commit()
             .then(response => {console.log("Stock actualizado", response)
            })
        })
    }
     const handleChange = (e) => {
         setUserForm({
             ...userForm, 
             [e.target.name]: e.target.value
        })
    } 
     return (
         <div className="CartContenedor">
             <div className="CartContenedorContainer">
                 {cartList.length
                     ? <button className="RemoveCart" onClick={() => removeCart()}>Vaciar carrito</button>
                     : orderId===""
                         ? <div>
                         <p className="CarritoVacio">El carrito está vacío</p>
                         <Link className="VolverHome" to="/">Home</Link>
                         </div>
                         : <div>
                         <p className="GraciasCompra">¡Gracias por tu compra!</p>
                         <p className="OrderId">Tu código de operación es: {orderId}</p>
                         <Link className="VolverHome" to="/"> Ir al inicio</Link>
                         </div>
 }
                 <div className=
                     {cartList.length
                         ? "filled-cart"
                         : "not-filled-cart"
                    }> 
                     {cartList.map(itemAdded => 
                         <table className="table table-dark table-hover" key={itemAdded.itemDetail.id}>
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
                                     <td><span className="PrecioCard">Precio: USD ${itemAdded.itemDetail.price}</span></td>
                                     <td><button className="RemoveItem" onClick={() => removeItem(itemAdded.itemDetail.id)}>X</button></td>
                                 </tr>
                             </tbody>
                         </table>
                    )}
                     <div>
                         <table  className="table table-dark table-hover TotalCompra">
                             <thead>
                                 <tr className="table-active">
                                     <th scope="col">Total de la compra</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td><p className="PrecioTotal"> USD ${cartTotal}</p></td>
                                 </tr>
                             </tbody>
                         </table>
                         <form onSubmit={createOrder} onChange={handleChange}>
                             <h2 className="CarritoVacio">Ingresá tus datos</h2>
                             <div>
                                 <label htmlFor="name" className="FormLabel">Nombre</label>
                                 <input className="FormLabel" type="text" name="name" placeholder="Federico" defaultValue={userForm.name}/>
                             </div>
                             <div>
                                 <label htmlFor="surname" className="FormLabel">Apellido</label>
                                 <input className="FormLabel" type="text" name="surname" placeholder="Torres" defaultValue={userForm.surname}/>
                             </div>
                             <div>
                                 <label htmlFor="phone" className="FormLabel">Teléfono</label>
                                 <input className="FormLabel" type="text" name="phone" placeholder="2974782511" defaultValue={userForm.phone}/> 
                             </div>
                             <div>
                                 <label htmlFor="email" className="FormLabel">Email</label>
                                 <input className="FormLabel" type="email" name="email" placeholder="ejemplo@tuemail.com" defaultValue={userForm.email}/>
                             </div>
                             <button className="Comprar">¡Comprar!</button>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     )
 }

 export default Cart