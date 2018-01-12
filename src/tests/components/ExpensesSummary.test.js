import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpensesSummary';
import expenses from '../fixture/expenses';

test('should render ExpensesSummary with 1 expense with total',() => {
    const Newexpenses = [expenses[0]];
    const wrapper = shallow(<ExpenseSummary expenses={Newexpenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 2 expenses with total',() => {
    const Newexpenses = expenses;
    const wrapper = shallow(<ExpenseSummary expenses={Newexpenses}/>);
    expect(wrapper).toMatchSnapshot();
});