import React from 'react';
import './App.css';
import Login from './pages/login';
import CatsRamdom from './pages/pageApiCat';
import UsersRamdom from './pages/usersRandomPage';

function App() {
  return (
    <div className="App">
      <CatsRamdom/>
    </div>
  );
}

export default App;
