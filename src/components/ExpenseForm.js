import { useState } from "react"

const ExpenseForm = ({onSaveExpenseData}) => {

    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')

    const titleChangeHandler = event => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = event => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = event => {
        setDate(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <div className="mt-3 mb-3" onSubmit={handleSubmit}>
            <form>
                <div>
                <label htmlFor="inputtext5" className="form-label">Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" id="inputtext5" className="form-control" /> 
                </div>
                <div>
                <label htmlFor="inputnumber5" className="form-label">Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type="number" id="inputnumber5" className="form-control" /> 
                </div>
                <div>
                <label htmlFor="inputdate5" className="form-label">Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type="date" id="inputdate5" className="form-control" /> 
                </div>
                <div>
                <button type="submit" className="btn btn-primary mt-3">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;