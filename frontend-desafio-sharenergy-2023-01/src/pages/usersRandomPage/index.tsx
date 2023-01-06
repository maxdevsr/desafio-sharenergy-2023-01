import { useEffect, useState } from "react"
import Header from "../../components/header"
import ApiConsume from "../../services/api"

function UsersRamdom(){

    const [count, setCount] = useState(1)
    const [fakeUsers, setFakeUsers] = useState([])
    const [textInput, setTextInput] = useState("")
    const [usersFinded, setUsersFinded] = useState([])

    const getUsers = async () => {
        try {
            const res = await ApiConsume("users").get(`/?page=${count}&results=8&seed=abc`)
            setFakeUsers(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: any) => {
     setTextInput(e.target.value);
   }
   
   const submitName = (e: any) => {
       e.preventDefault();
       console.log(fakeUsers, textInput)
       setUsersFinded(fakeUsers.filter((user: any) => {
           if(user.name.first.toLowerCase() === textInput.toLowerCase())return user
           if (user.email.toLowerCase() === textInput.toLowerCase()) return user
           return null
        }))
        console.log(usersFinded)
   }

    useEffect(() => {
        getUsers()
    }, [count])

    // foto do usuário, nome completo, email, username e idade

    return (
        <>
            <Header>
                <form onSubmit={submitName} className="flex flex-row p-6">
                    <button className="mr-5 p-3 rounded bg-blue-600 hover:bg-blue-700" type="submit">Buscar usuario</button>
                    <input className="p-2 rounded" type="text" placeholder="Pesquise um nome" value={textInput} onChange={handleChange}/>
                </form>
            </Header>
            <ul className="flex flex-wrap w-[70%] gap-3 content-center mt-8 mb-8">
            {fakeUsers?.map((user:any, index) => (
                <li key={index} className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm flex flex-col items-start min-w-[315px]">
                        <img src={user.picture.large} alt="Foto de perfil" className="w-28 h-28 rounded mb-3"/>
                        <div className="mb-2">
                            <span>{user.name.title} {user.name.first} {user.name.last}</span>    
                        </div>
                        <span className="mb-2">{user.email} </span>
                        <span className="mb-2">{user.login.username}</span>
                        <span className="mb-2">Idade: {user.dob.age}</span>
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