import axios from '@/utils/request'
let base = ``
if (process.env.NODE_ENV === 'production') {
  base = ''
}
export default {
  // 获取文章list
  getArticleList: (params) => {
    return axios.get(`${base}/v1/article`, { params })
  },
  // 获取文章详情
  getArticleDetail: (id) => {
    return axios.get(`${base}/v1/article/${id}`)
  },
  getCategoryList: (params) => {
    return axios.get(`${base}/v1/category`, { params })
  },
  getTagList: (params) => {
    return axios.get(`${base}/v1/tag`, { params })
  },
  getSeriesList: (params) => {
    return axios.get(`${base}/v1/series`, { params })
  }
}
