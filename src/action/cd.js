import axios from 'axios'
import * as CdType from './type/cdType.js';
const fixHttp = (arr) => {
    arr.map((item) => {
        item.picUrl = item.picUrl.replace(/http/i, 'https');
    })
    return arr
}
export const cd = (result) => {
  return {
    type: RankType.GET_CD,
    result
  };
};

export const getcd = (id) => {
    return (dispatch) => {
        axios.get('https://127.0.0.1:3838/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg', {
        params: {
            g_tk:5381,
            uin:0,
            format:'jsonp',
            inCharset:'utf-8',
            outCharset:'utf-8',
            notice:0,
            platform:'h5',
            needNewCode:1,
            new_format:1,
            pic:500,
            disstid:id,
            type:1,
            json:1,
            utf8:1,
            onlysong:0,
            nosign:1,
            _:new Date().getTime()
        }
        })
        .then(function (response) {
            console.log(response);
            // var MusicJsonCallback = (val) => {
            //     let { topList } = val.data;
            //     dispatch(rank({topList: fixHttp(topList)}));
            // }
            // eval(response.data);
        })
        .catch((error) => {
        });
    }
    
};