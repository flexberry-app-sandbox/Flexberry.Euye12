import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-euye12-комната', 'Unit | Serializer | i-i-s-euye12-комната', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-euye12-комната',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
