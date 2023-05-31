//用户名匹配
export function nameRule(rule,value,callback){
    let reg =  /^[a-zA-Z0-9]{4,10}$/
    if(value === ''){
        callback(new Error('请输入用户名'))
    }else if(!reg.test(value)){
        callback(new Error('用户名必须是4-10位的数字或字母'))   

}else{
    callback()
};
}
export function passRule(rule,value,callback){
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,24}$/
    if(value === ''){
        callback(new Error('请输入密码'))
    }else if(!reg.test(value)){
        callback(new Error('密码必须是6-12位的数字或字母'))
    }else{
        callback()
    }
}