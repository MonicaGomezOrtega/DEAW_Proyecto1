import React, { useState } from 'react';
import IMAG3 from '../img/IMAG3.jpeg';


const Banner = () => {

    return( 
       <> 

       <section className="hero" id="inicio">
            <img src={IMAG3} alt="Portada de Modelos"/>
            <div className="hero-text">
                <h2>"Moda que define. No que sigue."</h2>
                <p>"Diseñado para tu ambición. Estilo para tu historia."</p>
            </div>
        </section>
       </>
    );
};

export default Banner;



























