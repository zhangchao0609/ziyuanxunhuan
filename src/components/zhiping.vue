<template>
  <div id="app">
    <div class="waii">
      <div class="baikuai">
        <div class="zhong">
          <div class="jinkuai">
            <div class="left">
               <!-- 建筑垃圾开始 -->
              <div class="listt" @click="jianzhu('粉煤灰制品')">粉煤灰制品</div>
              <div class="listter"  v-if="shenghuoy4">
                <div class="listtli" @click="listtli('粉煤灰混凝土')" >粉煤灰混凝土</div>
                <div class="listtli" @click="listtli('粉煤灰水泥')">粉煤灰水泥</div>
                <div class="listtli" @click="listtli('粉煤灰蒸压砖')">粉煤灰蒸压砖</div>
                <div class="listtli" @click="listtli('粉煤灰砌块')">粉煤灰砌块</div>
                <div class="listtli" @click="listtli('粉煤灰陶粒')">粉煤灰陶粒</div>
                <div class="listtli" @click="listtli('粉煤灰雕塑')">粉煤灰雕塑</div>
                <div class="listtli" @click="listtli('粉煤灰家具')">粉煤灰家具</div>
                <div class="listtli" @click="listtli('矿棉')">矿棉</div>
                <div class="listtli" @click="listtli('加气混凝土墙板')">加气混凝土墙板</div>
                <div class="listtli" @click="listtli('粉煤灰陶粒混凝土')">粉煤灰陶粒混凝土</div>
                <div class="listtli" @click="listtli('陶粒隔音板')">陶粒隔音板</div>
                <div class="listtli" @click="listtli('陶烂隔墙板')">陶烂隔墙板</div>
              </div>
              <!-- 建筑垃圾结束 -->
              <!-- 生活垃圾开始 -->
              <div class="listt" @click="shenghuo('高炉渣制品')">高炉渣制品</div>
              <div class="listter" v-if="shenghuoy">
                <div class="listtli" @click="listtli('矿渣硅酸盐水泥')" >矿渣硅酸盐水泥</div>
                <div class="listtli" @click="listtli('石膏矿渣水泥')">石膏矿渣水泥</div>
                <div class="listtli" @click="listtli('矿渣混凝土')">矿渣混凝土</div>
                <div class="listtli" @click="listtli('矿渣砖')">矿渣砖</div>
                <div class="listtli" @click="listtli('矿渣棉')">矿渣棉</div>
                <div class="listtli" @click="listtli('微晶玻璃')">微晶玻璃</div>
                <div class="listtli" @click="listtli('矿渣铸石')">矿渣铸石</div>
              </div>
              <!-- 生活垃圾结束 -->
              <!-- 家电、仪器仪表 -->
              <div class="listt" @click="jiadian('钢渣制品')">钢渣制品</div>
              <div class="listter"  v-if="shenghuoy3">
                <div class="listtli" @click="listtli('钢渣水泥')">钢渣水泥</div>
                <div class="listtli" @click="listtli('砖瓦及砌块')">砖瓦及砌块</div>
                <div class="listtli" @click="listtli('肥料')">肥料</div>
              </div>
              <!-- 汽车机械结束 -->
              <!-- 汽车机械开始 -->
              <div class="listt" @click="qiche('煤矸石制品')">煤矸石制品</div>
              <div class="listter"  v-if="shenghuoy2">
                <div class="listtli" @click="listtli('水玻璃')">水玻璃</div>
                <div class="listtli" @click="listtli('普通水泥')">普通水泥</div>
                <div class="listtli" @click="listtli('砖')">砖</div>
                <div class="listtli" @click="listtli('煤矸石陶粒')">煤矸石陶粒</div>
              </div>
              <!-- 汽车机械结束 -->
              
            </div>
             <!-- 左边结束 -->
            <div class="right">
              <p class="pp">{{biaoti}}</p>
              <p v-if="zanwu" class="zanwu">啊呀！~ 暂无此类产品 ~</p>
              <div class="righttt">
                <div class="meige" @click="buy(site.product_type,site.product_picture,site.sales_amount)" v-for="site in sites">
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
  name: 'zhiping',
  created(){
    //  请求数据
    this.$axios({
            method: 'get',
            url: '/api/zpic/selectAll?zhuId=87',
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
      biaoti2 : '粉煤灰制品',
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
    width: 100%;
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
    font-size: 16px;
    margin-top: 13px;
  }
  .gongsi {
    color: #626262;
  }
  .meige .jiage {
    color: #d8251c;
    font-size: 20px;
  }
  .right .pp {
    font-size: 16px;
    margin-left: 40px;
    margin-bottom: 20px;
  }
  .zanwu {
    margin-left: 40px;
    color: red;
    /* font-size: ; */
  }
</style>
