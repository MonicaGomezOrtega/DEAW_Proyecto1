import React, { useState} from 'react';
import video from '../intro-video/video.mp4';

const ContentColumns =() =>{

    return(  
    <section className="content-columns" id="catalogo">
            <div className="video-container">
                <h4>Descubre las novedades en EVOLVE STYLE</h4>
                <video controls muted loop>
                    <source src={video} type="video/mp4"/>
                    Tu navegador no soporta la etiqueta de video.
                </video>
                
            </div>
            <div className="category-menu">
                <h4>Explora por Categoría</h4>
                <ul>
                    <li><a href="#novedades">Novedades</a></li>
                    <li><a href="#vestidos">Vestidos</a></li>
                    <li><a href="#tops-blusas">Tops y Blusas</a></li>
                    <li><a href="#pantalones-faldas">Pantalones y Faldas</a></li>
                    <li><a href="#chaquetas-abrigos">Chaquetas y Abrigos</a></li>
                    <li><a href="#ofertas">Ofertas</a></li>
                </ul>
            </div>
        </section>






    );

};
   export default ContentColumns;
