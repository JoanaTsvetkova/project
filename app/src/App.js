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
import { Details } from './components/Detals/Detail';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';

import * as authService from './services/authService'
import { Logout } from './components/Logout/Logout';

function App() {

  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAllGames()
      .then(result => {
        setGames(result)
      })
  }, [])

  const [auth, setAuth] = useState({});


  const onLogin = async (data) => {

    const result = await authService.login(data);

    setAuth(result);

    navigate('/')
  }

  const onCreateGameSub = async (data) => {
    const newGame = await gameService.createGame(data)

    setGames(state => [...state, newGame])

    navigate('/catalog')
  };

  const onRegister = async (values) => {
    const { confirmPass, ...regidterData} = values;
    if (confirmPass !== regidterData.password)
    {
      return;
    }

    const user = await authService.register(regidterData)

    setAuth(user);

    navigate('/')
  };

  const onLogout = async()=>{
    authService.logout();
    setAuth({});
  }

  const context = {
    onLogin,
    onRegister,
    onLogout,
    userId: auth._id,
    email: auth.email,
    accessToken: auth.accessToken,
    isAuthenticated: !!auth.accessToken

  }

  return (
    <AuthContext.Provider value={ context }>

      <>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register onRegister={onRegister}/>} />
          <Route path='/login' element={<Login onLogin={onLogin} />} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/catalog' element={<Catalog games={games} />} />
          <Route path='/catalog/:id' element={<Details />} />
          <Route path='/create' element={<Create onCreateGameSub={onCreateGameSub} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>



      </>
    </AuthContext.Provider>
  );
}

export default App;
