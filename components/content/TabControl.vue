<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="tabClick(index)">
    <span class="title" :class="{active:index===currentIndex}" >{{item}}</span>
</div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  components:{
  
  },
  data(){
      return{
        currentIndex:0
      }
  },
  methods:{
      tabClick(index){
          this.currentIndex=index;
          this.$emit('tabClick',index);
      }
  },
  props:{
      titles:{
          type:Array,
            default(){
            return []
                   }
            }
}}
</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
    
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.title{
    color: #666;
}
.active{
    color: #66ccff;
    border-bottom: 3px solid #66ccff;
    padding: 3px;
}
</style>
