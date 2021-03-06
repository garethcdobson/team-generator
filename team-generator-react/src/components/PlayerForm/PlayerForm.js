import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class PlayerForm extends Component {

     constructor(props) {
          super(props);

          this.state = { 
               name: '',
               error: '',
          };

          this.handleChangeName = this.handleChangeName.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     };

     handleChangeName(e) {
          this.setState({ name: e.currentTarget.value });
     };

     handleSubmit(e){
          e.preventDefault();
          if(/^[a-zA-Z\s]*$/.test(this.state.name)){
               this.props.addPlayer(this.state.name);
               this.setState({ error: ''});
          }else{
               this.setState({ error: "Player name must contain only letters"})
          }
     };
     
     render() {
          return (
               <>
                    <Form className="container" onSubmit={ this.handleSubmit }>
                         <Form.Group controlId="playerName">
                              <h2>Add Players</h2>
                              <div className="d-flex">
                                   <Form.Control 
                                        type="text" 
                                        placeholder="Enter player name..." 
                                        className="m-1"
                                        value={ this.state.name } 
                                        onChange={ this.handleChangeName }  
                                   />
                                   <Button 
                                        variant="outline-light" 
                                        type="submit" 
                                        className="m-1">
                                        Add
                                   </Button>
                              </div>
                              <p className="error">{ this.state.error }</p>
                              <Form.Text><p>Add a minimum of four players to generate teams.</p></Form.Text>
                         </Form.Group>
                    </Form>
               </>
          );
     }; 
};

export default PlayerForm;