import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    events: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    // useReducer is an Hook that lets you add a reducer to your component.
    // This means that the pure function (Reducer) in question is responsible for defining the rules or logic.
    // See more in: https://pt-br.react.dev/reference/react/useReducer
    const [state, dispatch] = useReducer(Reducer, initialState);

    function addEvent(event) {
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        });
    }

    function deleteEvent(id) {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        });
    }

    const values = {
      events: state.events,
      addEvent,
      deleteEvent
    }

    return (
      <GlobalContext.Provider value={values}>
        {children}
      </GlobalContext.Provider>
    );
}