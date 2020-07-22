<template>
  <div id="app">
    <div class="zhong">
      <div class="heziwai">
        <div class="hzwleft">
          <div class="logohe">
            <img src="../assets/logo.png" alt="">
          </div>
        </div>
        <div class="hzwright">
          <p class="zhanghao2">注册</p>
          
        <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input  class="sinput2" v-model.number="ruleForm.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="yanzheng" >
            <el-input  class="sinput"   v-model.number="ruleForm.yanzheng"></el-input>
            <!-- <div class="fskuazi" >{{yanzheng2}}</div> -->
             <el-button class="spee" @click="fsyzm()" >{{yanzheng2}}</el-button>
          </el-form-item>
          <el-form-item label="密码" prop="qyPassword">
            <el-input  class="sinput2" type="password" v-model="ruleForm.qyPassword" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="zhuce()">立即登录</el-button>
          </el-form-item>
        </el-form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
export default {
  name: 'denglu',
  data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (!/^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/.test( value)) {
              callback(new Error('请输入正确的手机号'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var yanzheng = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if ( value != this.hyanzheng) {
              console.log(value)
              callback(new Error('请输入正确的验证号'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      

    return {
      // 用户名和密码
      ruleForm: {
          phoneNumber: '',
          qyPassword: '',
          yanzheng :''
        },
        hyanzheng : 123,
        yanzheng2 : '发送验证',
        rules: {
          qyPassword: [
            { validator: validatePass, trigger: 'blur' }
          ],
          yanzheng : [
            { validator: yanzheng, trigger: 'blur' }
          ],
          phoneNumber: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
      qiyename : '',
      // 选择所需数据
      options: [{
          value: '选项1',
          label: '产废企业'
        }, {
          value: '选项2',
          label: '回收企业'
        }, {
          value: '选项3',
          label: '运输方'
        },
        ],
        value: ''
    }
  },
  methods :{
    
    zhuce(){
      this.$router.push({name: 'denglu'}) 
    },
    open1() {
        this.$message({
          message: '手机号不能为空',
          type: 'warning'
        });
      },
    open3() {
        this.$message({
          message: '此账号已存在',
          type: 'warning'
        });
      },
      open5() {
        this.$message({
          message: '请稍后发送',
          type: 'warning'
        });
      },
    open2() {
        this.$message({
          message: '注册成功',
          type: 'success'
        });
    },
    submitForm(formName) {
        // console.log(formName)
        this.$refs[formName].validate((valid) => {
          // console.log()
          if (valid) {
            console.log('成功了')
            var that = this
            this.$axios.post('/api/zyxhuser/save',
              qs.stringify({phoneNumber: that.ruleForm.phoneNumber,qyPassword:that.ruleForm.qyPassword,qyType:1,code:that.hyanzheng}), 
              {headers: {'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(res => {
              if(res.data.status == 1) {
                this.open2()
                this.$store.commit('increment',this.ruleForm.phoneNumber)
                this.$router.push({name: 'xinxi'})
                return false
              }
              if(res.data.status == 2) {
                this.open3()
                return false
              }
              // console.log('成功')
              
            }).catch(error => {
              // alert('账号或密码错误');
              // console.log(error);   
            });
          } else {
            console.log('error submit!!'); 
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();  
      },
     fsyzm(){
       if(this.ruleForm.phoneNumber == ''){
         this.open1()
         return false
       } 
       if( this.yanzheng2 != '发送验证'){
         this.open5()
         return false
       } 
       var that = this   
        this.$axios({
          method: 'post',
          url: '/api/zyxhuser/dxyz',
          data:  qs.stringify({phoneNumber: that.ruleForm.phoneNumber}), 
        }).then(res => {
          var num = 61;
          // 倒计时开始
          var timer = setInterval(function () {
            num--;
            console.log(num)
            if (num <= 0) {
             clearInterval(timer)
             that.yanzheng2 = '发送验证'
            } else {
              that.yanzheng2 = num +'秒重发'
            } 
          }, 1000)
      // 倒计时结束
          that.hyanzheng = parseInt(res.data.message)
        }).catch(error => {
          // alert('账号或密码错误');
          // console.log(error);   
        });
     },

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
 .zhong {
    width:1226px;
    margin:0 auto;
    overflow: hidden;
    /* background-color: pink; */
  }
  .heziwai {
    width: 100%;
    /* height: 60px; */
    /* background-color:pink; */
    display: flex;
  }
  .hzwleft {
    flex: 1;
    height: 705px;
    margin-top: 90px;
    /* background-color:green; */
  }
  .hzwright {
    flex: 1.3;
    margin-top: 8px;
    height: 705px;
    /* background-color:yellow;   */
  }
  .logohe {
    width: 200px;
    height:50px;
    /* background-color: red; */
  }
  .zhanghao2 {
    /* background-color: red; */
    margin-bottom: 30px;
    margin-left: 200px;
    font-size: 20px;
    margin-top:200px;
  }
  .username {
    width:400px;
    height: 50px;
    margin-top: 20px;
    border: #d6d6d6 1px solid;
    font-size: 16px;
    padding-left: 10px;
    border-radius:5px;
  }
  .wo {
    width:410px;
    margin-top: 20px;
    /* border: #d6d6d6 1px solid; */
    font-size: 16px;
    /* padding-left: 10px; */
  }
  .button {
    width:400px;
    height: 50px;
    background-color: #447be8;
    margin-top: 20px;
    padding-left: 10px;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    border-radius: 5px;
  }
  .zhuce {
    margin-top: 20px;
    margin-left:340px;
    color: #999999;
    font-size: 16px;
    cursor: pointer;
  }

  .el-input__suffix {
    display: none;
    z-index: 999;
  }
   .el-form-item__content .el-input {
    width: 200px;
    z-index: 999;
  }
  .sinput2 .el-input__inner{
    width: 300px;
    z-index: 999;
    /* display: inline-block; */
    /* float: left; */
  }
   .sinput .el-input__inner{
    width: 200px;
    z-index: 999;
    /* display: inline-block; */
    /* float: left; */
  }
  
</style>
