import runGoldenMaster from "jest-golden-master";
import { Game } from ".";

test("A player wins by providing correct answers each time", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    game.roll(1);
    game.wasCorrectlyAnswered();

    // Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});
