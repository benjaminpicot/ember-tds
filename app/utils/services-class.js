import EmberObject,{get,computed} from '@ember/object';
export default EmberObject.extend({
  countActive:computed('services.@each.active',function(){
    return this.get('services').filterBy('active', true).length;
  }),
  sumActive:computed('services.@each.active',function(){
    let services = this.get('services').filterBy('active', true);
    return services.reduce((total,service)=>total+get(service,'price'),0);
  }),
});
