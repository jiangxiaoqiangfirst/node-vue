<template>
  <div class="detail">
    <div class="nav">
      <ul>
        <li class="l-btn" @click="goback"></li>
      </ul>
    </div>

     <div class="pro_list_box clearfix">
      <router-link
        tag="div"
        v-for="item in fdetail"
        :key="item._id"
        class="pro_list"
        :to="`/detail/${item._id}?dataName=${$route.query.dataName}&detailfrom=2`"
      >
        <a href="javascript:;" class="pro_list_img" style="height: 3.16rem;">
          <img :src="item.src" />
        </a>
        <a href="javascript:;" class="pro_list_name" v-html="item.produce"></a>
        <div class="pro_list_other outHide">
          <span class="price" v-html="item.price"></span>
          <button class='addshopcar' @click='addshop'>加入购物车+</button>
        </div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data(){
    return{
      fdetail:'',
      // dataName:''
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    addshop(){
      axios({
        url:'/api/shopcar',
        method:'post',
        data:{

        }
      }).then(
        res=>{
          // console.log(res.data,'res.data')
        }
      )
    }
  },
  created(){
    console.log(this,'this')
    let url = `/api/${this.$route.query.dataName}`
    axios({
      url:url
    }).then(
      res=>this.fdetail=res.data.data
    )
  },
  // computed: mapGetters(["detail"]),
  // created() {
  //   let id = this.$route.params.id;
  //   let dataName = this.$route.query.dataName;
  //   this.$store.dispatch({
  //     type: "UPDATE_DETAIL",
  //     payload: { id: id, dataName: dataName }
  //   });
  // }
};
</script>


<style scoped>
html,
body {
  overflow-x: hidden;
}
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: .01rem solid #e8eaec;
  z-index: 99;
}
.nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top: 0.015rem;
  margin: 0 auto;
}
.nav ul li {
  width: 0.29rem;
  height: 0.31rem;
  background: url(../../assets/img/history.png) no-repeat 0 0;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}

.pro_list_box {
  margin-top:.31rem;
  overflow: hidden;
}
.pro_list {
  width: 50%;
  float: left;
  background: #eee;
  box-sizing: border-box;
  padding-top: .06rem;
}
.pro_list:nth-child(2n + 1) {
  padding-right: .04rem;
}
.pro_list:nth-child(2n) {
  padding-left: .04rem;
}
.pro_list_img {
  display: block;
  width: 100%;
  height: 1.00rem;
}
.pro_list_img img {
  width: 100%;
  height: 100%;
}
.pro_list_name {
  display: block;
  height: .40rem;
  font-size:.13rem;
  line-height: .20rem;
  background: #fff;
  color: #333;
  overflow: hidden;
  padding: .04rem .08rem 0 .08rem;
}
.pro_list_company {
  display: block;
  height: .2rem;
  line-height: .2rem;
  color: #999;
  background: #fff;
  padding: 0 .08rem;
  font-size: .12rem;
}
.pro_list_other {
  height: .24rem;
  line-height: .24rem;
  padding: 0 .08rem .02rem .08rem;
  background: #fff;
}
.pro_list_other .price {
  color: #f30;
  font-size: .14rem;
}
.pro_list_other .price i {
  font-style: normal;
  font-size: .18rem;
  font-weight: bold;
}
.pro_list_other .addshopcar{
  float:right;
  border:.01rem solid #909090;
}
</style>