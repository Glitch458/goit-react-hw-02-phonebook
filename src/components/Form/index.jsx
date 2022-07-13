import { Component } from 'react';
import { nanoid } from 'nanoid';

const initialState = {
  name: '',
  number: '',
};

class Form extends Component {
  state = initialState;

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  handleFormSubmit = evt => {
    const { name, number } = this.state;

    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.submitHandler(newContact);
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
