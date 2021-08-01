import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "./contexts/UserContext";
import InsertTest from "./InsertTest";
import Periods from "./Periods";
import ProfessorSearch from "./Professors";


export default function Home(){
    let [profList, setProfList] = useState(false)
    let [subjList, setSubjList] = useState(false)
    const {insert} = useContext(UserContext);

    return(
        <FrontMenu>
            <h1>RepoProvas</h1>
            <div>
            {!insert?<button onClick={()=>{setSubjList(!subjList); setProfList(false)}}>Por disciplina</button>:null}
            {!insert?<button onClick={()=>{setProfList(!profList); setSubjList(false)}}>Por professor</button>:null}
            </div>
           {profList && !insert? <ProfessorSearch/>: null} 
           {subjList && !insert? <Periods/>: null} 
           {insert?<InsertTest/>:null}

        </FrontMenu>
    )
}

const FrontMenu =  styled.div`
    width: 60%;
    height: 80vh;
    margin: 15vh auto 0 auto;

    h1{
        font-family: "Lobster";
        font-size: 70px;
        display: flex;
        justify-content: center;
    }
    div{
        margin:50px auto;
        display: flex;
        justify-content: center;

         button{
             margin: none;
             background-color: #414141;
             color: white;
             font-family: "Prompt";
             border-radius: 5px;
             border: none;
             width: 140px;
             height: 50px;
             margin: 0 5px;
             cursor: pointer;
         }
    }
`