import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import ApiConsume from '../../services/api';

function DogsRamdom(){
  const [count, setCount] = useState(0)
  const [img, setImg] = useState("")

  const getStatusCode = async () => {
    try{
       const { data } = await ApiConsume("dogs").get(`/`)
       console.log(data.url)
       setImg(data.url)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getStatusCode()
  }, [count])

  return (
      <>
        <Header>
           <div></div>
        </Header>
        <h1 className='mt-[7rem] font-bold'>
          A cada clique no botão uma foto nova e aleatoria de um cachorro sera renderizada na sua tela! 
        </h1>
          <div className="flex flex-col w-screen h-screen items-center">
            <img src={img} alt="imagem" className='w-[300px] h-[400px] rounded mt-[5rem]'  />
            <button onClick={(() => setCount(count + 1))} className="p-9 bg-blue-500 hover:bg-blue-700 mt-8 rounded" >Gerar nova foto</button>
          </div>
      </>
  )
}

export default DogsRamdom
