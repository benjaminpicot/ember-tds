import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    //Exemple de création
    let contact=this.get('store').createRecord('contact',
      {nom:'SMITH',prenom:'',email:''}
    );
    return contact;
  },
  actions:{
    save(contact){
      let self=this;
      contact.save().then(function(){
        self.transitionTo('contacts');
      });
    }
  }
});
