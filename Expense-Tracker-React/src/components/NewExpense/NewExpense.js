import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false);
    };

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () =>{
        setIsEditing(true);
    };

    const stopEditHandler = () => {
        setIsEditing(false)
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditHandler} />}
        </div>
    )
};
export default NewExpense;