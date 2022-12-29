import { useHistory } from "react-router-dom"

function Header(){
    const clickHeaders = ["Users", "Clients", "Dogs", "Cats"]

    const history = useHistory()
    
    return(
        <header className="w-[100%]">
            <ul className="flex w-[100%] justify-between flex-row cursor-pointer h-[60px] items-center p-5">
            {clickHeaders.map((clickLink: any, index) => (
                    <li key={index} onClick={() => history.push(`${clickLink.toLowerCase()}`)} >{clickLink}</li>
                ))}
                <div className="flex flex-row p-6">
                    <h5>Busque um usuario</h5>
                    <input type="text" />
                </div>
            </ul>
        </header>
    )
}

export default Header