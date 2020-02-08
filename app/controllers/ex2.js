import Controller from '@ember/controller';
import {get,set} from '@ember/object';

export default Controller.extend({
  actions: {
    toggleActive(service) {
      set(service, 'active', !get(service, 'active'));
    },
    updatePromo(model) {
      let promos = get(model, 'promos');
      let value=get(model,'promo');
      if (promos[value]) {
        set(model, 'remise', promos[value]);
        set(model, 'hasRemise', true);
      }else{
        set(model, 'hasRemise', false);
      }
    }
  }
});
