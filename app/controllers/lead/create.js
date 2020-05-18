import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class LeadCreateController extends Controller {
	@action
	saveLead(event) {
		event.preventDefault();
		let lead = this.store.createRecord('lead', this.model);
		lead.save()
			.then(() => {
				this.transitionToRoute('lead');
			});
	}
}
