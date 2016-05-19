import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('feed_entry', {user_feed_id: params.feed_id});
  }
});
