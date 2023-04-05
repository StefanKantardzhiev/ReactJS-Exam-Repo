import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { authServiceFactory } from './services/authService';
import { useParams } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { offerServiceFactory } from './services/offerService';
import { Offer } from './components/Offer/Offer';
import { Latest } from './components/Latest/Latest';
import { OfferDetails } from './components/OfferDetails/OfferDetails'
import { Create } from './components/Create/Create';


function App() {

  //Offers get from server  
  const [recent, setRecent] = useState([]);
  const [offers, setOffers] = useState([]);



  //user get from server  
  const [user, setUser] = useLocalStorage('auth', {});
  const [auth, setAuth] = useLocalStorage('auth', {});
  const offerService = offerServiceFactory();
  // offers GET services
  useEffect(() => {
    offerService.getAll()
      .then(result => {
        setOffers(result)
      })
  }, []);

  useEffect(() => {
    offerService.getRecent()
      .then(result => {
        setRecent(result)
      })
  }, []);



  const authService = authServiceFactory(auth.accessToken)


  const setUserData = (userData) => {
    setUser({ ...userData });
  }

  const onLogoutHandler = () => {
    setUser(null);
    localStorage.clear();
    authService.logout();
  }



  return (

    <AuthContext.Provider value={{ user, setUserData, onLogoutHandler }}>

      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home offers={offers} />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/offers' element={<Offer offers={offers} />} />
          <Route path='/offers/latest' element={<Latest offers={recent} />} />
          <Route path='/offers/create' element={<Create offers={offers} />} />
          <Route path='/offers/:offerId' element={<OfferDetails offers={offers} />} />
        </Routes>
      </main>

    </AuthContext.Provider>
  );
}

export default App;
