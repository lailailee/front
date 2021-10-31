<template>
  <div id="app">
    <base-header />
    <router-view />
    <base-footer />
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'App',
  computed: {
    ...Vuex.mapState([
      // 映射 this.count 为 store.state.count
      // 'count'
    ])
  },

  created() {
    this.getArticleList()
    this.getCategoryList()
    this.getTagList()
  },
  methods: {
    ...Vuex.mapActions(['getArticleList', 'getCategoryList', 'getTagList'])
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
}
body {
  margin: 0;
}
</style>
