<template>
  <div class="hello">
    <div class="imgdiv">
      <div class="zhong">
        <div class="block">
          <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
          <el-carousel height="500px">
            <el-carousel-item v-for="item in img_list" :key="item">
              <!-- <h3 class="small">{{ item }}</h3> -->
              <!-- <img :src="item" alt=""> -->
              <img :src="require('../assets/'+item+'.png')" alt="">
              <!-- <img src="../assets/banner2.png" alt=""> -->
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    
    <!-- 上面开始 -->
    <div class="changjian">
        <div class="zhong">
          <div class="maiwai">
            <div class="maijia" @click="tiao66()">
              <div class="icon">
                <img src="../assets/icon1.jpg" alt="">
              </div>
              <p>我是产废方</p>
            </div>
            <div class="maijia" @click="tiao66()">
              <div class="icon">
                <img src="../assets/icon2.png" alt="">
              </div>
              <p>我是利用方</p>
            </div>
            <div class="maijia" @click="tiao66()">
              <div class="icon">
                <img src="../assets/icon3.png" alt="">
              </div>
              <p class="p3">我是运输方</p>
            </div>
            <div class="maijia" @click="tiao67()">
              <div class="icon">
                <img src="../assets/gongzho.png" alt="">
              </div>
              <p class="p3">我是公众</p>
            </div>
          </div>
        </div>
        
      </div>
    <!-- 下面结束 -->

    <div class="zhong2">
       <p class="one">交易服务</p>
       <div class="hengxiangerwew"></div>

       <div class="tupian"> 
         <div class="li" @click="tiao('建筑垃圾')">
           <div class="lihe">
            <img src="../assets/jianzhu.jpg" >
           </div>
           <p>建筑垃圾</p>
         </div>
         <div class="li" @click="tiao('生活垃圾')">
           <div class="lihe">
            <img src="../assets/shenghuo.jpg" >
           </div>
           <p>生活垃圾</p>
         </div>
         <div class="li" @click="tiao('餐厨垃圾')">
           <div class="lihe">
            <img src="../assets/cancu.jpg" >
           </div>
           <p>餐厨垃圾</p>
         </div>
         <div class="li"  @click="tiao('农林固废')">
           <div class="lihe">
            <img src="../assets/nogling.jpg" >
           </div>
           <p>农林固废</p>
         </div>
      </div>
       <!-- 相关资讯第一排完 -->
       <div class="tupian"> 
         
         <div class="li" @click="tiao('废旧家电')">
           <div class="lihe">
            <img src="../assets/jiadian.jpg" >
           </div>
           <p>废旧家电</p>
         </div>
         
          <div class="li" @click="tiao('废旧汽车')">
           <div class="lihe">
            <img src="../assets/qiche.jpg" >
           </div>
           <p>废旧汽车</p>
         </div>
          
          <div class="li"  @click="tiao('废纸废玻璃')">
           <div class="lihe">
            <img src="../assets/zhi.jpg" >
           </div>
           <p>废纸废玻璃</p>
         </div>

          <div class="li" @click="tiao('废旧纺织品')">
           <div class="lihe">
            <img src="../assets/fangzhip.jpg" >
           </div>
           <p>废旧纺织品</p>
         </div>

      </div>
       <!-- 相关资讯第二排完 -->
       <!-- 交易服务第三排开始 -->
       <div class="tupian"> 
         
         <div class="li"  @click="tiao('废钢铁')">
           <div class="lihe">
            <img src="../assets/gangtie.jpg" >
           </div>
           <p>废钢铁</p>
         </div>
         
          <div class="li" @click="tiao('废旧塑料')">
           <div class="lihe">
            <img src="../assets/suliao.jpg" >
           </div>
           <p>废旧塑料</p>
         </div>
          
          <div class="li"  @click="tiao('工业固废')">
           <div class="lihe">
            <img src="../assets/gongye.jpg" >
           </div>
           <p>工业固废</p>
         </div>

          <div class="li" >
           <div class="lihe">
            <!-- <img src="../assets/gongye.jpg" > -->
           </div>
           <p></p>
         </div>
      
      </div>
       <!-- 交易单位开始 -->
       <p class="one">交易单位</p>
        <div class="hengxiangerwew"></div>
       <div class="jiaoyidan">
         
         <div class="center">
           <span>长治首钢生物质能源有限公司</span>
           <span>长治启迪有限公司</span>
           <span>长治格来美有限公司</span>
           <span>长治市梦之祥再生资源回收利用有限公司</span>
           <span>山西晋能水泥集团</span>
           <span>山西洪洋海鸥废弃电器电子产品回收处理有限公司</span>
           <span>山西瑞赛格废弃资源综合利用有限公司</span>
           <span>长治市碧海蓝天建筑垃圾处理有限公司</span>
           <span>长治晋清科技有限公司</span>
           <span>长治市漳泽工业园区</span>
         </div>
       </div>
       
        <!-- 政策服务开始  -->
        <!-- <p class="one">政策服务</p>
       <div class="hengxiangerwew"></div>
       <div class="tupian2"> 
         
         <div class="li">
           <div class="lihe">
            <img src="../assets/newsq.jpg" >
           </div>
           <p class="news">新修订的固体废物污染环境防治法</p>
           <p class="newsp">新修订的固体废物污染环境防治法自2020年9月1日起施行（附全文）</p>
           <p class="newsp">2020年3月1日</p>
         </div>
         
          <div class="li">
           <div class="lihe">
            <img src="../assets/newsw.jpg" >
           </div>
           <p class="news">装备制造业规范条件</p>
           <p class="newsp">工信部公告：《环保装备制造业（固废处理装备）规范条件》</p>
           <p class="newsp">2020年4月11日</p>
         </div>
          
          <div class="li">
           <div class="lihe">
            <img src="../assets/newe.jpg" >
           </div>
           <p class="news">政策解读</p>
           <p class="newsp">《山西省焦化行业压减过剩产能打好污染防治攻坚战行动方案》政策解读</p>
           <p class="newsp">2020年4月30日</p>
         </div>
      </div> -->
      <!-- 政策服务第一行结束  -->
        <!-- <div class="tupian2"> 
         
         <div class="li">
           <div class="lihe">
            <img src="../assets/newsa.jpg" >
           </div>
           <p class="news">官方解读</p>
           <p class="newsp">官方解读 | 新修订的固废法有哪些看点？</p>
           <p class="newsp">2020年3月1日</p>
         </div>
         
          <div class="li">
           <div class="lihe">
            <img src="../assets/news.jpg" >
           </div>
           <p class="news">蓝天保卫战 </p>
           <p class="newsp">我国将制定实施打赢蓝天保卫战2020年攻坚行动工作方案</p>
           <p class="newsp">2020年3月1日</p>
         </div>
          
          <div class="li">
           <div class="lihe">
            <img src="../assets/newd.jpg" >
           </div>
           <p class="news">专项资金申报</p>
           <p class="newsp">专项资金申报 | 2020年绿色制造系统解决方案供应商招标公告新鲜出炉</p>
           <p class="newsp">2020年4月30日</p>
         </div>
      </div> -->
      <!-- 政策服务第二行结束   -->
    </div>

    <!-- 人才介绍开始 -->
    <div class="dise">
      <div class="zhong">
        <p class="one">人才介绍</p>
        <div class="hengxiangerwew"></div>
        <div class="rencai">
          
          <div class="renwai">
            <div class="touxiang">
               <img src="../assets/rencaia.jpg" alt="">
            </div>
            <p class="name">教授-程芳琴</p>
            <div class="zhedan">
              <p>程芳琴</p>
              <div class="hengxian2"></div>
              <p>程芳琴教授，现任山西大学副校长。国家科技进步二等奖获得者，国家“新世纪百千万人才工程”入选者，山西省“三晋学者”特聘教授</p>
            </div>
          </div>
          <div class="renwai">
            <div class="touxiang">
               <img src="../assets/rencaib.jpg" alt="">
            </div>
            <p class="name">教授-廖洪强</p>
            <div class="zhedan">
              <p>廖洪强</p>
              <div class="hengxian2"></div>
              <p>开展煤矸石、粉煤灰、脱硫石膏等煤基固废理化特性及其复配料高温特性、粉磨特性、活化特性等基础理论研究</p>
            </div>
          </div>
          <div class="renwai">
            <div class="touxiang">
               <img src="../assets/rencaic.jpg" alt="">
            </div>
            <p class="name">教授-杨凤玲</p>
            <div class="zhedan">
              <p>杨凤玲</p>
              <div class="hengxian2"></div>
              <p>围绕低热值煤的清洁燃烧和节能减排，以低热值煤民用和工业燃烧污染物控制为主要研究对象</p>
            </div>
          </div>
          <div class="renwai">
            <div class="touxiang">
               <img src="../assets/rencaid.jpg" alt="">
            </div>
            <p class="name">教授-郭彦霞 </p>
            <div class="zhedan">
              <p>郭彦霞</p>
              <div class="hengxian2"></div>
              <p>提出粉煤灰、煤矸石中铝硅资源及伴生稀有元素高效提取的工艺路线和方法；重点研究煤中伴生资源在煤炭加工过程中的迁移转化规律及机理</p>
            </div>
          </div>
        </div>
        
      </div>
      <!-- 人才模块结束 -->

      <div class="changjian">
        <div class="zhong">
          <!-- 第一个大块开始 -->
          <div class="chao">
            <div class="left">
              <h2>常见垃圾</h2>
            </div>
            <div class="right">
              <!-- 第一行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('玻璃','20')">
                 <div class="imgim">
               <img src="../assets/boli.jpg" alt="">
            </div>
                  <p>玻璃</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('废纸','0.3')">
                  <div class="imgim">
                     <img src="../assets/zhi.jpg" alt="">
                  </div>
                  <p>废纸</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('钢铁','60')">
                  <div class="imgim">
                     <img src="../assets/gangtie.jpg" alt="">
                  </div>
                  <p>钢铁</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('塑料','11')">
                  <div class="imgim">
                     <img src="../assets/suliao.jpg" alt="">
                  </div>
                  <p>塑料</p>
                </div>
                <!-- 第一个结束 -->
              </div>
              <!-- 第一行结束 -->

              <!-- 第一行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('衣服布料','40')">
                 <div class="imgim">
               <img src="../assets/fangzhip.jpg" alt="">
            </div>
                  <p>衣服布料</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('家电','60')">
                  <div class="imgim">
                     <img src="../assets/jiadian.jpg" alt="">
                  </div>
                  <p>家电</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('陶瓷','70')">
                  <div class="imgim">
                     <img src="../assets/taoci.jpg" alt="">
                  </div>
                  <p>陶瓷</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('汽车','102')">
                  <div class="imgim">
                     <img src="../assets/qiche.jpg" alt="">
                  </div>
                  <p>汽车</p>
                </div>
                <!-- 第一个结束 -->
              </div>
              <!-- 第一行结束 -->
            </div>
          </div>
        </div>
      </div>
      <!-- 常见垃圾结束 -->


      <div class="changjian">
        <div class="zhong">
          <!-- 第一个大块开始 -->
          <div class="chao">
            <div class="left2">
              <h2>建筑垃圾</h2>
            </div>
            <div class="right">
              <!-- 第一行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('油漆桶','16')">
                 <div class="imgim">
               <img src="../assets/paohua2.jpg" alt="">
            </div>
                  <p>油漆桶</p>
                </div>
                <!-- 第二个开始 -->
                <div class="list" @click="buy('金属门窗','50')">
                  <div class="imgim">
                     <img src="../assets/paohua.jpg" alt="">
                  </div>
                  <p>金属门窗</p>
                </div>
                <!-- 第三个开始 -->
                <div class="list" @click="buy('碎木','66')">
                  <div class="imgim">
                     <img src="../assets/muliao.jpg" alt="">
                  </div>
                  <p>碎木</p>
                </div>
                <!-- 第四个开始 -->
                <div class="list" @click="buy('碎石块','88')">
                  <div class="imgim">
                     <img src="../assets/shitou.jpg" alt="">
                  </div>
                  <p>碎石块</p>
                </div>
                <!-- 第四个结束 -->
              </div>
              <!-- 第一行结束 -->
              <!-- 第二行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('水泥块','205')">
                 <div class="imgim">
               <img src="../assets/shiban.jpg" alt="">
            </div>
                  <p>水泥块</p>
                </div>
                <!-- 第二个开始 -->
                <div class="list" @click="buy('沥青块','45')">
                  <div class="imgim">
                     <img src="../assets/jianyan.jpg" alt="">
                  </div>
                  <p>沥青块</p>
                </div>
                <!-- 第三个开始 -->
                <div class="list" @click="buy('渣土','56')">
                  <div class="imgim">
                     <img src="../assets/huntu.jpg" alt="">
                  </div>
                  <p>渣土</p>
                </div>
                <!-- 第四个开始 -->
                <div class="list" @click="buy('砖瓦碎块','94')">
                  <div class="imgim">
                     <img src="../assets/zhuang.jpg" alt="">
                  </div>
                  <p>砖瓦碎块</p>
                </div>
                <!-- 第四个结束 -->
              </div>
              <!-- 第二行结束 -->
          
            </div>
          </div>
        </div>
      </div>
      <!-- 建筑垃圾结束 -->

       <div class="changjian">
        <div class="zhong">
          <!-- 第一个大块开始 -->
          <div class="chao">
            <div class="left3">
              <h2>工业固废</h2>
            </div>
            <div class="right">
              <!-- 第一行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('电石渣','22.00')">
                 <div class="imgim">
               <img src="../assets/dianshi.jpg" alt="">
            </div>
                  <p>电石渣</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('尾矿','45.00')">
                  <div class="imgim">
                     <img src="../assets/zha.jpg" alt="">
                  </div>
                  <p>尾矿</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('盐泥','77.00')">
                  <div class="imgim">
                     <img src="../assets/yanni.jpg" alt="">
                  </div>
                  <p>盐泥</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list"  @click="buy('米花岩石','98.00')">
                  <div class="imgim">
                     <img src="../assets/mihuayan.jpg" alt="">
                  </div>
                  <p>米花岩石</p>
                </div>
                <!-- 第一个结束 -->
              </div>
              <!-- 第一行结束 -->

              <!-- 第一行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('铝渣','25.00')">
                 <div class="imgim">
               <img src="../assets/lvzha.jpg" alt="">
            </div>
                  <p>铝渣</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list"  @click="buy('化工铁粉','87.00')">
                  <div class="imgim">
                     <img src="../assets/lvyange.jpg" alt="">
                  </div>
                  <p>化工铁粉</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list" @click="buy('锌渣','87.00')">
                  <div class="imgim">
                     <img src="../assets/xinzha.jpg" alt="">
                  </div>
                  <p>锌渣</p>
                </div>
                <!-- 第一个结束 -->
                <!-- 第一个开始 -->
                <div class="list"  @click="buy('硼渣','87.00')">
                  <div class="imgim">
                     <img src="../assets/pengzha.jpg" alt="">
                  </div>
                  <p>硼渣</p>
                </div>
                <!-- 第一个结束 -->
              </div>
              <!-- 第一行结束 -->
            </div>
          </div>
        </div>
      </div>
      <!-- 工业固废结束 -->


      <div class="changjian">
        <div class="zhong">
          <!-- 第一个大块开始 -->
          <div class="chao">
            <div class="left4">
              <h2>固废制品</h2>
            </div>
            <div class="right">
              <!-- 第一行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('粉煤灰陶粒','209')">
                 <div class="imgim">
               <img src="../assets/zpq.jpg" alt="">
            </div>
                  <p>粉煤灰陶粒</p>
                </div>
                <!-- 第二个开始 -->
                <div class="list" @click="buy('陶粒砂轻质干拌混凝土','156')">
                  <div class="imgim">
                     <img src="../assets/zpw.jpg" alt="">
                  </div>
                  <p>陶粒砂轻质干拌混凝土</p>
                </div>
                <!-- 第三个开始 -->
                <div class="list" @click="buy('陶粒隔墙板','208')">
                  <div class="imgim">
                     <img src="../assets/zpr.jpg" alt="">
                  </div>
                  <p>陶粒隔墙板</p>
                </div>
                <!-- 第四个开始 -->
                <div class="list" @click="buy('粉煤灰雕塑','499')">
                  <div class="imgim">
                     <img src="../assets/zpe.jpg" alt="">
                  </div>
                  <p>粉煤灰雕塑</p>
                </div>
                <!-- 第四个结束 -->
              </div>
              <!-- 第一行结束 -->
              <!-- 第二行开始 -->
              <div class="top">
                <!-- 第一个开始 -->
                <div class="list" @click="buy('碳金地板','300')">
                 <div class="imgim">
               <img src="../assets/zpt.jpg" alt="">
            </div>
                  <p>碳金地板</p>
                </div>
                <!-- 第二个开始 -->
                <div class="list" @click="buy('陶粒隔音板','258')">
                  <div class="imgim">
                     <img src="../assets/zpy.jpg" alt="">
                  </div>
                  <p>陶粒隔音板</p>
                </div>
                <!-- 第三个开始 -->
                <div class="list" @click="buy('粉煤灰多孔砖','89')">
                  <div class="imgim">
                     <img src="../assets/zpu.jpg" alt="">
                  </div>
                  <p>粉煤灰多孔砖</p>
                </div>
                <!-- 第四个开始 -->
                <div class="list" @click="buy('粉煤灰烧结砖','87')">
                  <div class="imgim">
                     <img src="../assets/zpi.jpg" alt="">
                  </div>
                  <p>粉煤灰烧结砖</p>
                </div>
                <!-- 第四个结束 -->
              </div>
              <!-- 第二行结束 -->
          
            </div>
          </div>
        </div>
      </div>
      <!-- 固废制品结束 -->
 
      
      <!-- 我是买家我是卖家结束 -->
    </div>
    <div class="dibu">
      <p class="p">山西省通信管理局备案局：晋ICP备12002432号 10297836</p>
      <p class="p">版权所有 @2020 山西未来数字研究院主办</p>
    </div>
  
   
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'iconhome',
      img_list: ['banner2','banner3'
      
      ],
    }
  },
  methods: {
    tiao:function(e){
      this.$router.push({name: 'news', params: {laji:e}})
    },
    buy:function(e,b){
      this.$router.push({name: 'buy', params: {laji:e,jiage:b,beizhu:'eut'}})
    },
    tiao66:function(){
      console.log(this.$store.state.user)
      // 判断有无登录，无登录跳到登录页面
      if(this.$store.state.user === '') {
        this.$router.push({name: 'denglu'})
        return false
      }
       if(this.$store.state.qy_type !== 1) {
        this.$router.push({name: 'denglu'})
        return false
      }
      if(this.$store.state.renzheng === '') {
        this.$router.push({name: 'renzheng'})
      }
    },
    tiao67:function(){
       this.$router.push({name: 'erweima'})
    },
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.imgdiv {
  width: 100%;
  background-color: #ffffff;
  /* height: 200px; */

}
.one {
  font-size: 20px;
  margin-top: 54px;
  height: 50px;
  width: 90px;
  border-bottom:2px solid #6385f6;
}
.hengxiangerwew {
  width: 100%;
  height: 1px;
  background-color: #dadbdc;
}
.zhong {
    width:1226px;
    margin:0 auto;
    overflow: hidden;
    /* background-color: pink; */
  }
  .zhong2 {
    width:1226px;
    /* height: 1px; */
    margin:0 auto;
    overflow: hidden;
    padding-bottom: 30px;
  }
.tupian {
  width: 100%;
  height: 200px;
  /* background-color: pink; */
  margin-bottom: 90px;
  margin-top: 60px;
  display:flex;
}
.tupian .li {
  flex:1;
  height: 260px;
  /* background-color: green; */
  padding-right: 45px;
  /* border-radius: 10px; */
  /* overflow: hidden; */
  margin-bottom: 300px;
  cursor:pointer;
}
.tupian .li:last-child {
   padding-right: 0px;
}
.lihe img {
  height: 100%;
  width: 100%;
}
.lihe {
  width: 100%;
  height: 186px;
  border-radius: 10px;
  /* background-color: pink; */
   overflow: hidden
}
.li p {
  width: 100%;
  /* background-color: pink; */
  text-align: center;
  color: #000000;
  margin-top: 30px;
  font-size: 16px;
}

.jiaoyidan {
  width: 100%;
  height: 75px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #eff1f7;
  margin-top: 30px;
  /* display: flex; */
}
 .biaotirtr {
  width: 100%;
  height: 50px;
  margin-top:80px;
  padding: 2px;
  box-sizing: border-box;
  /* display:inline-block */
  /* background-color: #e4e6ed; */
  color: #2a2b36;
  font-size: 18px;
  text-align: left;
  line-height:50px;
  z-index: 999;
}
.jiaoyidan .center {
  width: 9000px;
  display: inline-block;
  /* height: 200px; */
  /* background-color: pink; */
  /* overflow: hidden; */
}

.jiaoyidan .center{z-index: 99;animation: de1 15s ease-in-out 1s infinite normal; } 
@keyframes de1{0%{transform:translate(0px,0px);opacity:1;}100%{transform:translate(-1250px,0px);opacity:1;}}


.center span {
  display: inline-block;
  background-color: #ffffff;
  padding: 11px;
  height: 30px;
  line-height: 30px;
  margin-top: 12px;
  margin-right: 10px;
  font-size: 16px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .li .news {
    text-align: left;
    color: #2a2b36;
    font-size: 18px;
  }

  .li .newsp {
    text-align: left;
    color: #818991;
    font-size: 16px;
    margin-top: 12px;
  }
  .tupian2 {
    width: 100%;
    height: 300px;
    /* background-color: pink; */
    margin-bottom: 30px;
    margin-top: 60px;
    display:flex;
  }
.tupian2 .li {
  flex:1;
  height: 260px;
  /* background-color: green; */
  padding-right: 45px;
  /* border-radius: 10px; */
  /* overflow: hidden; */
  margin-bottom: 300px;
  cursor:pointer;
}
.tupian2 .li:last-child {
   padding-right: 0px;
}
.dise {
  width: 100%;
  height: 2520px;
  background-color: hsl(216, 26%, 96%);
}
.rencai {
  width: 100%;
  display: flex;
  padding-bottom: 30px;
  
}
.renwai {
  flex:1;
  margin-right: 22px;
  height: 260px;
  margin-top:20px;
  background-color: #ffffff;
  position:relative;
  overflow: hidden;
}
.renwai:last-child {
  margin-right: 0px;
}
.touxiang {
  width: 127px;
  height: 127px;
  background-color: #d83a2e;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
}
.name {
  text-align: center;
  margin-top: 26px;
  font-size: 18px;
}
.touxiang img {
  margin: 0 auto;
  text-align: center;
}
.zhedan {
  width: 100%;
  height: 260px;
  background-color: #2a2b36;
  opacity: 0.8;
  position: absolute;
  top: 260px;
  left: 0px;
}
.renwai:hover .zhedan {
  top: 0px;
  left: 0px;
}
.zhedan p {
  color: #ffffff;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
}
.zhedan p:first-child {
   margin-top: 40px;
}
.hengxian2 {
  width: 39px;
  height: 1px;
  background-color: #898989;
  margin-left: 20px;
  margin-top: 20px;
}
.changjian {
  width: 100%;
  /* height: 800px; */
  padding-bottom: 30px;
  margin-top: 20px;
  background-color: #ffffff;
}
.chao {
  display: flex;
  width: 100%;
  /* height: 492px; */
  margin-top: 30px;
  /* background-color: red; */
}
.changjian   .left {
  flex: 1;
  height: 430px;
  background-color: #f1d581;
}
.changjian   .left2 {
  flex: 1;
  height: 430px;
  background-color: #94cfee;
}
.changjian   .left3 {
  flex: 1;
  height: 430px;
  background-color: #8dd1ad;
}
.changjian   .left4 {
  flex: 1;
  height: 430px;
  background-color: #b695a0;
}
.changjian   .right {
  flex: 4;
  height: 430px;
  /* background-color: palegreen; */
}
 h2 {
  color: #ffffff;
  font-size: 23px;
  margin-left: 40px;
  margin-top: 60px;
  font-weight: 800;
}
.top {
  display: flex;
}
.list {
  flex: 1;
  margin-left: 20px;
  cursor:pointer;
}

.imgim {
  background-color: #ffffff;
  width: 230px;
  height: 138px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
}
.list p {
  text-align: center;
  margin-top: 18px;
}
.imgim img {
  width: 100%;
}
.maijia {
  width: 280px;
  height: 103px;
  background-color: #f0f3fa;
  border-radius: 10px;
  margin-right: 20px;
  margin-top: 30px;
  display: flex;
}
.maiwai {
  display: flex;
}
.icon {
  width: 52px;
  height: 47px;
  /* background-color: pink; */
}
.maijia p {
  line-height: 50px;
  font-size: 20px;
  /* margin-left: 20px; */
}
.maijia .p3 {
  margin-left: 20px;
}
.maijia {
  padding-top:30px;
  padding-left: 60px;
  box-sizing: border-box;
  cursor:pointer;
}
.dibu {
  width: 100%;
  height:160px;
  background-color: #000000;
  padding-top: 30px;
}
.p {
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


</style>
