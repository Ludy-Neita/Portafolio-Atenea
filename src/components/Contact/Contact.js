import React, { useState, useRef } from "react";
// useRef, manejar los input. una variable valor inicial o vacio, y en el input se asocia con ref. se accede al DOM de manera directa. getDocumetbyID, generar un focus al primer input cuando se renderiza por primera vez
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [contactDates, setContactDates] = useState({ // propiedades de objeto vacias.
        name: "",
        email: "",
        message: "",
        checkedTerms: false,
    });

    const [emptyInputs, setEmptyInputs] = useState(false); // inputs vacios.
    const [successSendForm, setSuccessSendForm] = useState(false); // 
    const [errorSendForm, setErrorSendForm] = useState(false);

    const form = useRef();

    const onSubmit = (e) => { // recibe un evento, que es del click
        //evitar el recargo de la página
        e.preventDefault();

        //VALIDAR FORMULARIO


        if(contactDates.name==="" || // viene vacio o .... viene vacio.. 
            contactDates.email==="" || 
            contactDates.message==="" || 
            contactDates.checkedTerms===false)
            
            { // entonces
             setEmptyInputs(true); 
             // se pone vacío entonces, aparece el comentario de la linea 125 :                {emptyInputs && (
             // <p>  You need to fill out all the inputs and accept to the terms </p>
            }
 
         else{
             emailjs.sendForm(
                 'service_wmxz72v', // AQUí VA SU ID DE SERVICIO EMAILJS: REACT_APP_EMAILJS_SERVICE_ID=
                 'template_k2a9dsl', // AQUÍ VA EL TEMPLATE ID: REACT_APP_EMAILJS_TEMPLATE_ID=
                 form.current,
                 '6ICi8hC0Q7COcgbpT' // AQUÍ VA LA PUBLIC KEY: REACT_APP_EMAILJS_PUBLIC_USER_ID=

             ).then(
                 (result) =>{ // como es true, es todo lo que esta en <S.Form onSubmit={onSubmit} ref={form}>
                     setSuccessSendForm(true);
                     setEmptyInputs(false);
                     setErrorSendForm(false)
                 },
                 (error) =>{
                     setErrorSendForm(true); // si sale true muestra este mensaje de la linea 131
                     //  <S.TextError> There was an error, please try again later </S.TextError>
                 }
             );
         }
 
    };


    return (
        <S.ContainerContact id="contact">

            <S.Title>👋🏽 Contact with me</S.Title>

            <S.ContainerForm>

                {successSendForm ? ( // Si hubo un cambio de datos, entonces.

                    <S.SuccessMessage>The form was sent succesfully</S.SuccessMessage>


                ) :
                    (

                        <S.Form onSubmit={onSubmit} ref={form}> {/* ref es el use ref. */}

                            <S.InputForm
                                placeholder="Your name"
                                type="text"
                                name="name"
                                onChange={(e) =>
                                    setContactDates({ ...contactDates, name: e.target.value }) // el nombre tiene el evento que tiene cargado.
                                }
                                value={contactDates.name} // esto es del objeto  del useState.
                            />

                            <S.InputForm
                                placeholder="email"
                                type="email"
                                name="email"
                                onChange={(e) =>
                                    setContactDates({ ...contactDates, email: e.target.value })
                                }
                                value={contactDates.email}
                            />

                            <S.TextArea
                                placeholder="Write your message"
                                name="message"
                                onChange={(e) =>
                                    setContactDates({ ...contactDates, message: e.target.value })
                                }
                                value={contactDates.message}
                            />

                            <S.ContainerConditions>

                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        setContactDates({ ...contactDates, checkedTerms: e.target.checked, })
                                    }
                                />

                                <span> Accept the terms and conditions </span>

                            </S.ContainerConditions>

                            <S.Button type="submit"> Send </S.Button>

                        </S.Form>
                    )}
                {/* si el set imput, viene vacio. es decir que este en tru: setEmptyInputs(true); */}
                {emptyInputs && (

                    <p>  You need to fill out all the inputs and accept to the terms </p>

                )}

                {errorSendForm && (

                    <S.TextError> There was an error, please try again later </S.TextError>

                )}

            </S.ContainerForm>
        </S.ContainerContact>
    );

};


export default Contact;