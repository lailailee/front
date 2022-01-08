<template>
  <div class="artcicle">
    <div class="top">
      <div class="info">
        <div class="mask">
          <div class="title">性能优化 MyBatis-Plu</div>
          <div class="detail">
            <span class="date item"><i class="iconfont riqi" />2020-11-03</span>
            ｜
            <span class="category item"><i class="iconfont leimupinleiguidangleibie2" />项目分类</span>
            ｜
            <span class="tag item"><i class="iconfont discount" />项目标签</span>
            |
            <span class="tag item"><i class="iconfont yanjing" />1111</span>
          </div>
        </div>
      </div>
      <div class="picture">
        <!-- <img
          class="image"
          src="@/assets/image/blog.jpg"
          alt=""
        > -->
      </div>
    </div>
    <div class="artcicle-wrapper">
      <div class="md-wrapper">
        <mavon-editor
          v-model="code"
          class="mavon-editor"
          :ishljs="true"
          :subfield="false"
          :box-shadow="false"
          default-open="preview"
          :toolbars-flag="false"
          code-style="atom-one-dark"
          preview-background="#fff"
          :external-link="externalLink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import test from './test.md'
import marked from 'marked'
// import 'github-markdown-css/github-markdown.css'
// import '@/assets/styles/theme-1.less'
// import 'highlight.js/styles/monokai-sublime.css'
// import '@/assets/markdown/highlightjs/styles/ocean.min.css'

export default {
  name: 'Artcicle',
  components: {},
  props: {},
  data() {
    return {
      code_style: 'monokai',
      code: test,
      externalLink: {
        markdown_css: false, // false后 highlight 才生效，在head中引用 markdown_css
        hljs_js: function() {
          return 'https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js'
        },
        hljs_lang: function(lang) {
          return (
            'https://cdn.bootcss.com/highlight.js/9.12.0/languages/' +
            lang +
            '.min.js'
          )
        },
        hljs_css: function(css) {
          return (
            'https://cdn.bootcss.com/highlight.js/9.12.0/styles/' +
            css +
            '.min.css'
          )
        },
        katex_js: function() {
          return 'https://cdn.bootcss.com/KaTeX/0.8.3/katex.min.js'
        },
        katex_css: function() {
          return 'https://cdn.bootcss.com/KaTeX/0.8.3/katex.min.css'
        }
      }
      // externalLink: {
      //   markdown_css: function() {
      //     // 这是你的markdown css文件路径
      //     return '@/assets/markdown/markdown/github-markdown.min.css'
      //   },
      //   hljs_js: function() {
      //     // 这是你的hljs文件路径
      //     return '@/assets/markdown/highlightjs/highlight.min.js'
      //   },
      //   hljs_css: function(css) {
      //     // 这是你的代码高亮配色文件路径
      //     return '@/assets/markdown/highlightjs/styles/' + css + '.min.css'
      //   },
      //   hljs_lang: function(lang) {
      //     // 这是你的代码高亮语言解析路径
      //     return '@/assets/markdown/highlightjs/languages/' + lang + '.min.js'
      //   },
      //   katex_css: function() {
      //     // 这是你的katex配色方案路径路径
      //     return '@/assets/markdown/katex/katex.min.css'
      //   },
      //   katex_js: function() {
      //     // 这是你的katex.js路径
      //     return '@/assets/markdown/katex/katex.min.js'
      //   }
      // }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    marked.setOptions({
      gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
      tables: true, // 默认为true。 允许支持表格语法。该选项要求 gfm 为true。
      breaks: false, // 默认为false。 允许回车换行。该选项要求 gfm 为true。
      pedantic: false, // 默认为false。 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
      sanitize: false, // 对输出进行过滤（清理）
      smartLists: true,
      smartypants: false // 使用更为时髦的标点，比如在引用语法中加入破折号。
    })
    // this.code = marked(this.code)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.artcicle {
  .top {
    user-select: none;
    cursor: pointer;
    height: 450px;
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
        font-family: STSong, 'Times New Roman', Times, serif;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        // align-items: center;
        // flex-wrap: wrap;
        position: relative;
        .title {
          margin-top: 250px;
          text-align: center;
          // width: 100%;
          font-size: 40px;
          font-weight: bold;
          height: 70px;
        }
        .detail {
          // margin-top: 30px;
          // position: absolute;
          width: 100%;
          display: flex;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          font-size: 15px;
          .item {
            margin: 0 10px;
          }
          .iconfont {
            margin-right: 8px;
          }
          .date {
          }
          .category {
          }
          .tag {
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
    .md-wrapper {
      height: 100%;
      width: 1000px;
      background: #fbfbfb;
      margin-top: -70px;
      border-radius: 3px;
      .markdown-body {
        // 编写容器的一些css，根据需要进行调整，这里是我博客的，在github提供的.markdown-body基础上修改的box-sizing: border-box;
        /* max-width: 980px; */
        /* padding: 45px; */
      }

      .mavon-editor {
        // width: 100%;
        padding: 50px 90px 100px;
        // box-sizing: content-box;
        background: #fbfbfb;
      }
    }
  }
}
</style>
