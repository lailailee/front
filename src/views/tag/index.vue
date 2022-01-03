<template>
  <div class="tag">
    <banner
      name="标签"
      image="http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/banner2.png"
    />
    <div class="bottom">
      <container type="tag">
        <div class="subject">
          <div class="subject-head">标签 - {{ tagList.length }}</div>
          <div class="tag-list">
            <div
              v-for="(item,index) in tagList"
              :key="index"
              class="tag-list-item"
              @click="skipToList(item)"
            >
              <span
                class="title"
                :style="setStyle(item)"
              >{{ item.name }}</span>
            </div>
          </div>
        </div>
      </container>
    </div>
  </div>
</template>

<script>
// import Template from './components/Template'
import Vuex from 'vuex'

export default {
  name: 'Tag',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...Vuex.mapState([
      // 映射 this.count 为 store.state.count
      'tagList'
    ]),
    setStyle() {
      return (item) => {
        let size = 13
        size += 5 + Math.ceil(item.articleCount / 2) * 4
        const color = this.$Tools.getRandomDeepColor()
        return `font-size:${size}px;color:${color}`
      }
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    // var html = Mdjs.md2html(markdownText)
  },
  methods: {
    skipToList(item) {
      const { id, name } = item
      this.$router.push({ name: 'tagList', params: { id, name }})
    }

  }
}
</script>
<style lang="scss" scoped>
.tag {
  min-height: calc(100vh - 350px);
  .top {
    user-select: none;
    cursor: pointer;
    height: 400px;
    width: 100%;
    overflow: hidden;
    .picture {
      z-index: -1;
      top: 0;
      height: 100%;
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
  .bottom {
    background: linear-gradient(to bottom right, #fff0f5, #bfefff);
    z-index: 1;
    // height: 2000px;
    padding-top: 30px;
    padding-bottom: 100px;
    .subject {
      opacity: 0.95;
      width: calc(100% - 120px);
      height: 100%;
      margin-bottom: 20px;
      border-radius: 5px;
      padding: 60px 60px 80px;
      background: #ffffff;
      box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);

      .subject-head {
        font-size: 35px;
        text-align: center;
        height: 71px;
        line-height: 71px;
        margin-bottom: 20px;
      }
      .tag-list {
        // min-height: 300px;
        display: flex;
        flex-wrap: wrap;
        .tag-list-item {
          display: flex;
          position: relative;
          // margin: 5px 5px;
          padding: 8px 8px;
          align-items: center;
          // padding: 0.12 em 0.4 em 0.12 em 20px;
          .title {
            text-align: center;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s;
            // line-height: 100%;
            &:hover {
              color: #49b1f5 !important;
              transform: scale(1.1);
            }
          }
          // .count {
          //   font-size: 14px;
          //   color: #858585;
          //   margin: 0 0 0 8px;
          // }
          // &::before {
          //   position: absolute;
          //   left: 0;
          //   cursor: pointer;
          //   transition: all 0.3s ease-out;
          //   top: 7px;
          //   width: 6px;
          //   height: 6px;
          //   border: 3px solid #49b1f5;
          //   border-radius: 6px;
          //   background: transparent;
          //   content: '';
          // }
          // &:hover:before {
          //   border-color: #ff7242;
          // }
        }
      }
    }
  }
}
</style>
