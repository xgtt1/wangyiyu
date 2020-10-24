import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 一级路由
import base from "@/components/base"


// 二级路由
import index from '@/components/index'
import hotsong from '@/components/hotsong'
import search from '@/components/search'

import a from '@/components/aboutTuijian'
import b from '@/components/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: base
    },
    // 嵌套路由
    {
      path:'/base',
      component:base,
      children:[
        {
          path:'/index',
          component:index
        },{
          path:"/hotsong",
          component:hotsong
        },{
          path:"/search",
          component:search
        }
      ]
    },
    {
      path:'/abouttuijian',
      component:a
    },
     {
      path:'/play',
      component:b
    },
    {
      path:"*",
      component:base
    }

  ]
})
