<template>
  <div class='container'>
      <el-container class="wrapper">
      <el-aside :width="isCollapse?'60px':'200px'" class="aside">
        <!-- 导航菜单容器 -->
<!-- default-active="2" 默认激活的菜单项 指定的其实就是菜单项的index属性的值-->
<!-- 导航菜单容器 -->
<!-- background-color="#545c64" 背景颜色 -->
<!-- text-color="#fff" 文字颜色 -->
<!-- active-text-color="#ffd04b" 激活文字颜色 -->
<div class="bg" :class="{log:isCollapse}"></div>
<el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        default-active="1"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"

      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
      </el-aside>
      <el-container>
      <el-header>
        <span class="el-icon-s-fold" @click="toggle()"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <!-- 下拉菜单 -->
        <el-dropdown class="my-dropdown">
          <span class="el-dropdown-link">
            <img src="" alt="">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggle () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang='less'>
.wrapper{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .el-aside{
        background: #002033;
        .bg{
          height: 60px;
          width: 100%;
          background:#002244 url(../../assets/images/logo_admin.png) no-repeat center /140px auto;
        }
        .log{
          background-image: url(../../assets/images/logo_admin_01.png);
          background-size: 36px;
        }
    }
    .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .el-icon-s-fold {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      margin-left: 10px;
    }
    .my-dropdown{
      float: right;
      .el-dropdown-link{
        font-weight: bold;
      }
      img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
  }

}

</style>
