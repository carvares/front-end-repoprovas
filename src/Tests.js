import axios from "axios"
import { useEffect, useState } from "react"

export default function Tests({ id, modal }) {
    const [testsList, setTestsList] = useState([])
    useEffect(() => {
        const promisse = axios.get(`${process.env.REACT_APP_HOST}/tests/${id}`)
        promisse.then(response => setTestsList(response.data))
    }, [])

    return (
        <>
            {testsList.map((test) => {
                return (
                    <a href = {test.link} target = "_blank" rel="noreferrer"> { modal?<li  key={test.id}>{test.name}</li>:null} </a>
                )
            })}
        </>
    )
}