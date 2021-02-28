import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/home')
const Tag = () => import(/* webpackChunkName: "tag" */ '../views/tag')
const Category = () =>
  import(/* webpackChunkName: "category" */ '../views/category')
const TimeLine = () =>
  import(/* webpackChunkName: "timeLine" */ '../views/timeLine')
const About = () => import(/* webpackChunkName: "about" */ '../views/about')
const Article = () =>
  import(/* webpackChunkName: "article" */ '../views/article')
const Test = () =>
  import(/* webpackChunkName: "article" */ '../views/article/test.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: TimeLine
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/article/:aid',
    name: 'article',
    component: Article
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
