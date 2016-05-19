import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
  host: 'https://feedme.mskog.com',
  namespace: 'api/v1',

  headers: {
    'x-user-email': 'mrcheese0@gmail.com',
    'x-user-token': '4Mxa-sFZ26RiMttynmQ5'
  },

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});
