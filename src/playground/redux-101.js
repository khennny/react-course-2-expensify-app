import {createStore} from 'redux';

// Action generators - functions that return objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});

//SET
const setCount = ({count} = {}) => ({
    type:'SET',
    count
});

//RESET
const resetCount = () => ({
    type:'RESET'    
});

//Reducers
//1. Reducers are pure function i.e the output is determined only by the inputs.They should not use variables outside the fucntion.
//2. Never change state or action

const countReducer = (state ={count:0}, action) =>{
    switch(action.type){        
        case 'INCREMENT':            
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return{
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            return{
                count: action.count
            };
        default:
            return state;
    }       
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

/* store.dispatch({
    type:'INCREMENT',
    incrementBy:5
}); */

store.dispatch(incrementCount({incrementBy: 5}));

// store.dispatch(incrementCount());

//unsubscribe();

/* store.dispatch({
    type:'INCREMENT'
}); */

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:55}));

