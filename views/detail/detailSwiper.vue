<template>

  <swiper>
    <swiper-item class="swiper-item" v-for="(item,index) in topImages" :key="index">
      
        <img :src="item" alt="">
      
    </swiper-item>
  </swiper>
  
  
</template>

<script>

import Swiper from '../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../components/common/swiper/SwiperItem.vue'
export default {
  name: 'detailSwiper',
  props:{
      topImages:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
    
  },
  components:{
    Swiper,
    SwiperItem
}}

</script>

<style scoped>
.swiper-item{
    height: 300px;
    /* overflow: hidden; */
}
</style>
