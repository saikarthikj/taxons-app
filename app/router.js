import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TaxonsAppENV.locationType
});

Router.map(function() {
	this.resource('index',{path:'/'},function(){
		this.resource('subdetails',{path:'/:taxonomy_id'});
	});
});

export default Router;
