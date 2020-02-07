import Controller from '@ember/controller';
import {get,set} from '@ember/object';

export default Controller.extend({
  actions:{
    toggleActive:function(service){
      set(service,'active',!get(service,'active'));
    },
  }
});
