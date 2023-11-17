import React from 
"react";

let estilo = {color: 'blue', backgroundColor: 'pink', listStyle: 'none', textAlign: 'left'};

const Exemplo = () => {
    return (
    <>
        <h1>Sofrendo nessa sexta</h1>
        <p>eita como reprova</p>
        <ul style={estilo}>
            <li>A REPROVADOS</li>
            <li>B REPROVADOS</li>
            <li>C REPROVADOS</li>
            <li>D E O RESTANTE</li>
        </ul>
    </>
    )
}

export default Exemplo;