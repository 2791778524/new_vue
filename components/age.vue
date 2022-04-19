<template>
  <div>
      age
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>

<style>

</style>