<template>
  <div class="detail">
    <div class="nav">
      <ul>
        <li class="l-btn" @click="goback"></li>
      </ul>
    </div>
    <div v-if="$route.query.detailfrom ==1">
      <Detail1 :detail='detail'></Detail1>
    </div>
    <div v-else-if="$route.query.detailfrom ==2">
     <Detail2 :detail='detail' :dataName='$route.query.dataName'></Detail2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Detail1 from './component/Detail1'
import Detail2 from './component/Detail2'
export default {
  name: "Detail",
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  components:{Detail1,Detail2},
  computed: mapGetters(["detail"]),
  created() {
    let id = this.$route.params.id;
    let dataName = this.$route.query.dataName;
    this.$store.dispatch({
      type: "UPDATE_DETAIL",
      payload: { id: id, dataName: dataName }
    });
  }
};
</script>


<style lang = 'scss' scoped>
@import './css/detail.scss'; 
</style>