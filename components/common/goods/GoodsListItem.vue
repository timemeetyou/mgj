<template>
    <div class="goods-list-item" @click="itemClick">
        <img v-lazy="showImage" alt="" @load="imageLoad">
        <div class="goods-info">
            <p class="title">{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="cfav">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return []
            }
        }
    },
    computed:{
        showImage(){
            return this.goodsItem.image||this.goodsItem.show.img
        }
    },
    methods:{
        imageLoad(){
           
                this.$bus.$emit('itemImageLoad')
            
        },
        itemClick(){
            this.$router.push('/detail/'+this.goodsItem.iid)
            
        }
    }
}
</script>

<style scoped>
    .goods-list-item{
        padding-bottom: 40px;
        position: relative;
        width: 48%;
        
    }

     .goods-list-item img{
         width: 100%;
         border-radius: 5px;
     }
    .goods-info{
        font-size: 12px;
        overflow: hidden;
         text-align: center;
         color: #666;
         position: absolute;
         bottom: 5px;
         left: 0;
         right: 0;
    }

     .title{
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         margin-bottom: 3px;   
     }

     .goods-info .price{
         margin-right: 20px;
         color: #66ccff;
         font-size:14px;
         font-weight: 400;
     }

     .goods-info .cfav{
         position: relative;
     }

     .goods-info .cfav::before{
         content:'';
         position: absolute;
         left: -15px;
         top: -2px;
         width: 14px;
         height: 14px;
        background:url("../../../assets/img/svg/cfav.png") 0 0/14px 14px;
     }

     
</style>