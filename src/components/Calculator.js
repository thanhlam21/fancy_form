import React, { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import tryConvert from "../utils/tryConvert";
import "./Calculator.css";

const Calculator = () => {
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [money, setMoney] = useState("");
  const [encode, setEncode] = useState(true);

  const handleChangeCurrency = (event) => {
    setCurrencyCode(event.target.value);
    setEncode(true);
    setMoney("");
  };

  const handleChangeVNDEncode = (money) => {
    setMoney(money);
    setEncode(true);
  };

  const handleChangeVNDDecode = (money) => {
    setMoney(money);
    setEncode(false);
  };

  const date = new Date();
  const VND = encode ? tryConvert(money, currencyCode, true) : money;
  const notVND = encode ? money : tryConvert(money, currencyCode, false);

  return (
    <div className="Calculator">
      <div className="Calculator-inner">
        <header className="App-header">
          <img src="/logo.png" className="App-logo" alt="logo" />
          <h1>Currency Conversion</h1>
          <h2 className="blink-text">
            It is {date.toLocaleTimeString()} {date.toDateString()}
          </h2>
          <div>
            <select className="select-box" onChange={handleChangeCurrency}>
              <option value="USD">Đô la Mỹ - USD</option>
              <option value="AUD">Đô la Úc - AUD</option>
              <option value="CAD">Đô la Canada - CAD</option>
              <option value="CHF">Đồng Frank Thụy Sĩ - CHF</option>
              <option value="JPY">Đồng Yên Nhật - JPY</option>
              <option value="EUR">Đồng Euro - EUR</option>
              <option value="NZD">Đô la New Zealand - NZD</option>
              <option value="GBP">Bảng Anh - GBP</option>
              <option value="SEK">Đồng Thụy Điển - SEK</option>
              <option value="DKK">Đồng Đan Mạch - DKK</option>
              <option value="NOK">Krone Na Uy - NOK</option>
              <option value="SGD">Đồng đô la Singapore - SGD</option>
              <option value="CZK">Cron Séc - CZK</option>
              <option value="HKD">Đô la Hồng Công - HKD</option>
              <option value="MXN">Peso Mehico - MXN</option>
              <option value="PLN">Zloto Ba Lan - PLN</option>
              <option value="RUB">Rúp Nga - RUB</option>
              <option value="TRY">Lir Thổ Nhĩ Kỳ - TRY</option>
              <option value="ZAR">Rand của Nam Phi - ZAR</option>
              <option value="CNH">CNH - CNH</option>
              <option value="CNY">Nhân dân tệ TQ - CNY</option>
              <option value="INR">INDIAN RUPEE - INR</option>
              <option value="KWD">UWAITI DINAR - KWD</option>
              <option value="MYR">MALAYSIAN RINGGIT - MYR</option>
              <option value="SAR">SAUDI RIAL - SAR</option>
              <option value="THB">THAI BAHT - THB</option>
              <option value="KRW">SOUTH KOREAN WON - KRW</option>
            </select>
          </div>
          <div className="form-input">
            <CurrencyInput
              currencyName={currencyCode}
              money={notVND}
              onMoneyChange={handleChangeVNDEncode}
            />
            <CurrencyInput
              currencyName="VND"
              money={VND}
              onMoneyChange={handleChangeVNDDecode}
            />
          </div>
        </header>
        <div className="info-text">lamnguyen21.dev@gmail.com</div>
      </div>
    </div>
  );
};

export default Calculator;
