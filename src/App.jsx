import React, {CreateContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
// import AuthContext from './components/AuthContext.jsx';


function App() {
  return (
    <>
      <NavBar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </div>
    </>
  )
}

export default App;
