import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import SanGuo from "@/views/SanGuoYanYi";
import WeiG from "@/views/Wei";
import ShuG from "@/views/Shu";
import WuG from "@/views/Wu";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/sanguo",
      name: "SanGuo",
      component: SanGuo,
      children: []
    },
    {
      path: "/wei",
      name: "wei",
      component: WeiG
    },
    {
      path: "/shu",
      name: "shu",
      component: ShuG
    },
    {
      path: "/wu",
      name: "wu",
      component: WuG
    }
  ]
});
