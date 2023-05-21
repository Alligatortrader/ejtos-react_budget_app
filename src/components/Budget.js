import React, { useContext } from 'react';
//import { debounce } from 'lodash';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency,dispatch } = useContext(AppContext);
    /* To update the budget value, you will need to add an onChange handler
     to the input element in the Budget component. The onChange handler should update 
     the budget state by dispatching an action to the context */
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(event.target.value),
        });
    };
    return (
        <div className='alert alert-secondary'>
            <label for="budget">Budget: {currency} </label>
            <input type="number" id="budget" value={budget} onChange={handleBudgetChange} step={10}/>

        </div>
        
    );
};
export default Budget;
