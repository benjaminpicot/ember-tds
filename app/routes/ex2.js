import Route from '@ember/routing/route';
import Services from 'ember-tds/utils/services-class';
export default Route.extend({
  model(){
    return Services.create();
  }
});
