<template>
  <div id="game">
    <ScoreBoard pos="left" type="points" :v1="playerScores.redTeamPoints" :v2="playerScores.blueTeamPoints" />
    <div class="center">
      <h1>MyWhist</h1>
    </div>
    <ScoreBoard pos="right" type="tricks" :v1="playerScores.redTeamTricks" :v2="playerScores.blueTeamTricks" />
    <Player pos="top" :cards="playerCards.playerTopCards" />
    <Player pos="left" :cards="playerCards.playerLeftCards" />
    <div class="middle-area"></div>
    <Player pos="right" :cards="playerCards.playerRightCards" />
    <Player pos="bottom" :cards="playerCards.playerBottomCards" />
    <router-view></router-view>
  </div>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard";
import Player from './components/Player'

export default {
  components: {
    ScoreBoard,
    Player
  },
  data() {
    return {
      playerScores: {
        redTeamPoints: 1,
        blueTeamPoints: 1,
        redTeamTricks: 2,
        blueTeamTricks: 2,
      },
      playerCards: {
        playerTopCards: ["2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B"],
        playerLeftCards: ["2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B"],
        playerRightCards: ["2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B", "2B"],
        playerBottomCards: ["2D", "2C", "6H", "KC", "JH", "5D", "QH", "AS", "TC", "6S", "5C", "KS", "TH"]
      }
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");

#game {
  color: black;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 40rem auto;
  grid-template-rows: 10rem auto 30rem auto;
  grid-template-areas:
    "score title tricks"
    ". ptop ."
    "pleft mid pright"
    ". pbottom .";
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.score-board-left {
  grid-area: score;
}

.title {
  grid-area: title;
}

.score-board-right {
  grid-area: tricks;
}

.player-top {
  grid-area: ptop;
}

.player-left {
  grid-area: pleft;
}

.middle-area {
  grid-area: mid;
}

.player-right {
  grid-area: pright;
}

.player-bottom {
  grid-area: pbottom;
}
</style>
