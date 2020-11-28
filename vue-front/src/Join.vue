<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id='input-container'>
            <div>
                <input class="e-input" type="text" placeholder="Enter your game code." />
            </div>
        </div>
      <m-button size="max" router="user">Join</m-button>
    <router-view></router-view>
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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.e-input {
  position: relative;
  top: 20px;
}

.m-button{
  position: relative;
  top: 50px;
}
</style>