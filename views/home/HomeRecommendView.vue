<template>
  <div class="recommends">      
      <div v-for="(item,index) in recommends" :key="index" class="recommends-item-father">
          <a :href="item.link" class="recommends-item">
              <img :src="item.image" alt="">
              <div class="recommends-title">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>


export default {
  name: 'HomeRecommendView',
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
    
}}

</script>

<style>
.recommends{
    display: flex;
    width: 100%;
    padding: 5px 0 20px;
    border-bottom: 8px solid #eee;
    text-align: center;
}
.recommends .recommends-item-father{
    flex: 1;
    margin-top: 10px;    
}
.recommends .recommends-item{
text-decoration:none;
}
.recommends .recommends-item img{
    width: 70px;
    height: 70px;
}
.recommends-title{
    margin-top: 5px;
    text-decoration:none;
    font-size: 12px;
    font-weight: 500;
    color: #666;
}
</style>
