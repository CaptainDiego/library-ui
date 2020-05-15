import Route from '@ember/routing/route';

export default class LeadRoute extends Route {
	model() {
		return fetch('http://localhost:3000/leads')
			.then(response => response.json());
	}
}
