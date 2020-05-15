import Route from '@ember/routing/route';

export default class LeadProfileRoute extends Route {
	model({ id }) {
		return {
			first: 'Quentin',
			last: 'Gilon',
			email: 'quentin@manypixels.co',
			id: `lead-${id}`
		}
	}
}
