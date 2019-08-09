<template>
  <div id="shopcar">
    <div class="nav-head">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>

    <div class="nav">
      <div class="nav_check" @click="handleChecked">
        <input type="checkbox" id="check_all" v-model="allChecked" />
        <p>全选</p>
      </div>
      <div class="del">编辑</div>
    </div>

    <div class="content">
      <!-- <button @click="clearBuycar()" v-show="buycar.length">清空<[表情]tton> -->
      <div v-for="item of buycar" :key="item._id">
        
        <div class="check">
          <input type="checkbox" name="check" id="check" v-model="allChecked" />
        </div>
        <div class="img">
          <img :src="item.detail.src" alt />
        </div>
        <div class="introduce">
          <span>{{item.detail.title}}</span>
          <p>介绍:{{item.detail.produce}}</p>
          <p>价格:￥{{item.detail.price | price}}</p>
          <div>
            <div class="quant">数量</div>
            <div class="reduce iconfont icon-jian" @click="changeItem({_id:item._id,num:-1})"></div>
            <input type="text" class="num" :value="item.num" />
            <div class="add iconfont icon-jia" @click="changeItem({_id:item._id,num:1})"></div>
          </div>
        </div>
        <div class="del" @click="removeItem({_id:item._id})">
          <em class="iconfont icon-shanchu"></em>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="count">￥{{totalPrice}}</div>
      <div class="settlement">去结算{{count}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allChecked: true,
      buycar: [],
      totalPrice: 0,
      count: ""
    };
  },
  methods: {
    handleChecked() {},
    changeItem() {},
    removeItem() {}
  },
  beforeCreate() {
    axios({
      url: "/api/shopcar"
    }).then(res => {
      this.buycar=res.data.data;
    });
  }
};
</script>

<style scoped lang='scss'>
@import "./scss/style.scss";
</style>

