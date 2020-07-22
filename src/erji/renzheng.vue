<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->  
   <div class="tixx"  v-if="renzheng2">! 提醒：正在认证中，请耐心等待</div>
    <div v-if="renzheng" >
      <div class="tixx" >! 提醒：您需要完善企业认证才能进行交易</div>
      <p>企业认证</p>
    <div class="hengxiang"></div>
    <p class="tishei">请确定正确的企业信息，我方承诺不会透露给任何第三方；认证审核需要1-3个工作日！</p>
    <div class="lissss">
        <div>企业名称</div>
        <el-input  v-model="form.qyname" class="ipnt" placeholder="企业名称"></el-input>
    </div>
    <div class="lissss">
        <div>统一社会信用代码或注册号</div>
        <el-input  v-model="form.cold" class="ipnt" placeholder="统一社会信用代码或注册号"></el-input>
    </div>
    <div class="lissss">
        <div class="yinye">营业执照扫描件</div>
        <el-upload action="/api/zpic/uploadTp" :on-success="success" :limit="1"  :multiple='false' :before-upload="beforeAvatarUpload"  list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1MB, 只能上传一张</div>
    </div>
    <div class="hengxiang"></div>
    <div class="submit" @click="submit()">提交认证申请</div>  
    </div>
    
  </div>
</template>

<script>
import qs from 'qs';
export default {
  name: 'App',
  data(){
    return{
      form :{
        licensePicture : '',
        qyname : '',
        cold : '',
        id : ''
      },
       renzheng2 : false,
       renzheng : true,
       dialogImageUrl: '',
       dialogVisible: false
    }
  },
   methods: {
      open3() {
        this.$message({
          message: '信息填写不完整',
          type: 'warning'
        });
      },
      open4() {
        this.$message({
          message: '提交失败，请稍后再试！',
          type: 'warning'
        });
      },
      open2() {
        this.$message({
          message: '已提交认证',
          type: 'success'
        });
      },
      handleRemove(file, fileList) {
        console.log(file.url);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      // 上传成功后的钩子函数
      success(response){
        console.log('上传成功')
        // 把上传成功的得到路劲存在数组中   
        this.form.licensePicture = 'https://jgs.jinguanshou.cn:3443'+ response
        // this.form.licensePicture.push('https://jgs.jinguanshou.cn:3443'+ response)
        // console.log(this.form.licensePicture)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 1;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 提交认证
      submit(){
        var that = this
        console.log(that.$store.state.id)
        if(that.form.qyname == ''|| that.form.cold == '' || that.form.licensePicture == ''){
          that.open3()
          return false
        }
        this.$axios.post('/api/zyxhuser/updat',
              qs.stringify({id:that.$store.state.id,qyName: that.form.qyname,registrationCode:that.form.cold,licensePicture:that.form.licensePicture}), 
              {headers: {'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(res => {
              console.log('提交认证成功')
              // 提式认证成功，跳转到对应的页面
              that.open2()
              that.renzheng = false
              that.renzheng2 = true
            }).catch(error => {
             console.log('提交失败')
             that.open4()
            });
      }

    },
  mounted (){
       window.scrollTo(0,0)
       if(this.$store.state.renzheng === '') {
        this.renzheng = true
      } else {
        this.renzheng = false
      }
  },
}
</script>

<style>
 * {
   margin: 0;
 }
 .hengxiang {
   width: 80%;
   height: 1px;
   background-color: #cfd5de;
   margin-top: 20px;
 }
 .tishei {
   color: #9da0ad;
   font-size: 14px;
   margin-top: 20px;
 }
 .ipnt {
     width: 30%;
     margin-top: 20px;
     font-size: 14px;
 }
 .lissss {
    margin-top: 30px;
 }
 .lissss div {
     font-size: 14px;
 }
 .yinye {
    margin-bottom: 30px;
 }
 .submit {
    width:112px;
    height: 45px;
    background-color: #447be8;
    margin-top: 20px;
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    line-height: 45px;
    border-radius:5px;
    cursor: pointer;
 }
 .tixx {
   width: 600px;
   /* height: 40px; */
   padding-left: 20px;
   background-color: #fff6de;
   margin-bottom: 20px;
   border-radius: 5px;
   color: red;
   font-size: 14px;
   /* text-align: center; */
   line-height: 50px;
 }
 
</style>
