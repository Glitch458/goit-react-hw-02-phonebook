import { Component } from 'react';
import Form from './Form';
import ContactList from './ContactList';
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
    const checkNewName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (checkNewName) {
      alert(newContact.name + ' is already in contacts');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  hanldeFilterInputChange = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <Form submitHandler={this.submitHandler} />

        <h2>Contacts</h2>
        <Filter
          value={contacts.name}
          inputChange={this.hanldeFilterInputChange}
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;