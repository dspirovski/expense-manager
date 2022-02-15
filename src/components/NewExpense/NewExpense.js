import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {isEditing === false ?
        <button onClick={startEditingHandler}>Add expense</button>
        :
        <div>
          <ExpenseForm saveExpenseData={saveExpenseData} onCancel={stopEditingHandler} />
        </div>
      }
    </div>
  )
}

export default NewExpense;