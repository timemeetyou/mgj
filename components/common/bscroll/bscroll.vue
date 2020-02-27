<template>
  <div class="b-scroll" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  components:{
    BScroll
  },
  data(){
      return{
          scroll:null
      }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
      this.scroll=new BScroll(this.$refs.wrapper,{
    click:true,
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad
      })
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
      })
    this.scroll.on('pullingUp',()=>
    {
      // console.log(1);
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
    this.scroll.finishPullUp()
    // console.log(111);
    
  },
   refresh(){
     this.scroll && this.scroll.refresh && this.scroll.refresh()
    //  console.log(546841616516);
     
   },
   getScrollY(){
     return this.scroll?this.scroll.y:0
   }
  }
}
</script>
<style scoped>

</style>
