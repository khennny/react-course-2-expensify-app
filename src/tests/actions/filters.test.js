import moment from 'moment';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';

test('Should generate set start date action object',() => {
    const action =  setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
    
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
});

test('Should generate sort by amount action object', () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    })
});
test('Should generate sort by date action object', () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
        sortBy:'date'
    })
});
test('Should generate set text action object for provided value',() => {
    const text = 'testData'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
});
test('Should generate set text action object for default value',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
});

