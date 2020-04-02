import request from '@/utils/request'
export function getdata(data) {
  return request({
    url: 'http://127.0.0.1:8080/get_chart_data',
    method: 'post',
    data
  })
}
// 读取后台数据
export function acquire(url, params) {
  return request({
    url,
    method: 'get',
    params
  })
}
