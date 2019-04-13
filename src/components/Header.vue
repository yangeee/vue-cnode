<template>
  <nav>
    <div class="header">
      <router-link :to="{
        name: 'root'
      }">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt='header_svg'>
      </router-link>
      <ul>
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">新手入门</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
        <li>
          <a href="#">登陆</a>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Header'
}
</script>


<style scoped>
* {
  font-size: 13px;
}
a {
  text-decoration: none;
  color: #ccc;
  width: 120px;
}
img {
  max-width: 120px;
  display: block;
}
ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}
ul li {
  margin: 5px 15px;
}
nav {
  background: #444444;
  padding: 10px 90px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
