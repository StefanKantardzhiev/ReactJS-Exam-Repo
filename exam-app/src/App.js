import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { authServiceFactory } from './services/authService';

import { AuthContext } from './contexts/AuthContext';
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { offerServiceFactory } from './services/offerService';
import { Offer } from './components/Offer/Offer';




function App() {

  const [offers, setOffers] = useState([]);
  const offerService = offerServiceFactory();

  useEffect(() => {
    offerService.getAll()
      .then(result => {
        setOffers(result)
      })
  }, []);


  const [user, setUser] = useLocalStorage('auth', null);
  const [auth, setAuth] = useLocalStorage('auth',{});
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
      <Routes>
        <Route path='/' element={<Home offers={offers} />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/offers' element={<Offer offers={offers} />} />
        {/* <Route path='/photos/create' element={<AddOffer />} /> */}
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
