<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
