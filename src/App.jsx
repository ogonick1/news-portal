import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/navigation/Navigation';
import News from './components/news/News';
import AsNavFor from './components/Slick/Slick';
import Status from './components/status/Status';
import Video from './components/video/Video';

function App() {
  return (

    <div className="App">

      <Header />
      <Navigation />
      <Status />
      <AsNavFor />
      <News />
      <Video />
      <Footer />

    </div>
  );
}

export default App;
