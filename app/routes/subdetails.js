import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		this.store.unloadAll('taxon');
		//var host = this.store.adapterFor('application').get('host');
		this.store.adapterFor('application').set('namespace','api/taxonomies/'+params.taxonomy_id);
		var s=this.store.find('taxon');
		this.store.adapterFor('application').set('namespace','api');
    return s;
 },
 renderTemplate: function() {
    this.render('subdetails', {   // the template/view to render -> results in App.DetailsView
      into: 'index',          // the template to render into -> where the outlet is defined
      outlet: 'hello',       // the name of the outlet in that template -> see above
    });
  }
});
