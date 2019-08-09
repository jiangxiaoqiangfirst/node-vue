<template>
  <div class="reg">
    <div class="top">
      <a class="goback" href="javascript:;" onclick="window.history.go(-1)"></a>
      <span>免费注册</span>
    </div>
    <div class="content">
      <form id="contactform" method="post" action="/shop/DoCompanyRegister/">
        <input id="source" name="source" type="hidden" value />
        <div class="zd_wapper">
          <div class="zd_box">
            <i class="user"></i>
            <input
              type="text"
              id="txtAccount"
              name="txtAccount"
              maxlength="20"
              class="zd_input"
              placeholder="请输入用户名"
              v-model="username"
            />
          </div>
          <div class="zd_box">
            <i class="password"></i>
            <input
              type="password"
              id="txtPassword"
              name="txtPassword"
              maxlength="20"
              class="zd_input"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="zd_box">
            <i class="company"></i>
            <input
              type="text"
              id="txtCompanyName"
              name="txtCompanyName"
              maxlength="120"
              class="zd_input"
              placeholder="请输入公司名称"
              v-model="company"
            />
          </div>
          <div class="zd_box">
            <i class="nikename"></i>
            <input
              type="text"
              id="nikename"
              name="nikename"
              maxlength="120"
              class="zd_input"
              placeholder="请输入昵称"
              v-model="nikename"
            />
          </div>
          <div class="zd_box">
            <i class="phone"></i>
            <input
              type="text"
              id="txtMobilePhone"
              name="txtMobilePhone"
              maxlength="11"
              class="zd_input"
              placeholder="请输入手机号码"
              v-model="telphone"
            />
          </div>
          <div class="zd_box">
            <i class="checkcode"></i>
            <input
              type="text"
              id="txtVerifyCode"
              name="txtVerifyCode"
              maxlength="11"
              class="zd_input"
              placeholder="请输入图形验证码"
              style="width:49%"
              v-model="txtVerifyCode"
            />
          </div>
          <div class="zd_box zd_box_r">
            <i class="checkcode"></i>
            <input
              type="text"
              id="txtPhoneCode"
              name="txtPhoneCode"
              value
              maxlength="6"
              class="zd_input"
              placeholder="请输入短信验证码"
              v-model="txtphoneCode"
            />
            <!-- 禁止获取验证码状态：追加class：hqyzm_no -->
            <a href="javascript:;" id="btnPhoneCode" class="hqyzm">获取短信验证码</a>
          </div>
          <div class="zd_box">
            <i class="checkcode"></i>
            <input type="file" id name class="zd_input" ref="file" />
          </div>
        </div>
      </form>

      <div class="lr_o clear">
        <router-link to="/login">已有账号？去登录</router-link>
      </div>
      <!-- 错误提示 -->
      <div class="lr_error" v-html="title"></div>

      <input type="button" name id="submit" value="免 费 注 册" class="lr_btn" @click="register" />

      <div class="reg_o">
        <span>*</span> 注册即表示您同意并接受
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      company: "",
      nikename: "",
      telphone: "",
      txtVerifyCode: "",
      txtphoneCode: "",
      title: "请获取手机验证码！"
    };
  },
  methods: {
    register() {
      let formdata = new FormData();
      formdata.append("username", this.username);
      formdata.append("password", this.password);
      formdata.append("company", this.company);
      formdata.append("telphone", this.telphone);
      formdata.append("txtVerifyCode", this.txtVerifyCode);
      formdata.append("txtphoneCode", this.txtphoneCode);

      formdata.append("icon", this.$refs.file.files[0]);
      // console.log(this.$store,'sss')

      // this.$store.dispatch('UPDATE_REG',formdata);
      // console.log(this.$store.getters('reg'),'getter')
      axios({
        url: "/api/reg",
        method: "post",
        data: formdata
      }).then(res => {
        res.data.err === 0
          ? this.$router.push("/login")
          : (this.title = res.data.msg);
      });
    }
  }
};
</script>

<style scoped lang='scss'>
@import "./css/style.scss";
</style>

