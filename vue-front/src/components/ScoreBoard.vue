<template>
  <div :class="`score-board-${pos} center`">
    <div class="score-board center">
      <div class="score">
        <div>
          <h1>{{ v1 }} </h1>
          <p>{{ type }}</p>
        </div>
        <div>
          <h1>{{ v2 }} </h1>
          <p>{{ type }}</p>
        </div>
      </div>
      <div class="team-names">
        <p>red team</p>
        <p>blue team</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreBoard',
  props: {
    type: String,
    pos: String,
    v1: Number,
    v2: Number
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
</style>
