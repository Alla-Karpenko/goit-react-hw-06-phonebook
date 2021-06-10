import React from "react";
import { Component } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filters";

import "./App.scss";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleSubmitForm = (contact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

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

export default App;