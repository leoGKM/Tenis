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
    if ((this.pointsA >= 4 || this.pointsB >= 4) &&
      Math.abs(this.pointsA - this.pointsB) >= 2) {
    return `Game ${this.pointsA > this.pointsB ? this.playerA : this.playerB}`;
  }

  if (this.pointsA >= 3 && this.pointsB >= 3) {
    if (this.pointsA === this.pointsB) return "Deuce";
    if (this.pointsA - this.pointsB === 1) return `Ventaja ${this.playerA}`;
    if (this.pointsB - this.pointsA === 1) return `Ventaja ${this.playerB}`;
  }

  return `${POINTS[this.pointsA]} - ${POINTS[this.pointsB]}`;
  }
}