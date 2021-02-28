<template>
  <div class="header">
    <div class="header-wrapper sp-container">
      <div class="header-left ">Lailailee'home</div>
      <div class="header-right ">
        <div class="right-item" @click="skipTo('home')">
          <i class="iconfont home-copy"></i>首页
        </div>
        <div class="right-item" @click="skipTo('category')">
          <i class="iconfont leimupinleifenleileibie2"></i>分类
        </div>
        <div class="right-item" @click="skipTo('tag')">
          <i class="iconfont biaoqian"></i>标签
        </div>
        <div class="right-item" @click="skipTo('timeline')">
          <i class="iconfont shijianxian"></i>时间线
        </div>
        <div class="right-item" @click="developing">
          <i class="iconfont gongju"></i>工具箱
        </div>
        <div class="right-item" @click="developing">
          <i class="iconfont ziyuan"></i>资源
        </div>
        <div class="right-item" @click="developing">
          <i class="iconfont guanyuwomen-copy"></i>关于我
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-header',
  methods: {
    /**
     * @description skip to other's route
     * @name skipTo
     * @param type
     */
    skipTo(type) {
      this.$router.push({ name: type })
    },
    /**
     * @description being dev
     * @name  developing
     */
    developing() {
      this.$message({
        message: '该功能正在开发',
        type: 'warning'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 100;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.7) !important;
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .header-left {
      display: flex;
      align-items: center;
      font-size: 25px;
      cursor: pointer;
      height: 100%;
    }
    .header-right {
      display: flex;
      align-items: center;
      height: 100%;
      .right-item {
        margin-top: 5px;
        cursor: pointer;
        border-radius: 5px;
        padding: 8px 15px;
        margin: 0 0px;
        font-size: 15px;
        &:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff !important;
        }
        .iconfont {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
