// import ratesData from "../data/rates.json"; // Đường dẫn đã được chỉnh sửa

// const tryConvert = (money, code, encode = true) => {
//   const input = parseFloat(money);
//   if (Number.isNaN(input)) {
//     return "";
//   }
//   const currency = ratesData.rates[0].value.find((item) => item.code === code);
//   if (!currency) {
//     return "";
//   }
//   const sell = parseFloat(currency.sell.replace(",", ""));
//   const output = encode ? input * sell : input / sell;
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// };

// export default tryConvert;

import ratesData from "../data/rates.json";

const tryConvert = (money, code, encode = true) => {
  const input = parseFloat(money);
  if (Number.isNaN(input)) {
    return "";
  }

  let sellRate = 1; // Tỷ giá mặc định nếu không tìm thấy trong rates.json

  // Tìm tỷ giá bán của loại tiền tệ được chọn
  const currency = ratesData.rates[0].value.find((item) => item.code === code);
  if (currency) {
    sellRate = parseFloat(currency.sell.replace(",", ""));
  }

  const output = encode ? input * sellRate : input / sellRate;
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

export default tryConvert;
