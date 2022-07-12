import { Component } from "react";
import { nanoid } from "nanoid";

const initialState = {
  name: '',
};

class Form extends Component {

  state = initialState;

  handleInputChange = (evt) => {
   const {name, value} = evt.currentTarget;
    this.setState({ [name]: value })
  };

  resetForm = () => {
    this.setState({...initialState});
  }

  handleFormSubmit = (evt) => {
    const {name} = this.state;

    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
    };
    this.props.submitHandler(newContact);
    this.resetForm();
  };

  render() {
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
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
        </form>
      </>
    )
  }
  
};

export default Form;