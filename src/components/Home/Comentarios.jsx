 import perfil1 from '../images/imagesHome/perfil-1.jpg'
 import perfil2 from '../images/imagesHome/perfil-2.jpg'
 import perfil3 from '../images/imagesHome/perfil-3.jpg'
 import perfil4 from '../images/imagesHome/perfil-4.jpg'
 import { Link } from 'react-router-dom'

 import './Home.css'
 
 function Comentarios() {
     return (
     <div className="Comentarios">

     <div className="card">
         <div className="HeaderCard">
             <img src={perfil2} alt="Perfil de Jessica Rodriguez"/>
         </div>

         <div className="BodyCard">
             <h2>Jessica Rodriguez</h2>
             <code>Software Engineer | Web Developer</code>
             <p>Cursos muy completos y divertidos. Me encanto la forma de enseñar que tiene StyleSchool.</p>
             <ul>
                 <li><Link to="/" className="fa fa-facebook"></Link></li>
                 <li><Link to="/" className="fa fa-twitter"></Link></li>
                 <li><Link to="/" className="fa fa-linkedin"></Link></li>
                 <li><Link to="/" className="fa fa-youtube"></Link></li>
             </ul>
         </div>

         <div className="FooterCard">
             <p>Style School</p>
         </div>
     </div>
     <div className="card">
         <div className="HeaderCard">
             <img src={perfil1} alt="Perfil de Mariana Fretch"/>
         </div>

         <div className="BodyCard">
             <h2>Mariana Fretch</h2>
             <code>Marketing Administrator</code>
             <p>Realice un curso de Marketing para perfeccionar mis habilidades y asi mejorar mi desarrollo personal.</p>
             <ul>
                 <li><Link to="/" className="fa fa-facebook"></Link></li>
                 <li><Link to="/" className="fa fa-twitter"></Link></li>
                 <li><Link to="/" className="fa fa-linkedin"></Link></li>
             </ul>
         </div>

         <div className="FooterCard">
             <p>Style School</p>
         </div>
     </div>
     <div className="card">
         <div className="HeaderCard">
             <img src={perfil3} alt="Perfil de Florencia Soto"/>
         </div>

         <div className="BodyCard">
             <h2>Florencia Soto</h2>
             <code>Designer UX|UI</code>
             <p>Bello curso de Diseño UX/UI, me ayudo mucho a descubrir nuevas tecnicas que no conocia.</p>
             <ul>
                 <li><Link to="/" className="fa fa-twitter"></Link></li>
                 <li><Link to="/" className="fa fa-linkedin"></Link></li>
             </ul>
         </div>

         <div className="FooterCard">
             <p>Style School</p>
         </div>
     </div>
     <div className="card">
         <div className="HeaderCard">
             <img src={perfil4} alt="Perfil de Matias Luck"/>
         </div>

         <div className="BodyCard">
             <h2>Matias Luck</h2>
             <code>Developer Full Stack</code>
             <p>Muy buenos libros los que proporciona StyleSchool, muy completos e interesantes.</p>
             <ul>
                 <li><Link to="/" className="fa fa-facebook"></Link></li>
                 <li><Link to="/" className="fa fa-twitter"></Link></li>
                 <li><Link to="/" className="fa fa-linkedin"></Link></li>
             </ul>
         </div>

         <div className="FooterCard">
             <p>Style School</p>
         </div>
     </div>

     </div>
     );
 }  

 export default Comentarios;