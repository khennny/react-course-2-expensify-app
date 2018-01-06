import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
        });
});

test('should set sortBy to amount',() => {
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',() => {
    const currentState = {
        text:'',        
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter',() =>{
    const testValue = 'abc123';
    const state = filtersReducer(undefined,{type:'SET_TEXT_FILTER',text:testValue});
    expect(state.text).toBe(testValue);
});

test('should set startDate filter',() => {
    const queryDate = moment(0).add(10,'days').valueOf();
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate:queryDate});
    expect(state.startDate).toBe(queryDate);
});

test('should set startDate filter',() => {
    const queryDate = moment(0).add(10,'days');
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate:queryDate});
    expect(state.startDate).toBe(queryDate);
});

test('should set endDate filter',() => {
    const queryDate = moment(0).add(10,'days');
    const state = filtersReducer(undefined,{type:'SET_END_DATE',endDate:queryDate});
    expect(state.endDate).toBe(queryDate);
});