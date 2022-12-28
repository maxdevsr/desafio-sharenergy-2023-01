import { useEffect, useState } from "react"
import ApiConsume from "../../services/api"

function UsersRamdom(){

    const [count, setCount] = useState(1)
    const [fakeUsers, setFakeUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [count])

    const getUsers = async () => {
        try {
            const res = await ApiConsume("users").get(`/?page=${count}&results=10&seed=abc`)
            setFakeUsers(res.data.results)
           } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={(() => setCount(count - 1))} disabled={count <= 1 ? true : false}> ant</button>
        
            <button onClick={(() => setCount(count + 1))}> prox</button>
            <ul>
            {fakeUsers?.map((user:any, index) => (
                    <li key={index}>
                        <span>{user.gender} </span>
                        <span>{user.email} </span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UsersRamdom