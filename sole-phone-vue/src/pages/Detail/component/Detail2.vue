<template>
  <div class="content">
    <div class="img">
      <img :src="`${detail.src}`" alt class />
    </div>
    <div class="produce" v-html="detail.produce"></div>
    <div class="num clear">
      <div class="reduce" @click="reduce">-</div>
      <input type="text" v-model="num" />
      <div class="add" @click="add">+</div>
    </div>

    <div class="price" v-if="detail.price">
      <i>¥</i>
      {{detail.price | price}}
    </div>
    <button class="addcar" @click="addcar">加入购物车</button>
    <button class="mycar" @click="mycar">我的购物车</button>
    <br />
  </div>
</template>

<script>
export default {
  
  props: ["detail", "dataName"],
  data() {
    return {
      num: 1
    };
  },
  methods: {
    mycar() {
      this.$router.push("/shopcar");
    },
    addcar() {
      console.log(this.num,'num')
      if (this.detail._id) {
        axios({
          url: "/api/shopcar",
          data: {
            _id: this.detail._id,
            num: this.num,
            detail: this.detail
            // username:'someone',
            // dataName:this.dataName
          },
          method: "post"
        })
          .then(res => {
            // this.num =res.data.data.num
            // console.log(res, "shopcar res");
          })
          
      }
    },
    add() {
      this.num++;
    },
    reduce() {
      this.num <= 1 ? (this.num = 1) : this.num--;
    }
  },
  watch: {
    num: {
      deep: true,
      handler(newvalue) {
        if (newvalue < 1) {
          this.num = 1;
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../css/detail2.scss";
</style>


