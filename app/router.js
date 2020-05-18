import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('lead', { path: '/leads' }, function() {
    this.route('profile', { path: '/:id' });
    this.route('create');
    this.route('edit', { path: '/:id/edit' });
  });;
});
