"use strict";
var forma = document.getElementById("forma"), 
  salidaNombre = document.getElementById("salidaNombre"),
  salidaSecreto = document.getElementById("salidaSecreto"),
  salidaNavegador = document.getElementById("salidaNavegador"),
  salidaEmail = document.getElementById("salidaEmail"),
  salidaUsuario = document.getElementById("salidaUsuario"),
  salidaUrl = document.getElementById("salidaUrl"),
  salidaTelefono = document.getElementById("salidaTelefono"),
  salidaBuscar = document.getElementById("salidaBuscar"),
  salidaVerso = document.getElementById("salidaVerso"); 
  
forma.addEventListener("submit", procesa, false); 

function procesa() {
  var nombre = forma["nombre"].value,
    secreto = forma["secreto"].value,
    navegador = forma["navegador"].value,
    email = forma["email"].value,
    usuario = forma["usuario"].value,
    url = forma["url"].value,
    telefono = forma["telefono"].value,
    buscar = forma["buscar"].value,
    verso = forma["verso"].value;

  salidaNombre.value =  nombre;
  salidaSecreto.value =  secreto;
  salidaNavegador.value =  navegador;
  salidaEmail.value =  email;
  salidaUrl.value =  url;
  salidaUsuario.value =  usuario;
  salidaTelefono.value =  telefono;
  salidaBuscar.value =  buscar;
  salidaVerso.value =  verso;
}
