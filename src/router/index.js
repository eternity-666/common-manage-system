
import VueRouter from "vue-router";

import Vue from "vue";
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login",
        hidden: true,
        component: ()=> import("@/components/Login.vue")
    },
    {
        path:"/login",
        name:"Login",
        hidden: true,
        component: ()=> import("@/components/Login.vue")
    },
    {
        path:'*',
        name:'404',
        hidden: true,
        component:()=>import('@/components/NotFound.vue')
    },
    {
        path:'/home',
        name:'学生管理',
        redirect:'/home/student',
        iconClass:'fa fa-users',
        component:()=>import('@/components/Home.vue'),

        children:[
            {
                path:'/home/student',
                name:'学生列表',
                iconClass:'fa fa-list',
                component:()=>import('@/components/students/StudentsList.vue')
            },
            {
                path:'/home/info',
                name:'信息列表',
                iconClass:'fa fa-list-alt',
                component:()=>import('@/components/students/InfoList')
            },
            {
                path:'/home/infos',
                name:'信息管理',
                iconClass:'fa fa-list-alt',
                component:()=>import('@/components/students/InfoLists.vue')
            },
            {
                path:'/home/work',
                name:'作业列表',
                iconClass:'fa fa-list-ul',
                component:()=>import('@/components/students/WorkList.vue')
            },
            {
                path:'/home/works',
                name:'作业管理',
                iconClass:'fa fa-th-list',
                component:()=>import('@/components/students/WorkMent.vue')
            },
        ]
    },
    {
        path:'/home',
        name:'数据分析',
        iconClass:'fa fa-bar-chart',
        component:()=>import('@/components/Home.vue'),
        children:[
            {
                path:'/home/data',
                name:'数据概览',
                iconClass:'fa fa-line-chart',
                component:()=>import('@/components/dataAnalysis/DataView.vue')
            },
            {
                path:'/home/map',
                name:'地图概览',
                iconClass:'fa fa-map',
                component:()=>import('@/components/dataAnalysis/MapView.vue')
            },
            {
                path:'/home/score',
                name:'分数概览',
                iconClass:'fa fa-line-chart',
                component:()=>import('@/components/dataAnalysis/ScoreMap.vue')
            },
            {
                path:'/home/travel',
                name:'旅游概览',
                iconClass:'fa fa-map',
                component:()=>import('@/components/dataAnalysis/TravelMap.vue')
            },
        ]
    },
    {
        path:'/user',
        name:'用户中心',
        iconClass:'fa fa-user',
        component:()=>import('@/components/Home.vue'),
        children:[
            {
                path:'/user/users',
                name:'权限管理',
                iconClass:'fa fa-user',
                component:()=>import('@/components/users/User.vue')
            }    
        ]
    }

]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router