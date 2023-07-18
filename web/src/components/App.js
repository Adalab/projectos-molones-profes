import '../styles/App.scss';
import api from '../services/api';

import { Routes, Route } from 'react-router-dom';
import logo from '../images/logo-adalab.png';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CreateProject from './Main/CreateProject';
import Landing from './Main/Landing';
import { useState, useEffect } from 'react';

function App() {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    api.getAllCardsApi().then((cleanData) => {
      setAllCards(cleanData);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/create" element={<CreateProject />} />
        <Route path="/" element={<Landing allCards={allCards} />} />
      </Routes>
      <Footer logo={logo}></Footer>
    </>
  );
}

export default App;
