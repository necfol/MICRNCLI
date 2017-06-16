import axios from 'axios'
import * as RecommendType from './type/recommendType.js';
const fixHttp = (arr) => {
    arr.map((item) => {
        item.pic = item.pic.replace(/http/i, 'https');
    })
    return arr
}
export const recommend = (result) => {
  return {
    type: RecommendType.GET_RECOMMEND,
    result
  };
};

export const getrecommend = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:3838/v8/fcg-bin/fcg_first_yqq.fcg', {
        params: {
            tpl:'v12',
            page:'other',
            rnd:0,
            g_tk:new Date().getTime(),
            loginUin:0,
            hostUin:0,
            inCharset:'utf8',
            outCharset:'GB2312',
            notice:0,
            platform:'yqq',
            needNewCode:0
        }
        })
        .then(function (response) {
        var MusicJsonCallback = (val) => {
            var {focus, hotdiss, shoubomv, toplist} = val.data;
            dispatch(recommend({focus: fixHttp(focus), songList:hotdiss.list, sum: hotdiss.sum,  mvList:shoubomv.all}))
        }
        eval(response.data);
        })
        .catch((error) => {
        });
    }
    
};