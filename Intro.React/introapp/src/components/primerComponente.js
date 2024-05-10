import React from "react";


let nombre = "Duvan";

//componente de clase 
  export default class PrimerComponente extends React.Component{
      render(){
          return <h1>hello my mane is </h1>
      }
          
}

//componente de funcion normal

export function SegundoComponente({nombre,apellido}){

    return <h1>SegundoComponente {nombre} y {apellido} </h1>;
}


//componente de funcion de flecha 

export let TercerComponente = () => <h1>Tercer Componente bb</h1>
