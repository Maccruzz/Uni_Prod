import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transaction')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transaction, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id }); 
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const balance = transaction.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0);

    console.log(transaction);

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction, 
            addTransaction,
            transaction,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}
