<template>
  <div id="app">
    <div class="waiii">
        
        <!-- 第二块开始 -->
        <div class="baikuaiy">
            <div class="zhong">
                <p class="fakuiyij" @click="dialogFormVisible = true">我要反馈</p>
                <el-dialog title="反馈" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="反馈人" :label-width="formLabelWidth">
      <el-input v-model="form.name" class="sinpurwt"  autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="反馈电话" :label-width="formLabelWidth">
      <el-input v-model="form.tell" class="sinpurwt"  autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="反馈内容" :label-width="formLabelWidth">
      <el-input v-model="form.neirong" class="sinpurwt"  autocomplete="off"></el-input>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="tijiao()">确 定</el-button>
  </div>
</el-dialog>
                <div class="tupianhe">
                    <img src="../assets/erweima.png" alt="">
                    <!-- <img src="../assets/erweima2.png" alt=""> -->
                </div>
              
            </div>
        </div>
        
        
    </div>
  </div>
</template>

<script>
import qs from 'qs';
export default {
  name: 'buy',
  data() {
    return {
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          danwei:'',
          tell : '',
          neirong :'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      
    }
  },
  methods :{
    open2() {
        this.$message({
          message: '提交成功',
          type: 'success'
        });
    },
    tijiao(){
     this.dialogFormVisible = false
     var that = this
     this.$axios.post('/api/zoc/save',
              qs.stringify({opeople: that.form.name,ophone:that.form.tell,ocontent:that.form.neirong}), 
              {headers: {'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(res => {
               this.open2()
            }).catch(error => {
              // alert('账号或密码错误');
              // console.log(error);   
            });
    }
  },
   mounted() {
    console.log(this.$store.state.user)
    window.scrollTo(0,0)
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
   padding-bottom: 500px;
   background-color: #f3f5f8;
   /* background-color: red; */
   padding-top: 20px;
 }
 .baikuaiy {
   width: 100%;
   /* height: 300px; */
   background-color: #ffffff;
   /* padding: 30px; */
   margin-bottom: 20px;
   padding-bottom: 50px;
   padding-top: 50px;
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
.tupianhe {
    margin-left: 140px;
    overflow: hidden;
}
.fakuiyij {
  /* color: #447be8; */
  cursor: pointer;
  font-size: 16px;
  margin-left: 1000px;
}
 .sinpurwt .el-input__inner{
    width: 500px;
    z-index: 999;
    /* display: inline-block; */
    /* float: left; */
  }



</style>
