import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class TeamList extends Component {

     constructor(props) {
          super(props);
          this.state = { 
               teamA: this.props.teamA,
               teamB: this.props.teamB,
          };
          this.handleReset = this.handleReset.bind(this);
     }

     handleReset(){
          this.props.handleReset();
     }

     render() {

          let teamA = this.props.teamA;
          let teamB = this.props.teamB;
          
          return (
               <>
                    <div className="container">
                         <h2>Team A</h2>
                         <ul className="list-unstyled">
                              { teamA.map((value, index) => (
                                   <li key={ index }>
                                        <p>{ value }</p>
                                   </li> 
                              ))}
                         </ul>
                    </div>

                    <div className="container">
                         <h2>Team B</h2>
                         <ul className="list-unstyled">
                              { teamB.map((value, index) => (
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
                              Re-Shuffle
                         </Button>

                         <Button 
                              onClick={ this.handleReset }
                              variant="outline-dark" 
                              className="col-12 mt-2">
                              Reset
                         </Button>
                    </div>
               </>
          )
     }
};

export default TeamList;