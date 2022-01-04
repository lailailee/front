<template>
  <div class="container sp-container">
    <div class="main">
      <slot />
    </div>
    <div
      id="siderbar"
      ref="siderbar"
      class="siderbar"
    >
      <!--   -->
      <div
        style="height:100%;"
        :class="type==='article'?'':'sticky-wrapper'"
      >
        <div class="card-widget card-info">
          <div class="card-info-avatar is-center">
            <img
              class="avatar-img"
              src="http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/avatar1.jpg"
              onerror="this.onerror=null;this.src='/img/friend_404.gif'"
              alt="avatar"
            >
            <div class="author-info__name">lailailee</div>
            <div class="author-info__description">roll with it</div>
          </div>
          <div class="card-info-data">
            <div
              class="card-info-data-item is-center"
              @click="skipTo('archives')"
            >
              <div class="headline">文章</div>
              <div class="length-num">{{ articleTotal }}</div>
            </div>
            <div
              class="card-info-data-item is-center"
              @click="skipTo('categories')"
            >
              <div class="headline">分类</div>
              <div class="length-num">{{ categoryList.length }}</div>
            </div>
            <div
              class="card-info-data-item is-center"
              @click="skipTo('series')"
            >
              <div class="headline">系列</div>
              <div class="length-num">{{ seriesList.length }}</div>
            </div>
            <div
              class="card-info-data-item is-center"
              @click="skipTo('tag')"
            >
              <div class="headline">标签</div>
              <div class="length-num">{{ tagList.length }}</div>
            </div>
          </div>
          <div
            class="card-info-btn button--animated"
            @click="skipToGithub"
          ><i class="iconfont github" /><span>Follow Me</span></div>
        </div>
        <div class="sticky-wrapper">
          <div
            ref="catelog"
            class="catelog-wrapper"
          >
            <slot name="catelog" />
          </div>
          <div
            v-show="type!=='series'"
            class="card-widget card-categories"
          >
            <div class="headline"> <i class="iconfont jihe" />系列</div>
            <div class="categories-list">
              <div
                v-for="(item,index) in seriesList.slice(0,6)"
                :key="index"
                :class="'categories-item '+className(item,'series')"
                @click="skipToSeries(item)"
              >
                <span class="item-left">{{ item.name }}</span><span>（{{ item.articleCount }}）</span>
              </div>
              <div
                v-show="seriesList.length>6"
                class="categories-item"
                @click="skipTo('series')"
              >
                查看更多
              </div>
            </div>
          </div>
          <div
            v-show="type!=='category'"
            class="card-widget card-categories"
          >
            <div class="headline"> <i class="iconfont viewlist" />分类</div>
            <div class="categories-list">
              <div
                v-for="(item,index) in categoryList.slice(0,10)"
                :key="index"
                :class="'categories-item '+className(item,'category')"
                @click="skipToCategory(item)"
              >
                <span class="item-left">{{ item.name }}</span><span>（{{ item.articleCount }}）</span>
              </div>
              <div
                v-show="categoryList.length>10"
                class="categories-item"
                @click="skipToCategories()"
              >
                查看更多
              </div>
            </div>
          </div>

          <div
            v-show="type!=='tag'"
            class="card-widget card-tag"
          >
            <div class="headline"> <i class="iconfont discount" />标签</div>
            <div class="tag-list">
              <span
                v-for="(item,index) in tagList"
                :key="index"
                :class="'tag-item '+tagClassName(item)"
                :style="setStyle(item)"
                @click="skipToTag(item)"
              >
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Container',
  components: {},
  props: {
    type: {
      type: String,
      // 对象或数组默认值必须从一个工厂函数获取
      default: ''
    },
    article: {
      type: Object,
      default: () => {
        return {
          category: {
            name: ''
          },
          tags: [],
          series: {
            name: '',
            articles: []
          }
        }
      }
    }
  },
  data() {
    return {
      isFixed: false
    }
  },
  computed: {
    ...Vuex.mapState([
      // 映射 this.count 为 store.state.count
      'articleList',
      'categoryList',
      'tagList',
      'seriesList',
      'articleTotal'
    ]),
    className() {
      return (item, type) => {
        if (this.type === 'article') {
          if (this.article[type].id === item.id) {
            return 'item-active'
          }
          return ''
        }
        return ''
      }
    },
    tagClassName() {
      return (item) => {
        let res = false
        this.article.tags.forEach(e => {
          if (!res && e.id === item.id) {
            res = true
          }
        })
        if (res) {
          return 'item-active2'
        }
        return ''
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
    // var scrollFunc = (e) => {
    //   e = e || window.event
    //   console.log('window.clientTop()', window.pageYOffset)
    //   if (e.scrollTop() > 800) {
    //     this.isFixed = true
    //   } else {
    //     this.isFixed = false
    //   }
    // }
    // document.addEventListener('DOMMouseScroll', scrollFunc, false)
    // window.onmousewheel = document.onmousewheel = scrollFunc
  },
  methods: {
    skipToGithub() {
      window.open('https://github.com/lailailee')
    },
    skipTo(type) {
      this.$router.push({ name: type })
    },
    skipToCategories() {
      this.$router.push({ name: 'categories' })
    },
    skipToSeries(item) {
      const { id, name } = item
      this.$router.push({ name: 'seriesList', params: { id, name }})
    },
    skipToCategory(item) {
      const { id, name } = item
      this.$router.push({ name: 'categoriesList', params: { id, name }})
    },
    skipToTag(item) {
      const { id, name } = item
      this.$router.push({ name: 'tagList', params: { id, name }})
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  // height: 100%;
  margin: 0 auto;
  display: flex;
  overflow: visible;
  position: relative !important;

  .main {
    // width: 73%;
    width: 856px;
    height: 100%;
    margin-top: 20px;
  }

  .siderbar {
    width: 324px;
    // width: 25%;
    padding-left: 2%;
    .card-widget {
      // width: 100%;
      position: relative;
      overflow: hidden;
      margin-top: 20px;
      padding: 20px 24px;
      border-radius: 8px;
      background: #ffffff;
      -webkit-box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
      box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
      -webkit-transition: box-shadow 0.3s;
      -moz-transition: box-shadow 0.3s;
      -o-transition: box-shadow 0.3s;
      -ms-transition: box-shadow 0.3s;
      transition: box-shadow 0.3s;

      .is-center {
        text-align: center;
      }
      .avatar-img {
        width: 110px;
        height: 110px;
        border-radius: 70px;
        transition: all 0.5s;
        max-width: 100%;
        border-style: none;
        cursor: pointer;
        &:hover {
          transform: rotate(360deg);
        }
      }
      .author-info__name {
        font-weight: 500;
        font-size: 22px;
        line-height: 42px;
        // align-items: center;
        height: 42px;
        // margin-top: 15px;
      }
      .author-info__description {
        // margin-top: 10px;
      }
      .card-info-data {
        display: flex;
        margin-top: 20px;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .card-info-data-item {
          cursor: pointer;
          width: 33%;
          .headline {
            // margin-bottom: 8px;
            font-size: 14px;
            line-height: 28px;
            height: 28px;
          }
          .length-num {
            font-size: 20px;
            line-height: 40px;
            height: 40px;
          }
        }
      }
      .card-info-btn {
        display: block;
        margin-top: 10px;
        background-color: #49b1f5;
        color: #ffffff;
        text-align: center;
        line-height: 2.4;
        cursor: pointer;
        &:hover {
          // color: #49b1f5;
        }
      }
      .button--animated {
        position: relative;
        z-index: 1;
        transition: color 1s;
        font-size: 14px;
        &:hover:before {
          transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
          transform: scaleX(1);
        }
        span {
          margin-left: 10px;
        }
        &:before {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          background: #ff7242;
          content: '';
          transition: transform 0.5s ease-out;
          transform: scaleX(0);
          -ms-transform-origin: 0 50%;
          transform-origin: 0 50%;
        }
      }
    }
    .card-tag {
      .tag-item {
        transition: all 0.3s;

        color: #999;
        margin-right: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #49b1f5 !important;
        }
      }
    }
    .card-categories,
    .card-tag {
      .headline {
        font-size: 17px;
        line-height: 40px;
        padding: 0 0 0 6px;
        .iconfont {
          font-size: 20px;
          margin-right: 10px;
        }
      }
      .categories-list {
        width: 100%;

        font-size: 13px;
        color: #616365;
        font-weight: 430;
        padding-left: 10px;
        cursor: pointer;
        .categories-item {
          padding: 5px 0 5px 0px;
          transition: all 0.3s;
          .item-left {
            transition: all 0.3s;
          }
          &.active {
            color: #8dcbf5 !important;
          }
          &:hover {
            .item-left {
              color: #49b1f5 !important;
            }
          }
        }
        // padding: 3px 10px;
        .categories-item {
          // display: flex;
          // justify-content: space-between;
          // align-items: center;
          // // padding: 3px 10px;
          // width: calc(100% - 30px);
          // cursor: pointer;
          // font-size: 14px;
          // padding: 5px 10px;
          // // padding: 5px 10px;
          // // display: inline-block;
          // line-height: 28px;
          .item-wrapper {
            // width: 100%;
            // .item-left {
            //   width: 80%;
            //   line-height: 28px;
            // }
            // .item-right {
            //   width: 20%;
            //   line-height: 28px;
            //   text-align: end;
            // }
          }
          // transition: all 0.2s ease-in-out;
          &:hover {
            // padding: 5px 20px;
            // background-color: #49b1f5;
            // color: #ffffff;
          }
          // transition: all 0.4s;
          span {
          }
        }
      }
    }
  }
  .sticky-wrapper {
    position: sticky !important;
    top: 20px;
    height: auto !important;
  }

  .catelog-wrapper {
    .consolelog {
      font-size: 13px;
      color: #616365;
      font-weight: 430;
      padding-left: 10px;
      cursor: pointer;
      .consolelog-item {
        transition: all 0.3s;

        &:hover {
          color: #49b1f5 !important;
        }
      }
    }
    .series {
      font-size: 13px;
      color: #616365;
      font-weight: 430;
      padding-left: 10px;
      cursor: pointer;
      .series-item {
        padding: 5px 0 5px 0px;
        transition: all 0.3s;
        .item-left {
          transition: all 0.3s;
        }
        &.active {
          color: #8dcbf5 !important;
        }
        &:hover {
          color: #49b1f5 !important;
        }
      }
    }
  }
  .item-active {
    .item-left {
      // color: #49b1f5 !important;
      color: #8dcbf5 !important;
    }
  }
  .item-active2 {
    color: #8dcbf5 !important;
  }
}
</style>
