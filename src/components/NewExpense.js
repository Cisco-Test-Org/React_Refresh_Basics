import './ExpenseForm'
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

    const expenseDataHandler = enteredData => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
    }

    return (
        <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
    )
}

export default NewExpense;