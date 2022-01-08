<template>
  <div id="app">
    <!-- <div class="web-bg" /> -->
    <base-header />
    <router-view :key="activeDate" />
    <base-footer />
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'App',
  data() {
    return { activeDate: null }
  },
  computed: {
    ...Vuex.mapState([
      'articleList',
      'articleTotal'
    ])
  },
  watch: {
    $route: {
      handler() {
        this.activeDate = new Date().getTime()
      },
      immediate: true
    }
  },
  mounted() {
    let sleep = 0
    if (!window.location.pathname.includes('home')) {
      sleep = 500
    }
    setTimeout(async() => {
      await this.getArticleList()
      this.getCategoryList()
      this.getTagList()
      this.getSeriesList()
    }, sleep)

    setInterval(async() => {
      if (this.articleList.length < this.articleTotal) {
        await this.getArticleList()
      }
    }, 2000)
  },
  methods: {
    ...Vuex.mapActions(['getArticleList', 'getCategoryList', 'getTagList', 'getSeriesList'])
  }
}
</script>
<style lang="less">
#app {
  // font-family: Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei',
  //   'WenQuanYi Micro Hei', 'tohoma,sans-serif';
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
    Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #2c3e50;
  .web-bg {
    position: fixed;
    z-index: -999;
    width: 100%;
    height: 100%;
    background: url('http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/background.jpeg');
    background-attachment: local;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

// 当手机屏幕宽度超过 $break-super: 480px, 横屏浏览时的样式
@media screen and (max-width: 1221px) {
  html::before {
    width: 100%;
    height: 100%;
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    content: '';
    background: #333;
  }
  body:before {
    // background-image: url("./assets/images/orientation.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 50%;
    content: '';
    height: 200px;
    width: 100px;
    z-index: 99999;
    margin: -140px 0 0 -50px;
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
  }
  body:after {
    content: '为了更好的体验，请使用pc端浏览器打开';
    position: absolute;
    top: 50%;
    text-align: center;
    height: 30px;
    left: 0;
    font-size: 18px;
    z-index: 99999;
    width: 100%;
    color: #fff;
    margin-top: 35px;
  }
}
body {
  margin: 0;
}
</style>
