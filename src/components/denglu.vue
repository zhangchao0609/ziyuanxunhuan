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
          <p class="zhanghao">· 登录 ·</p>
          
        <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="phoneNumber">
            <el-input  class="sinput2" v-model.number="ruleForm.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="qyPassword">
            <el-input  class="sinput2" type="password" v-model="ruleForm.qyPassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="zhuce()">立即注册</el-button>
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
      
      

    return {
      // 用户名和密码
      ruleForm: {
          phoneNumber: '',
          qyPassword: '',
        },
        hyanzheng : 123,
        yanzheng2 : '发送验证',
        rules: {
          qyPassword: [
            { validator: validatePass, trigger: 'blur' }
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
      this.$router.push({name: 'zhuce'}) 
    },
    open3() {
        this.$message({
          message: '账号或密码错误',
          type: 'warning'
        });
      },
    open2() {
        this.$message({
          message: '登录成功',
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
            this.$axios.post('/api/zyxhuser/selectAll',
              qs.stringify({phoneNumber: that.ruleForm.phoneNumber,qyPassword:that.ruleForm.qyPassword}), 
              {headers: {'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(res => {
              if(res.data.status == 0) {
                this.open2()
                this.$store.commit('increment',this.ruleForm.phoneNumber)
                console.log(res.data.message.qyType)
                this.$store.commit('incrementt',res.data.message.qyType)
                console.log(this.$store.state.user)
                console.log(res.data.message.id)
                this.$store.commit('incrementid',res.data.message.id)
                console.log(this.$store.state.qy_type)
                if(this.$store.state.qy_type == 1){
                   this.$router.push({name: 'xinxi'})
                  return false
                }else {
                   this.$router.push({name: 'home'})
                }
               
              }
              if(res.data.status == 1) {
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
  .zhanghao {
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
  el-select {
    width:400px;
    height: 50px;
    margin-top: 20px;
    border: #d6d6d6 1px solid;
    font-size: 16px;
    padding-left: 10px;
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
