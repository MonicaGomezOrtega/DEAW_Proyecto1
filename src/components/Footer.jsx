import React, { useState } from 'react';
import librorecl from '../img/librorecl.jpg';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import email from '../img/email.png';


const Footer = () => {
  
    return(
         <>     
    <footer>
        <div className="footer-left">
            <p>&copy; 2025 EVOLVE STYLE. Todos los derechos reservados.</p>
            <p><a href="#">Términos y Condiciones</a> | <a href="#">Avisos de Privacidad</a> |  <a href="#">Redes Sociales</a></p>
        </div>
        <div className="footer-right">
            <a href="#"><img src= {librorecl} alt="Libro de Reclamaciones"/></a>
        </div>
        <div className="footer-right">
            <a href="#"><img src={instagram} alt="Libro de Reclamaciones"/></a>
        </div>
        <div className="footer-right">
            <a href="#"><img src={twitter} alt="Libro de Reclamaciones"/></a>
        </div>
        <div className="footer-right">
            <a href="#"><img src={facebook} alt="Libro de Reclamaciones"/></a>
        </div>
        <div className="footer-right">
            <a href="#"><img src={email} alt="Libro de Reclamaciones"/></a>
        </div>
    </footer>
      </>
    );
};

export default Footer;