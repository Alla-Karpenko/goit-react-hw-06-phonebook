import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add',( name, number ) => ({
    payload: {
        id: shortid.generate(), 
        name, 
        number,
    }
}))

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContacts, deleteContact, changeFilter };




