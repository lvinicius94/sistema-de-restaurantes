import React, { useState, useEffect} from "react";
import './Genero.css';
import IconeNeutralGender from './assets/neutral-gender.png';
import IconeMaleGender from './assets/male-gender.png';
import IconeFemaleGender from './assets/female-gender.png';



function Genero(){  

    const [genero, setGenero] = useState(IconeMaleGender);

    // Função para alternar entre os estados
    const mudarGenero = () => {
        switch (genero) {
            case IconeMaleGender:
                setGenero(IconeFemaleGender);
                break;
            case IconeFemaleGender:
                setGenero(IconeMaleGender);
                break;
            default:
                setGenero(IconeMaleGender);
        }
    };

    return (
        <div className="mudarGenero" onClick={mudarGenero}>
            <img className="iconeGenero" src={genero}/>
        </div>
    );
}





export default Genero