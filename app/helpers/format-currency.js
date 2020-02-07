import { helper } from '@ember/component/helper';

export function formatCurrency([value, ...rest]) {
  let dollars = Math.floor(value);
  let cents = (value-dollars)*100 % 100;
  let sign = '€';

  if (cents.toString().length === 1) { cents = '0' + cents; }
  cents=(cents+'').substring(0,2);
  return `${dollars}.${cents} ${sign}`;
}

export default helper(formatCurrency);
