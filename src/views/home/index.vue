<template>
  <el-container class="container-home">
    <el-aside :width="isOpen?'200px':'64px'">
      <span class="logo" :class="{smallLogo:!isOpen}"></span>
      <el-menu
        default-active="/"
        class="el-menu-vertical-demo"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse-transition="false"
        :collapse="!isOpen"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布管理</span>
        </el-menu-item>
        <el-menu-item index="comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span class="el-icon-s-fold icon" @click="switchNav"></span>
        <span class>江苏传智播客科技教育有限公司</span>
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            <img src="../../assets/avatar.jpg" alt />
            <span>管理员名称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    switchNav () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped lang='less'>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      display: block;
      background: #002244 url("../../assets/logo_admin.png") no-repeat center /
        140px auto;
    }
    .smallLogo {
      background: url("../../assets/logo_admin_01.png") no-repeat center / 40px
        auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #999;
    line-height: 60px;
    .icon {
      font-size: 30px;
      margin-right: 10px;
    }
    span {
      vertical-align: middle;
    }
    .el-dropdown {
      float: right;
      line-height: 60px;
    }
    img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>
