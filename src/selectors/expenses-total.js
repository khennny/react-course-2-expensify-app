import React from 'react';

const expensesTotal = (expenses = []) =>{     
    let total = 0
    if (expenses.length === 0 ){
        return total;
    }        
    
    return expenses.map((expense) => {
        return expense.amount;        
    }).reduce((total,num) => total + num,0);
    
}

export default expensesTotal
