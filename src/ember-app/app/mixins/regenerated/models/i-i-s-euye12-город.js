import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  улица: DS.belongsTo('i-i-s-euye12-улица', { inverse: 'город', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-euye12-город.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-euye12-город.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГородE', 'i-i-s-euye12-город', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('ГородL', 'i-i-s-euye12-город', {
    наименование: attr('Наименование', { index: 0 })
  });
};
