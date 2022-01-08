// Encapsulate the axios request and return the repackaged data format
import axios from 'axios'
import errorHandle from './errorHandle'
// import baseConfig from '@/config'

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.pending = {}
  }

  // 获取axios配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  removePending(key, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }

  /**
   * @method interceptors
   * @param {*} instance
   * @description intercept request and response message , universalize to deal them
   */
  interceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use(
      config => {
        // config.headers.Company = baseConfig.company
        return config
      },
      err => {
        //
        errorHandle(err)
        // Do something with request error
        return Promise.reject(err)
      }
    )

    // 响应请求的拦截器
    instance.interceptors.response.use(
      response => {
        const res = response.data
        // // const logReg = new RegExp('log')
        // // if (response.config.url.match(logReg)) {
        // //   return {
        // //     code: 0,
        // //     data: res
        // //   }
        // // }
        // if (res.code !== 0) {
        //   if (res.code) {
        //     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //     if (res.code === 9) {
        //       // 过期
        //       localStorage.clear()
        //       router.push({ path: '/' })
        //       Message({
        //         message: 'token过期，请重新登录',
        //         type: 'error',
        //         duration: 5 * 1000
        //       })
        //     } else if (res.code === 8) {
        //       Message({
        //         message: 'token错误，请重新登录',
        //         type: 'error',
        //         duration: 5 * 1000
        //       })
        //       // 过期
        //       localStorage.clear()
        //       router.push({ path: '/' })
        //     }
        //   }
        return res
        // return Promise.reject(new Error(res.code || 'Error'))
        //   } else {
        //   // return res
        // }
      },
      err => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        errorHandle(err)
        return Promise.reject(err)
      }
    )
  }

  // 创建实例
  request(options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get(url, config) {
    const options = Object.assign(
      {
        method: 'get',
        url: url
      },
      config
    )
    return this.request(options)
  }

  post(url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
