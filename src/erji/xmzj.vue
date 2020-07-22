<template>
  <div id="app">
      <div class="zhong">
         <p v-if="zanwu" class="zanwuw">啊呀！~ 暂无信息 ~</p>
        <div class="mohe"  v-for="site in sites">
            <div class="yqz" >
                <img src="../assets/newsw.jpg" alt="">
            </div>
            <div class="yqy" @click="tiaoxqing(site.id)" >
               <h2 class="yqh2">{{site.ptitle}}</h2>
               <p class="des">{{site.pcontent}}</p>
               <img src="../assets/time.png" alt=""><span>{{site.ptime}}</span><img src="../assets/yanjing.png" alt=""> <span>{{site.browseNumber}}</span> 
            </div>
            
        </div>

        

      </div>
  </div>
</template>

<script>
export default {
  name: 'yiqing',
  data () {
    return {
      sites:[],
      zanwu :false
    }
  },
  methods :{
    tiaoxqing(w){
      this.$router.push({name: 'xwdxq', params: {id:w}})
    } 
  },
  created(){
    var that = this
    console.log('咘咘')
    this.$axios({
          method: 'get',
           url: '/api/zpolc/selectAll?policyType='+4,
           policyType: 1
        }).then(res => {
          console.log(res.data.message);
          that.sites = res.data.message
          if( res.data.message == [] ){
            that.zanwu = true
          }
        }).catch(error => {
         
      });
  },
}
</script>

<style>
 * {
   margin: 0;
 }
 .mohe {
   width: 1200px;
   height: 150px;
   margin-left: 20px;
   margin-top: 40px;
   /* background-color: pink; */
   display: flex;
 }
 .yqz {
   flex: 1;
   /* background-color: green; */
   border-radius: 5px;
 }
 .yqy {
   margin-left: 20px;
   flex: 3;
   /* background-color: red;   */
   cursor: pointer;
 }
 .yqh2 {
    font-size: 18px;
    line-height: 1.3;
    margin-top: 0;
 }
 .des {
    line-height: 1.6;
    color: #777;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 28px;
    line-height: 1.6;
    height: 40px;
    /* background-color: pink; */
    color: #777;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 28px;
     overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
 }
 .yqy img{
    width: 14px;
    height: 14px;
    margin-right: 5px;
 }
 .yqy span {
     /* line-height: 1.6; */
    color: #777;
    font-size: 14px;
    margin-top: 16px;
    margin-right: 20px;
 }
 .hengxiangx {
     width: 100%;
     height: 1px;
     background-color: #2a2b36;
 }
 .yqz img {
     width: 100%;
 }
 .x {
     width: 1000px;
     height: 1px;
     background-color: #000000;
 }
 .zanwuw {
    margin-left: 40px;
    color: red;
    /* font-size: ; */
    margin-top: 40px;
  }
</style>
