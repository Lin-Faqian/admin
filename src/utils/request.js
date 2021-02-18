import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3004/api'
})
// 请求拦截器
// 响应拦截器
// 导出请求方法
export default request
