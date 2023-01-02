import { useHistory } from "react-router-dom"
import logo_color from "../../assets/logo_color.png"
function Header(props: any){
    const clickHeaders = ["Users", "Clients", "Dogs", "Cats"]

    const history = useHistory()
    
    return(
        <header className="bg-gradient-to-r from-blue-400 to-indigo-500 w-full">
            <ul className="flex w-[100%] justify-between flex-row cursor-pointer h-[60px] items-center p-5">
                <img src={logo_color} alt="" className="w-[13rem]"/>
                {clickHeaders.map((clickLink: any, index) => (
                        <li key={index} onClick={() => history.push(`${clickLink.toLowerCase()}`)} >{clickLink}</li>
                    ))}
                {props.children}
            </ul>
        </header>
    )
}

export default Header