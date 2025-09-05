import { TennisGame } from "./puntaje.js";

describe("Marcador de tenis", () => {
  it("inicia en Love - Love", () => {
    const game = new TennisGame("A", "B");
    expect(game.getScore()).toBe("Love - Love");
  });
})

it("jugador A gana un punto: 15 - Love", () => {
  const game = new TennisGame("A", "B");
  game.pointWonBy("A");
  expect(game.getScore()).toBe("15 - Love");
});

it("40 - 40 es Deuce", () => {
  const g = new TennisGame("A", "B");
  g.pointsA = 3; g.pointsB = 3;
  expect(g.getScore()).toBe("Deuce");
});

it("Ventaja A", () => {
  const g = new TennisGame("A", "B");
  g.pointsA = 4; g.pointsB = 3;
  expect(g.getScore()).toBe("Ventaja A");
});

it("A gana el game", () => {
  const g = new TennisGame("A", "B");
  g.pointsA = 4; g.pointsB = 2;
  expect(g.getScore()).toBe("Game A");
});