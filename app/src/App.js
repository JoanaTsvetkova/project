import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Home } from './components/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Register } from './components/Register/Register';

import { Route, Routes} from 'react-router-dom'

import { useEffect, useState } from 'react';

function App() {

  const [games, setGames] = useState([]);

  return (
    <>
        <Navigation/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>

    
    
    
    </>
  );
}

export default App;
