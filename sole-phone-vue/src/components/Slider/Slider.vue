<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in banner" :key="item._id" @click='detailgo(item._id)'>
        <img v-lazy="`${baseUrl}${item.banner}`" alt />
        <div class="text-box">
          <h2>{{item.title}}</h2>
          <p>{{item.sub_title}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["banner"],
  mounted() {
    // console.log(this.banner)
  },
  methods:{
    detailgo(id){
      let url =`/detail/${id}?dataName=banner&detailfrom=1`;
      // let url =`/detail/${id}?dataName=cosmetics`;
      this.$router.push(url)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.banner {
  margin-top: 0.6rem;
  height:2.86rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  .van-swipe {
    .van-swipe__track {
      .van-swipe-item {
        float: left;
        position: relative;
        img {
          width: 100%;
          display: block;
        }
        .text-box {
          width: 5.8rem;
          padding: 0 0.3rem;
          height: 1.24rem;
          position: absolute;
          left: 0;
          bottom: 0;
          color: #fff;
          background: rgba(0, 0, 0, 0.5);
          h2 {
            font-size: 0.3rem;
            font-weight: normal;
            margin-top: 0.22rem;
            line-height: 100%;
            margin-bottom: 0.22rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          // p {
          //   line-height: 100%;
          // }
        }
      }
    }
    // .van-swipe__indicators {
    //   width: 2rem;
    //   height: 0.2rem;
    //   background: red;
    //   .van-swipe__indicator {
    //     display: block;
    //     width: 0.1rem;
    //     height: 0.1rem;
    //     background: white;
    //   }
    //   .van-swipe__indicators--active {
    //     background: #000;
    //   }
    // }
  }
}

</style>
