import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state =  expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});
test('should remove expense by id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});
test('should not remove expense if id not found', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

//should add an expense
test('should add an expense',() => {
    const expense = {id:'4',description:'Power',note:'',amount:12222,createdAt:moment(0).subtract(8,'days').valueOf()};
    const action = {
        type:'ADD_EXPENSE',
        expense:expense
    }    
    const state = expensesReducer(expenses,action);
    expect(state.find((exp) => exp.id === expense.id)).toEqual(expense);
});

//should edit an expense
test('should edit an expense', () => {
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{description:'Toll Fee'}
    }
    const state = expensesReducer(expenses,action);
    expect(state.find((exp) => exp.id === action.id).description).toEqual(action.updates.description);
});

//should not edit expense if expense not found
test('should not edit expense if expense not found', () => {
    const action = {
        type:'EDIT_EXPENSE',
        id: '4',
        updates:{description:'Toll Fee'}
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const expensesData = [{id:'0',description:'Gum',note:'',amount:195,createdAt:0}];
    const action = {
        type:'SET_EXPENSES',
        expenses
    }
    const state = expensesReducer(expensesData,action);
    expect(state).toEqual(expenses)
});