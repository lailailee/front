<template>
  <div class="archives">
    <banner
      :name="name"
      image="banner1.png"
    />
    <div class="bottom">
      <container>
        <subject
          :title="`标签 : ${name} - ${list.length}`"
          :list="list"
        />
      </container>
    </div>
  </div>
</template>

<script>
import Api from '@/api/index'

export default {
  name: 'TagList',
  components: {},
  data() {
    return {
      list: [],
      name: this.$route.params.name
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      try {
        const limit = 1000
        const search = ''
        const page = 1
        const tagId = this.$route.params.id
        const params = {
          search,
          limit,
          page,
          tagId
        }
        const res = await Api.getArticleList(params)
        if (res.code === 0) {
          const { list } = res.data
          this.list.push(...list)
        } else {
          console.error(res.message)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.archives {
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
        font-size: 24px;
        // text-align: center;
        height: 60px;
        line-height: 60px;
        margin: 0 0 0 10px;
        padding: 0 0 20px 20px;
        position: relative;
        &::before {
          position: absolute;
          top: calc(((100% - 40px) / 2));
          left: -9px;
          z-index: 1;
          width: 10px;
          height: 10px;
          border: 5px solid #49b1f5;
          border-radius: 10px;
          background: #ffffff;
          content: '';
          // line-height: 0.5rem;
          transition: all 0.2s ease-in-out;
        }
        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 0;
          width: 2px;
          height: 45px;
          background: #aadafa;
          content: '';
        }
      }
      .archives-list {
        // min-height: 300px;
        margin-left: 10px;
        padding-left: 20px;
        // margin-top: 20px;
        border-left: 2px solid #aadafa;
        .archives-list-item {
          display: flex;
          margin: 0 0 10px 0;
          position: relative;
          // justify-content: space-between;
          // // margin: 5px 5px;
          // padding: 8px 8px;
          // align-items: center;
          // padding: 0.12 em 0.4 em 0.12 em 20px;
          margin-bottom: 20px;
          .date {
            font-size: 13px;
            color: #858585;
            line-height: 20px;
            margin-left: 20px;
            .iconfont {
              font-size: 12px;
              margin-right: 2px;
            }
          }
          .title {
            // text-align: center;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s;
            // // line-height: 100%;
            color: #4c4948;
            &:hover {
              color: #49b1f5 !important;
              transform: scale(1.1);
            }
          }
          &::before {
            position: absolute;
            top: calc(((100% - 10px) / 2));
            left: -27px;
            z-index: 1;
            width: 5px;
            height: 5px;
            border: 2.5px solid #49b1f5;
            border-radius: 5px;
            background: #ffffff;
            content: '';
            // line-height: 0.5rem;
            transition: all 0.2s ease-in-out;
          }
          // &::after {
          //   position: absolute;
          //   bottom: 0;
          //   left: 0;
          //   z-index: 0;
          //   width: 2px;
          //   height: 45px;
          //   background: #aadafa;
          //   content: '';
          // }
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
