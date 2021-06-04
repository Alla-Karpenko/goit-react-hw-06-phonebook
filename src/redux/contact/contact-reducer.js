import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from './contact-actions';

const items = createReducer([], {
    [actions.addContacts]: (state,{ payload} ) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => 
    state.filter(({ id }) => id !== payload),  
})

const filter = createReducer('',{
    [actions.changeFilter]:  (_, { payload }) => payload,
}) 

export default combineReducers({
    items,
    filter
}) 



