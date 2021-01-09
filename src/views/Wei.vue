<template>
  <div>
    <h2>魏国首页</h2>
    <button @click="backCick()">点击返回上一个界面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backCick() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {
    var name = this.$route.query.name;
    console.log(name);
    let names = (1==1) ? name : JSON.parse(name);
    console.log(names);
    alert(names);
  }
};
</script>

<style scoped></style>
