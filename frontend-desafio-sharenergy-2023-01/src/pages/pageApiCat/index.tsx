import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header';

function CatsRamdom() {
  const [statusCode, setStatusCode] = useState('404');
  const [img, setImg] = useState('');

  const getStatusCode = async () => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://http.cat/${statusCode}`, 
      { responseType: "blob" }
      ).then(resp => {
        const url = URL.createObjectURL(resp.data);
        console.log(url)
        setImg(url);
}) };

  useEffect(() => {
      getStatusCode();
      
  }, [statusCode]);

  return (
    <div>
      <Header />
      {img && <img src={img} alt="imagem" />}
    </div>
  );
}

export default CatsRamdom;