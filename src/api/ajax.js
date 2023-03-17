/* ajax请求函数
返回值:promise对象
*/
// 向外默认暴露一个请求函数
// 发请求的三个条件1.url 2.请求参数，传参数的时候我们是以对象形式传过来的，给个默认值空对象3.请求方式type 给个get请求方式
//我们利用axios触发请求，先下载axios
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
return new Promise(function (resolve, reject) {
let promise
if (type === 'GET') {
// 准备 url query 参数数据
let dataStr = '' // 数据拼接字符串
Object.keys(data).forEach(key => {
dataStr += key + '=' + data[key] + '&'
})
if (dataStr !== '') {
dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
url = url + '?' + dataStr
}
// 发送 get 请求
promise = axios.get(url)
} else {
// 发送 post 请求
promise = axios.post(url, data)
}
promise.then(response => {
resolve(response.data)
})
.catch(error => {
reject(error)
})
})
}