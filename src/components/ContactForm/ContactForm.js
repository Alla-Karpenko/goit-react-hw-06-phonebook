import  { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contact-actions'
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { onSubmit, contacts } = this.props;
      const { name, number } = this.state;

        if (!name) {
            return;
        }
        if (
            contacts.some(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            alert(`${name} is already in contacts`);
            return;
        }

      onSubmit(name, number);
      this.setState({ name: "", number: "" }); 
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmitForm}>
        <label className="Label">
          Name
          <input
            className="Input"
            id={this.state.id}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            placeholder="name"
          />
        </label>
        <label>
          Number
          <input
            className="Input"
            type="tel"
            name="number"
            placeholder="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className="Button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactActions.addContacts(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);