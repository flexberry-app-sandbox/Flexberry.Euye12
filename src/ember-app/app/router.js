import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-euye12-дом-l');
  this.route('i-i-s-euye12-дом-e',
  { path: 'i-i-s-euye12-дом-e/:id' });
  this.route('i-i-s-euye12-дом-e.new',
  { path: 'i-i-s-euye12-дом-e/new' });
  this.route('i-i-s-euye12-комната-l');
  this.route('i-i-s-euye12-комната-e',
  { path: 'i-i-s-euye12-комната-e/:id' });
  this.route('i-i-s-euye12-комната-e.new',
  { path: 'i-i-s-euye12-комната-e/new' });
  this.route('i-i-s-euye12-улица-l');
  this.route('i-i-s-euye12-улица-e',
  { path: 'i-i-s-euye12-улица-e/:id' });
  this.route('i-i-s-euye12-улица-e.new',
  { path: 'i-i-s-euye12-улица-e/new' });
});

export default Router;
