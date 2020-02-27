<template>
  <div class="check-button">
      <div class="dui" :class="{checked:isChecked}">
          √
      </div>
  </div>
</template>
<script>
export default {
  name: 'checkButton',
  props:{
      isChecked:{
          type: Boolean,
          default:false
      }
  }
 }
</script>
<style>
.dui{
    background-color: #ddd;
    color: #fff;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    margin-left: 2px;
    text-align: center;
    line-height: 17px;
}
.checked{
    background-color: #66ccff;
}
</style>
