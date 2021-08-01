import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Tests from "./Tests"



export default function SubjectsSearch({ period, professor,profModal }) {

    let [subjects, setSubjects] = useState([])
    let [relations, setRelations] =  useState([])
    let [modal, setModal] = useState(false)

    useEffect(() => {
        const promisse = axios.get(`${process.env.REACT_APP_HOST}/subjects`)
        promisse.then(response => setSubjects(response.data))

    }, [])
    if (period) {
        subjects = subjects.filter(i => { return i.semester.id === period })
    }

    useEffect(() => {
        if (professor) {
            const promisse = axios.get(`${process.env.REACT_APP_HOST}/relations`)
            promisse.then(response => setRelations(response.data.filter(i=>{return i.professor.id === professor.id})) )
        }
    
    }, [])
    if(professor){
        return (
            
            <SubjectsList>
                {relations.map(each => {
                    return (
                        <ul>
                            <p onClick={() => setModal(!modal)} key={each.subject.id}>{each.subject.name}</p>
                            <Tests id={each.subject.id} key={`k${each.subject.id}`} modal={modal} />
                        </ul>
                    )
                })}
            </SubjectsList>
        )
    }
    
    return (
        <SubjectsList>
            {subjects.map(each => {
                return (
                    <ul>
                        <p onClick={() => setModal(!modal)} key={each.id}>{each.name}</p>
                        <Tests id={each.id} key={`k${each.id}`} modal={modal} />
                    </ul>
                )
            })}
        </SubjectsList>
    )
}
const SubjectsList = styled.div`
    margin: 10px auto;
    display: flex;
    align-items: flex-start;
    font-family: "Prompt";
    padding: 0 0 15px 0;
    p{
        color:teal;
        font-size: 15px;
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10px;
        
    }
    li{
        font-size: 12px;
        margin: 3px 0;
    }
    
`

