<template>
  <div class="container">
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <el-form ref="form" :model="loginFrom">
        <el-form-item>
          <el-input ref="myInput" v-model="loginFrom.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            style="width:66%; margin-right:10px"
            v-model="loginFrom.code"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginFrom: {
        mobile: '',
        code: ''
      }
    }
  },
  mounted () {
    this.$refs.myInput.focus()
  }
}
</script>

<style lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: url("../../assets/login_bg.jpg") no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
.el-card {
  width: 400px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 200px;
    display: block;
    margin: 0 auto 20px;
  }
}
</style>
