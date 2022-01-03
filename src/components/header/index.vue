<template>
  <div :class="headerClass">
    <div class="header-wrapper">
      <div class="header-left ">Lailailee</div>
      <div class="header-right ">
        <div
          class="right-item"
          @click="skipTo('home')"
        >
          <i class="iconfont home-copy" />首页
        </div>
        <div
          class="right-item"
          @click="skipTo('archives')"
        >
          <i class="iconfont guidang" />归档
        </div>
        <div
          class="right-item"
          @click="skipTo('categories')"
        >
          <i class="iconfont fenlei" />分类
        </div>
        <div
          class="right-item"
          @click="skipTo('tag')"
        >
          <i class="iconfont biaoqian" />标签
        </div>
        <!-- <div
          class="right-item"
          @click="skipTo('timeline')"
        >
          <i class="iconfont shijianxian" />时间线
        </div>
     -->
        <!-- <div
          class="right-item"
          @click="developing"
        >
          <i class="iconfont gongju" />工具箱
        </div>
        <div
          class="right-item"
          @click="developing"
        >
          <i class="iconfont ziyuan" />资源
        </div>
        <div
          class="right-item"
          @click="developing"
        >
          <i class="iconfont guanyuwomen-copy" />关于我
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  data() {
    return {
      isFixd: false,
      isVisible: false
    }
  },
  computed: {
    headerClass() {
      let clas = 'header'
      if (this.isFixd) {
        clas += ' fixed'
      }
      if (this.isVisible) {
        clas += ' visible'
      }
      console.log(clas)
      return clas
    }
  },
  mounted() {
    var scrollFunc = (e) => {
      e = e || window.event
      console.log('======', this.isFixd)
      if (this.isFixd) {
        if (e.wheelDelta) { // 第一步：先判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) { // 当滑轮向上滚动时
            console.log('滑轮向上滚动')
            this.isVisible = true
          }
          if (e.wheelDelta < 0) { // 当滑轮向下滚动时
            console.log('滑轮向下滚动')
            this.isVisible = false
          }
        } else if (e.detail) { // Firefox滑轮事件
          if (e.detail > 0) { // 当滑轮向上滚动时
            this.isVisible = true
            console.log('滑轮向上滚动')
          }
          if (e.detail < 0) { // 当滑轮向下滚动时
            this.isVisible = false
            console.log('滑轮向下滚动')
          }
        }
      }
    }
    document.addEventListener('DOMMouseScroll', scrollFunc, false)
    window.onmousewheel = document.onmousewheel = scrollFunc

    window.addEventListener('scroll', (e) => {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scroll)
      console.log(e)

      if (this.scroll > 50) {
        this.isFixd = true
      } else {
        this.isFixd = false
        this.isVisible = false
      }
    })
  },
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
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.7) !important;
  opacity: 1;
  filter: none;
  transition: all 0.5s;
  &.fixed {
    position: fixed;
    top: -50px;
    z-index: 91;
    // background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 5px 6px -5px rgb(133 133 133 / 60%);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
  &.visible {
    transition: all 0.5s;
    transform: translate3d(0, 100%, 0);
  }
  .header-wrapper {
    display: flex;
    width: 85%;
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
        margin: 8px 6px;
        padding-bottom: 4px;
        // margin: 0 0px;
        font-size: 14px;
        position: relative;
        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: -1;
          width: 0px;
          height: 3px;
          background-color: #80c8f8;
          content: '';
          transition: all 0.3s ease-in-out;
        }
        &:hover:after {
          width: 100%;
        }
        // &:hover {
        //   background: rgba(255, 255, 255, 0.08);
        //   color: #fff !important;
        // }
        .iconfont {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
