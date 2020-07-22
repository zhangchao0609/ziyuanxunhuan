<template>
  <div id="app">
    <div class="waii">
      <div class="baikuai">
        <div class="zhong">
          <div class="jinkuai">
            <div class="left">
               <!-- 建筑垃圾开始 -->
              <div class="listt" @click="jianzhu('生产陶粒的设备')">生产陶粒的设备</div>
              <div class="listter"  v-if="shenghuoy4">
                <div class="listtli" @click="listtli('球磨机')" >球磨机</div>
                <div class="listtli" @click="listtli('成球盘')">成球盘</div>
                <div class="listtli" @click="listtli('回转窑')">回转窑</div>
                <div class="listtli" @click="listtli('立窑')">立窑</div>
                <div class="listtli" @click="listtli('烧结机')">烧结机</div>
                <div class="listtli" @click="listtli('滚筒筛')">滚筒筛</div>
                <div class="listtli" @click="listtli('破碎机')">破碎机</div>
                <div class="listtli" @click="listtli('提升机')">提升机</div>
                <div class="listtli" @click="listtli('冷却机')">冷却机</div>
                <div class="listtli" @click="listtli('除尘器')">除尘器</div>
                <div class="listtli" @click="listtli('粉煤灰烘干机')">粉煤灰烘干机</div>
              </div>
              <!-- 建筑垃圾结束 -->
              <!-- 生活垃圾开始 -->
              <div class="listt" @click="shenghuo('生产矿渣水泥设备')">生产矿渣水泥设备</div>
              <div class="listter" v-if="shenghuoy">
                <div class="listtli" @click="listtli('磨机')" >磨机</div>
                <div class="listtli" @click="listtli('矿渣烘干机')">矿渣烘干机</div>
                <div class="listtli" @click="listtli('预热器')">预热器</div>
                <div class="listtli" @click="listtli('皮带输送机')">皮带输送机</div>
              </div>
              <!-- 生活垃圾结束 -->
              <!-- 家电、仪器仪表 -->
              <div class="listt" @click="jiadian('生产石膏制品的设备')">生产石膏制品的设备</div>
              <div class="listter"  v-if="shenghuoy3">
                <div class="listtli" @click="listtli('石膏板成型机')">石膏板成型机</div>
                <div class="listtli" @click="listtli('石膏板覆膜机')">石膏板覆膜机</div>
                <div class="listtli" @click="listtli('砌块成型机')">砌块成型机</div>
              </div>
              <!-- 汽车机械结束 -->
              <!-- 汽车机械开始 -->
              <div class="listt" @click="qiche('其他设备')">其他设备</div>
              <div class="listter"  v-if="shenghuoy2">
                <div class="listtli" @click="listtli('振动筛')">振动筛</div>
                <div class="listtli" @click="listtli('压滤机')">压滤机</div>
                <div class="listtli" @click="listtli('旋流器')">旋流器</div>
                <div class="listtli" @click="listtli('刮泥机')">刮泥机</div>
                <div class="listtli" @click="listtli('浓缩池')">浓缩池</div>
                <div class="listtli" @click="listtli('选粉机')">选粉机</div>
                <div class="listtli" @click="listtli('包装机')">包装机</div>
                <div class="listtli" @click="listtli('烘干机')">烘干机</div>
                <div class="listtli" @click="listtli('沸腾炉')">沸腾炉</div>
                <div class="listtli" @click="listtli('自动控制系统')">自动控制系统</div>
              </div>
              <!-- 汽车机械结束 -->
              
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
              <!-- ------ -->
           
              
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
  name: 'zhuangbei',
  created(){
    //  请求数据
    this.$axios({
            method: 'get',
            url: '/api/zpic/selectAll?zhuId=140',
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
  methods: {
    buy:function(e,s,b){
      this.$router.push({name: 'buy', params: {laji:e,url:'https://jgs.jinguanshou.cn:3443'+s,jiage:b}})
    },
    shenghuo:function(e){
      this.shenghuoy = !this.shenghuoy
      this.biaoti2 = e
    },
    qiche:function(e){
      this.shenghuoy2 = !this.shenghuoy2
      this.biaoti2 = e
    },
    jiadian : function(e){
      this.shenghuoy3 = !this.shenghuoy3
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
  data() {
    return {
      shenghuoy : false,
      shenghuoy2 : false,
      shenghuoy3 : false,
      shenghuoy4 : true,
      zanwu : false,
      biaoti : '全部',
      biaoti2 : '生产陶粒的设备',
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
