<template>
  <div id="app">
    <div class="waiii">
      <div class="baikuaiy" >
        <div class="zhong">
            <img class="chanyeliansh" src="../assets/chanyeliyi.png" alt="">
            <!-- <img class="chanyeliansh" src="../assets/chanyeliaer.png" alt=""> -->
        </div> 

      </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'buy',
  data() {
    return {
      sites:[],
      
    }
  },
  methods :{
  },
  created(){
    var that = this
   
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
   /* height: px; */
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
 .xqh2 {
     font-size: 18px;
     margin-left: 30px;
 }
.tishi {
    /* width: 100%; */
    height: 40px;
    margin-left: 30px;
    background-color: #f2f5fb;
    border-left: 2px solid #d0d6dc;
    margin-top: 30px;
    
    padding:20px;
    padding-right:20px;
    /* box-sizing: border-box; */
}
.tishi span{
    width: 80%;
    /* color: #243342; */
    font-size: 14px;
}
.xqhz {
    width: 460px;
    /* height: 220px; */
    /* background-color: pink; */
    margin-left: 30px;
    margin-top: 30px;
}
.xqhz img {
    width: 100%;
}
.zhengwenw {
    width: 100%;
    /* height: 100px; */
     margin-left: 30px;
    margin-top: 30px;
    /* background-color: pink; */
    color: #243342;
    font-size: 14px;
    line-height:28px;
}
 .xwxqimg{
    width: 14px;
    height: 14px;
    margin-right: 5px;
    /* margin-left: 20px; */
 }
 .xwxqimg2{
    width: 14px;
    height: 14px;
    margin-right: 5px;
    margin-left: 20px;
 }
 .mowei {
   width: 100%;
    /* height: 100px; */
   margin-left: 30px;
   margin-top: 30px;
 }
 .mowei span {
    color: #777;
    font-size: 14px;
 }
 .chanyeliansh {
     width: 900px;
 }
</style>
