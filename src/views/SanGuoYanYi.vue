<template>
  <div>
    <h2>这个是三国的首页 （网络请求）</h2>
    <button @click="weiClick()">魏国</button>
    <button @click="shuClick()">蜀国</button>
    <button @click="wuClick()">吴国</button>
    <button @click="baiduClick()">请求百度</button>
    <router-view/>
  </div>
</template>

<script>

import requestApi from '../libs/homeRequest/login.js'

export default {
  
  data(){
    return{
    }
  },
  methods:{
    weiClick(){
      // 这个地址栏是可以看见的
      this.$router.push({
        path:'/wei',
        query:{'name':'魏国'}
      });
    },
    shuClick(){
      this.$router.push({
        path:'/shu',
        name:'shu',
        params:{name:'蜀国'}
      });
    },
    wuClick(){
      // this.$router.push('/wu');
      var good = '你好';
      var json = JSON.parse(good);
      requestApi.login.groupAccountLogin().then(res=>{
        console.log(good);
      });
    },
    baiduClick(){
      requestApi.login.requestBaiDu().then(res=>{
        console.log("这个是百度数据");
        console.log(res);
      });
    }
  }
};
</script>

<style></style>
