<template>
  <div class="footer">
    <div class="guide">
      <router-link to='/home'>电脑版</router-link>|
      <router-link to='/home'>网站地图</router-link>
      <span>
        |
        <router-link to='/home'>意见反馈</router-link>|
       <router-link class="c_org" to='/home'>申请一网通</router-link>  
      </span>
    </div>
    <div class="guide">
      <router-link to='/login'>登陆</router-link>
      <router-link to='/reg'>注册</router-link>
    </div>
    <div class="copyright">
      <span>&copy;2019</span>
      <span>搜了网</span>
      <span>版权所有</span>
    </div>

    <div class="foot_bar">
      <a href="/">
        <img alt="首页" src="@/components/Footer/img/home.png" />
      </a>
      <span onclick="window.location.reload()">
        <img alt="刷新" src="@/components/Footer/img/load.png" />
      </span>
      <span onclick="window.scrollTo(0, 0)">
        <img alt="顶部" src="@/components/Footer/img/goto.png" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './css/Footer.scss';
</style>
