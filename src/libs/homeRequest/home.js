import { get, post } from "../network.request.js";

export default {
  //登录 
  groupAccountLogin(param) {
    return get("/api/testapi/v1/bpi/currentprice.json", param);
  },
  //进行百度请求
  requestBaiDu(param) {
    return get("/api/baidu", param);
  },
  //退出
  logout(param) {
    return post("/group/account/logout", param);
  }
};
