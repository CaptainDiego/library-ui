import Route from '@ember/routing/route';

export default class LeadRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true
    }
  }

	model(search) {
    if (search) {
      return this.store.query('lead', {
        filter: {
          query: search.search
        }
      });
    }

		return this.store.findAll('lead');
	}
}
