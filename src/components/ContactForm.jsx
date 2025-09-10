import React, { useState} from 'react';

const ContactForm =() => {
   const[formData, setFormData]=useState({
        nombre:'',
        correo:'',
        celular:'',
        categoria:'',
        presupuesto:''

   });

    const[message, setMessage]= useState('');
    const[isError, setisError]= useState(false);

    const handleChange =  (e) =>{
       const  {name,value}= e.target;
       setFormData(prevData =>({...prevData,[name]: value}));
    
    };

    const handleSubmit =  (e) =>{
        e.preventDefault();
    
            let isValid = true;
            let messages = [];

        //validacion del nombre//
       if (formData.nombre.trim() === '') {
                isValid = false;
                messages.push('El nombre completo es obligatorio.');
               
            }

        /// validacion de correo
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.correo.trim())) {
                isValid = false;
                messages.push('Por favor, ingresa un correo electrónico válido.');
              
            }
        //validacion de celular
            const phoneNumber = formData.celular.replace(/\D/g, '');
            if (phoneNumber.length < 9) {
                isValid = false;
                messages.push('El número celular debe tener al menos 9 dígitos.');
                           
            }

        //validacion presupuesto
       const presupuesto = parseFloat(formData.presupuesto);
            if (isNaN(presupuesto) || presupuesto < 100) {
                isValid = false;
                messages.push('El presupuesto máximo debe ser de al menos 100 soles.');
                
            }
         //configuracion de messages
        if (!isValid) {
               setisError(true);
               setMessage(messages.join('<br>'));
            
        } else {
                 setisError(false);
                 setMessage('Formulario enviado con éxito! Te contactaremos pronto.');
                 setFormData({
                     nombre:'',
                     correo:'',
                     celular:'',
                     categoria:'',
                     presupuesto:''
                 });

            };
  
    };

    return(  
      <>   
     <section className="contact-form-section" id="contacto">
            <h3>Contactanos</h3>
        <form className="contact-form" onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange}required/>

                <label htmlFor="correo">Correo de Contacto:</label>
                <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange}required/>

                <label htmlFor="celular">Número Celular:</label>
                <input type="tel" id="celular" name="celular"value={formData.celular} onChange={handleChange}/>

                <label htmlFor="categoria">Categoría de Juego:</label>
                <select id="categoria" name="categoria"value={formData.categoria} onChange={handleChange}>
                        <option value="">Selecciona una categoría</option>
                        <option value="novedades">Novedades</option>
                        <option value="vestidos">Vestidos</option>
                        <option value="tops-blusas">Tops-Blusas</option>
                        <option value="pantalones-faldas">Pantalones-Faldas</option>
                        <option value="chaquetas-abrigos">Chaquetas-Abrigos</option>
                        <option value="Ofertas">Ofertas</option>
                </select>

                <label htmlFor="presupuesto">Presupuesto Máximo:</label>
                <input type="number" id="presupuesto" name="presupuesto"value={formData.presupuesto} onChange={handleChange} min="0" step="10" placeholder="Ej: 100"/>

                <button type="submit">Enviar Consulta</button>

         </form>

            <p className="form-message">{message}</p>
        </section>
        </>
        );
    };

        export default ContactForm;