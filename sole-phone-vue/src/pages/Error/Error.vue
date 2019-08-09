<template>
  <div class="error">
    <h2 class="h404">404</h2>
    <div class="missing">访问的页面不存在，请更换网页</div>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  padding-left: 0.2rem;
}
.h404 {
  margin-top: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
.missing {
  height: 0.3rem;
  line-height: 0.3rem;
}
</style>
