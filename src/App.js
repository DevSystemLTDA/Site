import React from 'react';
import Video from './componentes/Video';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import Footer from './componentes/Footer'; 
import './App.css';


function App() {
  return (
   <div className='app'>
    <Video />
    <Header/>
    <MainContent/>
    <Footer/>
   </div>
  );
}

export default App;
