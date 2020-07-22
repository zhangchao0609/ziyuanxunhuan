<template>
  <div id="app">
    <div class="waii">
      <div class="baikuai">
        <div class="zhong">
          <div class="jinkuai">
            <div class="left">
               <!-- 建筑垃圾开始 -->
              <div class="listt" @click="jianzhu('建筑垃圾')">建筑垃圾</div>
              <div class="listter"  v-if="shenghuoy4">
                <div class="listtli" @click="listtli('金属门窗')" >金属门窗</div>
                <div class="listtli" @click="listtli('油漆桶')">油漆桶</div>
                <div class="listtli" @click="listtli('碎木')">碎木</div>
                <div class="listtli" @click="listtli('碎石块')">碎石块</div>
                <div class="listtli" @click="listtli('水泥块')">水泥块</div>
                <div class="listtli" @click="listtli('电管')">电管</div>
                <div class="listtli" @click="listtli('渣土')">渣土</div>
                <div class="listtli" @click="listtli('砖瓦碎块')">砖瓦碎块</div>
              </div>
              <!-- 建筑垃圾结束 -->
              <!-- 生活垃圾开始 -->
              <div class="listt" @click="shenghuo('生活垃圾')">生活垃圾</div>
              <div class="listter" v-if="shenghuoy">
                <div class="listtli" @click="listtli('废纸')" >废纸</div>
                <div class="listtli" @click="listtli('玻璃')">玻璃</div>
                <div class="listtli" @click="listtli('塑料')">塑料</div>
                <div class="listtli" @click="listtli('废金属')">废金属</div>
              </div>
              <!-- 生活垃圾结束 -->
              <!-- 家电、仪器仪表 -->
              <div class="listt" @click="jiadian('家电、仪器仪表')">家电、仪器仪表</div>
              <div class="listter"  v-if="shenghuoy3">
                <div class="listtli" @click="listtli('研磨料')">研磨料</div>
                <div class="listtli" @click="listtli('电视')">电视</div>
                <div class="listtli" @click="listtli('冰箱')">冰箱</div>
                <div class="listtli" @click="listtli('电脑')">电脑</div>
                <div class="listtli" @click="listtli('空调')">空调</div>
                <div class="listtli" @click="listtli('洗衣机')">洗衣机</div>
                <div class="listtli" @click="listtli('绝缘材料')">绝缘材料</div>
              </div>
              <!-- 汽车机械结束 -->
              <!-- 汽车机械开始 -->
              <div class="listt" @click="qiche('汽车、机械、钢铁')">汽车、机械、钢铁</div>
              <div class="listter"  v-if="shenghuoy2">
                <div class="listtli" @click="listtli('模型')">模型</div>
                <div class="listtli" @click="listtli('边角料')">边角料</div>
                <div class="listtli" @click="listtli('废车')">废车</div>
                <div class="listtli" @click="listtli('钢铁')">钢铁</div>
                <div class="listtli" @click="listtli('涂料')">涂料</div>
                <div class="listtli" @click="listtli('管道')">管道</div>
                <div class="listtli" @click="listtli('黏接剂')">黏接剂</div>
                <div class="listtli" @click="listtli('橡胶')">橡胶</div>
                <div class="listtli" @click="listtli('烟尘')">烟尘</div>
              </div>
              <!-- 汽车机械结束 -->
              <!-- 汽车机械开始 -->
              <div class="listt" @click="fangzhi('纺织服装业废物')">纺织服装业废物</div>
              <div class="listter"  v-if="shenghuoy5">
                <div class="listtli" @click="listtli('布头')">布头</div>
                <div class="listtli" @click="listtli('纤维')">纤维</div>
                <div class="listtli" @click="listtli('橡胶')">橡胶</div>
              </div>
              <!-- 汽车机械结束 -->
              <!-- 农林固废开始 -->
              <div class="listt" @click="nongling('农林固废')">农林固废</div>
              <div class="listter"  v-if="shenghuoy6">
                <div class="listtli" @click="listtli('农用膜')">农用膜</div>
                <div class="listtli" @click="listtli('农作物秸秆')">农作物秸秆</div>
                <div class="listtli" @click="listtli('肥料袋')">肥料袋</div> 
                <div class="listtli" @click="listtli('肥料袋')">山茅草</div> 
              </div>
              <!-- 农林固废结束 -->
              <!-- 餐厨垃圾开始 -->
              <div class="listt" @click="canchu('餐厨垃圾')">餐厨垃圾</div>
              <div class="listter"  v-if="shenghuoy7">
                <div class="listtli" @click="listtli('筷子')">筷子</div>
                <div class="listtli" @click="listtli('一次性饭盒')">一次性饭盒</div>
                <div class="listtli" @click="listtli('外卖包装袋')">外卖包装袋</div> 
                <div class="listtli" @click="listtli('易拉罐')">易拉罐</div> 
              </div>
              <!-- 工业固废开始 -->
              <div class="listt" @click="gongye('工业固废')">工业固废</div>
              <div class="listter"  v-if="shenghuoy8">
                <div class="listtli" @click="listtli('高炉矿渣')">高炉矿渣</div>
                <div class="listtli" @click="listtli('钢渣')">钢渣</div>
                <div class="listtli" @click="listtli('有色金属渣')">有色金属渣</div> 
                <div class="listtli" @click="listtli('赤泥')">赤泥</div>
                <div class="listtli" @click="listtli('矿山的剥离废石')">矿山的剥离废石</div> 
                <div class="listtli" @click="listtli('煤矸石')">煤矸石</div> 
                <div class="listtli" @click="listtli('硫酸矿渣')">硫酸矿渣</div> 
                <div class="listtli" @click="listtli('电石渣')">电石渣</div> 
                <div class="listtli" @click="listtli('碱渣')">碱渣</div> 
                <div class="listtli" @click="listtli('磷渣')">磷渣</div> 
                <div class="listtli" @click="listtli('汞渣')">汞渣</div> 
                <div class="listtli" @click="listtli('铬渣')">铬渣</div> 
                <div class="listtli" @click="listtli('盐泥')">盐泥</div> 
                <div class="listtli" @click="listtli('盐泥')">污泥</div>
                <div class="listtli" @click="listtli('硼渣')">硼渣</div> 
                <div class="listtli" @click="listtli('橡胶碎屑')">橡胶碎屑</div> 
                <div class="listtli" @click="listtli('炉渣')">炉渣</div>
                <div class="listtli" @click="listtli('粉煤灰')">粉煤灰</div>
                <div class="listtli" @click="listtli('烟尘')">烟尘</div>
              </div>
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
  name: 'news',
  

  methods: {
    // 跳到购买页
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
    fangzhi : function(e){
      this.shenghuoy5 = !this.shenghuoy5
      this.biaoti2 = e
    },
    nongling : function(e){
      this.shenghuoy6 = !this.shenghuoy6
      this.biaoti2 = e
    },
    canchu:function(e){
      this.shenghuoy7 = !this.shenghuoy7
    },
    gongye:function(e){
      this.shenghuoy8 = !this.shenghuoy8
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
   console.log(this.$route.params.laji) 
  //  if(this.$route.params.laji == '建筑垃圾'){
  //    this.biaoti2 = '建筑垃圾'
  //    this.shenghuoy4 = true
  //  }
  //  if(this.$route.params.laji == '生活垃圾' || this.$route.params.laji == '废纸废玻璃' || this.$route.params.laji == '废旧塑料'  ){
  //    this.biaoti2 = '生活垃圾'
  //    this.shenghuoy = true
  //    this.shenghuoy2 = false
  //    this.shenghuoy3 = false
  //    this.shenghuoy4 = false
  //    this.shenghuoy5 = false
  //    this.shenghuoy6 = false
  //    this.shenghuoy7 = false
  //    this.shenghuoy8 = false
  //  }
  //  if(this.$route.params.laji == '餐厨垃圾'){
  //    this.biaoti2 = '餐厨垃圾'
  //    this.shenghuoy = false
  //    this.shenghuoy2 = false
  //    this.shenghuoy3 = false
  //    this.shenghuoy4 = false
  //    this.shenghuoy5 = false
  //    this.shenghuoy6 = false
  //    this.shenghuoy7 = true
  //    this.shenghuoy8 = false
  //  }
  //  if(this.$route.params.laji == '农林固废'){
  //    this.biaoti2 = '农林固废'
  //    this.shenghuoy = false
  //    this.shenghuoy2 = false
  //    this.shenghuoy3 = false
  //    this.shenghuoy4 = false
  //    this.shenghuoy5 = false
  //    this.shenghuoy6 = true
  //    this.shenghuoy7 = false
  //    this.shenghuoy8 = false
  //  }
  //  if(this.$route.params.laji == '废旧家电'){
  //     this.biaoti2 = '家电、仪器仪表'
  //    this.shenghuoy = false
  //    this.shenghuoy2 = false
  //    this.shenghuoy3 = true
  //    this.shenghuoy4 = false
  //    this.shenghuoy5 = false
  //    this.shenghuoy6 = false
  //    this.shenghuoy7 = false
  //    this.shenghuoy8 = false
  //  }
  //  if(this.$route.params.laji == '废旧汽车' || this.$route.params.laji == '废钢铁' ){
  //    this.biaoti2 = '汽车、机械、钢铁'
  //    this.shenghuoy = false
  //    this.shenghuoy2 = true
  //    this.shenghuoy3 = false
  //    this.shenghuoy4 = false
  //    this.shenghuoy5 = false
  //    this.shenghuoy6 = false
  //    this.shenghuoy7 = false
  //    this.shenghuoy8 = false
  //  }
  //  if(this.$route.params.laji == '废旧纺织品'){
  //    this.biaoti2 = '纺织服装业废物'
  //    this.shenghuoy = false
  //    this.shenghuoy2 = false
  //    this.shenghuoy3 = false
  //    this.shenghuoy4 = false
  //    this.shenghuoy5 = true
  //    this.shenghuoy6 = false
  //    this.shenghuoy7 = false
  //    this.shenghuoy8 = false
  //  }
  //  if(this.$route.params.laji == '工业固废'){
  //     this.biaoti2 = '工业固废'
  //    this.shenghuoy = false
  //    this.shenghuoy2 = false
  //    this.shenghuoy3 = false
  //    this.shenghuoy4 = false
  //    this.shenghuoy5 = false
  //    this.shenghuoy6 = false
  //    this.shenghuoy7 = false
  //    this.shenghuoy8 = true
  //  }
  //  请求数据
  this.$axios({
          method: 'get',
           url: '/api/zpic/selectAll?zhuId=1',
          //  zhuId: 1
        }).then(res => {
          console.log(res.data.message);
          this.sites = res.data.message
          console.log(this.sites)
          if( res.data.message == [] ){
            this.zanwu = true
          }
        }).catch(error => { 
  });

  },
  data() {
    return {
      shenghuoy : false,
      shenghuoy2 : false,
      shenghuoy3 : false,
      shenghuoy4 : false,
      shenghuoy5 : false,
      shenghuoy6 : false,
      shenghuoy7 : false,
      shenghuoy8 : false,
      zanwu : false,
      biaoti : '全部',
      biaoti2 : '建筑垃圾',
      sites:[],
      sumr:'https://jgs.jinguanshou.cn:3443/'
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
    color: #5c5d68;
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
    cursor: pointer;
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
    margin-bottom: 30px;
  }
  .zanwu {
    margin-left: 40px;
    color: red;
    /* font-size: ; */
  }
</style>
