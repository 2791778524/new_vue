<template>
  <div>
      name
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  mounted() {
    console.log(this.$route.query.name);
  }
}
</script>

<style>

</style>