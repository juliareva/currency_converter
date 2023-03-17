import React from 'react'

const CurrencyRow = (props) => {
    const {
        currencyOptions, 
        selectCurrency, 
        onChangeCurrency, 
        amount, 
        onChangeAmount
    } = props;

  return (
    <div>
        <input 
            type="number" 
            className='input'
            value={amount}
            onChange={onChangeAmount} 
            />

        <select 
            value={selectCurrency} 
            onChange={onChangeCurrency}>

            {currencyOptions.map(option => 
                (<option key={option} value={option}>{option}</option>))}
            
        </select>
    </div>
  )
}

export default CurrencyRow