// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// ------ 这个是和mixin.js配合使用 --------------------- start
// import mixin from "./libs/other/mixin.js";
// export default {
//   data() {},
//   mixins: [mixin],
//   methods: {
//     showAlert() {
//       alert("这个是main.js");
//     }
//   }
// };
// ------ 这个是和mixin.js配合使用 ----------------------- end

// #1
Vue.config.silent = false; // true:取消 Vue 所有的日志与警告。
// #2  -- 能够进入到方法体内，不清楚使用场景
// Vue.config.optionMergeStrategies.name = (parent, child, that) => {
  
//   if (!parent) {
//     //如果父中没有这个metholds属性,那么返回子的
//     return child;
//   }
//   if (!child) {
//     //如果子中没有设置metholds这个属性那么返回父的
//     return parent;
//   }

//   //策略如果混入中和当前vue实例中都有一个同名方法,那么加了该策略后,只能使用子的
//   return Object.assign(parent, ...child); //两个都有那么就合并后返回,子的会覆盖父的
// };

// #3
Vue.config.devtools = true; // 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。
// #4
Vue.config.errorHandler = function(err, vm, info) {
  console.log("这个是显示Vue.config.errorHandler设置");
  console.log(err);
  console.log(vm);
  j;
  console.log(info);
};
// #5
Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(msg);
  console.log(vm);
  console.log(trace);
  //'trace' 是组件的继承关系追踪
};
// #6
// 用一个 `RegExp` 忽略所有“ion-”开头的元素
// 仅在 2.5+ 支持
/*^ion-*/
Vue.config.ignoredElements = [
  "my-custom-web-component",
  "another-web-component"
];
// #7
// 这个不知道啥意思
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
};
// #8
Vue.config.performance = false; // true: 性能追踪
// #9
Vue.config.productionTip = true; // 设置为 false 以阻止 vue 在启动时生成生产提示。

const testComponent = Vue.extend({
  template:'<div>{{text}}</div>',
  data:function(){
    return{
      text:'这个是测试extend test !'
    }
  }

});
const extendComponent = new testComponent().$mount();
document.body.appendChild(extendComponent.$el);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
