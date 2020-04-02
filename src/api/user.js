import request from '@/utils/request'
//var baseurl='http://111.229.86.201/exam/'
//var baseurl='http://127.0.0.1:8080/exam/'
var baseurl='https://www.xjtuzhangcheng.top/exam/'
//var baseurl='http://49.232.160.48/exam/'
//var baseurl='http://localhost:8080/exam/'
//var baseurl='https://www.xjtuzhangcheng.top/'
//var comapurl='http://10.233.81.237:9080/'
export function getquestions(data) {
  return request({
    url: baseurl+'getquestions',
    method: 'post',
    data
  })
}
export function checkresult(data) {
  return request({
    url: baseurl+'checkresult',
    method: 'post',
    data
  })
}
export function ailogin(data) {
  return request({
    url: baseurl+'login',
    method: 'post',
    data
  })
}
export function login(data) {
  return request({
    url: comapurl+'login',
    method: 'post',
    data
  })
}
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function setPreference(data) {
  return request({
    url: '/preferences/setSettings',
    method: 'post',
    data
  })
}

export function getPreference() {
  return request({
    url: '/preferences/getSettings',
    method: 'get'
  })
}
