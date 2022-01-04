<template>
  <div class="artcicle">
    <div class="top">
      <div class="info">
        <div
          class="mask"
          :style="{
            '--content': `'${seriesName}'`
          }"
        >
          <div class="title ">{{ articleDetail.title }}
            <span
              class="title-after"
              @click="skipToSeries(articleDetail.series)"
            />
          </div>
          <!-- <div class="title-after" /> -->
          <div class="detail">
            <div>
              <span class="date item"><i class="iconfont calculator" /> 发表于 {{ articleDetail.createdAt }} </span>
              <span> ｜ </span>
              <span class="item tag">
                <i class="iconfont viewlist" />
                <span
                  class="tag-item"
                  @click="skipToCategory( articleDetail.category)"
                > {{ articleDetail.category.name }}</span>
              </span>
              <!-- <span> ｜ </span> -->
              <span v-if="articleDetail.tags.length > 0"> ｜ </span>
              <span
                v-if="articleDetail.tags.length > 0"
                class="item tag"
              >
                <i class="iconfont discount" />
                <span
                  v-for="(it, ind) in articleDetail.tags"
                  :key="ind"
                >
                  <span
                    class="tag-item"
                    @click="skipToTag(it)"
                  >{{ it.name }}</span>
                  <span v-show="ind<articleDetail.tags.length-1">•</span>
                </span>
              </span>
            </div>
            <div>
              <span class="item"><i class="iconfont component" />字数统计: {{ (articleDetail.content.length/1000).toFixed(1) }}k </span>
              <span> ｜ </span>
              <span class="item">
                <i class="iconfont shijian" />
                <span> 阅读时长: {{ Math.ceil(articleDetail.content.length/400) }}分钟</span>
              </span>
              <span> ｜ </span>
              <span class="item">
                <i class="iconfont smile" />
                <span> 阅读量: {{ articleDetail.viewCount }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="picture">
        <img
          class="image"
          src="http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/banner2.png"
          alt=""
        >
      </div>
    </div>
    <div class="artcicle-wrapper">
      <container
        type="article"
        :article="articleDetail"
      >
        <div class="editor-wrapper">
          <v-md-preview
            ref="preview"
            :text="articleDetail.content"
            style="box-shadow:none;border:1px solid #DCDFE6;"
            height="640px"
          />
        </div>

        <template v-slot:catelog>
          <div
            v-if="titles.length>0"
            class="card-widget card-tag"
          >
            <div
              class="headline"
              @click="consolelog"
            > <i class="iconfont category" />目录</div>
            <div class="consolelog">
              <div
                v-for="(anchor,index) in titles"
                :key="index"
                class="consolelog-item"
                :style="{ padding: `5px 0 5px ${anchor.indent * 10}px` }"
                @click="handleAnchorClick(anchor)"
              >
                <a style="cursor: pointer">{{ anchor.title }}</a>
              </div>
            </div>
          </div>
          <div
            v-if="articleDetail.series.articles!==null"
            class="card-widget card-tag"
          >
            <div class="headline"><i class="iconfont zhongjianpinxilie" />{{ articleDetail.series.name }}</div>
            <div class="series">
              <div
                v-for="(article,index) in articleDetail.series.articles"
                :key="index"
                :class="articleDetail.id===article.id?'series-item active':'series-item'"
                @click="skipToArticle(article)"
              >
                <span>{{ index+1 }}.</span> <a style="cursor: pointer">{{ article.title }}</a>
              </div>
            </div>
          </div>
        </template>
      </container>
    </div>
  </div>
</template>

<script>
// /* eslint-disable no-undef */
import test from './test.md'
import Api from '@/api/index'
// import Vuex from 'vuex'
export default {
  name: 'Artcicle',
  components: {},
  props: {},
  data() {
    return {
      code: test,
      articleDetail: {
        category: {
          name: ''
        },
        tags: [],
        series: {
          name: '',
          articles: []
        },
        seriesId: 0
      },
      // styleVar: {
      //   '--content': `'${this.seriesName}'`
      // },
      titles: []
    }
  },
  computed: {
    seriesName() {
      if (this.articleDetail.seriesId === 0) {
        return ''
      } else {
        return `[ 系列：${this.articleDetail.series.name} ]`
      }
    }
  },
  watch: {},
  created() {
    this.getArticleDetail()
  },
  mounted() {

  },

  methods: {
    getTittle() {
      try {
        console.log(this.$refs.preview)
        const anchors = this.$refs.preview?.$el.querySelectorAll('h1,h2,h3')
        // ,h4,h5,h6
        console.log(anchors)
        const titles = Array.from(anchors).filter((title) => !!title.innerText.trim())

        if (!titles.length) {
          this.titles = []
          return
        }
        const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort()

        this.titles = titles.map((el) => ({
          title: el.innerText,
          lineIndex: el.getAttribute('data-v-md-line'),
          indent: hTags.indexOf(el.tagName)
        }))
      } catch (error) {
        console.error(error)
      }
    },
    consolelog() {
      console.log(this.$refs.preview)
    },
    // getArticleDetail
    async getArticleDetail() {
      try {
        const id = this.$route.params.aid
        const res = await Api.getArticleDetail(id)
        if (res.code === 0) {
          this.articleDetail = res.data
          setTimeout(() => {
            this.getTittle()
          }, 500)
        } else {
          console.error(res.message)
        }
      } catch (error) {
        console.error(error)
      }
    },
    skipToArticle(article) {
      if (this.articleDetail.id === article.id) return
      this.$router.push({ name: 'article', params: { aid: article.id }})
    },
    skipToCategory(item) {
      const { id, name } = item
      this.$router.push({ name: 'categoriesList', params: { id, name }})
    },
    skipToSeries(item) {
      const { id, name } = item
      this.$router.push({ name: 'seriesList', params: { id, name }})
    },
    skipToTag(item) {
      const { id, name } = item
      this.$router.push({ name: 'tagList', params: { id, name }})
    },
    handleAnchorClick(anchor) {
      const { preview } = this.$refs
      const { lineIndex } = anchor
      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)
      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.artcicle {
  .top {
    user-select: none;
    cursor: pointer;
    height: 400px;
    width: 100%;
    overflow: hidden;

    .picture {
      top: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: fixed;
      z-index: -1;

      .image {
        width: 100%;
      }
    }
    .info {
      color: #ffffff;
      .mask {
        width: 100%;
        height: 550px;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
        // font-family: STSong, 'Times New Roman', Times, serif;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        // align-items: center;
        // flex-wrap: wrap;
        position: relative;

        .title {
          margin-top: 200px;
          text-align: center;
          font-size: 40px;
          height: 70px;
          line-height: 70px;
          position: relative;
          .title-after {
            transition: all 0.3s;
            margin-left: 8px;
            &::after {
              content: var(--content);
              position: absolute;
              font-size: 15px;
              height: 70px;
              line-height: 90px;
            }
            &:hover {
              color: #49b1f5 !important;
            }
          }
          // &.title-after {
          //   &::after {
          //     content: var(--content);
          //     position: absolute;
          //     font-size: 20px;
          //     height: 70px;
          //     line-height: 90px;
          //   }
          //   &::after:hover {
          //     color: #49b1f5 !important;
          //   }
          // }
          .series-name-wrapper {
            font-weight: 400;
            font-size: 20px;
            .series-name {
              transition: all 0.3s;
              cursor: pointer;
              &:hover {
                color: #49b1f5 !important;
              }
            }
          }
        }
        .detail {
          width: 100%;
          cursor: pointer;
          font-size: 13px;
          color: #ffffff;
          > div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .item {
            display: flex;
            justify-content: center;
            line-height: 24px;
            height: 24px;
            align-items: center;
            .iconfont {
              // font-size: 17px;
              margin-right: 2px;
            }
            // .shijian {
            //   font-size: 17px;
            // }
            // .yanjing {
            //   font-size: 17px;
            // }
            // .code {
            //   font-size: 17px;
            // }
            // .guidang {
            //   font-size: 17px;
            // }
          }

          .date {
          }
          .category {
            .category-item {
              transition: all 0.3s;
            }

            .category-item:hover {
              color: #49b1f5 !important;
            }
          }
          .tag {
            transition: all 0.2s ease-in-out;
            .tag-item {
              transition: all 0.3s;
            }
            .tag-item:hover {
              color: #49b1f5 !important;
            }
          }
        }
      }
    }
  }
  .artcicle-wrapper {
    min-height: calc(100vh - 350px);
    background: linear-gradient(to bottom right, #fff0f5, #bfefff);
    z-index: 1;
    padding-bottom: 100px;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}
</style>
