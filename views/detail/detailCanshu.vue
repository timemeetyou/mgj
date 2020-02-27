<template>
  <div class="detail-canshu" v-if="Object.keys(detailCanshu).length!==0">
    <table v-for="(table,index) in detailCanshu.rule"
            class="info-rule" :key="index">
        <tr class="tr" v-for="(tr,indey) in table" :key="indey">
            <td class="td" v-for="(td,indez) in tr" :key="indez">{{td}}</td>    
        </tr>    
    </table>  
    <table class="info-info">
        <tr v-for="(info,index) in detailCanshu.info" :key="index">
            <td class="key">{{info.key}}</td>
            <td class="value">{{info.value}}</td>
        </tr>
    </table>
    <div class="info-img" v-if="detailCanshu.image.length!==0">
        <img :src="detailCanshu.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailCanshu',
  components:{
      
  },
  props:{
      detailCanshu:{
          type:Object,
      }
  },
  methods:{
      
}}
</script>

<style scoped>
.detail-canshu{
    padding: 10px 15px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.detail-canshu table{
    width: 100%;
    border-collapse: collapse;
}
.detail-canshu table tr{
    height: 42px;
}
.detail-canshu table td{
    border-bottom: 1px solid rgba(100,100,100,0.1);
}
.key{
    width: 95px;
}
.info-info{
    border-top: 1px solid rgba(0,0,0,0.1);
}
.value{
    color: #66ccff;

}
.info-img img{
    width: 100%;
}
.tr{
    display: flex;
}
.td{
    flex: 1;
    line-height: 43px
}
</style>