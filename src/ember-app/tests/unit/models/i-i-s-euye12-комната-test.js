import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-euye12-комната', 'Unit | Model | i-i-s-euye12-комната', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-euye12-город',
    'model:i-i-s-euye12-дом',
    'model:i-i-s-euye12-комната',
    'model:i-i-s-euye12-улица',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
