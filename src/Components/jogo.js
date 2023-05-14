//imagem da forca, botão de iniciar, palavra do jogo

import styled from "styled-components";
import { useState } from "react";
import Palavras from "./Palavras";
import Teclado from "./Teclado";
import forca0 from '..assets/forca0.png';
import forca1 from '..assets/forca1.png';
import forca2 from '..assets/forca2.png';
import forca3 from '..assets/forca3.png';
import forca4 from '..assets/forca4.png';
import forca5 from '..assets/forca5.png';
import forca6 from '..assets/forca6.png';

export default function Jogo() {
    const [letraUsada, setLetraUsada] = useState([]);
    const [forca, setForca] = useState(0);
    const [esconder, setEsconder] = useState([]);
    const [escolher, setEscolher] = useState([]);
    const [especial, setEspecial] = useState([]);

    function iniciar() {
        setLetraUsada([]);
        setForca(0);
        const aleatorio = Math.floor(Math.random() * Palavras.length);
        setEscolher(Palavras[aleatorio].split(""));
        setEsconder(Array(Palavras[aleatorio].length).fill("_"));
        setEspecial(
            Palavras[aleatorio]
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
        );
    }

    function clicado(letra) {
        if (esconder.includes("_")) {
            if (forca < 6) {
                const mostrar = [...esconder];
                const novaLetraUsada = letraUsada.includes(letra)
                    ? letraUsada
                    : [...letraUsada, letra];
                setLetraUsada(novaLetraUsada);
                if (especial.includes(letra)) {
                    for (let i = 0; i < especial.length; i++) {
                        if (especial[i] === letra) {
                            mostrar[i] = escolher[i];
                        }
                    }
                    setEsconder(mostrar);
                } else if (!escolher.includes(letra)) {
                    setForca(forca + 1);
                }
            }
        }
    }

    function Forca() {
        if (forca === 0) {
            return <img src={forca0} />
        }
        if (forca === 1) {
            return <img src={forca1} />
        }
        if (forca === 2) {
            return <img src={forca2} />
        }
        if (forca === 3) {
            return <img src={forca3} />
        }
        if (forca === 4) {
            return <img src={forca4} />
        }
        if (forca === 5) {
            return <img src={forca5} />
        }
        if (forca === 6) {
            return <img src={forca6} />
        }
        else {
            return <img src={forca6} />
        }
    }

    function Cor() {
        if (forca > 5) {
            return "#B70303";
        }
        else if (forca < 6 && esconder.includes("_")) {
            return "#39739D";
        }
        else if (forca < 6 && !esconder.includes("_")) {
            return "#039614";
        }
    }
    const funcaoForca = Forca();
    const funcaoCor = Cor();

    return (
        <div>
            <Centralizar>
                <Topo>
                    <Forcao></Forcao>
                    <InicarJogo>
                        <Botoes onClick={iniciar} data-test="choose-word" forca={forca}>{(forca < 6 && funcaoCor !== "#039614" || letraUsada.length === 0) ? "Escolher Palavra" : "Reiniciar Jogo"}</Botoes>
                        <Embaralhar data-test="word" forca={forca} style={{ color: `${funcaoCor}` }}>{(forca < 6) ? esconder : escolher}</Embaralhar>
                    </InicarJogo>
                </Topo>
                <Teclado></Teclado>
            </Centralizar>
        </div>
    );
}

const Centralizar = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;`

const Topo = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;`

const Botoes = styled.div`  
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #129147;
    margin: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: white;
    background-color: #27AE60;
    cursor: pointer;
    &:hover {
        background-color: #129147;
    }`

const InicarJogo = styled.div` 
    width: 400px;
    height: 55vh;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;`

const Embaralhar = styled.div`  
    font-family: 'Roboto', sans-serif;
    font-size: 45px;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-top: 100px;
    `

const Forcao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 350px;
        height: 90%;
        margin-bottom: 30px;}`
    

