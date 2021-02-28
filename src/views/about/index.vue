<template>
  <div class="about">
    <div class="about-wrapper">
      <!-- <div class="contant">
          <div class="contant-header">联系方式:</div>
          <div class="contant-item">
            <span>QQ:1040481739</span>
          </div>
          <div class="contant-item">
            <span>微信:qqq1784</span>
          </div>
          <div class="contant-item">
            <span>邮箱:lailailee97@qq.com</span>
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'About', // small&camel
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.about {
  min-height: calc(100vh - 350px);
  background: linear-gradient(to bottom right, #fff0f5, #bfefff);
  z-index: 1;
  padding-top: 60px;
  // padding-bottom: 100px;
  // padding-bottom: 100px;
  .about-wrapper {
    // display: flex;
    width: 1000px;
    height: 800px;
    margin: 50px auto 0;
    background: #ffffff;
  }
}
</style>
