import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import SubjectsSearch from "./Subjects"



export default function ProfessorSearch() {
    let [professors, setProfessors] = useState([])
    useEffect(() => {
        const promisse = axios.get('http://localhost:4000/professors')
        promisse.then(response => setProfessors(response.data))
    }, [])


    return (
        <ProfessorsList>
            {professors.map(each => {
                return (
                    <>
                        <p key={each.id}>{each.name}</p>
                        <SubjectsSearch periods={false} professor={each} />
                    </>
                )
            })}
        </ProfessorsList>
    )
}
const ProfessorsList = styled.ul`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 20px 0;

    &&>p{
        font-family: "Prompt";
        font-weight: bold;
        font-size: 15px;
        color: teal;
    }
    li{
        font-size: 12px;
        margin: 3px 0;
    }
`
