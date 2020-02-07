import { helper } from '@ember/component/helper';

export function formatPercent(pct, opts) {
  opts = opts || {};

  let value = (pct || 0)*100;
  let numDecimals = opts.decimals || 2;
  return `${value.toFixed(value % 1 === 0 ? 0 : numDecimals)}%`;
}

export default helper(formatPercent);
