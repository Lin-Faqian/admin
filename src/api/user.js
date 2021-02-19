/**
 * 封装登入页的请求接口
 */
import request from '@/utils/request.js'

// 登入请求接口
export const loginReq = data => {
  return request({
    method: 'post',
    url: '/login',
    data: data
  })
}
// 获取个人用户信息，token是唯一的标识，需要改
export const getUserInfo = (data) => {
  return request({
    method: 'get',
    url: '/login',
    data: data
  })
}
