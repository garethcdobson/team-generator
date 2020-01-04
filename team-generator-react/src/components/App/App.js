import React from 'react';
import Teams from '../Teams/Teams';
import Players from '../Players/Players';
import Footer from '../Footer/Footer';


const App = ({ submitted }) => (
     <>
          { submitted ? 
          <>
               <Teams className="content"/>
               <Footer />
          </> 
          :
          <>
               <Players className="content"/>
               <Footer />
          </>
          }
     </>
);

export default App;