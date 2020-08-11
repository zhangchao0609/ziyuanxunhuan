<template>
  <div class='box'>
    <div class="topbiao">
        <h2>资源循环慧眼</h2>
        <img src="../assets/biao.png" alt="">
        <button @click="to">返回</button>
    </div>
    <p class="sp">视频展示</p>
    <div class="zhanshi"   v-for="(item,index) in video"  :key=" index">
      <h2>视频名称:{{mh[index].spmc}}</h2>
      <p class="gsmc">公司名称:{{mh[index].splygs}}</p>
      <div class="shipin">
       <video-player
       ref="videoPlayer"
       :playsinline="true"
       :options="playerOptions[index]"
       ></video-player>
    </div>
    </div>

   
  </div>
</template>

<script>
export default {
  data(){
    return{
            playerOptions:[], 
            video:[],
            mh:[],
    }
  },
  created(){
      this.getVideo()
  },
  methods:{
    to(){
      this.$router.go(-1)
    },
      // 请求视频
    async getVideo(){
       const data=await this.$axios.get('/api/zdc/selectSp')
          // console.log(data)
          this.mh=data.data.message
        for(var i=0;i<4;i++){
          let src="https://jgs.jinguanshou.cn:3443"+data.data.message[i].spdz
          this.video.push(src)
          let arr={
             playbackRates:[0.7, 1.0, 1.5, 2.0], //播放速度
              autoplay: true, //如果true,浏览器准备好时开始回放。
              muted: true, // 默认情况下将会消除任何音频。
            loop: true, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:8', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
              src: src //url地址
            }],
            // width: document.documentElement.clientWidth, //播放器宽度
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true,  //全屏按钮,
            }
          }
          this.playerOptions.push(arr)
        }
          
       
    }
  }
}
</script>

<style scoped >
*{
  margin: 0;
  padding: 0;
}
.box {
   width: 100%;
   height:956px;
   background-color: #040709;
 }
 .topbiao {
   position: relative;
   width: 100%;
   height: 80px;
   background-color: #0f1217;
   padding-top: 20px;
 }
 .topbiao h2 {
   color: #ffffff;
   text-align: center;
   /* margin-top: 20px; */
   font-size: 28px;
 }
  .sp{
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    color: #ffffff;
    margin-top: -20px;
    padding-top: 30px;
    font-weight: 700;
  }
  .zhanshi{
    float: left;
    width: 50%;
    height: 400px;
  

  }
  h2{
    font-size: 22px;
    color: #ffffff;
    margin: 10px 0;
    text-align: center;
  }
  .gsmc{
    font-size: 20px;
    color: #ffffff;
    text-align: center;
  }
  .shipin{
    margin-top: 30px;
  }
  .shipin .video-player{
    object-fit: fill;
    width:580px;
    height:190px;
    margin:0 auto;
   margin-bottom: 10px;
  }

.video-player .vjs-tech{
  object-fit: fill;
  width: 100%;
}
button{
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 114px;
  font-size: 20px;
  background-color: #0F1217;
  color: #ffffff;
   border: 1px solid #0F1217;
  outline: none;
 
}
</style>