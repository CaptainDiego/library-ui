import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LeadProfileController extends Controller {
	@action
	deleteLead(lead) {
		lead.destroyRecord().then(() => {
			this.transitionToRoute('lead');
		});
	}
};
