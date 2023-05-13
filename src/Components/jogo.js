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

export default function Jogo(){
    const [letraUsada, setletraUsada] = useState([]);
    const [forca, setForca] = useState([]);
    const [esconder, setEsconder] = useState([]);
    const [escolher, setEscolher] = useState([]);
    const [especial, setEspecial] = useState([]);
    
    function iniciar(){
        setletraUsada([]);
        setForca(0);
        const aleatorio = Math.floor(Math.random() * Palavras.length);
        setEscolher(Palavras[aleatorio].split(""));
        setEsconder(Array(Palavras[aleatorio].length).fill("_"));
        setEspecial(Palavras[aleatorio].normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    }

    function clicado(letra){
        if(esconder.includes("_")){
            if(forca<6){
                const mostrar = [...esconder];
                const novaLetraUsada = letraUsada.includes(letra) ? letraUsada : [...udesletters, letra];
                setletraUsada(novaLetraUsada);
                if(especial.includes(letra)){
                    for(let i = 0; i < especial.length; i++){
                        if(especial[i]===letra){
                            mostrar[i]=escolher[i];
                        }
                    }
                    setEsconder(mostrar);
                }
                else if(!escolher.includes(letra)) {setForca(forca+1);}
            }
            
        }
    }
    function Forca(){
        if(forca===0){
            return <img src={forca0}/>
        }
        if(forca===1){
            return <img src={forca1}/>
        }
        if(forca===2){
            return <img src={forca2}/>
        }
        if(forca===3){
            return <img src={forca3}/>
        }
        if(forca===4){
            return <img src={forca4}/>
        }
        if(forca===5){
            return <img src={forca5}/>
        }
        if(forca===6){
            return <img src={forca6}/>
        }
        else{
            return <img src={forca6}/>
        }
    }

    function Cor(){
        if(forca>5){
            return "";
        }
        else if(forca<6 && esconder.includes("_")){
            return "";
        }
        else if(forca<6 && !esconder.includes("_")){
            return "";
        }
    }
    const funcaoForca = Forca();
    const funcaoCor = Cor();

    
}
