<template>
  <div class="categories">
    <banner
      :name="name"
      image="http://lailailee.oss-cn-chengdu.aliyuncs.com/%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99/web_resource/images/banner2.png"
    />
    <div class="bottom">
      <container type="category">
        <subject
          :title="`分类 : ${name} - ${list.length}`"
          :list="list"
        />
      </container>
    </div>
  </div>
</template>

<script>
// import Template from './components/Template'
import Vuex from 'vuex'
import Api from '@/api/index'

export default {
  name: 'CategoryList',
  components: {},
  data() {
    return {
      list: [],
      name: this.$route.params.name
    }
  },
  computed: {
    ...Vuex.mapState([
      // 映射 this.count 为 store.state.count
      // 'articleList',
      // 'articleTotal'
    ]),
    setStyle() {
      return (item) => {
        let size = 13
        size += 5 + Math.ceil(item.articleList / 2) * 4
        const color = this.$Tools.getRandomDeepColor()
        return `font-size:${size}px;color:${color}`
      }
    }
  },
  watch: {},
  created() {

  },
  mounted() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      // this.$route.params.id
      try {
        const limit = 1000
        const search = ''
        const page = 1
        const categoryId = this.$route.params.id
        const params = {
          search,
          limit,
          page,
          categoryId
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
.categories {
  min-height: calc(100vh - 350px);
  .bottom {
    background: linear-gradient(to bottom right, #fff0f5, #bfefff);
    z-index: 1;
    // height: 2000px;
    padding-top: 30px;
    padding-bottom: 100px;
  }
}
</style>
