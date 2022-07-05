import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import EXPENSE_DATA from "./data/ExpenseData";

const App = () => {

  const [expenses, setExpense] = useState(EXPENSE_DATA)

  const addExpensehandler = expense => {
    setExpense(prevState => {
      return [expense, ...prevState]
    })
  }

  return (
    <div className="container">
      <h1>Let's Start!</h1>
      <NewExpense onAddExpense={addExpensehandler}/>
      <ExpenseItem expenses={expenses}/>
    </div>
  );
};

export default App;
