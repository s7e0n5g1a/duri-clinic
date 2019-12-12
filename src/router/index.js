import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'
import Specialists from '../components/Specialists'
import Services from '../components/Services'
import Contact from '../components/Contact'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/specialists',
    name: 'specialists',
    component: Specialists
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
