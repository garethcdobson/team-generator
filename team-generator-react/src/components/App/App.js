import React from 'react';
import Teams from '../Teams/Teams';
import Players from '../Players/Players';


const App = ({ submitted }) => (
     <>
          { submitted ? 
          <>
               <Teams />
          </> 
          :
          <>
               <Players />
          </>
          }
     </>
);

export default App;