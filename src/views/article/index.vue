<template>
  <div class="artcicle">
    <div class="top">
      <div class="info">
        <div class="mask">
          <div class="title">性能优化 MyBatis-Plu</div>
          <div class="detail">
            <span class="date item"><i class="iconfont riqi" />2020-11-03</span>
            ｜
            <span class="category item"><i class="iconfont leimupinleifenleileibie2" />项目分类</span>
            ｜
            <span class="tag item"><i class="iconfont biaoqian" />项目标签</span>
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
      <div
        id="md-wrapper"
        v-highlight
        class="md-wrapper"
        v-html="code"
      />
    </div>
    <link
      rel="stylesheet"
      href="/static/editor.md/css/editormd.min.css"
    >
    <!-- <script src="/static/editor.md/editormd.min.js"></script> -->
  </div>
</template>

<script>
// /* eslint-disable no-undef */
import scriptjs from 'scriptjs'
import test from './test.md'
// import editormd from 'editor.md'
// import '@/assets/styles/theme-1.less'
// import '/static/editor.md/css/editormd.preview.css'
// import editormd from '/static/editor.md/editormd.min'

export default {
  name: 'Artcicle',
  components: {},
  props: {},
  data() {
    return {
      code: test
    }
  },
  computed: {},
  watch: {},
  created() {},
  async mounted() {
    console.error('editormd')

    debugger
    const editormd = await this.fetchScript('/static/editor.md/editormd.min.js')
    console.error(editormd)
    debugger
    editormd.markdownToHTML('md-wrapper', {
      markdown: test, // + "\r\n" + $("#append-test").text(),
      // htmlDecode      : true,       // 开启 HTML 标签解析，为了安全性，默认不开启
      htmlDecode: 'style,script,iframe', // you can filter tags decode
      // toc             : false,
      tocm: true, // Using [TOCM]
      // tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
      // gfm             : false,
      // tocDropdown     : true,
      // markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
      emoji: true,
      taskList: true,
      tex: true, // 默认不解析
      flowChart: true, // 默认不解析
      sequenceDiagram: true // 默认不解析
    })

    // marked.setOptions({
    //   gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
    //   tables: true, // 默认为true。 允许支持表格语法。该选项要求 gfm 为true。
    //   breaks: true, // 默认为false。 允许回车换行。该选项要求 gfm 为true。
    //   pedantic: true, // 默认为false。 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
    //   sanitize: false, // 对输出进行过滤（清理）
    //   smartLists: true,
    //   smartypants: true // 使用更为时髦的标点，比如在引用语法中加入破折号。
    // })
    // this.code = marked(this.code)
    // console.log(this.test)
  },
  methods: {
    fetchScript: function(url) {
      return new Promise(resolve => {
        scriptjs(url, () => {
          resolve()
        })
      })
    }
  }
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
      padding: 50px 90px 100px;
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
