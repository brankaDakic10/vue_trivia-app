import Vue from 'vue'
import VueRouter from 'vue-router'



import TriviaApp from './components/TriviaApp.vue'

Vue.use(VueRouter)

  
export const router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/movies', component: TriviaApp},
    ]
  })