import React from 'react';
import '../estilos/Bola.css'

function intercambio(id){
  var elemento = document.getElementById(id);
  var bolaGrande = document.getElementById("bolaGrande");
  bolaGrande.innerHTML =  id;
  var existe = elemento.classList.contains( 'salio' );
  if(existe){
    elemento.classList.remove( 'salio' );
  }else{
    elemento.className += ' salio';
    bolaGrande.className += ' bolota';
    setTimeout(function(){
      bolaGrande.classList.remove( 'bolota' );
  }, 2500);
  }  
}

function Bola(props) {  
  return (
    <div
      id={props.children}
      className={`bola-contenedora`}
      onClick={() => intercambio(props.children)}>
      {props.children}
    </div>
  );
}

export default Bola;

