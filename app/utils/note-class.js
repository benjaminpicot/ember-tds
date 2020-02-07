import EmberObject,{computed} from '@ember/object';
export default EmberObject.extend({
  MAX:100,
  content:'',
  info:'',
  style:'',
  modif:false,
  size:computed('content',function(){
    return this.get('MAX')-(this.get('content').length);
  }),
  alertVisible:computed('info',function(){
    return this.get('info').length !=0;
  })
});
