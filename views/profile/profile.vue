<template>
  <div class="profile">
    <div class="quanquan"> </div>
    <div class="enter">点击登陆</div>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  
}
</script>

<style scoped>
.profile{
  position: relative;
}
.quanquan{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: #eee;
  position: absolute;
  margin-left: 50%;
  left:-50px;
  margin-top: 40%;
  box-shadow: 0 0 20px #66ccff;

}
.enter{
  position: absolute;
  height: 40px;
  width: 180px;
  background-color: #66ccff;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin-left: 50%;
  left: -90px;
  margin-top:90%;
  border-radius: 40px;
  box-shadow: 0 0 20px #66ccff;
}
</style>