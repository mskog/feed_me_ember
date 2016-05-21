import Ember from 'ember';

export default Ember.Component.extend({
  bestImage: Ember.computed('feed_entry.image', function() {
    return `https://thumbs.picyo.me/200x200/${this.get('feed_entry.image')}`;
  })
});
