import Route from '@ember/routing/route';

export default class LeadRoute extends Route {
	model() {
		return this.store.findAll('lead');
	}
}
 