<template>
  <div class="container">
    <div class="header">
      111111
    </div>
    <div class="box">
      <div class="banner">
        <ul>
          <li @click="goName">name</li>
          <li @click="goAge">age</li>
        </ul>
      </div>
      <div class="content"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    goName() {
      this.$router.push({
        path:'/home/name'
      })
    },
    goAge() {
      this.$router.push({
        path:'/home/age'
      })
    }
  }
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