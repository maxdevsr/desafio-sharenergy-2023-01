import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header';

function CatsRamdom() {
  const [statusCode, setStatusCode] = useState('100');
  const [img, setImg] = useState('');
  const [textInput, setTextInput] = useState("")


  const httpCodes = ['100', '101', '102', '103', '200', '201', '202', 
  '203', '204', '206', '207', '300', '301', '302', '303', '304', '305', 
  '307', '308', '400', '401', '402', '403', '404', '405', '406', '407', 
  '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', 
  '418', '420', '421', '422', '423', '424', '425', '426', '429', '431', 
  '444', '450', '451', '497', '498', '499', '500', '501', '502', '503', 
  '504', '506', '507', '508', '509', '510', '511', '521', '522', '523', '525', '599']

  const handleChange = (e: any) => {
     setTextInput(e.target.value);
   }
   
   const submitName = (e: any) => {
     e.preventDefault();
     if(httpCodes.includes(textInput.toString())){return setStatusCode(textInput)}
     setTextInput("")
     return setStatusCode("404")
   }

  const getStatusCode = async () => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://http.cat/${statusCode}`, 
      { responseType: "blob" }
      ).then(resp => {
        const url = URL.createObjectURL(resp.data);
        console.log(url)
        setImg(url);
        }).catch((err) => console.log(err)) };

  useEffect(() => {
      getStatusCode();
      
  }, [statusCode]);

  return (
    <>
      <Header>
           <div></div>
      </Header> 
      <div className='flex mt-[5rem]'>
        <div className='w-[50rem] bg-slate-300 rounded p-3 mt-5'>
          <div className='flex justify-center flex-col p-5 items-center'>
            <h1>Clique em qualquer botao com um status HTTP e veja a imagem do gato correspondente!</h1>
            <h1 className='mt-3 mb-3'>Clique no botão de pesquisa para ir em um status code especifico.</h1>
            <h1>Caso nao renderize a imagem <a target="_blank" href="https://cors-anywhere.herokuapp.com/corsdemo" className='p-2 bg-blue-500 hover:bg-blue-700 rounded'>clique aqui</a> e clique no botao <strong>Request.</strong></h1>
            <form onSubmit={submitName} className="flex flex-row p-3 rounded bg-white mt-3">
              <input className="p-2 rounded" type="text" placeholder="Digite um status HTTP" value={textInput} onChange={handleChange}/>
              <button className="mr-5 p-3 rounded bg-blue-600 hover:bg-blue-700" type="submit">Click</button>
            </form>
          </div>
          {
            httpCodes.map((code: any, index) => (
              <button onClick={() => setStatusCode(code)} className="text-white font-bold py-2 bg-blue-500 hover:bg-blue-700 rounded w-55 h-30 m-1 shadow-md items-center pl-2 pr-2" key={index} >{code}</button>
            ))
          }
        </div>
        {img && <img src={img} alt="imagem" className='w-[450px] h-[500px] mt-5 rounded' />}
      </div>
    </>
  );
}

export default CatsRamdom;