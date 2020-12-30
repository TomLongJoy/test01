<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button @click="buttonClick()">点击跳转到下个界面</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: '这个是HelloWorld.vue文件'
    };
  },
  methods: {
    buttonClick() {
      this.$router.push("/sanguo");
    }
  }
};
</script>


<style scoped></style>
