import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function InsertTest() {
    let [professors, setProfessors] = useState(false)
    let [relations, setRelations] = useState([])
    let [subjects, setSubjects] =  useState([])
    let [name, setName] = useState("")
    let [link, setLink] = useState("")
    let [subject, setSubject] = useState("")
    let [semester, setSemester] = useState("")
    let [category, setCategory] = useState("")
    let [professor, setProfessor] =  useState("")
    
    useEffect(() => {
        const promisseRel = axios.get('http://localhost:4000/relations')
        promisseRel.then(response => setRelations(response.data))
        const promisseSub = axios.get('http://localhost:4000/subjects')
        promisseSub.then(response => setSubjects(response.data))

    }, [])
    function sendTest(e){
        e.preventDefault()
       axios.post('http://localhost:4000/sendtest',{name, link, subject, semester, category, professor})
    }
    
    return (
        <>
            <Form onSubmit= {(e)=> sendTest(e)} >
                <input onChange={(e)=>setName(e.target.value)} value={name} placeholder={"semestre da prova"} />
                <input onChange={(e)=>setLink(e.target.value)} value={link} placeholder={"link da prova"} />

                <select onChange ={e => { setSubject(e.target.value) ;setProfessors(relations.filter(i =>  {return i.subject.id === Number(e.target.value)} ))}}>
                    <option value ={0}>Matéria</option>
                    {subjects.map(each => {
                        return (
                            <option value={each.id} key={each.id}>{each.name}</option>
                        )
                    })}

                </select>
                {professors?
                <select onChange={(e)=>setProfessor(e.target.value)}>
                    <option>Professor</option>
                    {professors.map(each => {
                        return (
                            <option value={each.professor.id} key={each.professor.id}>{each.professor.name}</option>
                        )
                    })}

                </select>:null}
                {professors?
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option>Tipo</option>
                    <option value={1}>P1</option>
                    <option value={2}>P2</option>
                    <option value={3}>P3</option>
                    <option value={4}>VS</option>
                    <option value={5}>VR</option>
                </select>:null}
                {professors?
                <select onChange={(e)=>setSemester(e.target.value)}>
                    <option>Semestre</option>
                    <option value={1}>1°</option>
                    <option value={2}>2°</option>
                    <option value={3}>3°</option>
                    <option value={4}>4°</option>
                    <option value={5}>5°</option>
                    <option value={6}>6°</option>
                    <option value={7}>Eletiva</option>
                </select>:null}
                
                <button type={"submit"} >Enviar</button>
            </Form>

        </>
    )
}
const Form =  styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        height: 30px;
        width: 200px;
    }
    select{
        margin: 5px;
        height: 30px;
        width: 200px;
    }
    input{
        margin: 5px;
    }
`