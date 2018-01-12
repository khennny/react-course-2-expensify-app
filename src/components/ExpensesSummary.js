import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    const expensesCount = props.expenses.length;
    const expenseText = (expensesCount === 1) ? 'expense':'expenses';
    const formattedExpensesTotal = numeral(expensesTotal(props.expenses)/100).format('$0,0.00')
    return (
        props.expenses.length > 0 && 
        <p>Viewing {expensesCount} {expenseText} totalling {formattedExpensesTotal}</p>
    )
}

const mapStateToProp = (state) => {    
    return{
        expenses: selectExpenses(state.expenses,{...state.filters})
    }
}

export default connect(mapStateToProp)(ExpenseSummary)
 