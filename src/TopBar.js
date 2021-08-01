import { useContext } from "react";
import styled from "styled-components";
import UserContext from "./contexts/UserContext";


export default function Topbar() {
    const {insert, setInsert} = useContext(UserContext);
    return (
        <Bar>
            <p onClick={()=>setInsert(!insert)}>Enviar prova</p>
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
        cursor: pointer;
    }
`

