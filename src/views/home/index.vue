<template>
  <div class="home">
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
        <img
          class="image"
          src="@/assets/image/banner2.png"
          alt=""
        >
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
            <div class="title">
              {{ item.title }}
            </div>
            <div class="info">
              <span class="date item"><i class="iconfont riqi" /> 发表于 {{ item.createdAt.split(" ")[0] }}</span>
              <span> ｜ </span>
              <span class="category item">
                <i class="iconfont fenlei" />
                <span class="category-item"> {{
                  item.category.name
                }}</span></span>
              <span v-if="item.tags.length > 0"> ｜ </span>
              <span
                v-if="item.tags.length > 0"
                class="tag item"
              >
                <i class="iconfont biaoqian" />
                <span
                  v-for="(it, ind) in item.tags"
                  :key="ind"
                >
                  <span class="tag-item">{{ it.name }}</span>
                  <span v-show="ind<item.tags.length-1">•</span>
                </span>
              </span>
              <!-- ｜ -->
              <!-- <span class="tag item">
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
// import Template from './components/Template'
import Vuex from 'vuex'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      // articleList: [],
      // // categoryList: [],
      // // tagList: [],
      // search: '',
      // page: 1,
      // limit: 8,
      // articleTotal: 0,
      // orderBy: 'createdAt'
    }
  },
  computed: {
    ...Vuex.mapState([
      // 映射 this.count 为 store.state.count
      'articleList',
      'articleTotal'
    ]),
    abstract() {
      return (item) => {
        // const txt = content.replaceAll(/ /g, '').replaceAll(/\n/g, '').slice(0, 300)
        // const txt = content
        // console.log(content)
        // console.log(txt)
        // return Mdjs.md2html(txt)
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
    }
    // async getTagList() {
    //   try {
    //     // const { search, limit, page, orderBy } = this
    //     const params = {
    //       limit: 1000
    //     }
    //     const res = await Api.getTagList(params)
    //     if (res.code === 0) {
    //       const { list, count } = res.data
    //       this.tagList = list
    //       console.log(count)
    //     } else {
    //       console.error(res.message)
    //     }
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    // async getCategoryList() {
    //   try {
    //     // const { search, limit, page, orderBy } = this
    //     const params = {
    //       limit: 1000
    //     }
    //     const res = await Api.getCategoryList(params)
    //     if (res.code === 0) {
    //       const { list, count } = res.data
    //       this.categoryList = list
    //       console.log(count)
    //     } else {
    //       console.error(res.message)
    //     }
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
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
.home {
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
    .list-item {
      box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
      // height: 210px;
      width: calc(100% - 40px);
      margin-bottom: 20px;
      border-radius: 5px;
      // border: 1px solid red;
      background: #ffffff;
      padding: 30px 20px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .left {
        width: 100%;
        padding-left: 20px;
        position: relative;
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
        .info {
          // margin-top: 30px;
          // position: absolute;
          // bottom: 10px;
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
            font-size: 12px;
            margin-right: 2px;
          }
          .date {
          }
          .category {
            transition: all 0.2s ease-in-out;
            .category-item:hover {
              color: #49b1f5 !important;
            }
          }
          .tag {
            transition: all 0.2s ease-in-out;
            .tag-item:hover {
              color: #49b1f5 !important;
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
