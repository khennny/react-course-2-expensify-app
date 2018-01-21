import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';

let wrapper,history,startEditExpense,startRemoveExpense;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push:jest.fn() };
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense = {startRemoveExpense} history={ history } expense = {expenses[0]}/>); 
});

test('should render EditExpensePage',() => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense',() => {
    const expense = expenses[0];
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id,expense);    
});
 
test('should handle startRemoveExpense',() => {    
    wrapper.find('button').simulate('click');    
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id});    
});