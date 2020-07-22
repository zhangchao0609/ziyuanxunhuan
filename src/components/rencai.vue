<template>
  <div id="app">
    <div class="waiii">
        <div class="baikuaiy">
            <div class="zhong">
                <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%">
                    <el-table-column prop="tname" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="workUnit" label="工作单位" width="250"></el-table-column>
                    <el-table-column prop="researchDirection" label="研究方向"></el-table-column>
                    <el-table-column prop="ttitle" label="职称"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                            <!-- <el-button type="text" size="small">编辑</el-button> -->
                       </template>
                    </el-table-column>
                  
                </el-table>
            </div>
        </div>
        <!-- 第一板块完 -->
        <div class="baikuaiy">
            <div class="zhong">
                <p class="one">专家详情</p>
                <div class="hengxiange"></div>
                <h2 class="biaoti">{{xiangqing.thead}}个人简介</h2>
                <!-- <p class="zhengwen">孙素珍，女，1966年12月出生，副教授，山西职业技术学院材料工程系副主任 </p> -->
                <p class="xiaobiaoti"> · 工作简介</p>
                <p class="zhengwen">{{xiangqing.tcontent}}</p>
            </div>
        </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'rencai',
  data() {
        return {
          xiangqing : {},
          tableData: [{
            name: '赵海晋',
            danwei: '山西职业技术学院',
            yanjiu: '绿色建材及制品',
            zhicheng : '教授',
          }, {
            name: '赵海晋',
            danwei: '山西职业技术学院',
            yanjiu: '绿色建材及制品',
            zhicheng : '教授',
          }]
        }
      },
      created(){
        this.$axios({
          method: 'get',
           url: '/api/ztpc/selectAll',
        }).then(res => {
          console.log(res.data.message);
          this.tableData = res.data.message
        }).catch(error => {
          
        });

        this.$axios({
          method: 'get',
           url: '/api/ztpc/selectRcxx?tpId='+1,
        }).then(res => {
          console.log(res.data.message);
          this.xiangqing = res.data.message
        }).catch(error => {
          
        });

      

      },
      methods: {
        tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(row) {
        console.log(row.id);
        // 请求数据
        this.$axios({
          method: 'get',
           url: '/api/ztpc/selectRcxx?tpId='+row.id,
        }).then(res => {
          console.log(res.data.message);
          this.xiangqing = res.data.message
        }).catch(error => {
          
        });

      }
    },
    
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
  .hengxiange {
    width: 100%;
    height: 1px;
    background-color: #dadbdc;
    /* margin-top: 20px; */
  }
  .biaoti {
    font-size: 18px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .xiaobiaoti {
    font-size: 16px;
    line-height: 40px;
  }
  .zhengwen {
    font-size: 14px;
    color: #6c6c6c;
    line-height: 30px;
    margin:0;
    padding:0;
  }
  .one {
  font-size: 20px;
  margin-top: 54px;
  height: 50px;
  width: 90px;
  border-bottom:2px solid #6385f6;
}
  .el-table .warning-row {
    background: #ebf3f9;
  }
  .el-table .success-row {
    background: #ebf3f9;
  }
</style>
