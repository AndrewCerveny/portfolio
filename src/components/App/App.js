import React from 'react';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';
import Selections from '../Selections/Selections'
import Footer from '../Footer/Footer';


import './App.css';

function App() {
  return (
    <main className='App'>
      <Navbar/>
      <Welcome/>
      <Selections/>
      <Footer/>
    </main>
  )
}

export default App;
