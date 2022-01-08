<template>
  <div id="home">
    <div class="top">
      <div class="info">
        <div class="mask">
          Things Change ， Roll With It
        </div>
        <div
          class="arrow"
          @click="scorllDown"
        >
          <i class="iconfont arrow-down" />
        </div>
      </div>
      <div class="picture">
        <!-- <img
          class="image"
          src="http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/banner2.png"
          alt=""
        > -->
      </div>
    </div>
    <div class="bottom">
      <container>
        <div
          v-for="(item, index) in articleList"
          :key="index"
          class="list-item"
        >
          <div class="left">
            <div class="title-wrapper">
              <span
                class="title"
                @click="skipToArticle(item.id)"
              >{{ item.title }} </span><span
                v-if="item.series.id!==0"
                class="series-name-wrapper "
              >[ <span
                  class="series-name"
                  @click="skipToSeries(item.series)"
                >{{ seriesName(item) }}</span> ]</span>
              <!-- 系列： -->
            </div>
            <div class="info">
              <span class="date item"><i class="iconfont calculator" /> 发表于 {{ item.createdAt.split(" ")[0] }}</span>
              <span> ｜ </span>
              <span class="tag item">
                <i class="iconfont viewlist" />
                <span
                  class="tag-item"
                  @click="skipToCategory( item.category)"
                > {{
                  item.category.name
                }}</span></span>
              <span v-if="item.tags.length > 0"> ｜ </span>
              <span
                v-if="item.tags.length > 0"
                class="tag item"
              >
                <i
                  class="iconfont discount"
                  style="margin-right:3px;"
                />
                <span
                  v-for="(it, ind) in item.tags"
                  :key="ind"
                >
                  <span
                    class="tag-item"
                    @click="skipToTag(it)"
                  >{{ it.name }}</span>
                  <span v-show="ind<item.tags.length-1">•</span>
                </span>
              </span>
              <!-- ｜
              <span class="tag item">
                <i class="iconfont yanjing" />{{ item.viewCount }}
              </span> -->
              <!-- ｜
                <span class="tag item">
                  <i class="iconfont yanjing" />{{ item.viewCount }}
                v-html="abstract(item.content)"
                </span> -->
            </div>
            <div class="abstract">
              {{ abstract(item) }}
            </div>

          </div>
        </div>
        <!-- {{ articleList.length }}/{{ articleTotal }} -->
        <div
          v-show="articleList.length < articleTotal"
          class="paging"
          @click="getArticleList"
        >
          <div class="paging-item last" />
          <div class="paging-item center">查看更多</div>
          <div class="paging-item next" />
        </div>
      </container>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
    }
  },
  computed: {
    ...Vuex.mapState([
      'articleList',
      'articleTotal'
    ]),
    seriesName() {
      return (article) => {
        if (article.seriesId === 0) {
          return ''
        } else {
          return article.series.name
        }
      }
    },
    abstract() {
      return (item) => {
        return item.overview
      }
    },
    setStyle() {
      return (item) => {
        let size = 13
        size += Math.ceil(item.articleCount / 3) * 3
        return `font-size:${size}px;`
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
    ...Vuex.mapActions(['getArticleList']),
    scorllDown() {
      document.getElementsByClassName('bottom')[0].scrollIntoView({
        behavior: 'smooth'
      })
    },
    skipToCategory(item) {
      const { id, name } = item
      this.$router.push({ name: 'categoriesList', params: { id, name }})
    },
    skipToTag(item) {
      const { id, name } = item
      this.$router.push({ name: 'tagList', params: { id, name }})
    },
    skipToArticle(aid) {
      this.$router.push({ name: 'article', params: { aid }})
    },
    skipToSeries(item) {
      const { id, name } = item
      this.$router.push({ name: 'seriesList', params: { id, name }})
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
    filter: alpha(opacity=40);
  }
  50% {
    top: -16px;
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  100% {
    top: 0;
    opacity: 0.4;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
    filter: alpha(opacity=40);
  }
}
#home {
  // transition: all 0.5s;
  min-height: calc(100vh - 350px);
  .top {
    user-select: none;
    cursor: pointer;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    .picture {
      z-index: -1;
      top: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: fixed;
      background-color: #49b1f5;
      background-attachment: fixed;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url('http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/home.jpeg');
      .image {
        width: 100%;
      }
    }
    .info {
      color: #ffffff;
      .mask {
        width: 100%;
        height: 100vh;
        // height: 550px;
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
          display: flex;
          justify-content: center;

          text-align: center;
          text-shadow: 2px 2px 2px rgb(0 0 0 / 15%);
          line-height: 1.5;
          font-weight: 900;

          position: relative;
          width: 100%;
          color: #eee;
          font-size: 40px;

          animation: scroll-down-effect 1.5s infinite;
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
    // .paging {
    //   margin-bottom: 0px;
    // }

    .list-item {
      box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
      // height: 210px;
      width: calc(100% - 40px);
      margin-top: 20px;
      border-radius: 5px;
      // border: 1px solid red;
      background: #ffffff;
      padding: 30px 20px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      // &:nth-last-child {
      //   margin-bottom: 0px;
      // }
      &:nth-child(1) {
        margin-top: 0px;
      }
      .left {
        width: 100%;
        padding-left: 20px;
        position: relative;
        .title-wrapper {
          .title {
            transition: all 0.2s ease-in-out;
            color: #333 !important;
            text-align: left;
            font-size: 22px;
            cursor: pointer;
            line-height: 44px;

            &:hover {
              color: #49b1f5 !important;
            }
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
              'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei',
              sans-serif;
            // font-weight: 900;
          }
          .series-name-wrapper {
            font-weight: 400;
            font-size: 13px;
            .series-name {
              transition: all 0.3s;
              cursor: pointer;
              &:hover {
                color: #49b1f5 !important;
              }
            }
          }
        }
        .info {
          display: flex;
          cursor: pointer;
          color: #858585;
          font-size: 13px;
          text-decoration: none;
          line-height: 24px;
          height: 24px;
          .item {
            margin: 0 0;
          }
          .iconfont {
            font-size: 15px;
            margin-right: 0px;
          }
          .date {
          }
          .category {
            transition: all 0.3s;
            .category-item {
              transition: all 0.3s;
              &:hover {
                color: #49b1f5 !important;
              }
            }
          }
          .tag {
            .tag-item {
              transition: all 0.3s;
              &:hover {
                color: #49b1f5 !important;
              }
            }
          }
        }
        .abstract {
          margin-top: 10px;
          text-align: left;
          font-family: Tahoma, Helvetica, Arial, '宋体', sans-serif;
          line-height: 28px;
          font-size: 14px;
        }
      }
    }
    .paging {
      margin-top: 20px;
      width: calc(100% - 40px);
      height: 50px;
      background: #ffffff;
      padding: 0 20px;
      border-radius: 0 0 5px 5px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .paging-item {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #858585;
      }
      .last {
        margin-left: 100px;
      }
      .center {
        font-family: Helvetica, Arial, '宋体', sans-serif;
      }
      .next {
        margin-right: 100px;
      }
      .last,
      .next {
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
