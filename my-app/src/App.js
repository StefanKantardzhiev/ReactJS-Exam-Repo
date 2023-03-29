import { Header } from './components/Header/Header';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import { useState, useEffect } from 'react';
import { Login } from './components/Login/Login';
// import { gameServiceFactory } from './services/offerService';
import { offerServiceFactory } from './services/offerService'
import { Register } from './components/Register/Register';

function App() {
  const offerService = offerServiceFactory();
  // const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    offerService.getAll()
      .then(result => {
        setOffers(result)
      })
  }, [])

  return (
    <>
      <Header />
      <main id="main-content">

        <Routes>
          <Route path='/' element={<Home offers={offers} />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/logout' element={<Logout />} /> */}
          <Route path='/register' element={<Register />} />
          {/* <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
          <Route path='/catalog' element={<Catalog games={games} />} />
          <Route path='/catalog/:gameId' element={<GameDetails />} />
          <Route path='/catalog/:gameId/edit' element={<EditGame onGameEditSubmit={onGameEditSubmit} />} /> */}
        </Routes>
      </main>
    </>

  )
}

export default App;
