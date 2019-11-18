export const capitalise = str => `${str.charAt(0).toUpperCase()}${str.substr(1)}`;

export const  formatNumber = num => `£${num}`;

export const sum = basket => {
  let s = 0;
  basket.forEach(item => s += item.price);
  return s ? formatNumber(s) : '-';
}