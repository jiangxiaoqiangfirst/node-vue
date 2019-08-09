<template>
  <div class="home">
    <Silder :banner="banner"></Silder>
    <HomeNav></HomeNav>
    <h2 class="tit-h2 newIndexTit">精品推荐</h2>
    <div class="index_tssc_box clear">
      <router-link to="/follow?dataName=cosmetics" class="index_tssc tssc01">
        <img src="./img/rmsc1.png" />
        <p>
          机械设备
          <em>耐用易操作</em>
        </p>
      </router-link>
      <div class="index_tssc">
        <router-link to="/follow?dataName=eye_makeup" class="index_tssc_link index_tssc_bb1 tssc02">
          <img src="./img/rmsc2.png" />
          <p>
            安防监控
            <em>安全智能防护</em>
          </p>
        </router-link>
        <router-link to="/follow?dataName=gift" class="index_tssc_link tssc03">
          <img src="./img/rmsc3.png" />
          <p>
            家装建材
            <em>大品牌 更专业</em>
          </p>
       </router-link>
      </div>
    </div>
    <div class="index_hysc_box clearfix">
      <router-link to="/follow?dataName=haidressing" class="index_hysc">
        <img src="./img/rmsc4.png" />
        <p>
          五金工具
          <em>精工平价耐用</em>
        </p>
      </router-link>
      <router-link to="/follow?dataName=manskin"  class="index_hysc">
        <img src="./img/rmsc5.png" />
        <p>
          包装材料
          <em>质量好价格优</em>
        </p>
      </router-link>
      <router-link to="/follow?dataName=tool"  class="index_hysc">
        <img src="./img/rmsc6.png" />
        <p>
          环保用品
          <em>安全无污染</em>
        </p>
      </router-link>
      <router-link to="/follow?dataName=skin" class="index_hysc">
        <img src="./img/rmsc7.png" />
        <p>
          电子设备
          <em>原厂低价直销</em>
        </p>
      </router-link>
    </div>
    <!-- bath_protector的内容  -->
    <div class="pro_list_box clearfix">
      <router-link
        tag="div"
        v-for="item in bath_protector"
        :key="item._id"
        class="pro_list"
        :to="`/detail/${item._id}?dataName=bath_protector&detailfrom=2`"
      >
        <a href="javascript:;" class="pro_list_img" style="height: 3.16rem;">
          <img :src="item.src" />
        </a>
        <a href="javascript:;" class="pro_list_name" v-html="item.produce"></a>
        <div class="pro_list_other outHide">
          <span class="price" v-html="item.price"></span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Silder from "@/components/Slider/Slider";
import HomeNav from "./HomeNav/HomeNav";
import {
  bath_protector,
  cosmetics,
  eye_makeup,
  gift,
  haidressing,
  manskin,
  perfume,
  skin,
  tool
} from "../../assets/config/pathdetail";

export default {
  data() {
    return {
      banner: [],
      bath_protector: []
    };
  },
  name: "home",
  props: [],
  mounted() {
    axios({
      url: "/api/banner"
    }).then(res => {
      this.banner = res.data.data;
    });
    axios({
      url: "/api/bath_protector"
    }).then(res => (this.bath_protector = res.data.data));
  },
  components: {
    Silder,
    HomeNav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import url("./css/style.scss");
</style>
