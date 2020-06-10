import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// Use vue-resource package
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.directive('rainbow', {
  bind(el, binding, vnode){
      el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})