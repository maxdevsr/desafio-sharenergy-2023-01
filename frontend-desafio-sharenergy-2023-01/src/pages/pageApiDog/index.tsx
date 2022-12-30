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
      //  if(!res.data.url) getStatusCode()
       setImg(data.url)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getStatusCode()
  }, [count])

  return (
      <div className="">
        <Header/>
          <div className="flex flex-col w-screen h-screen items-center">
            <img src={img} alt="imagem" className='w-[300px] h-[400px]'  />
            <button onClick={(() => setCount(count + 1))}>Atualizar</button>
          </div>
      </div>
  )
}

export default DogsRamdom
