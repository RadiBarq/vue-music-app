// So here we will import two components that we will use later on.
import { Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    defineRule('required', required);
  },
};
