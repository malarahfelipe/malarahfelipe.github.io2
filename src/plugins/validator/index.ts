import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { configure } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email, min, max, min_value, mimes } from 'vee-validate/dist/rules';
import { localize } from 'vee-validate';
import ptBR from 'vee-validate/dist/locale/pt_BR.json';
import CPFValidator from './cpf-validator';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

configure({
    classes: {
      invalid: 'is-invalid',
    },
  });

extend('required', required);
extend('email', email);
extend('min', min);
extend('max', max);
extend('min_value', min_value);

extend('cpf', {
  validate: (value: any, args: any) => {
    return CPFValidator.isValid(value);
  },
  message: 'Informe um CPF válido.',
});
localize('pt_BR', ptBR);
