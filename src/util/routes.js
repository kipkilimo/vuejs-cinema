import Overview from '../components/Overview.vue'
import Detail from '../components/Detail.vue'
import NotFound from '../components/NotFound.vue'

export default [
   { path: '/', component: Overview,name:'home' },
   { path: '/movie/:id', component: Detail,name:'movie'},
   { path: '*', component: NotFound, name: '404' }
] 