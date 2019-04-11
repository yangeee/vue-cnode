import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import PostList from '@/components/PostList'
import UserInfo from '@/components/UserInfo'
Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/helloworld',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: [
    {
      path: '/topic/:id',
      name: 'post_content',
      components: {
        main: Article
      }
    },
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/userinfo/:name',
      name: 'user_info',
      components: {
        main: UserInfo
      }
    }
  ]
})
