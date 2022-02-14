import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../IU/Card"
import "./Expenses.css";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} filterChangeHandler={filterChangeHandler} />
        {props.items.map(expense => <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}
      </Card>
    </div>
  )
};

export default Expenses;