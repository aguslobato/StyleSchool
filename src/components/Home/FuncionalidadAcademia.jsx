 import zoom from '../images/imagesHome/clases-zoom.jpg'
 import libroJuego from '../images/imagesBooks/libro-diseño-juego.png'
 import publicidad1 from '../images/imagesHome/publicidad-1.jpg'
 import publicidad2 from '../images/imagesHome/publicidad-2.jpg'
 import publicidad3 from '../images/imagesHome/publicidad-3.jpg'
 import './Home.css'
 import { Link } from 'react-router-dom'

 function FuncionalidadAcademia(){
     return (
         <div className="FuncionalidadAcademia">

             <div className="BecaEstudio">
                 <div className="BecaEstudioContenedor">
                     <div className="BecaEstudioHead">
                         <div className="BecaEstudioContenido">
                             <h2>Beca <code>Style</code></h2>
                             <p>La beca es una forma de ofrecer cursos de alta calidad a un precio accesible. Los estudiantes pagan una fraccion del precio real del curso o carrera, a cambio de un compromiso con su propia educacion y desarrollo profesional.</p>
                             <code>¡Premiamos tu compromiso a mejorar tu desarrollo personal!</code> 
                             <Link to="/">Acceder a la beca</Link>
                         </div>
                         <div className="BecaEstudioImagen">
                             <img src={zoom} alt="Clases Virtuales en StyleSchool" />
                         </div>
                     </div>
                     <div className="BecaEstudioBody">
                         <div className="BecaEstudioRequisitos">
                             <h2><code>¿Que requisitos debo cumplir para acceder a la Beca Style?</code></h2>
                             <p>El acceso a la Beca Style es opcional para todos, solo debes cumplir con 2 requisitos una vez dentro del curso/carrera:</p>
                             <ul>
                                 <li>"Entregar tus proyectos practicos en tiempo y forma."</li>
                                 <li>"Cumplir con el 85% de asistencia."</li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="ImagenesCarousel">
                 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-indicators">
                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                     </div>
                     <div className="carousel-inner">
                         <div className="carousel-item active">
                             <img src={publicidad1} className="d-block w-100" alt="..."/>
                             <div className="carousel-caption d-none d-md-block">
                                 <h5>Un buen cafe para acompañar la lectura de un atractivo libro de programacion.</h5>
                                 <p>Some representative placeholder content for the first slide.</p>
                             </div>
                         </div>
                         <div className="carousel-item">
                             <img src={publicidad2} className="d-block w-100" alt="..."/>
                             <div className="carousel-caption d-none d-md-block">
                                 <h5>Una biblioteca con una gran variedad de libros de programacion.</h5>
                                 <p>Some representative placeholder content for the second slide.</p>
                             </div>
                         </div>
                         <div className="carousel-item">
                             <img src={publicidad3} className="d-block w-100" alt="..."/>
                             <div className="carousel-caption d-none d-md-block">
                                 <h5>Libros que contienen una excelente calidad en sus hojas.</h5>
                                 <p>Some representative placeholder content for the third slide.</p>
                             </div>
                         </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                     </button>
                 </div>
             </div>


             <div className="Propaganda">
                 <div className="PropagandaContenedor">
                     <div className="PropagandaLibro">
                         <Link to="/"><img src={libroJuego} alt="Libro de Propaganda" /></Link>
                     </div>
                 </div>
             </div>
 
         </div>
     );
 }
 export default FuncionalidadAcademia;