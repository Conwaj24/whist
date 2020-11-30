<template>
  <div :class="`player-${pos}`">
    <div :class="`player-list-${pos} player-list`">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :card-name="card"
        :offset-left="index">
      </Card>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Player',
  components: {
    Card
  },
  props: {
    cards: Array,
    pos: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score-board {
  height: 7.5rem;
  width: 15rem;
  border: 0.2rem solid #eee;
}
.score *,
.team-names * {
  display: inline;
}
.score > *,
.team-names > * {
  margin-right: 1rem;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.player-list-top,
.player-list-bottom {
  position: relative;
  top: 1rem;
  left: 7rem;
}

.player-list-left,
.player-list-right {
  position: relative;
  transform: rotate(90deg);
  top: 25vh;
  left: 4vw;
}
</style>