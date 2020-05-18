import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const makePlural = expenseCount > 1 ? 's' : ''

  return (
    <div>
      <h1>
        Viewing {expenseCount} expense{makePlural} totalling {numeral(expensesTotal / 100).format('$0,0.00')}
      </h1>
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