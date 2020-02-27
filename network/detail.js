import {request} from "./request.js";

export function getDetail(iid){
    return request({
        // url : "http://123.207.32.32:8000/api/hy/detail",
        url : "http://106.54.54.237:8000/api/hy/detail",
        params:{
            iid
        }
    }
    )
}

export function getRecommend(){
    return request({
        // url : "http://123.207.32.32:8000/api/hy/recommend",
        url : "http://106.54.54.237:8000/api/hy/recommend",
        
    }
    )
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
        this.allGoodsUrl=shopInfo.allGoodsUrl;
        this.shopUrl=shopInfo.shopUrl;
    }
}

export class Canshu{
    constructor(canshu){
        this.info=canshu.info.set;
        this.rule=canshu.rule.tables;
        this.image = canshu.info.images? canshu.info.images[0]:'';
    }
}
