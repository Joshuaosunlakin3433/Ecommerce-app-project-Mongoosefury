import React from 'react';
import './index.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <NavBar />
      <Footer />
    </div>
  )
}

export default App