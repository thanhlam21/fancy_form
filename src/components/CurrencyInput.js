import React from "react";

const CurrencyInput = ({ currencyName, money, onMoneyChange }) => {
  const handleChange = (event) => {
    onMoneyChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>Enter {currencyName}</legend>
      <input value={money} onChange={handleChange}></input>
    </fieldset>
  );
};

export default CurrencyInput;
