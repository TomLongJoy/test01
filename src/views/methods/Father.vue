<template>
  <div>
    <div style="background:clear;height:50px;">这个是父类（调用子类方法）</div>
    <sunclass @my-event="onComaMyEvent"></sunclass>
  </div>
</template>

<script>
import Vue from "vue";
import sunclass from "@/views/methods/Sun";

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
    return {};
  },
  methods: {
    onComaMyEvent(e) {
      alert(e);
    }
  },
  components: {
    sunclass
  }
};
</script>
