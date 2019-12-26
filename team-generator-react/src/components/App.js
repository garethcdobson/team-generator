import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PlayerForm from './PlayerForm/PlayerForm';
import PlayerList from './PlayerList/PlayerList';

function App() {
     return (
          <>
               <Header />
               <PlayerForm />
               <PlayerList />
               <Footer />
          </>
     );
}

export default App;