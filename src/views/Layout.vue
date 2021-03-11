<template>
  <div class="layout">
    <el-container class="top">
      <div class="logo" @click="Home">Mingo</div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">数据中心</el-menu-item>
        <el-menu-item index="2">日历中心</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-submenu index="4">
          <template slot="title">我的</template>
          <el-menu-item index="4-1">个人中心</el-menu-item>
          <el-menu-item index="4-2">账户管理</el-menu-item>
          <el-menu-item index="4-3">退出登录</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-container>
    <el-container class="container">
      <el-aside width="auto" class="tac">
        <el-col class="left_nav">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            router
          >
            <el-container
              style="display:flex;justify-content:center;margin-top:20px"
            >
              <el-switch
                v-model="iswitch"
                active-color="#559ef8"
                inactive-color="#13ce66"
              >
              </el-switch>
            </el-container>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>数据中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/layout/center">心理测量</el-menu-item>
                <el-menu-item index="/layout/register">人员登记</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>选择量表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/layout/anxiety">焦虑自测</el-menu-item>
                <el-menu-item index="/layout/depression">抑郁自测</el-menu-item>
                <el-menu-item index="/layout/other">其它量表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">报告详情</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main style="overflow:auto">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
      iswitch: true
    };
  },
  computed: {},
  watch: {
    iswitch() {
      console.log(this.iswitch);
      this.isCollapse = !this.isCollapse;
    }
  },
  created() {},
  mounted() {},
  methods: {
    //点击logo跳转到初始页面
    Home() {
      this.$router.push("/layout/");
      this.isCollapse = true;
    },
    //导航栏路由跳转
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(keyPath);
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top {
    width: 100vw;
    height: 7.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .logo {
      margin-left: 5%;
      font-size: 20px;
      cursor: pointer;
      color: #559ef8;
    }
  }
  .container {
    width: 100%;
    height: 92.5%;
    .el-menu-demo {
      border: none;
    }
    .el-menu-vertical-demo {
      height: 92.5vh;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
}
</style>
