import {request} from "./request.js";

export function getHomeMultidata(){
    return request({
        // url : "http://123.207.32.32:8000/api/hy/home/multidata",
        url : "http://106.54.54.237:8000/api/hy/home/multidata"
    }
    )
}

export function getHomeGoods(type,page){
    return request({
        // url : "http://123.207.32.32:8000/api/hy/home/data",
        url : "http://106.54.54.237:8000/api/hy/home/data",
        params:{
            type,
            page,
        }
    })
}