import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('content', this.store.findAll('feed'));
  }
});
