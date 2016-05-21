import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  summary: attr('string'),
  author: attr('string'),
  image: attr('string')
});
