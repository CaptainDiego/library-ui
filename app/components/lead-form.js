import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LeadFormComponent extends Component {
	didReceiveAttrs() {
		this._super(...arguments);

		this.setProperties({
			first: this.lead.get('first'),
			last: this.lead.get('last'),
			email: this.lead.get('email')
		});
	}

	@action
	submitChanges(event) {
		event.preventDefault();
		this.args.saveLead({
			first: this.first,
			last: this.last,
			email: this.email
		})	
	}
}