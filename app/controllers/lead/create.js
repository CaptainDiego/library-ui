import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class LeadCreateController extends Controller {
	@action
		changeFirst(value) {
			this.set('first', value)
		}
}
