import { Link } from "react-router-dom";

 function Footer() {
     return (
     <div className="Footer">

         <footer>
             <div className="main-content">
                 <div className="left box">
                     <h2>Nosotros</h2>
                     <div className="content">
                         <p>StyleSchool. Clases online en vivo dictadas por expertos de la industria, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de +65.000 estudiantes.</p>
                         <div className="social">
                             <Link target="_blank"to="/"><span className="fab fa-facebook-f"></span></Link>
                             <Link target="_blank" to="/"><span className="fab fa-twitter"></span></Link>
                             <Link target="_blank" to="/"><span className="fab fa-instagram"></span></Link>
                             <Link target="_blank" to="/"><span className="fab fa-youtube"></span></Link>
                         </div>
                     </div>
                 </div>
                 <div className="center box">
                     <h2>Contacto</h2>
                     <div className="content">
                         <div className="place">
                             <span className="fas fa-map-marker-alt"></span>
                             <span className="text">Cordoba, Argentina</span>
                         </div>
                         <div className="phone">
                             <span className="fas fa-phone-alt"></span>
                             <span className="text">+54 297-478-2511</span>
                         </div>
                         <div className="email">
                             <span className="fas fa-envelope"></span>
                             <span className="text">StyleSchool@gmail.com</span>
                         </div>
                     </div>
                 </div>
                 <div className="right box">
                     <h2>NavBar</h2>
                     <div className="content">
                         <Link to="/">Inicio</Link>
                         <Link to="/">Nosotros</Link>
                         <Link to="/">Libros</Link>
                         <Link to="/">Contacto</Link>
                     </div>
                 </div>
             </div>
             <div className="bottom">
                 <center>
                     <span className="credit">Creado por <Link to="/">StyleSchool</Link> | </span>
                     <span className="far fa-copyright"></span><span> 2020 Todos los derechos reservados.</span>
                 </center>
             </div>
         </footer>

     </div>
     );
 }  

 export default Footer;