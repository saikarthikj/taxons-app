import DS from 'ember-data';

export default DS.Model.extend({
  root:DS.belongsTo('root')
});
