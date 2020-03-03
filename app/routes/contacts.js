import Route from '@ember/routing/route';
import Contacts from 'ember-tds/utils/contacts-class';

export default Route.extend({
  model(){
    let storedContacts = this.get('store').findAll('contact');
    return Contacts.create(storedContacts);
  }
});
