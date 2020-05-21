import Model, { attr } from '@ember-data/model';

export default class LeadModel extends Model {
  @attr() first;
  @attr() last;
  @attr() email;
  @attr() createdAt;
}
