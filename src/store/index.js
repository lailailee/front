import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/index'

Vue.use(Vuex)

const state = {
  articleList: [],
  categoryList: [],
  tagList: [],
  seriesList: [],
  search: '',
  page: 1,
  limit: 8,
  articleTotal: 0,
  orderBy: 'createdAt'
}

const mutations = {
  UPDATE_STATE: (state, newState) => {
    state = Object.assign(state, { ...newState })
  }
}

const actions = {
  async getArticleList({ commit }) {
    try {
      const {
        search,
        limit,
        page,
        orderBy
      } = state
      const params = {
        search,
        limit,
        page,
        orderBy
      }
      const res = await Api.getArticleList(params)
      if (res.code === 0) {
        const { list, count } = res.data
        let page = state.page
        // this.articleList.push(...list)
        if (list.length > 0) {
          page++
        }
        // this.articleTotal = count

        const articleList = state.articleList
        articleList.push(...list)
        const articleTotal = count
        commit('UPDATE_STATE', {
          articleTotal,
          articleList,
          page
        })
      } else {
        console.error(res.message)
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getCategoryList({ commit }) {
    try {
      const params = {
        limit: 1000
      }
      const res = await Api.getCategoryList(params)
      if (res.code === 0) {
        const { list } = res.data
        const categoryList0 = list.sort((a, b) => b.articleCount - a.articleCount)
        const categoryList = []
        categoryList0.forEach(e => {
          if (e.articleCount > 0) {
            categoryList.push(e)
          }
        })
        commit('UPDATE_STATE', {
          categoryList
        })
      } else {
        console.error(res.message)
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getTagList({ commit }) {
    try {
      const params = {
        limit: 1000
      }
      const res = await Api.getTagList(params)
      if (res.code === 0) {
        const { list } = res.data
        const tagList = []
        list.forEach(e => {
          if (e.articleCount > 0) {
            tagList.push(e)
          }
        })
        commit('UPDATE_STATE', {
          tagList
        })
      } else {
        console.error(res.message)
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getSeriesList({ commit }) {
    try {
      const params = {
        limit: 1000
      }
      const res = await Api.getSeriesList(params)
      if (res.code === 0) {
        const { list } = res.data
        const seriesList = []
        list.forEach(e => {
          if (e.articleCount > 0) {
            seriesList.push(e)
          }
        })
        commit('UPDATE_STATE', {
          seriesList
        })
      } else {
        console.error(res.message)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
