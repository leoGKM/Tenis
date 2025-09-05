export class TennisGame {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.pointsA = 0;
    this.pointsB = 0;
  }

  getScore() {
    return "Love - Love";
  }
}