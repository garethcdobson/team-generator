import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class PlayerForm extends Component {

     constructor(props) {
          super(props);
          this.state = { 
               name: '',
               players: [],
          };
          this.handleChangeName = this.handleChangeName.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChangeName(e) {
          this.setState({ name: e.currentTarget.value });
     }

     handleSubmit(e){
          e.preventDefault();
          this.setState({
               players: [...this.state.players, this.state.name]
          });
     }
     
     render() {
          return (
               <>
                    <Form className="container" onSubmit={ this.handleSubmit }>
                         <Form.Group controlId="playerName">
                              <h2>Add Players</h2>
                              <div className="d-flex">
                                   <Form.Control 
                                        type="text" 
                                        placeholder="Enter name" 
                                        className="m-1"
                                        value={ this.state.name } 
                                        onChange={ this.handleChangeName }  
                                   />
                                   <Button 
                                        variant="outline-dark" 
                                        type="submit" 
                                        className="m-1">
                                        Add
                                   </Button>
                              </div>
                              <Form.Text>Add a minimum of four players to generate teams.</Form.Text>
                         </Form.Group>
                    </Form>
               </>
          );
     }; 
};

export default PlayerForm;