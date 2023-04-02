import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import { Header } from "./components/Header/Header";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
