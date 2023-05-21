import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import Select from 'react-select'
import  './Currency.css';
const currency = () => {
  const {dispatch}= useContext(AppContext);
  const onChangeCurrency = (event) =>{
    dispatch ({
      type:'CHG_CURRENCY',
      payload:event.target.value,
    })
    console.log({currency});
  }
  const styleCurrencies ={
    leftmargin: '2rm',
    background:'#b4dd7fed',
    color: 'black',
    };
  

    return (
      <div className="currenciesSelector" style={styleCurrencies} >
        <div className="selectCurrencies">
            <label className="selectCurrencies" >Currency</label>
            <select id="selectCurrencies" name="selectCurrencies" onChange={onChangeCurrency}>
              <option value="£">£ Pound</option>
              <option value="$">$ Dolar</option>
              <option value="€">€ Euro</option>
              <option value="₹">₹ Rupee</option>
            </select>
      
      </div>
      </div>
    );
  };
  
export default currency;
  