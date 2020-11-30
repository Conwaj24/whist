<template>
  <div id="mode">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <m-button size="max" router="game">Singleplayer</m-button>
    <m-button size="max" router="user">Multiplayer</m-button>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Mode',
  components: {

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: table;
  margin: 0 auto;
}
</style>
