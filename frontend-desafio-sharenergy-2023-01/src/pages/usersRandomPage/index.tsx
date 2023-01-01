import { useEffect, useState } from "react"
import Header from "../../components/header"
import ApiConsume from "../../services/api"

function UsersRamdom(){

    const [count, setCount] = useState(1)
    const [fakeUsers, setFakeUsers] = useState([])

    const getUsers = async () => {
        try {
            const res = await ApiConsume("users").get(`/?page=${count}&results=8&seed=abc`)
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
            <Header/>
            <ul className="flex flex-wrap w-[1100px] h-[100%] gap-3 content-center">
            {fakeUsers?.map((user:any, index) => (
                <li key={index} className="flex w-[250px] h-[320px] flex-col items-start p-4">
                        <img src={user.picture.large} alt="Foto de perfil" className="w-28 h-28 rounded"/>
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
            <div className="w-[1100px] flex justify-around">
                <button onClick={(() => setCount(count - 1))} disabled={count <= 1 ? true : false} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > ant</button>
                <button onClick={(() => setCount(count + 1))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > prox</button>
            </div>
        </>

    )
}

export default UsersRamdom