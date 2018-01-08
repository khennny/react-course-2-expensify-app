import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filters , altFilters} from '../fixture/filters';
import moment from 'moment';

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    );
});
 
test('should render ExpenseListFilters correctly',() => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters alt data correctly',() => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});
 
test('should handle text change', () => {
    let text = 'Test Description';
    wrapper.find('#text').at(0).simulate('change',{
        target: {value:text}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should handle sort by date',() => {
    let value = 'date';
    wrapper.setProps({
        filter:altFilters
    });
    wrapper.find('select').at(0).simulate('change',{
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount',() => {
    let value = 'amount';
    wrapper.setProps({
        filter:filters
    });    
    wrapper.find('select').at(0).simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(6,'years');    
    wrapper.find('#dateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('#dateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

