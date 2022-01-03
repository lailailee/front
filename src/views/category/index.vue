<template>
  <div class="home">
    <banner
      name="分类"
      image="banner1.png"
    />
    <div class="bottom">
      <container>
        <div class="subject">
          <div class="subject-head">分类 - {{ categoryList.length }}</div>
          <div class="category-list">
            <div
              v-for="(item,index) in categoryList"
              :key="index"
              class="category-list-item"
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
  name: 'Category',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...Vuex.mapState([
      'categoryList'
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
  },
  methods: {
    skipToList(item) {
      const { id, name } = item
      this.$router.push({ name: 'categoriesList', params: { id, name }})
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
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
      .category-list {
        min-height: 300px;
        .category-list-item {
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
