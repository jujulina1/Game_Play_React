import './App.css';


import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Catalog from './components/Catalog/Catalog';
import Edit from './components/Edit/Edit';
import Details from './components/Details/Details'
import Create from './components/Create/Create'
import { getAll } from './services/dataService';


function App() {

  const [games, setGames] = useState([]);

  console.log("HOME");

  useEffect(()=> {

    

     getAll()
       .then(data => {
        console.log(data);
        setGames(data)
       })
    
    
   

  },[]) 
  return (
    <div id="box">
      {/* //Header */}
      <Header />
            <main id="main-content">
              <Routes>
                <Route path='/' element={<Home games={games}/> }></Route>
                <Route path='/login' element={<Login/> }></Route>
                <Route path='/register' element={<Register/> }></Route>
                <Route path='/catalog' element={<Catalog/> }></Route>
                <Route path='/create' element={<Create/> }></Route>
                <Route path='/edit/:gameId' element={<Edit/> }></Route>
                <Route path='/details/:gameId' element={<Details/> }></Route>
              </Routes>
              
            </main>
    </div>
  );
}

export default App;
