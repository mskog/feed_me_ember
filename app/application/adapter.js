import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'https://feedme.mskog.com',
  namespace: 'api/v1',

  headers: {
    'x-user-email': 'mrcheese0@gmail.com',
    'x-user-token': '4Mxa-sFZ26RiMttynmQ5'
  }
});
