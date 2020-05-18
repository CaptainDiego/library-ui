import Route from '@ember/routing/route';

export default class LeadEditRoute extends Route {
	model({ id }) {
		return this.store.findRecord('lead', id);
	}
}
