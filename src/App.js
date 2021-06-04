import React from 'react';
import  { Component } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filters';

import './App.scss';

class App extends Component {
    state = {
        contacts: [],
        filter: '',
    }
    
    handleSubmitForm = (contact) => {
        this.setState(({contacts}) => ({
            contacts: [...contacts, contact],
        }));
    }
    
    checkContact = ( name ) => {
        const { contacts } = this.state
        
        const checked = !!contacts.find(
        (contact) => contact.name === name);
  
        checked && alert(`${name} is already in contacts`)
        return !checked
      
    };
    
    componentDidMount(){
        const contacts = localStorage.getItem('contacts');
        const parsetContact = JSON.parse(contacts);
        if (parsetContact){
            this.setState({ contacts: parsetContact });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.contacts !== prevState.contacts) {
            localStorage.setItem( 'contacts', JSON.stringify(this.state.contacts));
        }
    }

    render() { 
        const { contacts} = this.state;

        return (
            <div className='Phonebook'>
               <h1 className='Phonebook-title'>Phonebook</h1>
                <ContactForm    onSubmit={this.handleSubmitForm} check={this.checkContact} />
          
                <h2>Contacts</h2>
                {contacts.length > 1 && (
                    <Filter />
                )}


                {contacts.length > 0 && (
                    <ContactList  />
                )}
            </div>
        );
    }
}
 
export default App;




