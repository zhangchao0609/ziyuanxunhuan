<template>
  <div class="hello">
      <div class="shang">
        <div class="zhong">
          <div class="gong">
            <div class="logoicon">
              <img src="../assets/logo2.png" alt="">
            </div> 
            <div class="denglu" v-if="shouyu" >
              <span  @click="denglu()">登录</span>
              <span>｜</span>
              <span @click="zhuce()">注册</span>
            </div>
            <div class="denglu" v-if="shouyu2" >
              <span @click="renzheng()">{{wenzi}}</span>
              <span>｜</span>
              <span @click="denglu()">退出</span>
            </div>
          </div>
          
        </div>
        
      </div>
      <div class="danhang">
        <div class="zhong">
          <router-link class="texts" to="/HelloWorld/home">首页</router-link>
          <router-link class="texts" to="/HelloWorld/jidi">基地概括</router-link>
          <!-- <router-link class="texts" to="/HelloWorld/chanyelian">产业链</router-link> -->
          <router-link class="texts" to="/HelloWorld/zhengce">政策解读</router-link>
          <router-link class="texts" to="/HelloWorld/rencai">人才库</router-link>  
           <router-link class="texts" to="/HelloWorld/news">资源交易</router-link>
          <router-link class="texts" to="/HelloWorld/zhiping">制品交易</router-link>
          <router-link class="texts" to="/HelloWorld/zhuangbei">装备交易</router-link>
          <router-link class="texts" to="/HelloWorld/jishufuw">技术服务</router-link>
          <router-link class="texts" to="/dashuju">大数据平台</router-link>
          <!-- <router-link class="text" to="/HelloWorld/jishufuw">产业链技术</router-link> -->
          
        </div>
      </div>
      <div class="wai">
        <!-- <div class="zhong"> -->
        <router-view/>
        <!-- </div> -->
      </div>
      
      
  
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      shouyu:true,
      shouyu2:false,
      wenzi:"",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted (){
    console.log(this.$store.state.user)
    if(this.$store.state.user == ''){
      this.shouyu = true
      this.shouyu2 = false
    } else {
      this.shouyu = false
      this.shouyu2 = true
      this.wenzi = this.$store.state.user
    }
  },
  methods :{
    denglu () {
       this.$router.push({name: 'denglu'})
    },
    zhuce(){
      this.$router.push({name: 'zhuce'})
    },
    renzheng(){
       this.$router.push({name: 'renzheng'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .shang {
   width: 100%;
   height: 80px;
   background-color: #ffffff;
 }
 .danhang {
   width: 100%;
   height: 70px;
   background-color: #447be8;
 }
 .texts {
  display: inline-block;
  width:118px;
  line-height:68px;
  text-align: center;
  text-decoration:none;
  /* background-color: #fff; */
  font-size: 16rpx;
  color: #ffffff;
  font-weight: 400;
 }
 .zhong {
    width:1226px;
    margin:0 auto;
    /* background-color: pink; */
  }
 .router-link-active{
    border-bottom:3px solid #e3e2f2;  
    /* color:#ffffff; */
  }
  .hello {
    background-color: #ffffff;
  }
  .logoicon img {
    width: 260px;
    height: 45px;
    margin-left: 30px;
    margin-top: 20px;
  }
  .gong {
    display: flex;
  }
  .gong {
    flex: 1;
  }
  .denglu {
    flex: 4;
    text-align: right;
    line-height: 80px;
    /* color: #447be8; */
    cursor: pointer;
  }

</style>
