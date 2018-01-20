import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {addExpense,startSetExpenses, setExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import expensesSelector from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();
/*
const subscription = store.subscribe(()=>{
    const states = store.getState();
    const visibleExpenses = expensesSelector(states.expenses,states.filters) ;
    console.log(visibleExpenses);    
});


store.dispatch(addExpense({description:'Water bill', amount:4500}));
store.dispatch(addExpense({description:'Gas bill', createdAt:1000}));
store.dispatch(addExpense({description:'Rent', amount:10950}));
*/
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);
//subscription.unsubscribe;

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
)
ReactDOM.render( <p>Loading...</p> , document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render( jsx , document.getElementById('app'));
});
