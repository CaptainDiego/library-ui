import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | lead/edit', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:lead/edit');
    assert.ok(controller);
  });
});
