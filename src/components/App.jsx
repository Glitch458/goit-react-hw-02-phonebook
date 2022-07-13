import { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  hanldeFilterInputChange = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const { id, contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log(normalizedFilter);
    return (
      <>
        <Form submitHandler={this.submitHandler} />
        <Filter
          value={contacts.name}
          inputChange={this.hanldeFilterInputChange}
        />
        <Contacts id={id} contacts={filteredContacts} />
      </>
    );
  }
}

export default App;
