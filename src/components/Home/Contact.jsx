import './Sections.css'
function Contact (){
    return(
 
        <div className="Contact">
             <div className="FormularioContacto">
                 <div className="content-formulario">
                     <h1 className="logo">Contactate con <span>Nosotros</span></h1>
                     <div className="contact-wrapper animated bounceInUp">
                         <div className="contact-form">
                             <h3>Contacto</h3>
                             <form action="">
                                 <p>
                                     <label>Nombre Completo</label>
                                     <input type="text" name="NombreCompleto"/>
                                 </p>
                                 <p>
                                     <label>Correo Electronico</label>
                                     <input type="email" name="CorreoElectronico"/>
                                 </p>
                                 <p>
                                     <label>Numero Telefono</label>
                                     <input type="tel" name="NumeroTelefono"/>
                                 </p>
                                 <p>
                                     <label>Direccion</label>
                                     <input type="text" name="Direccion"/>
                                 </p>
                                 <p className="block">
                                     <label>Mensaje</label> 
                                     <textarea name="Mensaje" rows="3"></textarea>
                                 </p>
                                 <p className="block">
                                     <button>Enviar</button>
                                 </p>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="MetodosContacto">
                 <div className="accordion" id="accordionExample">
                     <div className="accordion-item">
                         <h2 className="accordion-header" id="headingOne">
                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 Medios de Contacto
                             </button>
                         </h2>
                         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                             <div className="accordion-body">
                                 <ul>
                                     <li><i className="fas fa-envelope-open-text"></i> Email: StyleSchool@gmail.com</li>
                                     <li><i className="fas fa-map-marker-alt"></i> Ubicacion: Cordoba, Argentina</li>
                                     <li><i className="fas fa-phone"></i> Phone: +54 297-478-2511</li>
                                     <li><i className="fab fa-twitter"></i> Twitter: Style_School</li>
                                     <li><i className="fab fa-instagram"></i> Instagram: StyleSchool_Official</li>
                                     <li><i className="fab fa-youtube"></i> Youtuber: Style School Code</li>
                                     <li><i className="fab fa-facebook-f"></i> Facebook: Style_School</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     <div className="accordion-item">
                         <h2 className="accordion-header" id="headingTwo">
                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                 Medios de Pago
                             </button>
                         </h2>
                         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                             <div className="accordion-body">
                                 <ul>
                                     <li><i className="far fa-money-bill-alt"></i> Efectivo: 10% Descuento</li>
                                     <li><i className="fas fa-money-check"></i> Tarjeta: 5% Interes (Envio Gratis)</li>
                                     <li><i className="fab fa-cc-paypal"></i> Paypal: 15% Descuento</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>

    );
}
export default Contact