<template>
  <div id="app">
    <div class="waiii">
      <div class="baikuaiy">
        <div class="zhong">
          <router-link class="textew" to="/HelloWorld/zhengce/yiqing">疫情政策</router-link>
          <router-link class="textew" to="/HelloWorld/zhengce/huodong">活动通知</router-link>
          <router-link class="textew" to="/HelloWorld/zhengce/zcgg">政策公告</router-link>
          <router-link class="textew" to="/HelloWorld/zhengce/xmzj">项目征集</router-link>
        </div> 
        <router-view/>
      </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'buy',
  data() {
    return {
      
      
    }
  },
  methods :{
  },
   mounted() {
    window.scrollTo(0,0)
  },
  
}
</script>

<style>
 * {
   margin: 0;
 }
 .waiii {
   width: 100%;
   /* height:2000px; */
   padding-bottom: 500px;
   background-color: #f3f5f8;
   /* background-color: red; */
   padding-top: 20px;
 }
 .baikuaiy {
   width: 100%;
   /* height: 300px; */
   background-color: #ffffff;
   /* padding: 30px; */
   margin-bottom: 20px;
   padding-bottom: 50px;
   padding-top: 50px;
 }
 .zhong {
    width:1226px;
    margin:0 auto;
    overflow: hidden;
    /* background-color: pink; */
  }
  .zcbiaoti {
      width: 99%;
      height: 60px;
      /* border: 1px #cccccc solid; */
      background-color: #ffffff;
  }
 
.textew {
  display: inline-block;
  width:80px;
  line-height:30px;
  text-align: center;
  text-decoration:none;
  /* background-color: #fff; */
  font-size: 16rpx;
  color: #2a2b36;
  margin-left:18px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #ffffff;
  border: 1px #cccccc solid;
  border-radius: 8px;
 }
 .waiii .router-link-active{
  color: #447be8;
  margin-left:18px;
  border: 1px #c6e2ff solid;
  background-color: #ecf5ff;
  border-radius: 8px;
  }
 .baikuaiy {
   width: 100%;
   /* height: 300px; */
   background-color: #ffffff;
   /* padding: 30px; */
   margin-bottom: 20px;
   padding-bottom: 50px;
   padding-top: 50px;
 }


</style>
