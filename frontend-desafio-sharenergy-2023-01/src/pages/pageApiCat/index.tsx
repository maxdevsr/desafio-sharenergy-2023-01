import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import ApiConsume from '../../services/api';

function CatsRamdom(){
  const [statusCode, setStatusCode] = useState("404")
  const [img, setImg] = useState("")

  const getStatusCode = async () => {
    try{
      fetch(`https://http.cat/${statusCode}`,{
          method: 'GET',
          mode: 'no-cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
          'Content-Type': 'image/jpeg'
          },
      }).then(response => response.blob())
        .then(URL.createObjectURL)
        .then(url => setImg(url))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getStatusCode()
  }, [statusCode])

  return (
      <div>
        <Header/>
      {img}
      <img src={img} alt="imagem" />
      </div>
  )
}

export default CatsRamdom
