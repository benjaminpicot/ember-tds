import Route from '@ember/routing/route';
import Note from 'ember-tds/utils/note-class';
export default Route.extend({
  model(){
    return Note.create();
  }
});
