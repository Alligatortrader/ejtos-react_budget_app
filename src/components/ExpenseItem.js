import React, { useContext } from 'react';
import { TiDelete} from 'react-icons/ti';
import { FcPlus} from 'react-icons/fc';
import  Minussign from './Images/negative_sign.jpg';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus  size='1.2em'onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><a  size='2.5em' id="signneg" onClick={event=> decreaseAllocation(props.name)}><img src={Minussign} alt="Minus sign" /></a></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
