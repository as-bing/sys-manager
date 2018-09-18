import fly from './fly_config'
import axios from './axios_config'
import qs from 'qs'

const type = "fly"
// 通用的get请求
const get = (url, params) => {
    console.log(type);
    switch (type) {
        case "axios":
            return axios.get(`${url}`, qs.stringify(params))
        default:
            return fly.get(`${url}`, qs.stringify(params))
    } 
};

// 通用的post请求
const post = (url, params) => {
    return fly.post(`${url}`, qs.stringify(params.data))
}; 

export const getQQMusic = function () {
    return get("/api/qqmusic/8446666", '');
};

export const getTianQi = function () {
    return get("/open/api/weather/json.shtml?city=北京", '')
}

export const postTest=function(params){
    return post("",params)
}