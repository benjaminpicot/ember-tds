import Route from '@ember/routing/route';
import Services from 'ember-tds/utils/services-class';
export default Route.extend({
  model(){
    return Services.create({services:[
        {
          "name": "Web Development",
          "price": 300,
          "active":true
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ]});
  }
});
