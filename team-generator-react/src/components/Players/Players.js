import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PlayerForm from '../PlayerForm';
import PlayerList from '../PlayerList';

const Players = () => (
     <>
          <Header />
          <PlayerForm />
          <PlayerList />
          <Footer />
     </> 
);

export default Players;