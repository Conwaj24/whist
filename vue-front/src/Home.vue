<template>
  <div id="home">
    <div>
      <img src="./assets/logo.png">
    </div>
    <div>
      <m-button size="max" router="mode">Create</m-button>
      <m-button size="max" router="join">Join</m-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
#home * {
  margin: 0.5rem;
}

</style>
