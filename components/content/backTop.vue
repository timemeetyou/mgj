<template>
  <div class="back-top"> 
    ↑
  </div>
</template>
<script>
export default {
  name: 'BackTop',
 }
</script>
<style>
.back-top{
    color: #66ccff;
    background-color: #fff;
    height: 30px;
    width: 30px;
    border-radius: 20px;
    border: 2px solid rgba(0,0,0,0.1);
    position: fixed;
    right: 10px;
    bottom: 55px;
    font-size: 22px;
    font-weight:900;
    text-align: center;
    line-height: 30px;
    z-index: 99999;
}
</style>
