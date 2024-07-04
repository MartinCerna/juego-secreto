let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
   let titulo = document.querySelector(elemento);
   titulo.innerHTML = texto;
   return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(numeroDeUsuario == numeroSecreto);
   asignarTextoElemento('p', (numeroDeUsuario == numeroSecreto) ? `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}` :
      (numeroDeUsuario > numeroSecreto) ? 'El número es menor' : 'El número es mayor');
   (numeroDeUsuario == numeroSecreto) ? intentos : intentos++;
   limpiarCaja();
   (numeroDeUsuario == numeroSecreto) ? document.getElementById('reiniciar').removeAttribute('disabled') : console.log('Error');
   return;
}

function reiniciarJuego() {
   condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
   } else {
      if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
      } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}

function condicionesIniciales() {
   //mensajes
   asignarTextoElemento('h1', 'Juego del número secreto');
   asignarTextoElemento('p', `Ingresa un número entre 1 y ${numeroMaximo}`);
   //Limpiar la caja
   limpiarCaja();
   //generar númereo aleatorio
   numeroSecreto = generarNumeroSecreto();
   //reiniciar intentos
   intentos = 1;
}

condicionesIniciales();