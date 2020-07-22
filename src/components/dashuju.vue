<template>
  <div class="app">
    <div class="topbiao">
        <h2>资源循环慧眼</h2>
        <img src="../assets/biao.png" alt="">
    </div>
    <div class="zhongbiao">
        <div class="zhongd">
            <div class="lei">
                <span class="xuan">生活垃圾</span>
                <span class="xuan">建筑垃圾</span>
                <span class="xuan">污泥餐厨</span>
                <span class="xuan">废旧家电</span>
                <span class="xuan">废旧汽车</span>
                <span class="xuan">农林固废</span>
                <span class="xuan">废旧纺织品</span>
                <span class="xuan">工业固废</span>
            </div>
        </div>
    </div>
    <!-- 下方开始 -->
    <div class="xiafang">
        <div class="left22">
            <div class="lefttop">
                <p class="xxbiaoti">截至今日下单详情</p>
                <div class="kuaik">
                    <div class="kuaichind">
                        <p class="namm">服务客户</p>
                        <p class="shuzi">33</p>
                    </div>
                    <div class="kuaichind">
                        <p class="namm">订单数量</p>
                        <p class="shuzi">33</p>
                    </div>
                    <div class="kuaichind">
                        <p class="namm">回收重量</p>
                        <p class="shuzi">10.3</p>
                    </div>
                </div>
            </div>
            <div class="lefttop">
                 <p class="xxbiaoti2">回收订单</p>
                 <p class="dingdanx"> · 2020-6-1   壵志达煤业有限公司购买 </p>
                 <p class="dingdanx"> · 2020-6-3   太平煤业有限公司购买</p>
                 <p class="dingdanx"> · 2020-5-30  晋能长治热电有限公司购买</p>
                 <p class="dingdanx"> · 2020-5-26  淘清河建筑有限公司购买</p>
                 <p class="dingdanx"> · 2020-5-25  聚鑫源冶金有限公司购买</p>
            </div>
            <div class="lefttop">
                 <p class="xxbiaoti">订单详情</p>
                 <div class="kuaik">
                    <div class="kuaichind">
                        <p class="namm">购买金额</p>
                        <p class="shuzi2">130.00</p>
                    </div>
                    <div class="kuaichind">
                        <p class="namm">废品名称</p>
                        <p class="shuzi2">废塑料</p>
                    </div>
                    <div class="kuaichind">
                        <p class="namm">状态</p>
                        <p class="shuzi2">已收货</p>
                    </div>
                </div>
                 <span class="yuan1"></span><span class="text">已购买</span><span class="text">-----</span>
                 <span class="yuan2"></span><span class="text">已收货</span><span class="text">-----</span>
                 <span class="yuan"></span><span class="text">已处置</span><span class="text"></span>
                 
            </div>
        </div>
        <div class="jian"> 
           <!-- Migration map 地图开始-->
           <div id="hndt" style="width:100%;height:680px;"></div>  
        </div>
        <div class="righterw">
            <div class="lefttop">
                <p class="xxbiaoti2">订单数量每月对比图</p>
                <div id="main" style="width:100%;height:390px;margin-left:-15px"></div>
            </div>
            <div class="lefttop">
                <p class="xxbiaoti2">各地区订单数排名</p>
                <div id="myChartgg" style="width:88%;height:200px;margin-top:-40px;margin-left:0.1rem"></div>
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
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      charts: '',
    //   各区对比所需数据
      opinionData6:["50", "66", "88"], 
    //   折线图所需数据
      opinionData1: ["3", "5", "6", "5", "3", "2"
					],
    }
  },
  created(){
    // 判断有无登录，无登录跳到登录页面
      if(this.$store.state.user === '') {
        this.$router.push({name: 'denglu'})
        return false
      }
      if(this.$store.state.qy_type != 2) {
        this.open3()
        this.$router.push({name: 'home'})
         return false
      }
  },
  mounted() {
    this.drawLine('hndt')
    this.drawLine2('main')
    this.distributiongg('myChartgg')
  },
  methods: {
      open3() {
        this.$message({
          message: '您暂无权限',
          type: 'warning'
        });
      },
    // 各区对比
    distributiongg(id){
	        this.myChart22 = echarts.init(document.getElementById(id))			
            this.myChart22.setOption({
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
                    show : false,
                    feature : {
                        magicType : {show: true, type: ['line', 'bar']},
                    },
                    right: '6%',
                },
                calculable : false,
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
                                color: '#000000',//轴线的颜色
                                width:'1'//坐标线的宽度
                            }
                        },
                        axisLabel: {
                           show: false//不显示刻度线
                        },
                        splitLine: {
                            show: false//去掉分割线
                        },
                    }
                ],
                yAxis: {
						name: '',
                         data : ['高新区','经开区','潞州区'],  
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
                        name:'项目占比',
                        type:'bar',
                        barWidth: 10,
                        data:this.opinionData6,
                        itemStyle: {
                            normal: {
														    // 给柱状图设置不同的颜色
                                color: function(params) {
																	var colorList = ['#1e6a9e', '#1e6a9e', '#ede76d','#37a2da','#0995cd',
 																	'#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd','#0995cd' ];
                                  return colorList[params.dataIndex]
                                },
                                // 把柱子变成圆角
                                 barBorderRadius:[10, 10, 10, 10],
                                label: {
                                    show: true,//柱子上显示值
																		 formatter:'{c}个',
                                    position: 'right',//值在柱子上方显示
                                    textStyle: {
                                        color: '#f2f2f2',//值的颜色
                                        fontSize:9,
                                    }
                                }
                            }
                        },
                    }
                ]
						});
				},
    //折线图开始
	drawLine2(id) {
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
						left: '10%',
						right: '9%',
						bottom: '3%',
						containLabel: true,
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
          },
					xAxis: {
						name: '/月',
						type: 'category',
						boundaryGap: false,
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            // 改变文字的颜色
            axisLabel: {color: "#8b8b8b"},
            // 改变线条的颜色
						axisLine:{lineStyle:{color:"#1f1f1f"}},
            axisLine:{show: false,lineStyle:{color:"#9a9a9a"}},
            axisTick: {//刻度
              show: false
						},
					},
					yAxis: {
						name: '订单数量/个',
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
                color:'#2fc2f0',
                borderColor:'#2fc2f0',
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
							name: '开复工项目个数',
							type: 'line',
							stack: '开复工项目个数',
							data: this.opinionData1,
              // 变颜色
              itemStyle:{
                normal:{
                color:'#ff9d1c',
                borderColor:'#ff9d1c',
                }
              },
							// 改变完
							// 改区域的颜色
							areaStyle:{
                normal:{
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
                    offset: 0,
                    color: '#ff9d1c'
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
//    地图开始
   drawLine(id){
    //   设置图表的位置
      this.charts = echarts.init(document.getElementById(id))
    //   设置图表的置顶项
    // 可以在地图上显示的城市的坐标信息
    var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '高新区': [113.108117,36.228642],
    '潞州区': [113.129521,36.209472],
    // '经开区': [113.122559,36.201268],
    '经开区': [113.10556,36.135601],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
};

var BJData = [
    [{
        name: '高新区'
    }, {
        name: '上海',
        value: 95
    }],
    [{
        name: '高新区'
    }, {
        name: '广州',
        value: 90
    }],
    [{
        name: '高新区'
    }, {
        name: '大连',
        value: 80
    }],
    [{
        name: '高新区'
    }, {
        name: '南宁',
        value: 70
    }],
    [{
        name: '高新区'
    }, {
        name: '南昌',
        value: 60
    }],
    [{
        name: '高新区'
    }, {
        name: '拉萨',
        value: 50
    }],
    [{
        name: '高新区'
    }, {
        name: '长春',
        value: 40
    }],
    [{
        name: '高新区'
    }, {
        name: '包头',
        value: 30
    }],
    [{
        name: '高新区'
    }, {
        name: '重庆',
        value: 20
    }],
    [{
        name: '高新区'
    }, {
        name: '常州',
        value: 10
    }]
];

var SHData = [
    [{
        name: '潞州区'
    }, {
        name: '包头',
        value: 95
    }],
    [{
        name: '潞州区'
    }, {
        name: '昆明',
        value: 90
    }],
    [{
        name: '潞州区'
    }, {
        name: '广州',
        value: 80
    }],
    [{
        name: '潞州区'
    }, {
        name: '郑州',
        value: 70
    }],
    [{
        name: '潞州区'
    }, {
        name: '长春',
        value: 60
    }],
    [{
        name: '潞州区'
    }, {
        name: '重庆',
        value: 50
    }],
    [{
        name: '潞州区'
    }, {
        name: '长沙',
        value: 40
    }],
    [{
        name: '潞州区'
    }, {
        name: '北京',
        value: 30
    }],
    [{
        name: '潞州区'
    }, {
        name: '丹东',
        value: 20
    }],
    [{
        name: '潞州区'
    }, {
        name: '大连',
        value: 10
    }]
];

var GZData = [
    [{
        name: '经开区'
    }, {
        name: '福州',
        value: 95
    }],
    [{
        name: '经开区'
    }, {
        name: '太原',
        value: 90
    }],
    [{
        name: '经开区'
    }, {
        name: '长春',
        value: 80
    }],
    [{
        name: '经开区'
    }, {
        name: '重庆',
        value: 70
    }],
    [{
        name: '经开区'
    }, {
        name: '西安',
        value: 60
    }],
    [{
        name: '经开区'
    }, {
        name: '成都',
        value: 50
    }],
    [{
        name: '经开区'
    }, {
        name: '常州',
        value: 40
    }],
    [{
        name: '经开区'
    }, {
        name: '北京',
        value: 30
    }],
    [{
        name: '经开区'
    }, {
        name: '北海',
        value: 20
    }],
    [{
        name: '经开区'
    }, {
        name: '海口',
        value: 10
    }]
];

var planePath = 'path://M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z';

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var color = ['#ede76d', '#ea9a81', '#46bee9'];

// series开始
var series = [];
[
    ['高新区', BJData],
    ['潞州区', SHData],
    ['经开区', GZData]
].forEach(function(item, i) {
    series.push({
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 1,

        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' Top10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});
    // console.log(series)
    this.charts.setOption({
    backgroundColor: '#0f1217',
    title: {
        left: 'left',
        textStyle: {
            color: '#fff'
        }
    },
    series : series,
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['高新区 Top10', '潞州区 Top10', '经开区 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        left: 'center',
        zoom: 1.2, 
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#126c93',
                borderColor: '#7bb0c0'
            },
            emphasis: {
                areaColor: '#194f66'
            }
        }
    },
    
})
   }
//    地图函数结束
  }
}
</script>

<style>

 * {
   margin: 0;
   /* border:1px solid pink */
 }
 .app {
   width: 100%;
   height:916px;
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
   height: 65px;
   /* background-color: #0f1217;   */
   margin-top: 20px;
 }
 .xuan {
   padding: 10px;
   background-color: #32a4df;  
   border:none;
   border-radius: 8px;
   color: #ffffff;
   text-align: center;
   line-height:40px ;
   margin-left: 12px;
   cursor:pointer;
   font-size: 14px;
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
 .lei {
   text-align: center;
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
 .yuan2{-webkit-animation:gaoxiny 0.8s 0.6s  infinite linear both;transform-origin: center center;}
	@-webkit-keyframes gaoxiny{0%{-webkit-transform:scale(1);opacity: 0;}100%{-webkit-transform:scale(1);opacity: 1;}}
</style>
