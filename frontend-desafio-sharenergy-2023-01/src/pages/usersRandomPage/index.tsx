import { useEffect, useState } from "react"
import ApiConsume from "../../services/api"

function UsersRamdom(){

    const [count, setCount] = useState(1)
    const [fakeUsers, setFakeUsers] = useState([])

    const getUsers = async () => {
        try {
            const res = await ApiConsume("users").get(`/?page=${count}&results=10&seed=abc`)
            console.log(res.data.results)
            setFakeUsers(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [count])

    // foto do usuário, nome completo, email, username e idade

    return (
        <>
            <button onClick={(() => setCount(count - 1))} disabled={count <= 1 ? true : false}> ant</button>
            <button onClick={(() => setCount(count + 1))}> prox</button>
            <ul>
            {fakeUsers?.map((user:any, index) => (
                    <li key={index}>
                        <img src={user.picture.medium} alt="Foto de perfil" />
                        <span>Nome:</span>
                        <div>
                            <span>{user.name.title} {user.name.first} {user.name.last}</span>    
                        </div>
                        <span>Email:</span>
                        <span>{user.email} </span>
                        <span>Usuario:</span>
                        <span>{user.login.username}</span>
                        <span>Idade: {user.dob.age}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UsersRamdom