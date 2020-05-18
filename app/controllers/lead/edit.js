import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class LeadEditController extends Controller {
	@action
	saveLead(formValues) {
		this.model.setProperties(formValues);

		this.model.save()
			.then(() => {
				this.transitionToRoute('lead');
			});
	}
}
