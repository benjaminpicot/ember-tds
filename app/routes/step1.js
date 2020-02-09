import Route from '@ember/routing/route';
import Services from 'ember-tds/utils/services-class';
import datas from 'ember-tds/utils/services-datas';
export default Route.extend({
  model(){
    return Services.create(datas);
  },
});
