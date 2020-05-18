import Route from '@ember/routing/route';

export default class LeadCreateRoute extends Route {
	model() {
		return	{
			first: '',
			last: '',
			email: ''
		}
	}
}
