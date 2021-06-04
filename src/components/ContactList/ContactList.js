import React from 'react';
import './ContactList.scss';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contact-actions'

const ContactItem = ({ id, name, number , onRemove }) => {
    return (
        <li className="Contact-List" key={id}> 
            {name}: {number} <button className="Button-List" type="submit" onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
}

const ContactList = ({ contacts, onRemoveContact }) => {
    return (
        <ul>
            {contacts.map( contact => (
                <ContactItem 
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onRemove={onRemoveContact}
                />
            ))}
        </ul>

    )
};

const getvisibleContacts = (allContacts, filter) => {
    const normalizedFilter =  filter.toLowerCase();

    return allContacts.filter( contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
};

const mapStateToProps = ({contacts: { items, filter }}) => ({
    contacts: getvisibleContacts(items, filter),
})

const mapDispatchToProps = dispatch => ({
    onRemoveContact: (id) => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
