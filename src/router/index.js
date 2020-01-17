import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import StNews from '@/views/StNews';
import NewsList from '@/views/NewsList';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';

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
      meta: {
        title: '简书-创作你的创作'
      }
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
      path: '/sign_in',
      name:'SignIn',
      component: SignIn,
      meta: {
        title: '登录-简书'
      }
    },
    {
      path: '/sign_up',
      name:'SignUp',
      component: SignUp,
      meta: {
        title: '注册-简书'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

