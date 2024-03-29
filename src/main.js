// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n';
import { messages } from './lang/messages';

Vue.use(VueI18n);
Vue.config.productionTip = false

export const i18n = new VueI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
