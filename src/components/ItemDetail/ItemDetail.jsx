 import ItemCount from '../ItemCount/ItemCount'
 import '../ItemDetail/ItemDetail.css'
 import { useState } from "react";
 import swal from "sweetalert";
 import { useCartContext } from '../Context/CartContext';
 
 /*IMAGENES*/
 import pagoFacil from '../images/imagesHome/pagofacil.png'
 import rapiPago from '../images/imagesHome/rapipago.png'
 import tarjetaCabal from '../images/imagesHome/tarjeta-cabal.png'
 import tarjetaNaranja from '../images/imagesHome/tarjeta-naranja.png'
 import tarjetaMasterCard from '../images/imagesHome/tarjeta-mastercard.png'
 import tarjetaVisa from '../images/imagesHome/tarjeta-visa.png'
 import envios from '../images/imagesHome/envios.svg'
 import retirarCorreo from '../images/imagesHome/retirarCorreo.svg'

     const ItemDetail = ({itemDetail}) => {
         const [count] = useState(1);     
         const [, setQuantity] = useState (1);
         const {addToCartList} = useCartContext();
      
         const addToCart = (qty) => {
             setQuantity(qty);
             addToCartList({itemDetail, quantity: qty});
             swal(`Añadido al carrito ${itemDetail.title} | Cantidad: ${qty}`,{ 
                 buttons: false,
                 timer: 2000,
                 icon: "success",
              });
        }
 
     return (
         <div className="LibroDetail">
             <div className="ContenedorPrincipalLibro">
             <div className="LibroDetailContenedor">
                 <div className="LibroHeadDetail">
                     <img src={itemDetail.image} alt={itemDetail.title} />
                 </div>
                 <div className="ContenedorDetalles-MediosPago">
                     <div className="LibroBodyDetail">
                         <h2>{itemDetail.title}<span className="Mg">♡</span></h2>
                         <span className="Puntaje">{itemDetail.puntaje} (20 opiniones)</span><br />
                         <span className="Autor">Autor: {itemDetail.autor}</span>
                         <p>{itemDetail.description}</p> 
                         <span className="precio">Precio: USD$ {itemDetail.price}</span>
                         <div className="EnvioRetiro">
                              <span className="envios"><img src={envios} alt="envios"/> Llega entre el jueves y el lunes 29 de noviembre por $450 <code><i className="fas fa-bolt"/>FULL</code></span>
                             <span className="retirar"><img src={retirarCorreo} alt="retirar en correo"/> Retiralo entre el jueves y el martes 30 de noviembre en correo y otros puntos por $250</span>
                         </div>          
                         <div className="LibroFooterDetail">
                             <ItemCount initial={count} stock={itemDetail.stock} itemDetail={itemDetail} addToCart={addToCart} />
                         </div>
                     </div>
                     <div className="MediosPagoLibro">
                         <h2>Medios de pago</h2>
                         <div className="TarjetasCredito">
                             <h3>Tarjetas de Credito</h3>
                             <span>¡Cuotas sin interes con bancos seleccionados!</span>
                             <div className="ImagenesTarjetasCredito">
                                 <img src={tarjetaVisa} alt="Tarjeta Visa Credito"/>  
                                 <img src={tarjetaMasterCard} alt="Tarjeta MasterCard Credito"/>
                                 <img src={tarjetaNaranja} alt="Tarjeta Naranja Credito"/>
                             </div>
                         </div>
                         <div className="TarjetasDebito">
                             <h3>Tarjetas de Debito</h3>
                             <div className="ImagenesTarjetasDebito">
                                 <img src={tarjetaVisa} alt="Tarjeta Visa Debito"/>
                                 <img src={tarjetaMasterCard} alt="Tarjeta MasterCard Debito"/>
                                 <img src={tarjetaCabal} alt="Tarjeta Cabal Debito"/>
                             </div>
                         </div>
                         <div className="Efectivo">
                             <h3>Efectivo</h3>
                             <div className="ImagenesEfectivo">
                                 <img src={rapiPago} alt="RapiPago"/>
                                 <img src={pagoFacil} alt="Pago Facil"/>
                             </div>
                         </div>
                     </div>
                     <div className="ContenedorGarantia">
                         <h2 className="Garantia">Garantia</h2>
                         <h3 className="Garantia">Garantia de la tienda</h3>
                         <span>Sin garantía</span>
                     </div>
                 </div>
             </div>
             <div className="LibroDetailsContenedorExtra">
                 <div className="CaracteristicasPrincipales">
                     <h2>Caracteristicas Principales del Libro</h2>
                     <table className="table table-striped">
                         <tbody>
                             <tr>
                                 <th scope="row">Titulo del libro</th>
                                 <td>{itemDetail.title}</td>
                             </tr>
                             <tr>
                                 <th scope="row">Autor</th>
                                 <td>{itemDetail.autor}</td>
                             </tr>
                             <tr>
                                 <th scope="row">Idioma</th>
                                 <td>{itemDetail.idioma}</td>
                             </tr>
                             <tr>
                                 <th scope="row">Año de publicacion</th>
                                 <td>{itemDetail.fecha}</td>
                             </tr>
                             <tr>
                                 <th scope="row">Formato</th>
                                 <td>{itemDetail.formato}</td>
                             </tr>
                             <tr>
                                 <th scope="row">Tapa del libro</th>
                                 <td>{itemDetail.tapa }</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
             </div>
         </div>
    );
};   
 export default ItemDetail
 