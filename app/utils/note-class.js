import EmberObject,{computed} from '@ember/object';
export default EmberObject.extend({
  MAX:100,
  content:'',
  info:'',
  size:computed('content',function(){
    this.set('saved',false);
    let content=this.get('content');
    if(content!==''){
      this.set('info','Note modifiée');
    }
    return this.get('MAX')-content.length;
  }),
  style:computed('size','saved',function(){
    if(this.get('saved')){
      return 'success';
    }
    let size=this.get('size');
    if(size<20){
      return 'danger';
    }
    if(size<50){
      return 'warning';
    }
    return 'info';
  }),
  alertVisible:computed('info',function(){
    return this.get('info').length !==0;
  })
});
