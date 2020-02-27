<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>
<script>
import dateFormat from "./common/dataFormat.js";
import MainTabBar from "./components/content/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>
<style>
@import "assets/css/normal.css";
.main-tab-bar {
  z-index: 999;
}
</style>

