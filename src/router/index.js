import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import home from '@/components/home'
import zhengce from '@/components/zhengce'
import news from '@/components/news'
import chanyelian from '@/components/chanyelian'
import zhiping from '@/components/zhiping'
import zhuangbei from '@/components/zhuangbei' 
import rencai from '@/components/rencai'
import jidi from '@/components/jidi'
import jishufuw from '@/components/jishufuw' 

import buy from '@/erji/buy'
import erweima from '@/erji/erweima' 
import jiben from '@/erji/jiben' 
import renzheng from '@/erji/renzheng'
// 政策解读
import yiqing from '@/erji/yiqing'
import huodong from '@/erji/huodong'
import zcgg from '@/erji/zcgg'
import xmzj from '@/erji/xmzj'
// 新闻详情
import xwdxq from '@/erji/xwdxq'

import xinxi from '@/components/xinxi' 

import dashuju from '@/components/dashuju'
import denglu from '@/components/denglu'
import zhuce from '@/components/zhuce'
import video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        { path: 'home',component: home,name: 'home'},    
        { path: 'news',component: news,name: 'news'},
        { path: 'chanyelian',component: chanyelian,name: 'chanyelian'},   
        { path: 'zhengce',component: zhengce,name: 'zhengce',children: [
          { path: 'yiqing',component: yiqing,name: 'yiqing'},   
          { path: 'huodong',component: huodong,name: 'huodong'},
          { path: 'zcgg',component: zcgg,name: 'zcgg'},
          { path: 'xmzj',component: xmzj,name: 'xmzj'},   
        ],
        redirect:'/HelloWorld/zhengce/yiqing'},  
        // 新闻的详情
        { path: 'xwdxq',component: xwdxq,name: 'xwdxq'},
        
        { path: 'zhiping',component: zhiping,name: 'zhiping'},
        { path: 'zhuangbei',component: zhuangbei,name: 'zhuangbei'},  
        { path: 'rencai',component: rencai,name: 'rencai'},  
        { path: 'jidi',component: jidi,name: 'jidi'}, 
        { path: 'jishufuw',component: jishufuw,name: 'jishufuw'},
        { path: 'xinxi',component: xinxi,name: 'xinxi',children: [
          { path: 'jiben',component: jiben,name: 'jiben'},    
          { path: 'renzheng',component: renzheng,name: 'renzheng'},  
        ],
        redirect:'/HelloWorld/xinxi/renzheng'},        
        // 二级页面
        { path: 'buy',component: buy,name: 'buy'},
        { path: 'erweima',component: erweima,name: 'erweima'},       
      ],
      // 默认投资信息外面
      redirect:'/HelloWorld/home'
    },
    {
      path: '/dashuju',
      name: 'dashuju',
      component: dashuju,
    },
    {
      path: '/video',
      name: 'video',
      component:video
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu,
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce,

    },

  ]
})
