<template>
  <div class="content" v-if="detail.detail">
    <div class="header clear">
      <h2>
        <img v-if="detail.detail.auth_icon" :src="`${baseUrl}${detail.detail.auth_icon}`" alt />
        <img v-if="detail.detail.icon" :src="`${baseUrl}${detail.detail.icon}`" alt />
      </h2>
      <p>{{detail.detail.auth}}</p>
    </div>
    <div class="cont">
      <h3>{{detail.title}}</h3>
      <div class="time">
        <p>
          {{detail.time | date}}
          <span>
            <img src="../../../assets/img/zan.png" alt />
          </span>
        </p>
      </div>
      <div class="text-box" v-html="detail.detail.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detail"]
};
</script>
<style lang='scss' scoped>
@import '../css/detail1.scss';

</style>
