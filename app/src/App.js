import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Home } from './components/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Register } from './components/Register/Register';

import { Route, Routes, useNavigate } from 'react-router-dom'

import * as gameService from './services/gameService'

import { useEffect, useState } from 'react';
import { Login } from './components/Login/Login';

import { AuthContext } from './context/AuthContext';
import { Details } from './components/Details/Detail';

function App() {

  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(()=>{
    gameService.getAllGames()
      .then(result => {
        console.log(result);
        setGames(result)
      })
  }, [])

  const [auth, setAuth] = useState([]);


  const onLogin = async (data) => {
  console.log(data); 
  }

  const onCreateGameSub = async (data) => {
    const newGame = await gameService.createGame(data)

    setGames(state => [...state, newGame])

    navigate('/catalog')
  };

  useEffect(() => {


  }, [])

  return (
    <AuthContext.Provider value={{ onLogin }}>

      <>
        <Navigation />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login onLogin={onLogin} />} />
            <Route path='/catalog' element={<Catalog games={games}/>} />
            <Route path='/catalog/:id' element={<Details/>} />
            <Route path='/create' element={<Create onCreateGameSub={onCreateGameSub}/>} />
            <Route path='/about' element={<Create />} />
            <Route path='/contacts' element={<Create />} />
          </Routes>
        </main>



      </>
    </AuthContext.Provider>
  );
}

export default App;
