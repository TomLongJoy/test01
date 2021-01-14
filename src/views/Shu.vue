<template>
  <div>
    <h2>蜀国首页</h2>
    <button @click="backClick()">点击返回上个界面</button>
    <!-- <p>{{ msg | msgFormat }}</p> -->
    <div id="my-component-b">
      <haha></haha>
    </div>
    <!-- <button @click="selectName = 'my-component-a'">a</button> -->

    <!-- <div v-on:click="handleClick">{{msg}}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "1111111440"
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    handleClick() {
      this.msg = "点击之后改变msg显示内容";
    }
  },
  created() {},
  mounted() {
    var name = this.$route.params.name;
    console.log(name);
  },
  filters: {
    msgFormat(time) {
      time = time * 1000;
      const date = new Date(time);
      return date;
    }
  },
  components: {
    haha: {
      template: "<div>蜀国主公:{{name}}，年龄{{count}}岁</div>",
      data: function() {
        return {
          name:'刘备',
          count: 100
        };
      }
    }
  }
};
</script>

<style scoped>
p {
  background: red;
}
</style>
