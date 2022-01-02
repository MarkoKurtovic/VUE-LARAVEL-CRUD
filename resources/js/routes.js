import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// import AllTodos from './components/AllTodos.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        name: 'AllTodos',
        path: '/',
        component: () => import('./components/AllTodos')
      },

      {
        name: 'edit',
        path: '/edit',
        component: () => import('./components/Edit')
      },

      {
        name: 'create',
        path: '/create',
        component: () => import('./components/Create')
      },
    ]});