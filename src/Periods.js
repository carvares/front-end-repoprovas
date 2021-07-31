import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import SubjectsSearch from "./Subjects"

export default function Periods() {
    const [semesters, setSemesters] = useState([])
    useEffect(() => {
        const promisse = axios.get('http://localhost:4000/semesters');
            promisse.then(response => setSemesters(response.data))
    }, [])
    return (
        <>
        {semesters.map(each=>{
            return(
            <PeriodsList>
                <p>{each.semester}</p>
                <SubjectsSearch period = {each.id}/>
            </PeriodsList>
        )})}
        </>
    )
}
const PeriodsList =  styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    &&>p{
        font-family: "Prompt";
        font-weight: bold;
        font-size: 15px;
        color: teal;
    }
`
