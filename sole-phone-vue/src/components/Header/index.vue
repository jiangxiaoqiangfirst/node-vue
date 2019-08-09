<template>
  <div class="header">
    <div class="newTopbar_box">
      <h3 class="newLogo">
        <router-link to='/home' title="搜了网"></router-link>
      </h3>
      <router-link to="/search" tag="div" class="newSearch">请输入搜索关键字</router-link>
      <router-link to="/login" class="newLoginBtn">登录</router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      deleted: true
    };
  },
  name: "Header",
  props: [],
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->

<style lang='scss' scoped>
@import "./scss/Header.scss";
</style>
