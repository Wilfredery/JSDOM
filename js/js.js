// console.log(1);

// window.addEventListener('load', prim());
// function prim() {
//     console.log(2);
// }

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4);
// })

// console.log(5);

// const btnEnviar = document.querySelector('#botonform');
// btnEnviar.addEventListener('click', function(evento) { //Cuando alguien presione ese boton
//     evento.preventDefault();
//     console.log('Le diste click al boton enviar.');
// })

 const datos = {
     nombre: '',
     email: '',
     mensaje: ''
 }

 const veriInputNombre = document.querySelector('#nombre');
 const veriInputEmail = document.querySelector('#email');
 const veriInputMensaje = document.querySelector('#mensaje');

 veriInputNombre.addEventListener('input', leer);
 veriInputEmail.addEventListener('input', leer);
 veriInputMensaje.addEventListener('input', leer);

  function leer(evento) {

     datos[evento.target.id] = evento.target.value;
    //  console.log(datos);
  }

const form = document.querySelector('.formulario');
form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const {nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === '') {

        mostrarAlert('Todos los campos son obligatorios.', 'error'); 
        return;
    }

    mostrarAlert('Se envió correctamente.');

})

function mostrarAlert(mensaje, error = null) {
    const alert = document.createElement('P');
    alert.textContent = mensaje;

    if (error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('exito');
    }
    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}