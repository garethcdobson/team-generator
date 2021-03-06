import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class PlayerList extends Component {

     constructor(props) {
          super(props);

          this.state = { 
               players: this.props.players,
          };

          this.handleClear = this.handleClear.bind(this);
          this.handleGenerate = this.handleGenerate.bind(this);
          this.handleDeleteLast = this.handleDeleteLast.bind(this);
     }

     handleClear(){
          this.props.handleClear();
     }

     handleGenerate(){
          this.props.handleGenerate();
     }

     handleDeleteLast(){
          this.props.handleDeleteLast();
          this.setState({ 
               players: this.props.players 
          })
     }

     render() {

          let players = this.props.players;
          
          return (
               <>
                    <div className="container player-list">
                         <h2>Current Players</h2>
                         <ul className="list-unstyled">
                              { players.map((value, index) => (
                                   <li key={ index }>
                                        <h3>{ value }</h3>
                                   </li> 
                              ))}
                         </ul>
                    </div>

                    { players.length > 0 ? 
                         <div className="container">
                              <div>
                                   <Button 
                                        onClick={ this.handleDeleteLast }
                                        variant="outline-light" 
                                        className="col-12 mt-2">
                                        Delete Last Player
                                   </Button>
                                   
                                   <Button 
                                        onClick={ this.handleClear }
                                        variant="outline-light" 
                                        className="col-12 mt-2">
                                        Clear Players
                                   </Button>
                              </div>

                              { players.length > 3 ?
                                   <Button 
                                        onClick={ this.handleGenerate }
                                        variant="outline-light" 
                                        className="col-12 mt-2">
                                        Generate Teams
                                   </Button>
                              : null }
                         </div>
                    : null }
               </>
          )
     }
};

export default PlayerList;
