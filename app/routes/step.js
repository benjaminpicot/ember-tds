import Route from '@ember/routing/route';
import Services from 'ember-tds/utils/services-class';
import datas from 'ember-tds/utils/services-datas';
import {set,get} from '@ember/object';

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
    move:function(selectedId,selectId){
      let model=this.modelFor(this.routeName);
      let source,dest,what;
      if(selectId==='s1'){
        source='dispoItems';
        dest='includedItems';
        what='selectedDispoItems';
      }else{
        source='includedItems';
        dest='dispoItems';
        what='selectedIncludedItems';
      }
      this.send('addTo',get(model,source),get(model,what),get(model,dest));
    },
    toggleStep:function(){
      let model=this.modelFor(this.routeName);
      model.set('step',!model.get('step'));
    }
  },
});
