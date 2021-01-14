<template>
  <div>
    <div style="background:clear;height:50px;">这个是父类（调用子类方法）</div>
    <div ref="msgDiv">{{ msg }}</div>
    <div v-if="msg1">1 outside $nextTick: {{ msg1 }}</div>
    <div v-if="msg2">2 inside $nextTick: {{ msg2 }}</div>
    <div v-if="msg3">3 outside $nextTick: {{ msg3 }}</div>
    <sunclass @my-event="onComaMyEvent"></sunclass>
    <!-- <sunclass @my-event="clickAgain"></sunclass> -->
    <div>{{ this.info.namesaa }}</div>

    <!-- <button @click="deleteDomProperty">删除</button> -->

    <button @click="getCode">获取验证码</button>

    
    
  </div>
</template>

<script>
import Vue from "vue";
import sunclass from "@/views/methods/Sun";
import requestApi from '../../libs/homeRequest/login.js'



export default {
  mixins: [sunclass],
  name: "father --  22  ",
  love: "小花",
  created() {
    console.log(this.$options.name);
    // console.log(this.$options.love);
    // console.log(this.$options.personality);
  },
  data() {
    return {
      msg: " hello father.vue ",
      msg1: "",
      msg2: "",
      msg3: "",
      info: {
        height: 100
      }
    };
  },
  methods: {
    onComaMyEvent(e) {
      console.log(e);
      this.msg = "Hello World";
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
    },
    clickAgain(e) {
      console.log(e);
      this.$nextTick(() => {
        //vm.$set 是全局 Vue.set 的别名。
        // this.$set(this.info,"namesaa","我这个是set设置方法");
        Vue.set(this.info, "namesaa", "我这个是set设置方法");
      });
    },
    deleteDomProperty(){
      Vue.delete(this.info,"namesaa");
    },
    getCode(){
      var parmas = {};
      parmas.appType = "ZHXQ";
      parmas.mobile = "16525272170";
      parmas.userType = "0";

      requestApi.login.getSmsMessage(parmas).then(res =>{
        console.log(res);
      });
    }
  },
  components: {
    sunclass
  }
};
</script>
