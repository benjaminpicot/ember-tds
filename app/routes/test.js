import Route from '@ember/routing/route';
import Contacts from 'ember-tds/utils/contacts-class';
export default Route.extend({
  model(){
    let store=this.get('store');
    return Contacts.create(store.findAll('contact'));
  }
});
