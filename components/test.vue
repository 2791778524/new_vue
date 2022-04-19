<template>
  <div class="container">
    <div class="header">
      111111
    </div>
    <div class="box">
      <div class="banner"></div>
      <div class="content"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{
  display: flex;
}
.box .banner{
  width: 20%;
  background: #aaa;
}
.box .content{
  width: 80%;
  background: #bbb;
}
</style>