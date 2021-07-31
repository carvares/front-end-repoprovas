import axios from "axios"
import { useEffect, useState } from "react"

export default function Tests({ id, modal }) {
    const [testsList, setTestsList] = useState([])
    useEffect(() => {
        const promisse = axios.get(`http://localhost:4000/tests/${id}`)
        promisse.then(response => setTestsList(response.data))
    }, [])


    return (
        <>
            {testsList.map((test) => {
                return (
                    modal?<li key={test.id}>{test.name}</li>:null
                )
            })}
        </>
    )
}