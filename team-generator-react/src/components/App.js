import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PlayerForm from './PlayerForm/index';
import PlayerList from './PlayerList/index';

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