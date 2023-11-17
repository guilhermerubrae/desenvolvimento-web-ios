import React from "react";
// props = propriedades estamos nos referênciando a propriedades parametros/propriedades

function NomeAluno (props) {
    return <h1>Calmô {props.name} é o mais brabo da tropa</h1>
}

const mensagem = () => {
    return (
            <NomeAluno name="Guillermo"/>
        )
    }

export default mensagem;

// export default {mensagem, nomeAluno};