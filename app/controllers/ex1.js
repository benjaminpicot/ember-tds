import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      note.set('info','Note sauvegardée!');
      note.set('saved',true);
    },
    reset(note){
      note.set('content','');
      note.set('info','');
    }
  }
});
