<template>
    <div class ='wrap'>
    <img src="./assets/logo.png">
        <div id ='input-container'>
          <h3>Your Game Code</h3>
          <input v-model="message" placeholder="123456" readonly="isReadOnly">
        </div>
      <h2>Players in your session</h2>
      <div id='app'>
      <ejs-listview id='flat-list' :dataSource='dataSource'></ejs-listview>
      </div>
      <m-button size="max">Start Game</m-button>
    </div>
</template>

<script>
import Vue from 'vue';
import { ListViewPlugin } from '@syncfusion/ej2-vue-lists';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

Vue.use(ListViewPlugin);

export default {
   data: function() {
        return { 
          dataSource: [
        { text: 'Empty', id: 'list-01' },
        { text: 'Empty', id: 'list-02' },
        { text: 'Empty', id: 'list-03' },
        { text: 'Empty', id: 'list-04' },
        ]
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#flat-list {
        border: 1px solid #dddddd;
        border-radius: 0px;
}

#app {
    color: #008cff;
    width: 20%;
    position: relative;
}

#input-container {
  padding: 20px;
}

.wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
}

</style>
