import axios from 'axios';
import { useState, useEffect } from 'react';
import ApiConsume from '../../services/api';

function CatsRamdom(){
  const [statusCode, setStatusCode] = useState("404")
  const [img, setImg] = useState("")

  const getStatusCode = async () => {
    try{
       // const res = await ApiConsume("cats").get(`${statusCode}`,{
    
    //       mode: 'no-cors', 
    //       cache: 'no-cache', 
    //       credentials: 'same-origin',
            // headers: {
            //     'Content-Type': 'image/jpeg'
            //     },
            // })
        //console.log(res)
      const res = await fetch(`https://http.cat/${statusCode}`,{
          method: 'GET',
          mode: 'no-cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
          'Content-Type': 'image/jpeg'
          },
      })
      res.blob().then(blob => {
        console.log("vapo",blob);
        
        setImg(URL.createObjectURL(blob))
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getStatusCode()
  }, [statusCode])

  return (
      <>
      {img}
      <img src={img} alt="imagem" />
      </>
  )
}

export default CatsRamdom
