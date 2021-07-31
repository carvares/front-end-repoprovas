import styled from "styled-components";

export default function Topbar() {
    return (
        <Bar>
            <p>Início</p>
            <p>Enviar prova</p>
        </Bar>
    )
}


const Bar = styled.div`
    width: 100vw;
    height: 40px;
    background-color: #414141;
    position: fixed;
    top:0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p{
      color: white;
        font-family:"Prompt";
    }
`

