<template>
  <div class="series">
    <banner
      name="系列"
      image="http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/banner2.png"
    />
    <div class="bottom">
      <container type="series">
        <div class="subject">
          <div class="subject-head">系列 - {{ seriesList.length }}</div>
          <div class="series-list">
            <div
              v-for="(item,index) in seriesList"
              :key="index"
              class="series-list-item"
            >
              <span
                class="title"
                @click="skipToList(item)"
              >{{ item.name }}</span> <span class="count">({{ item.articleCount }})</span>
            </div>
          </div>
        </div>
      </container>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Series',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...Vuex.mapState([
      'seriesList'
    ])
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    skipToList(item) {
      const { name, id } = item
      this.$router.push({ name: 'seriesList', params: { name, id }})
    }
  }
}
</script>
<style lang="scss" scoped>
.series {
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
      .series-list {
        min-height: 300px;
        .series-list-item {
          position: relative;
          // margin: 0.3 rem 0;
          margin: 10px 10px;
          padding: 2px 2px 2px 20px;
          // padding: 0.12 em 0.4 em 0.12 em 20px;
          .title {
            font-size: 14px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
              color: #49b1f5 !important;
            }
          }
          .count {
            font-size: 14px;
            color: #858585;
            margin: 0 0 0 8px;
          }
          &::before {
            position: absolute;
            left: 0;
            cursor: pointer;
            transition: all 0.3s ease-out;
            top: 7px;
            width: 6px;
            height: 6px;
            border: 3px solid #49b1f5;
            border-radius: 6px;
            background: transparent;
            content: '';
          }
          &:hover:before {
            border-color: #ff7242;
          }
        }
      }
    }
  }
}
</style>
