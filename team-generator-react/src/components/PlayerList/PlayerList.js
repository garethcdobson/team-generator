import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class PlayerList extends Component {
     render() {
          return (
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
                              variant="outline-dark" 
                              className="col-12 mt-2">
                              Clear Players
                         </Button>
                    </div>
               </>
          );
     }; 
};

export default PlayerList;