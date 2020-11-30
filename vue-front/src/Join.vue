<template>
  <div id="join">
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
  name: 'Join',
  components: {

  }
}
</script>

<style scoped>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.e-input {
  position: relative;
  top: 20px;
  width: 20rem;
}

.m-button{
  position: relative;
  top: 50px;
}
</style>