import { useState } from "react";

const ExpenseItem = ({expenses}) => {

  const [title, setTitle] = useState(expenses.title)

  const clickHandler = () => {
    setTitle(title === title.toUpperCase() ? title.toLowerCase() : title.toUpperCase())
  }

  return (
    <div>
      <ul className="list-group">
        {expenses.length === 0 && <p>No expenses found</p>}
        {expenses.map(expense => (
          <li className="list-group-item" key={expense.id}>
            <span className="text-success p-5">{expense.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})}</span> 
            <span className="text-primary p-5">{expense.title}</span>
            <span className="text-danger p-5">${expense.amount}</span>
            <button onClick={clickHandler} type="button" className="btn btn-info">Change Case</button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default ExpenseItem;

