import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерДома: DS.attr('number'),
  улица: DS.belongsTo('i-i-s-euye12-улица', { inverse: null, async: false })
});

export let ValidationRules = {
  номерДома: {
    descriptionKey: 'models.i-i-s-euye12-дом.validations.номерДома.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-euye12-дом.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомE', 'i-i-s-euye12-дом', {
    номерДома: attr('Номер дома', { index: 0 })
  });

  modelClass.defineProjection('ДомL', 'i-i-s-euye12-дом', {
    номерДома: attr('Номер дома', { index: 0 })
  });
};
