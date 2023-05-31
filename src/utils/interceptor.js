import axios from 'axios'


import { Message } from 'element-ui'

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

//添加请求拦截器

service.interceptors.request.use(
    config => { 
        //在请求之前做些什么(获取token)
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiLmtYvor5UiLCJ1c2VyTmFtZSI6IndhbmdibyIsImV4cCI6MTU1NjE3NjYwNiwidXNlcklkIjoiMTIzNDUiLCJpYXQiOjE1NTYxNzY2MDF9.FNVh-NbFHgScsbbuwLvQL-sOqLuaAoI8jxMvudq81J8"
        return config

    }
, error => {
    //对请求错误做些什么
    return Promise.reject(error)
})


service.interceptors.response.use((response) => {
    //对响应数据做些什么
    
    let status = response.status
    let message = response.data.message

   if(status !==201){
        Message({message:message || 'error' ,type:'error'})
        
   }
    return response
},(error) => {
    //对响应错误做些什么
    return Promise.reject(error)
})

export default service



//添加响应拦截器