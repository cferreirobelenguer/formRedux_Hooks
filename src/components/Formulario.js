//Component form
import {AGREGAR_NOMBRE,AGREGAR_EMAIL } from '../store/types';
import{agregarNombre_,agregarCorreo_} from '../store/action'
import React, {useRef} from 'react';
import '../App.css';
import {useDispatch, useSelector} from 'react-redux';
//variables to change state
var nombreValor='';
var correoValor='';

const Formulario= () => {
    const dispatcher=useDispatch();
    const userNombre=useSelector(state=>state.user);
    const userCorreo=useSelector(state=>state.correo);
    const agregarNombre=()=>dispatcher(agregarNombre_(nombreValor));
    const agregarCorreo=()=>dispatcher(agregarCorreo_(correoValor));
    //it recives the form information
    const nombre=useRef();
    const correo=useRef();
    const recibirFormulario=(e)=>{
        e.preventDefault();
        nombreValor=nombre.current.value;
        correoValor=correo.current.value;
        //the data entered by the user in the form
        

        //we can to access to the global state
        console.log({userNombre})
        console.log({userCorreo})
        //methods of actions
        agregarNombre(nombreValor);
        agregarCorreo(correoValor);

    }   
   
    const confirmar=()=>{
        alert("Formulario enviado");
        console.log(nombreValor);
        console.log(correoValor);
    }
   
    return(
        <div >
            <br></br>
            <br></br>
            <form onSubmit={recibirFormulario} onChange={recibirFormulario}>
                <div>
                    <label htmlFor="">Nombre: </label>
                    <input type="text" ref={nombre} name="nombre" required="required"></input>
                </div>
                <div>
                    <label htmlFor="">Correo: </label>
                    <input type="email" ref={correo} name="correo" required="required"></input>
                </div>
                {/*when user clicks the button of submit it executes confirm*/}
                <input type="submit" value="Enviar" onClick={confirmar}>
                </input>
                <input type="reset" value="Limpiar">
                </input>
            </form>
            <br></br>
            
            <h1>{'Datos introducidos:'}<br></br>{'Nombre: '+userNombre}<br></br>{'Correo: '+userCorreo}</h1>
        </div>
    );

}
//we connect the global state in form component
const mapStateToProps=(state)=>{
    return{
        userNombre:state.user,
        userCorreo:state.correo
    }
}


export default Formulario;

