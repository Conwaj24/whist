<template>
  <div id="app">
  <img src="./assets/logo.png">
  <ul>
    <li><ejs-radiobutton label='Red Team' name='default' checked=true></ejs-radiobutton></li>
    <li><ejs-radiobutton label='Blue Team' name='default'></ejs-radiobutton></li>
  </ul>
      <div id='input-container'>
            <div>
                <input class="e-input" type="text" placeholder="Enter a nickname." />
            </div>
        </div>
      <m-button size="max" router="lobby">Join Game</m-button>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);

export default {}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.input-container {
  float: center;
}

.e-radio-wrapper {
  margin-right: 50px;
}

li {
  list-style: none;
    float: right;
    padding: 15px;
}

</style>