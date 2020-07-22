<template>
  <div id="app">
    <div class="waii">
      <div class="baikuai">
        <div class="zhong">
          <div class="jinkuai">
            <div class="left">
               <!-- 建筑垃圾开始 -->
              <div class="listt" @click="jianzhu('环境检测')">环境检测</div>
              <div class="listter"  v-if="shenghuoy4">
                <div class="listtli" @click="listtli('水检测')" >水检测</div>
                <div class="listtli" @click="listtli('空气检测')">空气检测</div>
                <div class="listtli" @click="listtli('土壤检测')">土壤检测</div>
                <div class="listtli" @click="listtli('噪声检测')">噪声检测</div>
                <div class="listtli" @click="listtli('放射性检测')">放射性检测</div>
                <div class="listtli" @click="listtli('固体废物检测')">固体废物检测</div>
                <div class="listtli" @click="listtli('热检测')">热检测</div>
                <div class="listtli" @click="listtli('光检测')">光检测</div>
              </div>
              <!-- 建筑垃圾结束 -->
              <!-- 生活垃圾开始 -->
              <div class="listt" @click="shenghuo('样品检测')">样品检测</div>
              <div class="listter" v-if="shenghuoy">
                <div class="listtli" @click="listtli('粉煤灰检测')" >粉煤灰检测</div>
                <div class="listtli" @click="listtli('石膏板检测')">石膏板检测</div>
              </div>
              
              
            </div>
             <!-- 左边结束 -->
            <div class="right">
              <p class="pp">{{biaoti}}</p>
              <p v-if="zanwu" class="zanwu">啊呀！~ 暂无此类产品 ~</p>
              <div class="righttt">
                <div class="meige" @click="buy(site.product_type,site.product_picture,site.sales_amount)"  v-for="site in sites">
                <div class="imgs">
                  <img :src="'https://jgs.jinguanshou.cn:3443'+site.product_picture" alt="">
                </div>
                 <p>{{ site.product_type }}</p>
                <p class="gongsi">{{ site.qy_name}}</p>
                <p class="jiage">{{ site.sales_amount}}</p>
              </div>
              
              
              </div>
              
              
              
              
            </div>
            <!-- 右边结束 -->
          </div>
        </div>
      </div>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'jishufuw',
  methods: {
    buy:function(e,s,b){
      this.$router.push({name: 'buy', params: {laji:e,url:'https://jgs.jinguanshou.cn:3443'+s,jiage:b}})
    },
    shenghuo:function(e){
      this.shenghuoy = !this.shenghuoy
      this.biaoti2 = e
    },
    jianzhu : function(e){
      this.shenghuoy4 = !this.shenghuoy4
      this.biaoti2 = e
    },
    
    
    listtli:function(e){
      console.log(e)
      this.biaoti = e
      //  请求数据
      this.$axios({
          method: 'get',
           url: '/api/zpic/selectAll?productType='+e+'&ymjb=3'
          //  zhuId: 1
        }).then(res => {
          console.log(res.data.message);
          this.sites = res.data.message
           if( res.data.message == '' ){
            this.zanwu = true
          } else {
            this.zanwu = false
          }
        }).catch(error => {
          this.zanwu = true
          this.sites = ''
      });
    }
  },
  created(){
    //  请求数据
    this.$axios({
            method: 'get',
            url: '/api/zpic/selectAll?zhuId=209',
            //  zhuId: 1
          }).then(res => {
            console.log(res.data.message);
            this.sites = res.data.message
             if( this.sites == '' ){
              this.zanwu = true
             }
          }).catch(error => { 

    });

  },
  data() {
    return {
      shenghuoy : false,
      shenghuoy4 : true,
      biaoti : '全部',
      biaoti2 : '环境检测',
      zanwu : false,
      sites:[],
    }
  }
}
</script>

<style>
 * {
   margin: 0;
 }

 .waii {
   width: 100%;
   /* height:2000px; */
   background-color: #f3f5f8;
   padding-top: 20px;
 }
 .baikuai {
   width: 100%;
   /* height: 300px; */
   background-color: #ffffff;
   padding: 30px;
 }
 .zhong {
    width:1226px;
    margin:0 auto;
    overflow: hidden;
    /* background-color: pink; */
  }
  .jinkuai {
    display: flex;
  }
  .jinkuai .left{
    flex:1;
    /* height: 33px; */
    border: 1px solid #e4e4e4;
    padding-bottom: 30px;
    /* background-color: pink; */
  }
  .jinkuai .right{
    flex:6;
    /* height: 30px; */
    /* background-color: goldenrod; */
  }
  .listt {
    width: 100%;
    height: 46px;
    background-color: #eeeeee;
    margin-top: 20px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    cursor:pointer;
  }
  .listter {
    width: 100%;
  }
  .listtli {
    width: 100%;
    height: 46px;
    /* background-color: #ecf1f7; */
    /* margin-top: 3px; */
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    text-align: center;
    /* padding-left: 40px; */
    cursor:pointer;
  }
  .listtli:hover {
     background-color: #f7f7f7;
  }
  .meige .imgs {
    width: 100%;
    height: 178px;
    /* background-color: pink; */
    overflow: hidden;
  }
  .meige .imgs img{
    height: 100%;
  }
  .righttt {
    /* width: 100%; */
    /* height: 2000px; */
    /* background-color: green; */
   display: flex;
   flex-wrap: wrap;
   padding-left: 10px;
   padding-right: 20px;
  /* justify-content: space-between; */
  }
  .meige{
    width: 224px;
    /* height: 178px; */
    /* height: 30px; */
    /* background-color: green; */
    margin-left: 27px;
    margin-bottom: 20px;
  }
  .meige p {
    font-size: 14px;
    margin-top: 13px;
  }
  .gongsi {
    color: #626262;
  }
  .meige .jiage {
    color: #d8251c;
    font-size: 16px;
  }
  .right .pp {
    font-size: 16px;
    margin-left: 40px;
    margin-bottom: 20px;
  }
</style>
