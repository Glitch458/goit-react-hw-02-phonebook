import { Component } from "react";
import Form from "./Form";
import Contacts from "./Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  submitHandler = (newContact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
   }));
  }
  
  render () {
    return (
      <>
        <Form submitHandler={this.submitHandler}/>
        <Contacts contacts={this.state.contacts}/>
      </>
    )
  }
};

export default App;