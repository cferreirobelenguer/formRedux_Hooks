
import {AGREGAR_NOMBRE,AGREGAR_EMAIL } from '../store/types';

export const agregarNombre_=nombreValor=>({
    type:AGREGAR_NOMBRE,
    nombre:nombreValor
})
export const agregarCorreo_=correoValor=>({
    type:AGREGAR_EMAIL,
    correo:correoValor
})