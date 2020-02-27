<template>
  <div class="detail-nav-bar">
      <nav-bar>
          <div class="left" slot="left" @click="exitClick"><div class="exit">
              </div></div>
          <div slot="center" class="titles">
              <div v-for="(item,index) in titles" 
              :key="index"
              class="title-item"
              :class="{active:index==currentIndex}"
              @click="itemClick(index)">
              {{item}}</div>
              </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
export default {
  name: 'detailNavBar',
  components:{
      NavBar
  },
  data(){
      return {
          titles:[
              '商品','参数','评论','推荐'
          ],
          currentIndex:0
      }
  },
  methods:{
      itemClick(index){
          this.currentIndex=index
          this.$emit('titleClick',index)
      },
      exitClick(){
          this.$router.back()
      }
  }
}
</script>

<style>
.titles{
    display: flex;
}
.title-item{
    flex: 1;
    font-size: 14px;
    color: #666;
    text-align: center;
}
.active{
    color: #66ccff;
}
.left{
    position: relative;
}
.exit{
    height: 12px;
    width: 12px;
    border-bottom: 1px solid #666;
    border-left: 1px solid #666;
    transform:rotate(45deg);
    position: absolute;
    left: 26px;
    top: 16px
}
</style>