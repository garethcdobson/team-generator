import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PlayerForm from '../PlayerForm';
import PlayerList from '../PlayerList';
import TeamList from '../TeamList';

const App = ({ submitted }) => (
     <>
          { submitted ? 
          <>
               <Header />
               <TeamList />
               <Footer />
          </> 
          :
          <>
               <Header />
               <PlayerForm />
               <PlayerList />
               <Footer />
          </>
          }
     </>
);

export default App;