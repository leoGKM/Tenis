import { TennisGame } from "./puntaje.js";

describe("Marcador de tenis", () => {
  it("inicia en Love - Love", () => {
    const game = new TennisGame("A", "B");
    expect(game.getScore()).toBe("Love - Love");
  });
})
