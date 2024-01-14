import React, { useState, useEffect} from "react";
import './Cadeira.css';
import Genero from "./Genero";
import Nome from "./Nome";


function Cadeira({vazia}){  

let nome = "Cliente";
let bebida = "Bebida 1";
let entrada = "Entrada 1";
let pratoPrincipal = "Prato Principal 1";




   return (
      <div className="cadeira" >
         <div className="nomeGenero"><h1><Nome /></h1><Genero /></div>
         <p>{bebida}</p>
         <p>{entrada}</p>
         <p>{pratoPrincipal}</p>
      </div>
   )
}


export default Cadeira