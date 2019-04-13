import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import PostList from '@/components/PostList'
import UserInfo from '@/components/UserInfo'
import SideBar from '@/components/SideBar'
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
      path: '/topic/:id&author=:name',
      name: 'post_content',
      components: {
        main: Article,
        sidebar: SideBar
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
        main: UserInfo,
      }
    }
  ]
})
