<template>
  <div class="banner">
    <div class="info">
      <div class="mask">
        {{ name }}
      </div>
    </div>
    <div class="picture">
      <img
        class="image"
        :src="require(`../../assets/image/${image}`)"
        alt=""
      >
    </div>
  </div>
</template>

<script>
// const url = require('../assets/images/图片.jpg')

export default {
  name: 'Banner',
  components: {},
  props: ['name', 'image']
}
</script>
<style lang="scss" scoped>
.banner {
  user-select: none;
  cursor: pointer;
  height: 400px;
  width: 100%;
  overflow: hidden;
  .picture {
    z-index: -1;
    top: 0;
    height: 400px;
    width: 100%;
    overflow: hidden;
    position: fixed;
    .image {
      width: 100%;
    }
  }
  .info {
    color: #ffffff;
    .mask {
      width: 100%;
      height: 400px;
      position: absolute;
      // background: rgba(0, 0, 0, 0.05);
      font-family: 'Times New Roman', Times, serif;
      font-size: 40px;
      font-weight: bold;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .arrow {
      width: 100%;
      position: absolute;
      bottom: 0;
      // background: rgba(0, 0, 0, 0.03);
      cursor: pointer;
      .arrow-down {
        font-size: 50px;
      }
    }
  }
}
</style>
