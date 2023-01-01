const Button = (props: any) => { 
    return (
        <>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>props.func()} >{ props.name}</button></>
    )
}

export default Button