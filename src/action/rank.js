import axios from 'axios'
import * as RankType from './type/rankType.js';
const fixHttp = (arr) => {
    arr.map((item) => {
        item.picUrl = item.picUrl.replace(/http/i, 'https');
    })
    return arr
}
export const rank = (result) => {
  return {
    type: RankType.GET_RANK,
    result
  };
};

export const getrank = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:3838/v8/fcg-bin/fcg_myqq_toplist.fcg', {
        params: {
            g_tk: 5381,
            uin: 0,
            inCharset: 'utf-8',
            outCharset: 'utf-8',
            notice: 0,
            platform: 'h5',
            needNewCode: 1,
            _: new Date().getTime()
        }
        })
        .then(function (response) {
            var MusicJsonCallback = (val) => {
                let { topList } = val.data;
                dispatch(rank({topList: fixHttp(topList)}));
            }
            eval(response.data);
        })
        .catch((error) => {
        });
    }
    
};