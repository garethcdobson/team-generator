import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class PlayerForm extends Component {
     render() {
          return (
               <>
                    <Form className="container">
                         <Form.Group controlId="playerName">
                              <h2>Add Players</h2>
                              <div className="d-flex">
                                   <Form.Control 
                                        type="text" 
                                        placeholder="Enter name" 
                                        className="m-1" 
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