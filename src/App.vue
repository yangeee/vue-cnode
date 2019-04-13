<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <div class="app_article">
        <router-view name="main"></router-view>
        <router-view name="sidebar"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import PostList from '@/components/PostList'
export default {
  name: "App",
  components: {
    Header,
    PostList
  }
}
</script>
  
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;
  background: #e2e0e2;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app_article{
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
}

</style>
