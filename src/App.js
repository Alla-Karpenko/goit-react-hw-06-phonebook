import React from "react";
import { Component } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filters";
import contactActions from ".././src/redux/contact/contact-actions";

import "./App.scss";
import { connect } from "react-redux";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleSubmitForm = (contact, contacts, name) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    //   const checked = !!contacts.find((contact) => contact.name === name);

    //   checked && alert(`${name} is already in contacts`);
    //  return !checked;
  };

  // checkContact = ({name}) => {
  //   const { contacts } = this.state;
  //   console.log(contacts)

  //   const checked = !!contacts.find((contact) => contact.name === name);

  //   checked && alert(`${name} is already in contacts`);
  //  return !checked;
  // };

  render() {
    return (
      <div className="Phonebook">
        <h1 className="Phonebook-title">Phonebook</h1>
        <ContactForm  />
        <h2>Contacts</h2>

        <Filter />

        <ContactList />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   contacts: contactActions.addContacts(state),
// });

// export default connect(mapStateToProps)(App);
export default App;