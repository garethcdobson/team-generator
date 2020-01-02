import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class PlayerList extends Component {

     constructor(props) {
          super(props);
          this.handleClear = this.handleClear.bind(this);
     }

     handleClear(){
          this.props.handleClear();
     }

     render() {

          let players = this.props.players;

          return (
               <>
                    <div className="container">
                         <h2>Current Players</h2>
                         <ul>
                              { players.map((value, index) => (
                                   <li key={ index }>
                                        <p>{ value }</p>
                                   </li> 
                              ))}
                         </ul>
                    </div>

                    <div className="container">
                         <Button 
                              variant="outline-dark" 
                              className="col-12 mt-2">
                              Generate Teams
                         </Button>

                         <Button 
                              onClick={ this.handleClear }
                              variant="outline-dark" 
                              className="col-12 mt-2">
                              Clear Players
                         </Button>
                    </div>
               </>
          )
     }
};

export default PlayerList;
