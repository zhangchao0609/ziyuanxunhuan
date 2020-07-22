<template>
  <div id="app">
    <div class="waiii">
      <div class="baikuaiy">
        <div class="zhong">
            <p class="on">基地概括</p>
          <div class="xiangerwew"></div>
          <p class="jidip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;引进一批优质创新型项目，发展壮大一批龙头企业，打造以生活垃圾、建筑垃圾、餐厨垃圾处理加工利用，
              废旧家电、废旧汽车拆解等为主，集工业、研发、商贸、物流等于一体的资源循环利用示范基地
          </p>
          <p class="jidip">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以构筑资源回收利用为核心的循环经济产业链、产品链、价值链和创新链为重点，围绕生活垃圾、建筑垃圾、餐厨废弃物和汽车、废家电的回收拆解、精深加工等产业，
              采用资源回收利用关键技术，促进基地与城市垃圾清运，逐步提高全市废弃利用水平。
          </p>
        </div> 
        <!-- <router-view/> -->
      </div>
       
      <div class="baikuaiy">
        <div class="zhong">
          <img class="aimg" src="../assets/guihuatu.png" alt=""> 
        </div> 
        <!-- <router-view/> -->
      </div>

      <div class="baikuaiy">
        <div class="zhong">
          <img class="chanyeliansh" src="../assets/chanyeliyi.png" alt=""> 
        </div> 
        <!-- <router-view/> -->
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
 .jidip {
     font-size: 15px;
     line-height: 30px;
 }
 .aimg {
     width: 800px;
     height: 400px;
 }
 .on {
  font-size: 20px;
  margin-top: 20px;
  height: 50px;
  width: 90px;
  border-bottom:2px solid #6385f6;
}
.xiangerwew {
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
  background-color: #dadbdc;
}
.chanyeliansh {
  width: 900px;
  margin-top: 40rpx;
 }
</style>
