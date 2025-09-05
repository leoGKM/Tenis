const POINTS = ["Love", "15", "30", "40"];

export class TennisGame {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.pointsA = 0;
    this.pointsB = 0;
  }

  pointWonBy(player) {
    if (player === "A") this.pointsA++;
    if (player === "B") this.pointsB++;
  }

  getScore() {
    return `${POINTS[this.pointsA]} - ${POINTS[this.pointsB]}`;
  }
}