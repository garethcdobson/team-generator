import React from "react";
import { Button } from 'react-bootstrap';

const PlayerList = ({ players, handleClear }) => (
     <>
          <div className="container">
               <h2>Current Players</h2>
               <ul className="list-unstyled">
                    <li>Player One</li>
                    <li>Player Two</li>
                    <li>Player Three</li>
               </ul>
          </div>

          <div className="container">
               <Button 
                    variant="outline-dark" 
                    className="col-12 mt-2">
                    Generate Teams
               </Button>

               <Button 
                    onClick={ handleClear }
                    variant="outline-dark" 
                    className="col-12 mt-2">
                    Clear Players
               </Button>
          </div>
     </>
);

export default PlayerList;
