import Route from '@ember/routing/route';
import Services from 'ember-tds/utils/services-class';
import datas from 'ember-tds/utils/services-datas';
import {set} from '@ember/object';

export default Route.extend({
  model(){
    return Services.create(datas);
  },
  actions:{
    addTo:function(source,what,dest){
      dest.pushObjects(what);
      source.removeObjects(what);
      let model=this.modelFor(this.routeName);
      set(model,'selectedDispoItemsIds',[]);
      set(model,'selectedIncludedItemsIds',[]);
    },
  }
});
