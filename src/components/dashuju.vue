<template>
  <div class="app">
    <div class="topbiao">
        <h2>资源循环慧眼</h2>
        <img src="../assets/biao.png" alt="">
    </div>
    <div class="zhongbiao">
        <div class="zhongd">
            <div class="lei">
                <div class="xuan" @click="huoqu(4)">
                  <div class="c1">生活垃圾</div>
                  <div class="z1" @click="to">长治首钢生物质能源有限公司</div>
                </div>
                <div class="xuan" @click="huoqu()">
                  <div class="c2">建筑垃圾</div>
                </div>
                <div class="xuan" @click="huoqu(1)">
                  <div class="c3">污泥餐厨</div>
                  <div class="z3">长治市晋清科技有限公司</div>
                </div>
                <div class="xuan" @click="huoqu(2)">
                  <div class="c4">废旧家电</div>
                  <div class="z4">山西洪洋海鸥</div>
                </div>
                <div class="xuan" @click="huoqu(3)">
                  <div class="c5">废旧汽车</div>
                  <div class="z5">长治市梦之祥</div>
                </div>
                <div class="xuan" @click="huoqu()">
                  <div class="c6">农林固废</div>
                </div>
                <div class="xuan" @click="huoqu()">
                  <div class="c7">废旧纺织品</div>
                </div>
                <div class="xuan" @click="huoqu(5)">
                  <div class="c8">工业固废</div>
                  <div class="z8">山西瑞赛格</div>
                </div>
            </div> 
        </div>                                  
    </div>
    <div class="zuiwai">
      <h1>{{$store.state.canshu3}}</h1>
      <div class="waihe">
        <div class="left">
            <div style="font-size:13px;border:1px solid #225ea6;width:92%;margin:0 auto;mzrginpadding-top:30px;padding-right:30px;padding-left:30px;padding-bottom:30px;box-sizing:border-box">
                <div class="h2" style="margin-top:1.6rem;font-size:22px;font-weight:550">项目名称及单位:</div>
                <p class="h3" style="font-size:20px;font-weight:500">{{gmnr}} 、 {{xmfzr}}</p> 
                <h2 style="margin-top:1.6rem">项目基本情况</h2>
                <dv-decoration-3 style="width:250px;height:26px;margin-top:12px;margin-bottom:20px" />
                <div class="h2"  >项目建设内容:</div>
                <p class="h3">{{thysp}}</p>
                <div class="h2"  >项目规模:</div>
                <p class="h3">{{jjxy}}</p>
                <!--  -->
            </div> 
            <div style="font-size:13px;border:1px solid #225ea6;margin:0 auto;padding-right:30px;width:92%;margin-top:20px;padding-top:30px;margin-left:auto;padding-left:30px;padding-bottom:10px;box-sizing:border-box">
                <div class="tupian">
                    <div class="tupian1" >
                        <h2 style="margin-top:0.3rem">lctp流程图</h2>
                         <viewer :images="imgs">
                            <img v-for="src in imgs" :src="src.url" :key="src.title" style="margin-top:16px" >
                        </viewer>
                    </div>
                </div>
            </div> 
            
        </div>
        <div class="right">                                               
           <dv-border-box-8 style="width:88%;height:30px;padding-left:20px;line-height:30px;margin-left:0.2rem;margin-top:0.4rem;color:#ffffff;font-size:13px;">
			        年度投资/总投资
			     </dv-border-box-8>
            <div id="myChart" style="width:100%;height:130px;margin-left:-50px"></div>
           <dv-border-box-8 style="width:88%;height:30px;padding-left:20px;line-height:30px;margin-left:0.2rem;margin-top:0.4rem;color:#ffffff;font-size:13px;">
			         项目投资进度
			     </dv-border-box-8>
            <div id="main" style="width:100%;height:260px;margin-bottom:0.2rem;margin-left:-50px"></div>
           <dv-border-box-8 style="width:88%;height:30px;padding-left:20px;line-height:30px;margin-left:0.2rem;margin-top:0.4rem;color:#ffffff;font-size:13px;">
			          问题诉求
			     </dv-border-box-8>
            <dv-scroll-board :config="configg" style="width:90%;height:200px;margin-top:0.2rem;margin-left:0.25rem;margin-bottom:0.5rem;" />
        </div>
      </div> 
    </div>
  </div> 
</template>
<script>
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
// import china from 'echarts/map/json/province/shanxi.json'
echarts.registerMap('china', china)
export default {
  name: 'App',
  data() {
		return {

            loging : true,
            // 项目需要
            jjxy:"",
            thysp:"",
            gmnr:"",
            fzrdh:"",
            xmfzr:"",
            quyu:"",
            quyu2:"",
            // 完成资料
            ziliao:"用地预审、规划选址、审批、核准、备案",
            ziliao2:"建设用地规划许可证核发、乡村建设规划许可证核发",
            ziliao3:"",
            // 钉钉需要
            agentId: '522877071',
            corpId :'',
            url:'',                                                                                                                                                                                                                                                                                                                                
            timeStamp  : '1582804531',
            nonceStr  :'',
            signature  : '',
            userss:['25635218251258642'],
            // 图片数据
            imgs: [  
                {
                    url: 'https://jgs.jinguanshou.cn:3443/zyxhwimages/ccljfh.jpg',
                },
                {
                    url: ''
                 }
            ],
            // 图片结束 
            // 项目进度情况数据
            styleObj1:{ backgroundColor:'#0c3646'},
            styleObj2:{ backgroundColor:'#0c3646'},
            styleObj3:{ backgroundColor:'#0c3646'},
            styleObj4:{ backgroundColor:'#0995cd',}, 
            // 项目进度文字所需样式
             stylewz1:{ color:'#0c3646'},
             stylewz2:{ color:'#1077a0'},
             // 项目投资情况
			opinionData2: [30,50,10,15,20,8,30,13 ],
            opinionData6:["100000", "0"],
            // 轮播表开始
             // 轮播表开始
        configg:{
          header: ['<span style="font-size:10px;">提交单位</span>', '<span style="font-size:10px;">反馈单位</span>','<span style="font-size:10px;">部门</span>', '<span style="font-size:10px;">类型</span>', '<span style="font-size:10px;">办理情况</span>', '<span style="font-size:10px;">说明</span>',],
          columnWidth	: ['100', '100', '70','70','100','70'],
          headerBGC:"#001218",
          oddRowBGC:"#003b51",
          evenRowBGC:"#0a2732",
          
          
          data: [
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
          ]
        },


		}
	},
  
   created(){
      if(this.$store.state.user === '') {
        this.$router.push({name: 'denglu'})
        return false
      }
       if(this.$store.state.qy_type !== 2) {
        this.$router.push({name: 'home'})
         this.$message({
          message: '无权限查看大数据',
          type: 'warning'
        });
        return false
      }
      if(this.$store.state.qy_type == 2) {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
    });
    let _this = this;
    this.$axios.all([  
    // 项目投资进度接口
    _this.$axios.get('/api/zdc/selectAll?xmlx=4'),
    ]).then(_this.$axios.spread(function(Investment){
  // 年度投资
   loading.close();
    // console.log(Investment.data.message)  
    // _this.isshow=Investment.data.message.id            
    _this.gmnr = Investment.data.message.xmmc
    _this.thysp = Investment.data.message.xmnr
    _this.jjxy = Investment.data.message.xmgm
    _this.opinionData6[1] = Investment.data.message.xmtz
    _this.xmfzr = Investment.data.message.ssdw
    _this.imgs[0].url = `https://jgs.jinguanshou.cn:3443${Investment.data.message.lctp}` 

        //实例化
      _this.$nextTick(function(){
           _this.drawLine('main')
           _this.distribution('myChart')
       })
    }))

      }
      
  },
 
// 获取数据结束
  methods :{
    // 跳转
    to(){
      this.$router.push('video')
    },
    
    //   钉钉开始
    dingding:function(){
        let _this = this
         this.$axios({
					method: 'get',
					url: '/api/czszhdd/ddhqxx/selectMethod?mobile='+_this.fzrdh,  
					}).then(res => {
                        if(res.data.errcode === 60121){
                            dd.ready(function() {
                                    dd.device.notification.alert({
                                        message: "项目负责人不在组织架构中",
                                        title: "提示",//可传空
                                        buttonName: "关闭",
                                        onSuccess : function() {
                                            //onSuccess将在点击button之后回调
                                            /*回调*/
                                        },
                                        onFail : function(err) {}
                                    }); 
                             });
                        }
                         _this.userss[0] = res.data.userid
					}).catch(error => {
		}); 
        this.$axios({
					method: 'get',
					url: '/api/czszhdd/ddsq/ddsqjk',
					}).then(res => {
					_this.agentId = res.data.agentId
                    _this.corpId = res.data.corpId
                    _this.timeStamp = res.data.timeStamp
                    _this.nonceStr = res.data.nonceStr
                    _this.signature = res.data.signature
                    // console.log(_this.signature)
                   _this.dingdingque()
					}).catch(error => {
		});  
    },
    huoqu:function(e){
        // console.log(e)
        if (!e){
          console.log('错误')
           this.$message({
          message: '抱歉，该分类暂无项目',
          type: 'warning'
        });
          return false
        }
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        let _this = this;
    this.$axios.all([  
    // 项目投资进度接口
    _this.$axios.get('/api/zdc/selectAll?xmlx='+e),
    ]).then(_this.$axios.spread(function(Investment){
  // 年度投资
    loading.close();
    // console.log(Investment.data.message)
      _this.isshow=Investment.data.message.id           
    _this.gmnr = Investment.data.message.xmmc
    _this.thysp = Investment.data.message.xmnr
    _this.jjxy = Investment.data.message.xmgm
    _this.opinionData6[1] = Investment.data.message.xmtz
    _this.xmfzr = Investment.data.message.ssdw
    _this.imgs[0].url = `https://jgs.jinguanshou.cn:3443${Investment.data.message.lctp}` 
        //实例化 
      _this.$nextTick(function(){
           _this.drawLine('main')
           _this.distribution('myChart')
       })



    }))

    },
    dingdingque:function(){
         let _this = this
        // console.log(_this.signature)
        dd.config({
            agentId:"522877071", // 必填，微应用ID
            corpId: _this.corpId ,//必填，企业ID
            timeStamp: _this.timeStamp , // 必填，生成签名的时间戳
            nonceStr: _this.nonceStr, // 必填，生成签名的随机串
            signature: _this.signature, // 必填，签名
            type:0, 
            jsApiList : [
                'runtime.info',
                'biz.contact.choose',
                'device.notification.confirm',
                'device.notification.alert',
                'device.notification.prompt',
                'biz.ding.post',
                'biz.util.openLink',
                'biz.chat.openSingleChat',
                'biz.telephone.call'
            ] // 必填，需要使用的jsapi列表，注意：不要带dd。
        });
		dd.ready(function() {
            dd.biz.telephone.call({
                
                users: _this.userss, //用户列表，工号
                
                corpId: 'dingb77c271ef0e620f635c2f4657eb6378f', //企业id
                onSuccess : function() {},
                onFail : function() {}
            })
        });
        dd.error(function(error){
            /**
                {
                errorMessage:"错误信息",// errorMessage 信息会展示出钉钉服务端生成签名使用的参数，请和您生成签名的参数作对比，找出错误的参数
                errorCode: "错误码"
                }
            **/
            alert('dd error: ' + JSON.stringify(error));
        });
    },
      // 项目开复工开始------------------------------
		drawLine(id) {
    //  自定义纵轴上的数字（加上万字）
        function tranNumber(num){
						var numStr = num.toString();
						// 十万以内直接返回
						if (numStr.length <5 ) {
							return numStr;
						}
						//大于8位数是亿
						else if (numStr.length > 8) {
							var decimal = numStr.substring(numStr.length - 8, numStr.length - 8 );
							return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
						}
						//大于6位数是十万 (以10W分割 10W以下全部显示)
						else if (numStr.length > 5) {
							var decimal = numStr.substring(numStr.length - 4, numStr.length - 4)
							return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
						}else if(numStr.length == 5){
							var decimal = numStr.substring(numStr.length - 3, numStr.length - 4)
							return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'; 
						}
        };
				this.myChart = echarts.init(document.getElementById(id))
				this.myChart.setOption({
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
            data: ['', ''],
					},
					grid: {
						left: '8%',
						right: '5%',
						bottom: '6%',
						containLabel: true,
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
          },
					xAxis: {
						name: '',
						type: 'category',
						boundaryGap: false,
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            // 改变文字的颜色
            axisLabel: {color: "#8b8b8b"},
            // 改变线条的颜色
						axisLine:{lineStyle:{color:"#1f1f1f"}},
					},
					yAxis: {
						name: '金额/万',
						type: 'value',
						// 上方文字的颜色和y轴的线
						axisLine:{show: false,lineStyle:{color:"#9a9a9a"}},
						axisTick: {//刻度
              show: false
						},
						axisLabel: {
							color: "#8b8b8b", 
							formatter: function(v){
                return tranNumber(v); 
              }
            },
						// axisLine:{lineStyle:{color:"#444444"}},
						// 改变网格的颜色
						splitLine: {
							show: true,
							lineStyle:{
							color: "#151515"
						  }
　          }
					},
					series: [{
						name: '借款',
						type: 'line',
            stack: '总借款',
            data: this.opinionDataone,
              // 改变折线条的颜色
            itemStyle:{
                normal:{
                color:'#fa971b',
                borderColor:'#ff9d1c',
                }
              }
              // 改变完
						},
						{
						  label: {
                 normal: {
                  show: true,
                  position: 'top',
									// 给折线上方加单位
									formatter: function(v){
									//  console.log(params.value)
									},
									textStyle: {
                    color: '#f2f2f2',//值的颜色
                    fontSize:10,
									}
									
                }
               },
							name: '投资金额',
							type: 'line',
							stack: '投资金额',
							data: this.opinionData2,
              // 变颜色
              itemStyle:{
                normal:{
                color:'#458937',
                borderColor:'#458937',
                }
              },
							// 改变完
							// 改区域的颜色
							areaStyle:{
                normal:{
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
                    offset: 0,
                    color: '#58b555'
                }, {
                    offset: 1,
                    color: '#000000'
                }])
								}
							}
								// 改区域的颜色
						},
					]
				})
			},
		// // 项目开复工------------------------------结束------------------------------------------------------------------------------------------------
        // 年度投资----------------------------------------------------------------------------------
		distribution(id){
			     //  自定义纵轴上的数字（加上万字）
						// function tranNumber(num){
						// 		var numStr = num.toString();
						// 		// 十万以内直接返回
						// 		if (numStr.length <5 ) {
						// 			return numStr;
						// 		}
						// 		//大于8位数是亿
						// 		else if (numStr.length > 8) {
						// 			var decimal = numStr.substring(numStr.length - 8, numStr.length - 8 );
						// 			return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
						// 		}
						// 		//大于6位数是十万 (以10W分割 10W以下全部显示)
						// 		else if (numStr.length > 5) {
						// 			var decimal = numStr.substring(numStr.length - 4, numStr.length - 4)
						// 			return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
						// 		}else if(numStr.length == 5){
						// 			var decimal = numStr.substring(numStr.length - 3, numStr.length - 4)
						// 			return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'; 
						// 		}
						// };
				     this.myChart2 = echarts.init(document.getElementById(id))
						// var myChart = this.$echarts.init(document.getElementById('myChart'));//获取容器元素
            this.myChart2.setOption({
                tooltip : {
                    trigger: 'axis'
                },
                grid: {
                    left: '7%',
                    right: '9%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    data:[],
                    left: '6%',
                    top: 'top',
                    itemWidth: 15,//图例图标的宽
                    itemHeight: 15,//图例图标的高
                    textStyle: {
                        color: '#3a6186',
                        fontSize:20,
                    }
                },
                toolbox: {
                    show : true,
                    feature : {
                        magicType : {show: true, type: ['line', 'bar']},
                    },
                    right: '6%',
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'value',
                       
                        splitLine: {show: false},//去除网格分割线
                        axisTick: {//刻度
                            show: false//不显示刻度线
                        },
                        axisLine: {//坐标线
                            lineStyle: {
                                type: 'solid',
                                color: '#1f1f1f',//轴线的颜色
                                width:'1'//坐标线的宽度
                            }
                        },
                        axisLabel: {
                            textStyle: {
																color: '#8b8b8b',//坐标值的具体的颜色
																fontSize:"9"
                            }
                        },
                        splitLine: {
                            show: false//去掉分割线
                        },
                    }
                ],
                yAxis: {
						name: '投资额度/万',
            data : ['总投资额','年投资额'],
						type: 'category',
            axisTick: {//刻度
              show: false
						},
						axisLabel: {
							color: "#8b8b8b", 
						
						},
						// 上方文字的颜色和y轴的线
						axisLine:{show: false,lineStyle:{color:"#9a9a9a"}},
						// 改变网格的颜色
						splitLine: {
							show: true,
							lineStyle:{
							color: "#151515"
						  }
　          }
           // 改变完网格的颜色
					},
                series : [
                    {
                        name:'投资额',
                        type:'bar',
                        barWidth: 12,
                        data:this.opinionData6,
                        itemStyle: {
                            normal: {
														    // 给柱状图设置不同的颜色
                                color: function(params) {
																	var colorList = ['#0c2f3f','#0995cd','#0995cd','#0995cd','#0995cd',
 																	'#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd' ];
                                  return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,//柱子上显示值
																		 formatter:'{c}',
                                    position: 'top',//值在柱子上方显示
                                    textStyle: {
                                        color: '#f2f2f2',//值的颜色
                                        // fontSize:12,
                                    }
                                }
                            }
                        },
                    }
                ]
						});
        },
  
  },
  mounted() {
		window.scrollTo(0,0)
		this.$nextTick(function() {
			this.drawLine('main')
      this.distribution('myChart')
      // this.getVideo()
		})
    //     let _this = this;
    //    window.onresize = function() {
    //   	_this.myChart.resize()
    //   	_this.myChart2.resize()
    // }
        
  },

}
</script>

<style>

 * {
   margin: 0;
   /* border:1px solid pink */
 }
 .app {
   width: 100%;
   height:996px;
   background-color: #040709;
 }
 .topbiao {
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
 .zhongbiao {
   width: 100%;
   height: 40px;
   /* background-color: #0f1217;   */
   margin-top: 10px;
   margin-bottom: 50px;
   
 }
 .lei{
   display: flex;
   height: 40px;
   padding: 0 200px;
 }
 .left{
   flex: 1;
 }
 .right{
   flex: 1;
 }
 .xuan {
   float: left;
   flex: 1;
   background-color: #32a4df;  
   border:none;
   height:40px;
   border-radius: 8px;
   color: #ffffff;
   text-align: center;
   line-height:40px ;
   font-size: 14px;
   transform: all 1s;
 }
 .z1,.z3,.z4,.z5,.z8
 {
   display: none;
  }
  .xuan:hover{
    height: 80px;
  }
  .xuan:nth-child(1):hover .z1{
    display: block;
  }
  .xuan:nth-child(3):hover .z3{
    display: block;
  }
  .xuan:nth-child(4):hover .z4{
    display: block;
  }
  .xuan:nth-child(5):hover .z5{
    display: block;
  }
  .xuan:nth-child(8):hover .z8{
    display: block;
  }

 .xuan:nth-child(2){
   background-color: #8765ca;  
 }
 .xuan:nth-child(3){
   background-color: #d5a35c;  
 }
 .xuan:nth-child(4){
   background-color: #4dbbbb;  
 }
  .xuan:nth-child(5){
   background-color: #6688cc;  
 }
 .xuan:nth-child(6){
   background-color: #cc6677;  
 }

  .xuan:nth-child(7){
   background-color: #4dbbbb;  
 }
 .xiafang {
   display: flex;
 }
 .left22 {
   flex: 1;
   /* height: 800px; */
   /* background-color: pink; */
   padding: 15px;
   padding-top:0px;
   
 }
  .jian {
   flex: 1.3;
   height: 680px;
   background-color: #0f1217;
   /* background-color: pink; */
   padding: 20px;
   padding-top:0px;
   overflow: hidden;
 }
  .righterw {
   flex: 1.1;
   /* height: 800px; */
   /* background-color: goldenrod; */
   padding: 20px;
   padding-top:0px;
   box-sizing: border-box
 }
 .lefttop{
     width: 100%;
     /* height: 225px; */
     margin-top: 16px;
     background-color: #0f1217;
     padding-top:20px;
     padding-bottom: 30px;

 }
 .lefttop:first-child{
    padding-bottom: 0px;
 }
 .lefttop:first-child{
     margin-top: 0px;
 }
 .jiantop {
     width: 100%;
     height: 500px;
     background-color: pink;
     margin-top: 16px;
 }
 .topbiao img {
     width: 100%;
 }
 .lefttop p {
     color: #ffffff;
 }
 .lefttop .kuaik {
     width: 100%;
     height: 100px;
     /* background-color: antiquewhite; */
     display: flex;
     margin-top: 30px;
     padding-left:20px;
 }
 .kuaichind {
     flex: 1;
     margin-left: 6px;
 }
 .kuaichind:last-child{
     flex:2.2
 }
 .xxbiaoti {
     font-size: 14px;
     margin-left: 25px;
     margin-top: 20px;
 }
 .xxbiaoti2 {
     font-size: 14px;
     margin-left: 25px;
     margin-top: 10px;
 }
  .kuaichind .namm {
    color: #a6a7a7;
    font-size: 14px;
 }
 .kuaichind .shuzi {
    color: #e13838;
    font-size: 30px;
    margin-top: 20px;
    font-weight: 600;
 }
 .shuzi2{
    color: #e13838;
    font-size: 14px;
    margin-top: 20px;
    /* font-weight: 600;  */
 }
 .lefttop .dingdanx {
     color: #cdcdcd;
     margin-left: 22px;
     font-size: 14px;
     margin-top: 12px;
     cursor:pointer;
 }
 .yuan {
    display: inline-block;
    width: 11px;
    height: 11px;
    background-color: #0f1217;
    border:1px solid #ff2d2d;
    border-radius: 50%;
    margin-left:10px;
 }
 .yuan1 {
      display: inline-block;
    width: 11px;
    height: 11px;
    background-color: #0f1217;
    border:1px solid #ff2d2d;
    border-radius: 50%;
    margin-left:20px;
 }
 .yuan2 {
      display: inline-block;
    width: 11px;
    height: 11px;
    background-color: #0f1217;
    border:1px solid #ff2d2d;
    border-radius: 50%;
    margin-left:20px;
 }

 .text {
    color: #c5c5c5;
    margin-left: 10px;
    font-size: 14px;
 }
 .bottomem {
     margin-top: 20px;
 }
 /* .yuan2{-webkit-animation:gaoxiny 0.8s 0.6s  infinite linear both;transform-origin: center center;}
	@-webkit-keyframes gaoxiny{0%{-webkit-transform:scale(1);opacity: 0;}100%{-webkit-transform:scale(1);opacity: 1;}} */

h1{
			font-size: 0.35rem;
		color: #ffffff;
	  text-align: center;
		margin-top: 35px;
	  font-weight: bold;
		font-family:"方正雅黑简体";
        padding:0 0.5rem;
	}

    /* .shouxu{-webkit-animation:gaoxiny 0.8s 0s  infinite linear both;transform-origin: center center;}
	@-webkit-keyframes gaoxiny{0%{-webkit-transform:scale(1);opacity: 0;}100%{-webkit-transform:scale(1);opacity: 1;}} */

	.zuiwai {
    width:100%;
	   height:auto;
    background-color: #000000;
    /* position: absolute; */
    background-size: 100% 100%;
  }
    h3 {
      font-size:15px;
      color:#ffffff;
      margin-top:0.3rem;
    }
    .h2 {
      font-size:16px;
      color:#ffffff;
      margin-top:14px;
    }
    .h3 {
      font-size:14px;
      color:#ffffff;
      margin-top:14px;  
    }
    h2 {
      font-size:16px;
      color:#ffffff;
    }
    .dianhua {
      color:#025858;
    }
    p {
      font-size:14px;
      color:#8b8b8b;
      margin-top:0.1rem;
    }
    .tupian1 img {
        margin-top:0.1rem;
    }
    .tupian1 img {  
      height:230px;
      width: auto;
      margin-top:0.2rem;
    }
     .tupian1 div {
      color:#ffffff;
      font-size:16px;
      color:#ffffff;
      margin-top:0.1rem;
    }
    a{
    text-decoration:none;
    color:#1b9f8b;
    font-size:18px;
    }
    .jindutiao {
    width:96%;
    height:3px;
    position:absolute;
    background-color:#0c2f3f;
    top:0.8rem;
    border-radius:10px;
    }
    .yuan {
     width:0.15rem;
     height:0.15rem;
     border-radius:50%;
     position:absolute;
     top:0.76rem;
     left:0.9rem;
    }
    .yuan11 {
     width:0.15rem;
     height:0.15rem;
     border-radius:50%;
     position:absolute;
     top:0.76rem;
     left:0.3rem;
    }
    .yuan2 {
     width:0.15rem;
     height:0.15rem;
     border-radius:50%;
     position:absolute;
     top:0.76rem;
     left:2.3rem;
    }
    .yuan22 {
     width:0.15rem;
     height:0.15rem;
     border-radius:50%;
     position:absolute;
     top:0.76rem;
     left:1.6rem;
    }
    .yuan3 {
     width:0.15rem;
     height:0.15rem;
     border-radius:50%;
     position:absolute;
     top:0.76rem;
     left:3.8rem;
    }
    .yuan33 {
     width:0.15rem;
     height:0.15rem;
     border-radius:50%;
     position:absolute;
     top:0.76rem;
     left:3rem;
    }
    .zi1 {
     position:absolute;
     top:1rem;
     color:#ffffff;
     left:0.5rem;
     font-size:14px;
    }
    .canzhao {
      margin-top:-0.5rem;
      height:1.2rem;
    }
    .zi2 {
     position:absolute;
     top:1rem;
     left:1.9rem;
     font-size:14px;
    }
    .zi3 {
     position:absolute;
     top:1rem;
     left:3.4rem;
     font-size:14px;
    }
    .loging {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background-color: #000000;
    background-size: 100% 100%;
    z-index: 998; 
    overflow:hidden;
    display:table-cell;
    text-align:center;
    vertical-align:middle;  
  }
  .loging img {
    width: 2rem;
    height:auto;
    margin-top:2rem; 
  }


@media screen and (min-device-width:600px){
    
    .waihe {
		width: 100%;
		height: 90%;
		display: flex;
	}
    .left {
	width:100%;
	}
	.right {
	width:100%;
	}
    .tupian1 {
        width:100%;
    }
    .tupian2 {
        width:100%;
    }
    .tishi {
    display:none;
    }
}
@media screen and (min-device-width:800px){

    .waihe {
	width: 100%;
	height: 90%;
	display: flex;
	}
    .left {
	flex: 1.4;                                                                                                                       
	}
	.right {
	flex: 1.02;
    }
    .tupian {
        display:flex;
    }
    .tupian1 {
        flex:1;
    }
    .tupian2 {
        flex:1;
    }
    .tishi {
    display:block;
    }
}
</style>
