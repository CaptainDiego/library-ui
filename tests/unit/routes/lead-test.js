import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | lead', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:lead');
    assert.ok(route);
  });
});
