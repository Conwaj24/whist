<template>
  <div id="app">
    <img src="./assets/logo.png">
    <m-button size="max" router="mode">Create</m-button>
    <m-button size="max" router="join">Join</m-button>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
