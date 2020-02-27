import {debounce} from './utils.js'

export const itemListenerMinin={
    data(){
        return{
        homeItemListener:null
        }
},
    mounted(){
    
        const refresh =debounce(this.$refs.scroll.refresh,50)
        this.homeItemListener=(()=>{
            // console.log(147);
            refresh()
            // this.$refs.scroll.refresh()
            // console.log('hunru');
            
          })
        this.$bus.$on('itemImageLoad',this.homeItemListener)
    //   console.log('hunrua');
      
    },
}