<template>
  <div class="HmoeNav">
    <ul class="homeNav">
      <li v-for="(item,index) in navGo" :key="index">
        <router-link class="nav" :to="item.link">{{item.title}}</router-link>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      navGo: [
        { title: "产品分类", link: "/home" },
        { title: "商品分类", link: "/home" },
        { title: "企业名录", link: "/home" },
        { title: "采购信息", link: "/home" }
      ]
    };
  }
};
</script>


<style lang='scss' scoped>
.homeNav {
  margin-top: 0.67rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.1rem;
}

li .nav {
  padding-top: 0.57rem;
  background: url(../img/nav/cgk.png) no-repeat top center;
  background-size: 0.48rem 0.48rem;
  text-align: center;
}
$img: (
  "../img/nav/cgk.png" "../img/nav/cpk.png" "../img/nav/qyk.png"
    "../img/nav/spk.png"
);
@each $item in $img {
  $i: index($img, $item);
  li:nth-child(#{$i}) .nav {
    background-image: url($item);
  }
}

</style>
