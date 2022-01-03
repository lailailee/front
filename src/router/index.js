import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/home')
const Tag = () => import(/* webpackChunkName: "tag" */ '../views/tag')
const TagList = () => import(/* webpackChunkName: "tag_list" */ '../views/tag/list')
const Category = () =>
  import(/* webpackChunkName: "category" */ '../views/category')
const CategoryList = () =>
  import(/* webpackChunkName: "category_list" */ '../views/category/list')
const TimeLine = () =>
  import(/* webpackChunkName: "timeLine" */ '../views/timeLine')
const About = () => import(/* webpackChunkName: "about" */ '../views/about')
const Article = () =>
  import(/* webpackChunkName: "article" */ '../views/article')
const Test = () =>
  import(/* webpackChunkName: "article" */ '../views/article/test.vue')
const Archives = () =>
  import(/* webpackChunkName: "archives" */ '../views/archives')

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
    path: '/categories',
    name: 'categories',
    component: Category
  },
  {
    path: '/categories/:name/:id',
    name: 'categoriesList',
    component: CategoryList
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag
  },
  {
    path: '/tag/:name/:id',
    name: 'tagList',
    component: TagList
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
    path: '/archives',
    name: 'archives',
    component: Archives
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
