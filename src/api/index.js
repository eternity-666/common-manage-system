import service from '@/utils/interceptor.js'


export function login(data) {
    return service({
        url: '/login',
        method: 'post',
        data
    })
}

export function students(params) {
    return service({
        url: '/students',
        method: 'get',
        params
    })
}

export function studentsDel(id){
    return service({
        url:`/students/${id}`,
        method:'delete'
    })
}

export function info(params){
    return service({
        url:"/info",
        method:'get',
        params
    })
}