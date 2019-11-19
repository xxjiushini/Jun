import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import StNews from '@/views/StNews';
import NewsList from '@/views/NewsList';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name:'StNews',
      component: StNews,
    },
    {
      path: '/news',
      name:'NewsList',
      component: NewsList,
      meta: {
        title: '文章-简书'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

