import Reacct from 'react';
//import { shallow } from 'enzyme';
import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixture//expenses';

test('should return 0 if no expense',() => {
  const summedValue = expensesTotal();
  expect(summedValue).toBe(0);  
});

test('should correctly add up a single expense', () => {
    const newExpenses = [{id:'1',description:'Gum',note:'',amount:2,createdAt:0}];
    const summedValue = expensesTotal(newExpenses);
    expect(summedValue).toBe(2);
});

test('should correctly add up a multiple expenses', () => {    
    const summedValue = expensesTotal(expenses);
    expect(summedValue).toBe(114195);
});