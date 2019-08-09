<template>
  <div id="app">
    <Header v-show="bNav"></Header>

    <router-view>路由展示区</router-view>
    <Footer v-show="bFoot"></Footer>
    <!-- <Bottom></Bottom> -->
    <!-- <Loading></Loading> -->
  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading.vue";
import Bottom from "./components/Bottom";

import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Loading,
    Bottom
  },
  watch: {
    $route: {
      handler({ path }) {
        //结构赋值 $route对象的属性
        //对应路径，相应改变内容
        // console.log(path)
        if (/^(\/home)/.test(path)) {
          this.$store.dispatch("VIEW_NAV", true);
          this.$store.dispatch("VIEW_FOOT", true);
        } else if (/^(\/login|\/reg|\/follow)/.test(path)) {
          this.$store.dispatch("VIEW_NAV", false);
          this.$store.dispatch("VIEW_FOOT", true);
        } else if (/^(\/search|\/colomn)/.test(path)) {
          this.$store.dispatch("VIEW_NAV", false);
          this.$store.dispatch("VIEW_FOOT", false);
        } else {
          this.$store.dispatch("VIEW_NAV", false);
          this.$store.dispatch("VIEW_FOOT", false);
        }
        //待扩展
      },
      immediate: true
      // deep: true
    }
  },
  methods: {},
  computed: {
    ...mapGetters(["bNav", "bFoot", "bLoading"])
  }
};
</script>

<style>
</style>
