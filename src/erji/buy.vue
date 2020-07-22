<template>
  <div id="app">
    <div class="waiii">
        <div class="baikuaiy">
            <div class="zhong">
                <div class="zuiwaihezi">
                    <div class="zwhleft">
                        <div class="imghezi">
                            <img v-if="xinahi" src="../assets/boli.jpg" alt="">
                            <img v-if="xinahi2" src="../assets/zhi.jpg" alt="">
                            <img v-if="xinahi3" src="../assets/gangtie.jpg" alt="">
                            <img v-if="xinahi4" src="../assets/suliao.jpg" alt="">
                            <img v-if="xinahi5" src="../assets/fangzhip.jpg" alt="">
                            <img v-if="xinahi6" src="../assets/jiadian.jpg" alt="">
                            <img v-if="xinahi7" src="../assets/taoci.jpg" alt="">
                            <img v-if="xinahi8" src="../assets/qiche.jpg" alt="">
                            <!-- 建筑垃圾开始 -->
                            <img v-if="xinahi9" src="../assets/paohua.jpg" alt="">
                            <img v-if="xinahi10" src="../assets/paohua2.jpg" alt="">
                            <img v-if="xinahi11" src="../assets/muliao.jpg" alt="">
                            <img v-if="xinahi12" src="../assets/shitou.jpg" alt="">
                            <img v-if="xinahi13" src="../assets/shiban.jpg" alt="">
                            <img v-if="xinahi14" src="../assets/jianyan.jpg" alt="">
                            <img v-if="xinahi15" src="../assets/huntu.jpg" alt="">
                            <img v-if="xinahi16" src="../assets/zhuang.jpg" alt="">
                            <!-- 工业固废开始 -->
                            <img v-if="xinahi17" src="../assets/dianshi.jpg" alt="">
                            <img v-if="xinahi18" src="../assets/zha.jpg" alt="">
                            <img v-if="xinahi19" src="../assets/yanni.jpg" alt="">
                            <img v-if="xinahi20" src="../assets/mihuayan.jpg" alt="">
                            <img v-if="xinahi21" src="../assets/lvzha.jpg" alt="">
                            <img v-if="xinahi22" src="../assets/lvyange.jpg" alt="">
                            <img v-if="xinahi23" src="../assets/xinzha.jpg" alt="">
                            <img v-if="xinahi24" src="../assets/pengzha.jpg" alt="">
                            <!-- 固废制品开始 -->
                            <img v-if="xinahi25" src="../assets/zpq.jpg" alt="">
                            <img v-if="xinahi26" src="../assets/zpw.jpg" alt="">
                            <img v-if="xinahi27" src="../assets/zpr.jpg" alt="">
                            <img v-if="xinahi28" src="../assets/zpe.jpg" alt="">
                            <img v-if="xinahi29" src="../assets/zpt.jpg" alt="">
                            <img v-if="xinahi30" src="../assets/zpy.jpg" alt="">
                            <img v-if="xinahi31" src="../assets/zpu.jpg" alt="">
                            <img v-if="xinahi32" src="../assets/zpi.jpg" alt="">


                            <img :src="url" alt="">
                        </div>
                    </div>
                    <div class="zwhright">
                        <span class="cpname">{{ming}}</span>
                        <span class="kucun">库存100斤</span>
                        <div class="sshugongsi">山西鑫源有限公司</div>
                        <div class="manye">{{danjia}}</div>
                        <div class="hengxiang555"></div>
                        <p class="buy_num">购买数量</p>
                        <button class="btn_minute" @click="btnMinute">-</button>
                        <input type="text" value="0" size="1" v-model="count">
                        <button class="btn_add" @click="btnAdd">+</button>
                        <div class="hengxiang66"></div>
                        <div class="addizhi">
                            <span>地址：{{province}} {{city}} {{district}} {{street}} {{streetNumber}}</span>
                            <!-- <span class="xiugai">修改</span> -->
                        </div>
                        <div class="addizhi2">
                           <p>{{ming}}</p>
                           <p class="zongjia">总计：{{sum}}元</p>
                        </div>
                        <div class="buttom" @click="tiao66()">购买</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第二块开始 -->
        <div class="baikuaiy">
            <div class="zhong">
                <div>售后保障</div>
                <div class="zhengwen">本产品全国联保，享受三包服务，质保期为：一年质保，如因质量问题或故障，凭厂端维修中点的质量检测证明，享受7日内换货，15
日以上在质保期内享受免费保修等三包服务！注：如厂家在商品价绍中有售后保障的说明，则此商品按照厂家说明执行售后保障服务。
您可以查询本品牌在各地售后服务中心联系方式</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { location } from "../js/map.js";
export default {
  name: 'buy',
  created(){
    console.log(this.$route.params.beizhu)
    this.ming = this.$route.params.laji
    this.url = this.$route.params.url
    this.danjia = this.$route.params.jiage

    // 纪录是点的哪一个产品

     
    // 用来显示哪个照片的
    if(this.$route.params.laji == '玻璃' ){
      this.xinahi =  true
    }
    if(this.$route.params.laji == '废纸' ){
      this.xinahi2 =  true
    }
    if(this.$route.params.laji == '钢铁' ){
      this.xinahi3 =  true
    }
    if(this.$route.params.laji == '塑料' ){
      this.xinahi4 =  true
    }
     if(this.$route.params.laji == '衣服布料' ){
      this.xinahi5 =  true
    }
     if(this.$route.params.laji == '家电' ){
      this.xinahi6 =  true
    }
     if(this.$route.params.laji == '陶瓷' ){
      this.xinahi7 =  true
    }
     if(this.$route.params.laji == '汽车' ){
      this.xinahi8 =  true
    }
    // 建筑垃圾开始
    if(this.$route.params.laji == '金属门窗' ){
      this.xinahi9 =  true
    }
    if(this.$route.params.laji == '油漆桶' ){
      this.xinahi10 =  true
    }
    if(this.$route.params.laji == '碎木' ){
      this.xinahi11 =  true
    }
    if(this.$route.params.laji == '碎石块' ){
      this.xinahi12 =  true
    }
     if(this.$route.params.laji == '水泥块' ){
      this.xinahi13 =  true
    }
     if(this.$route.params.laji == '电管' ){
      this.xinahi14 =  true
    }
     if(this.$route.params.laji == '渣土' ){
      this.xinahi15 =  true
    }
     if(this.$route.params.laji == '砖瓦碎块' ){
      this.xinahi16 =  true
    }
    // 工业固废开始
    if(this.$route.params.laji == '电石渣' & this.$route.params.beizhu == 'eut'){
      this.xinahi17 =  true
    }
    if(this.$route.params.laji == '尾矿' & this.$route.params.beizhu == 'eut' ){
      this.xinahi18 =  true
    }
    if(this.$route.params.laji == '盐泥' & this.$route.params.beizhu == 'eut'){
      this.xinahi19 =  true
    }
    if(this.$route.params.laji == '米花岩石' & this.$route.params.beizhu == 'eut' ){
      this.xinahi20 =  true
    }
     if(this.$route.params.laji == '铝渣' & this.$route.params.beizhu == 'eut'){
      this.xinahi21 =  true
    }
     if(this.$route.params.laji == '化工铁粉' & this.$route.params.beizhu == 'eut'){
      this.xinahi22 =  true
    }
     if(this.$route.params.laji == '锌渣' & this.$route.params.beizhu == 'eut'){
      this.xinahi23 =  true
    }
     if(this.$route.params.laji == '硼渣' & this.$route.params.beizhu == 'eut'){
      this.xinahi24 =  true
    }
    // 制品开始
     if(this.$route.params.laji == '粉煤灰陶粒' & this.$route.params.beizhu == 'eut'){
      this.xinahi25 =  true
    }
    if(this.$route.params.laji == '陶粒砂轻质干拌混凝土' & this.$route.params.beizhu == 'eut'){
      this.xinahi26 =  true
    }
    if(this.$route.params.laji == '陶粒隔墙板' & this.$route.params.beizhu == 'eut' ){
      this.xinahi27 =  true
    }
    if(this.$route.params.laji == '粉煤灰雕塑' & this.$route.params.beizhu == 'eut'){
      this.xinahi28 =  true
    }
     if(this.$route.params.laji == '碳金地板' & this.$route.params.beizhu == 'eut'){
      this.xinahi29 =  true
    }
     if(this.$route.params.laji == '陶粒隔音板' & this.$route.params.beizhu == 'eut'){
      this.xinahi30 =  true
    }
     if(this.$route.params.laji == '粉煤灰多孔砖' & this.$route.params.beizhu == 'eut'){
      this.xinahi31 =  true
    }
     if(this.$route.params.laji == '粉煤灰烧结砖' & this.$route.params.beizhu == 'eut'){
      this.xinahi32 =  true
    }

  },
  data() {
    return {
      ming : '',

      // 生活垃圾开始
      xinahi:false,
      xinahi2:false,
      xinahi3:false,
      xinahi4:false,
      xinahi5:false,
      xinahi6:false,
      xinahi7:false,
      xinahi8:false,
      // 建筑垃圾开始
      xinahi9:false,
      xinahi10:false,
      xinahi11:false,
      xinahi12:false,
      xinahi13:false,
      xinahi14:false,
      xinahi15:false,
      xinahi16:false,
      // 工业固废开始
      xinahi17:false,
      xinahi18:false,
      xinahi19:false,
      xinahi20:false,
      xinahi21:false,
      xinahi22:false,
      xinahi23:false,
      xinahi24:false,
      // 固废制品开始
      xinahi25:false,
      xinahi26:false,
      xinahi27:false,
      xinahi28:false,
      xinahi29:false,
      xinahi30:false,
      xinahi31:false,
      xinahi32:false,

      count : 1,
      lat:"",
      lng:"",
      province:"",
      city:"",
      district:"",
      sum:0,
      danjia:66,
      street:'',
      streetNumber:'',
      url:"",
      jiage:""
    }
  },
  methods :{
      btnAdd (count) {
　　　// 如果是低价商品，则限购
    
//   　　if (this.vegas_id) {
// //    　　 Toast('优惠商品限购一件哦~')
//   　　}
　　　
     　this.count++
       this.sum = this.count * this.danjia
    　　
  　　
　　},
   btnMinute (count) {
     
  　　if (this.count <= 1) {
  //  　　 Toast('该宝贝不能减少了哟~')
  　　} else {
  　　  this.count--
        this.sum = this.count * this.danjia
  　　}
　　},

    tiao66:function(){
      console.log(this.$store.state.user)
      // 判断有无登录，无登录跳到登录页面
      console.log(this.$store.state.renzheng)
      if(this.$store.state.user === '') {
        this.$router.push({name: 'denglu'})
        return false
      }
      if(this.$store.state.renzheng === '') {
        
        this.$router.push({name: 'renzheng'})
      }
    },
//    地图所需要的方法
   getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
        _that.lat = result.position.lat;
        _that.lng = result.position.lng;
        _that.province = result.addressComponent.province;
        _that.city = result.addressComponent.city;
        _that.district = result.addressComponent.district;
        _that.street = result.addressComponent.street;
        _that.streetNumber = result.addressComponent.streetNumber;
        console.log(result)
      });
    },

  },
   mounted() {
    this.sum = this.count * this.danjia
    this.getLocation(); // 调用获取地理位置
     window.scrollTo(0,0)
   }
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
  .zuiwaihezi {
    display: flex;
  }
  .zwhleft {
    flex:1;
    /* margin-bottom: 20px; */
    /* height:574px; */
    /* background-color: pink; */
 }
  .zwhright {
    flex:2;
    /* height:574px; */
    /* background-color:blueviolet; */
    padding-top:30px;
    padding-left:30px
 }
 .imghezi {
    width: 389px;
    height: 281px;
    /* background-color: yellow; */
    margin: 0 auto;
    margin-top: 20px;
 }
 .imghezi img {
     width: 100%;
 }
 .cpname{
     font-size: 22px;
     color: #25272c;   
 }
 .kucun {
     color: #626262;
     margin-left: 10px;
 }
.sshugongsi{
    color: #626262;
    font-size: 18px;
    margin-top: 26px;
}
.manye {
  font-size:30px;
  color: #ff7853;
  margin-top: 15px;
  font-weight: 600;
}

.hengxiang555 {
  width: 100%;
  height: 1px;
  background-color: #dadbdc;
  margin-top: 20px;
}
.hengxiang66 {
  width: 100%;
  height: 1px;
  background-color: #dadbdc;
  margin-top: 30px;  
}
.buy_num {
  margin-bottom: 20px;
  margin-top: 20px;
}
.btn_minute,.btn_add{
  background-color: #ffffff;
  border: 1px #dfdfdf solid;
  width: 23px;
  height: 23px;
}
.addizhi {
  width: 760px;
  height: 30px;
  line-height: 30px;
  background-color: #fafafa;
  border: 1px solid #e1e1e1;
  margin-top: 20px;
  padding: 20px;
}
.addizhi2 {
  width: 760px;
  height: 70px;
  line-height: 30px;
  background-color: #fafafa;
  /* border: 1px solid #e1e1e1; */
  margin-top: 20px;
  padding: 20px;
  font-size: 16px;
}
.xiugai {
  margin-left: 20px;
  color: #ff6b44;
}
.zongjia {
   color: #ff6b44;
   font-size: 20px; 
   font-weight: 600;
   margin-top: 10px;
}
.buttom{
   width: 150px;
   height: 50px;
   background-color: #447be8;
   margin-top: 30px;
   font-size: 20px;
   text-align: center;
   line-height:50px;
   color: #ffffff;
   cursor: pointer;
   border-radius: 6px;
}
.zhengwen {
    font-size: 16px;
    color: #6a6d6f;
    margin-top: 20px;
}


</style>
