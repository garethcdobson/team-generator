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
          this.handleShuffle = this.handleShuffle.bind(this);
     }

     handleReset(){
          this.props.handleReset();
     }

     handleShuffle(){
          this.props.handleShuffle();
     }

     render() {

          let teamA = this.props.teamA;
          let teamB = this.props.teamB;
          
          return (
               <>
                    <div className="wrapper">
                         <div className="container">
                              <h2>Team A</h2>
                              <ul className="list-unstyled">
                                   { teamA.map((value, index) => (
                                        <li key={ index }>
                                             <h3>{ value }</h3>
                                             <svg className="shirtIconA" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px"><g id="Team_shirt" data-name="Team shirt"><path d="M62.935,27.644,53.948,4.077A4.987,4.987,0,0,0,49.333,1H41a1,1,0,0,0-1,1c0,2.71-3.663,5-8,5s-8-2.29-8-5a1,1,0,0,0-1-1H14.667A5,5,0,0,0,10.04,4.105L1.065,27.644a1,1,0,0,0,.672,1.321L12,31.764V62a1,1,0,0,0,1,1H51a1,1,0,0,0,1-1V31.764l10.263-2.8a1,1,0,0,0,.672-1.321Zm-12.2,2.391A1,1,0,0,0,50,31V61H14V31a1,1,0,0,0-.737-.965L3.327,27.326l.844-2.215,8.513,2.838a1,1,0,0,0,.632-1.9l-8.431-2.81L11.9,4.846A2.994,2.994,0,0,1,14.667,3H22.1c.7,3.388,4.869,6,9.9,6s9.2-2.612,9.9-6h7.435a2.983,2.983,0,0,1,2.758,1.818l7.024,18.423-8.431,2.81a1,1,0,0,0,.632,1.9l8.513-2.838.844,2.215Z"/><path d="M47,19H37a1,1,0,0,0-1,1V30a1,1,0,0,0,.485.857l5,3a1,1,0,0,0,1.03,0l5-3A1,1,0,0,0,48,30V20A1,1,0,0,0,47,19ZM46,29.434l-4,2.4-4-2.4V21h8Z"/><path d="M23,57H17a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/><path d="M27,57H26a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/></g></svg>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="container">
                              <h2>Team B</h2>
                              <ul className="list-unstyled">
                                   { teamB.map((value, index) => (
                                        <li key={ index }>
                                             <h3>{ value }</h3>
                                             <svg className="shirtIconB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px"><g id="Team_shirt" data-name="Team shirt"><path d="M62.935,27.644,53.948,4.077A4.987,4.987,0,0,0,49.333,1H41a1,1,0,0,0-1,1c0,2.71-3.663,5-8,5s-8-2.29-8-5a1,1,0,0,0-1-1H14.667A5,5,0,0,0,10.04,4.105L1.065,27.644a1,1,0,0,0,.672,1.321L12,31.764V62a1,1,0,0,0,1,1H51a1,1,0,0,0,1-1V31.764l10.263-2.8a1,1,0,0,0,.672-1.321Zm-12.2,2.391A1,1,0,0,0,50,31V61H14V31a1,1,0,0,0-.737-.965L3.327,27.326l.844-2.215,8.513,2.838a1,1,0,0,0,.632-1.9l-8.431-2.81L11.9,4.846A2.994,2.994,0,0,1,14.667,3H22.1c.7,3.388,4.869,6,9.9,6s9.2-2.612,9.9-6h7.435a2.983,2.983,0,0,1,2.758,1.818l7.024,18.423-8.431,2.81a1,1,0,0,0,.632,1.9l8.513-2.838.844,2.215Z"/><path d="M47,19H37a1,1,0,0,0-1,1V30a1,1,0,0,0,.485.857l5,3a1,1,0,0,0,1.03,0l5-3A1,1,0,0,0,48,30V20A1,1,0,0,0,47,19ZM46,29.434l-4,2.4-4-2.4V21h8Z"/><path d="M23,57H17a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/><path d="M27,57H26a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/></g></svg>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>

                    <div className="container">
                         <Button 
                              onClick={ this.handleShuffle }
                              variant="outline-light" 
                              className="col-12 mt-2">
                              Re-Shuffle
                         </Button>

                         <Button 
                              onClick={ this.handleReset }
                              variant="outline-light" 
                              className="col-12 mt-2">
                              Reset
                         </Button>
                    </div>
               </>
          )
     }
};

export default TeamList;