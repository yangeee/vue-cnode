<template>
  <div class="authorinfo">
    <div class="authorsummay">
      <div class="topbar">作者</div>
        <router-link
          :to="{
           name:'user_info',
          }"
        >
          <img :src="userinfo.avatar_url" alt="头像">
        </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="(list, index) in topcilimitby5" :key="index">
          <router-link
            :to="{
              name:'post_content',
              params:{
                id: list.id,//传给路由里面的参数
                name: list.author.loginname
              }
            }"
          >{{list.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="(list, index) in replieslimitby5" :key="index">
          <router-link
            :to="{
              name:'post_content',
              params:{
                id: list.id,
                name: list.author.loginname
              }
            }"
          >{{list.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SideBar',
  data() {
    return {
      userinfo: {}
    }
  },
  methods: {
    getArticleData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          if (res.data.success == true)
            this.userinfo = res.data.data
          console.log(this.userinfo)
        })
        .catch()
    }
  },
  beforeMount() {
    this.getArticleData()
  },
  computed: {
    topcilimitby5() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5)
      }
    },
    replieslimitby5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5)
      }
    }
  }

}
</script>


<style scoped>
.authorsummay,
.recent_replies,
.recent_topics {
  max-height:245px;
  min-width: 300px;
  background-color: #fff;
}
.authorinfo {
  width: 328px;
  margin-top: 0;
  margin-left: 50px;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authorsummay .topbar {
  margin-top: 0px;
}
</style>
