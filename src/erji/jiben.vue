<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <p>账户信息</p>
    <div class="hengxiang"></div>
    <p class="tishei">你的个人信息不会透露给第三方，请放心填写</p>
    <div class="lissss">
        <div>联系电话</div>
        <el-input  v-model="call" class="ipnt" placeholder="联系电话"></el-input>
    </div>
    <div class="submit">保存</div>
  </div>
</template>

<script>
import { location } from "../js/map.js";
export default {
  name: 'App',
  data(){
    return{
      qyname : '',
      call:'',
    }
  },
  methods:{
     
  },
  mounted() {
  
   }
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
 .tishi {
   color: #9da0ad;
   font-size: 14px;
   margin-top: 20px;
 }
 .hengxiang {
   width: 80%;
   height: 1px;
   background-color: #cfd5de;
   margin-top: 20px;
 }
 .tishi {
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
 }
 .di {
   margin-top: 20px;
   color: #383e40;
 }
</style>
