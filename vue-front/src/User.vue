<template>
  <div id="user">
    <img src="./assets/logo.png">
    <div class="input-container center">
      <ul>
        <li><ejs-radiobutton label='Red Team' name='default' checked=true></ejs-radiobutton></li>
        <li><ejs-radiobutton label='Blue Team' name='default'></ejs-radiobutton></li>
      </ul>
      <div>
        <input class="e-input" type="text" placeholder="Enter a nickname." />
      </div>
    </div>
    <m-button size="max" router="lobby">Join Game</m-button>
    <router-view></router-view>
  </div>
</template>

<script scope>
import Vue from 'vue';
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);

export default {}
</script>

<style scoped>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input-container {
  width: 30rem;
  margin: 2rem auto;
}

.input-container input {
  font-size: 1.5rem;
  width: 20rem;
}

.e-radio-wrapper {
  margin-right: 50px;
}

li {
  list-style: none;
    float: right;
    padding: 15px;
    padding-right: 110px;
}

</style>