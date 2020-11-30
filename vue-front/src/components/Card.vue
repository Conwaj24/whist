<template>
  <div class="card" :style="{left: (offsetLeft * 20) + 'px'}">
    <img :src="`/cards/${cardName}.svg`" alt="card" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardName: String,
    offsetLeft: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  position: absolute;
  height: 9em;
  width: 6.5rem;
  filter: drop-shadow(0 0 0.1rem gray);
  display: inline-block;
}

.card img {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
