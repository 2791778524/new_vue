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
import{ mapState } from '../store/modules/user'
export default {
  data(){
    return{
      data:'1111'
    }
  },
  methods: {
    goName() {
      this.$router.push({
        path:`/home/name`,
        query:{
          name:'李四'
        }
      })
    },
    goAge() {
      this.$router.push({
        path:`/home/age/${10}`,
      })
    }
  },
  mounted() {
    this.$store.dispatch('getData',this.name)
  }
}
</script>

<style>
li{
  list-style: none;
}
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