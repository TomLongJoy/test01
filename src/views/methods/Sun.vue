<template>
  <div>
    <div>{{ title }}</div>
    <button @click="emitMyEvent">提交</button>

    <div>
      <input type="text" v-focus />
    </div>
    <div>
      <div class="one" v-drag>拖拽one</div>
      <div class="two" v-drag>拖拽two</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.directive("focus", {
  inserted: function(el, binding) {
    el.focus();
  }
});
Vue.directive("drag", {
  inserted: function(el) {
    el.οnmοusedοwn = function(e) {
      let l = e.clientX - el.offsetLeft;
      let t = e.clientY - el.offsetTop;
      document.οnmοusemοve = function(e) {
        el.style.left = e.clientX - l + "px";
        el.style.top = e.clientY - t + "px";
      };
      el.οnmοuseup = function() {
        document.οnmοusemοve = null;
        el.οnmοuseup = null;
      };
    };
  }
});

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

<style>
.one,
.two {
  height: 100px;
  width: 100px;
  border: 1px solid #000;
  position: absolute;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  cursor: pointer;
}
.two {
  left: 200px;
}
</style>
