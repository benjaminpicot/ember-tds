import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  const [items, value] = params;
  return items.includes(value);
});
