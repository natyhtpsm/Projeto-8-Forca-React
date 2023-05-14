import styled from "styled-components";

const alphabeth = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras(props) {
    return (
        <Container>
            <Teclado>
                {alphabeth.map((letra, i) => { 
                        return(
                            <Botoes data-test="letter" onClick={(() => props.clicked(letra, i))} isClicked={props.letraUsada.includes(letra)} key={j} disabled={props.letraUsada.includes(letra)}>{letra}</Botoes>
                        )
                    })
                }
            </Teclado>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 800px;
`

const Teclado = styled.div`
    display: flex;
    justify-content: center;
    align-intems: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`
const Botoes = styled.button `
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 5px
    line-height: 19px;
    margin: 5px;
    align-items: center;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto';
    font-style: normal;
    
    border: ${props => props.isClicked ? "2px solid #798A9F" : "2px solid #39739D"};
    background-color: ${(props) => props.isClicked === true ? "#9FAAB5":"#E1ECF4"};
    color: ${(props) => props.isClicked ? "#798A9F": "#39739D"};
    cursor: ${(props) => props.isClicked === true ? "default" : "pointer"};

`