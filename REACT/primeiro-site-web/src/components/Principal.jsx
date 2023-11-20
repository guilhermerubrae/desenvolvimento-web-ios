import React from "react";
import ANOCTURNAL from "../img/ANOCTURNAL.jpg";

let estilo = { fontSize: '2rem', color: 'pink', backgroundColor: 'orange' };

const principal = () => {
    return (
        <>
            <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>
            <ul>
                <li>Animais Noturnos</li>
                <li>Na Natureza Selvagem</li>
                <li>A Chegada</li>
                <li>Esposa de Mentirinha</li>
                <li>Um Contratempo</li>
            </ul>
            <img src={ANOCTURNAL} alt="Animais Noturnos" />
        </>
    );
}

export default principal;
