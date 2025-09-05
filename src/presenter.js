import { TennisGame } from "./puntaje.js";

const marcador = document.getElementById("marcador");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

const game = new TennisGame("A", "B");
render();

btnA.onclick = () => { game.pointWonBy("A"); render(); };
btnB.onclick = () => { game.pointWonBy("B"); render(); };

function render() {
  marcador.textContent = game.getScore();
}