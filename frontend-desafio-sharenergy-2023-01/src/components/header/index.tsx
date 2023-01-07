import { useHistory } from "react-router-dom"
import logo_color from "../../assets/logo_color.png"

function Header(props: any){
    const clickHeaders = ["Users", "Clients", "Dogs", "Cats"]

    const history = useHistory()
    
    return(
        <header className="bg-gradient-to-r from-blue-400 to-indigo-500 w-full shadow-md">
            <ul className="flex w-full justify-between flex-row cursor-pointer h-16 items-center p-5">
                <img src={logo_color} alt="" className="w-40"/>
                {clickHeaders.map((clickLink: any, index) => (
                        <li key={index} onClick={() => history.push(`${clickLink.toLowerCase()}`)} className="text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-800 hover:text-white shadow-md">{clickLink}</li>
                    ))}
                {props.children}
            </ul>
        </header>
    )
}

export default Header
