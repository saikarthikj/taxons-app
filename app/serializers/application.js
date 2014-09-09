import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    root: {embedded: 'always'},
    taxons:{embedded: 'always'}
  },
	extractArray: function(store, type, payload, id,requestType) {
  		delete payload.count;
  		delete payload.current_page;
  		delete payload.pages;
  		delete payload.total_count;
      delete payload.per_page;
    	return this._super(store, type, payload, id, requestType);
  	},
    extractFind: function(store, type, payload, id, requestType){
      delete payload.count;
      delete payload.current_page;
      delete payload.pages;
      delete payload.total_count;
      delete payload.per_page;
      return this._super(store, type, payload, id, requestType);

    },
});
