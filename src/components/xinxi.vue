<template>
  <div id="app">
    <div class="waiii">
        <div class="zhong">
            <div class="feng">
                 <div class="baikuaiyzuo">
                     <p>基本信息</p>
                     <p class="er" @click="tiaozhang()">账户信息</p>
                     <p>企业信息</p>
                     <p class="er" @click="tiaoren()">企业认证</p>
                 </div>
                  
                 <div class="baikuaiyyou">
                    <router-view/>   
                 </div>  
            </div>
             
        </div>
        
        

    </div>

  </div>
</template>

<script>
export default {
  name: 'rencai',
  data() {
        return {
          tableData: [{
            name: '赵海晋',
            danwei: '山西职业技术学院',
            yanjiu: '绿色建材及制品',
            zhicheng : '教授',
          }, {
            name: '赵海晋',
            danwei: '山西职业技术学院',
            yanjiu: '绿色建材及制品',
            zhicheng : '教授',
          }]
        }
      },
      methods: {
      handleClick(row) {
        console.log(row);
      },
      tiaozhang(){
        this.$router.push({name: 'jiben'})
      },
      tiaoren(){
        this.$router.push({name: 'renzheng'})
      }
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
   padding-bottom: 30px;
   background-color: #f3f5f8;
   padding-top: 20px;
 }
 .baikuaiy {
   width: 100%;
   /* height: 300px; */
   background-color: #ffffff;
   padding: 30px;
   margin-bottom: 20px;
 }
 .zhong {
    width:1226px;
    margin:0 auto;
    overflow: hidden;
    /* background-color: pink; */
  }
  .hengxiange {
    width: 100%;
    height: 1px;
    background-color: #dadbdc;
    /* margin-top: 20px; */
  }
  .biaoti {
    font-size: 18px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .xiaobiaoti {
    font-size: 16px;
    line-height: 40px;
  }
  .zhengwen {
    font-size: 14px;
    color: #6c6c6c;
    line-height: 40px;
  }
  .one {
  font-size: 20px;
  margin-top: 54px;
  height: 50px;
  width: 90px;
  border-bottom:2px solid #6385f6;
}
  .feng {
    display: flex;
  }
  .baikuaiyzuo {
    flex: 1;
    height: 1000px;
    background-color: #ffffff;
  }
  .baikuaiyyou {
    flex: 6;
    /* height: 1000px; */
    /* padding-bottom: 30px; */
    margin-left: 20px;
    background-color: #ffffff;
    padding-top: 50px;
    padding-left: 50px;
  }
  .baikuaiyzuo p {
    margin-left: 40px;
    margin-top: 30px;
  }
  .er {
    font-size: 14px;
    color: #878a91;
    cursor: pointer;
  }
  
</style>
