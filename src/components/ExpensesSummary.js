import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import getExpensesTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const makePlural = expenseCount > 1 ? 's' : ''

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing
          <span> {expenseCount} </span>
          expense{makePlural} totalling
          <span> {numeral(expensesTotal / 100).format('$0,0.00')}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: expenses.length,
    expensesTotal: getExpensesTotal(expenses)
  }
}
export default connect(mapStateToProps)(ExpensesSummary)