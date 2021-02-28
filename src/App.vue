<template>
  <div id="app">
    <base-header></base-header>
    <router-view />
    <base-footer></base-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
#app {
  font-family: Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei',
    'WenQuanYi Micro Hei', 'tohoma,sans-serif';
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
