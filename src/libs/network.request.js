import Vue from "vue";
import axios from "axios";
import qs from "qs";
let token = "";
axios.defaults.timeout = 30 * 1000;// 响应时间

// (添加请求拦截器)
axios.interceptors.request.use(
  config => {
    token = sessionStorage.getItem("TOKEN");
    config.headers.common["Authorization"] = token;
    config.headers["Content-Type"] = "application/json";//请求头转换为表单形式
    config.transformRequest = [
      function(data) {
        data = qs.stringify(data); // 在请求之前对data传参进行格式转换
        return data;
      }
    ];
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if ((res.status === 0 || res.status === 200) && res != undefined) {
      
      return res;
    } else if (res.status == 1 || res.status == 401) {
      localStorage.clear();
      sessionStorage.clear();
    } else {
      return res;
    }
  },
  err => {
    return Promise.reject(err);
  }
);

//TODO post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      )
      .catch(err => {
        reject(err);
      });
  });
};

//TODO get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
