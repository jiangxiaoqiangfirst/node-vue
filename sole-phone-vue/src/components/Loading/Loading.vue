<template>
  <div class="loading">
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <div v-if="show" class='loading-go'></div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:true
    }
  },
  name: "Loading",
  props: [],
  mounted(){
    this.show=true;
    // console.log(999)
  },
  destroyed(){
    this.show=false;
    // console.log(888)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
 
 
 .loading{
    position: fixed;
    width:.4rem;
    height:.4rem;
    left:0;
    bottom:0;
    right:0;
    top:0;
    margin:auto;
    .loading-go{
      width:.4rem;
      height:.4rem;
      background: blueviolet;
    }
  }
</style>
