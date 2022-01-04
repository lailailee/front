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
  created() {
    this.getArticleList()
    this.getCategoryList()
    this.getTagList()
    this.getSeriesList()
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
body {
  margin: 0;
}
</style>
