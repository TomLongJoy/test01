<template>
  <div>
    <div>{{ title }}</div>
    <button @click="emitMyEvent">提交</button>
  </div>
</template>

<script>


export default {
  name: "sun --- 1",
  data() {
    return {
      title: "这个是子类的组件"
    };
  },
  methods: {
    emitMyEvent() {
      this.$emit("my-event", this.title);
    }
  }
};
</script>
