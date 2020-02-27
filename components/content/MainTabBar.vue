  <template>
    <tab-bar class="tab-bar">
        <tab-bar-item path="/home" activeColor="#66ccff">
          <img slot="item-icon" src="../../assets/img/svg/home.svg" alt="">
          <img slot="item-icon-active" src="../../assets/img/svg/homea.svg" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/fenlei" activeColor="#66ccff">
          <img slot="item-icon" src="../../assets/img/svg/fenlei.svg" alt="">
          <img slot="item-icon-active" src="../../assets/img/svg/fenleia.svg" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        
        <tab-bar-item path="/shopcar" activeColor="#66ccff">
          <img slot="item-icon" src="../../assets/img/svg/shopcar.svg" alt="">
          <img slot="item-icon-active" src="../../assets/img/svg/shopcara.svg" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#66ccff">
          <img slot="item-icon" src="../../assets/img/svg/profile.svg" alt="">
          <img slot="item-icon-active" src="../../assets/img/svg/profilea.svg" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
   </tab-bar>
</template>

<script>

import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.tab-bar{
  box-shadow: 0 0px 15px #66ccff

}
</style>
   