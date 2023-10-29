import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISEuye12ДомLForm from './forms/i-i-s-euye12-дом-l';
import IISEuye12КомнатаLForm from './forms/i-i-s-euye12-комната-l';
import IISEuye12УлицаLForm from './forms/i-i-s-euye12-улица-l';
import IISEuye12ДомEForm from './forms/i-i-s-euye12-дом-e';
import IISEuye12КомнатаEForm from './forms/i-i-s-euye12-комната-e';
import IISEuye12УлицаEForm from './forms/i-i-s-euye12-улица-e';
import IISEuye12ГородModel from './models/i-i-s-euye12-город';
import IISEuye12ДомModel from './models/i-i-s-euye12-дом';
import IISEuye12КомнатаModel from './models/i-i-s-euye12-комната';
import IISEuye12УлицаModel from './models/i-i-s-euye12-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-euye12-город': IISEuye12ГородModel,
    'i-i-s-euye12-дом': IISEuye12ДомModel,
    'i-i-s-euye12-комната': IISEuye12КомнатаModel,
    'i-i-s-euye12-улица': IISEuye12УлицаModel
  },

  'application-name': 'Euye12',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Euye12',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Euye12',
          title: 'Euye12'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        euye12: {
          caption: 'Euye12',
          title: 'Euye12',
          'i-i-s-euye12-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-euye12-дом-l': {
            caption: 'Дом',
            title: ''
          },
          'i-i-s-euye12-комната-l': {
            caption: 'Комната',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-euye12-дом-l': IISEuye12ДомLForm,
    'i-i-s-euye12-комната-l': IISEuye12КомнатаLForm,
    'i-i-s-euye12-улица-l': IISEuye12УлицаLForm,
    'i-i-s-euye12-дом-e': IISEuye12ДомEForm,
    'i-i-s-euye12-комната-e': IISEuye12КомнатаEForm,
    'i-i-s-euye12-улица-e': IISEuye12УлицаEForm
  },

});

export default translations;
