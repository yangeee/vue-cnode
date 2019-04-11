<template>
  <div class="article-wrapper">
    <div class="article">
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>·发布于：{{post.create_at | formatDate}}</li>
          <li>·作者：{{post.author.loginname}}</li>
          <li>·{{post.visit_count}} 次浏览</li>
          <li>·来自 {{post | tabFormatter}}</li>
        </ul>
      </div>
      <div v-html="post.content" class="topic_content markdown-body"></div>
    </div>

    <div class="reply_content">
      <div class="topbar">回复</div>
      <div v-for="(reply, index) in post.replies" :key="index" class="replySec">
        <div class="replyUP">
          <router-link :to="{
            name: 'user_info',
            params:{name: reply.author.loginname}
            }">
            <img :src="reply.author.avatar_url" alt="头像">
          </router-link>
          <span>{{reply.author.loginname}}</span>
          <span>{{index+1}}楼</span>
          <span v-if="reply.ups.length>0">{{reply.ups.length}}</span>
          <span v-else></span>
        </div>
        <p v-html="reply.content"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: '',
  data() {
    return {
      post: {
        author: {}// 因为获取服务器是异步的，所以 vue 先绑定数据。绑定数据时，author为空对象，所以loginname为undefined
      }
    }
  },
  methods: {
    getArticleData() {
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success == true)
            this.post = res.data.data
          console.log(this.post.author.loginname);

        })
        .catch()
    }
  },
  beforeMount() {
    this.getArticleData()
  }
}
</script>


<style>
@import url("../assets/markdown.css");
.article-wrapper {
  background: #e1e1e1;
}
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
  max-width: 1100px;
}
.article {
  max-width: 1100px;
  margin: 0 auto;
}
.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

.reply_content,
.topic_header {
  background-color: #fff;
}

.reply_content img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

.reply_content a,
.reply_content span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.reply_content {
  max-width: 1100px;
  margin: 0 auto;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
  background: white;
}
</style>
