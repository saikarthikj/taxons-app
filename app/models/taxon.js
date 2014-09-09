import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr('string'),
  taxons:DS.attr()
});
