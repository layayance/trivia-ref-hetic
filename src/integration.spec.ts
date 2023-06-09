import { Game } from ".";

test("A realistic scenario", () => {
  // GIVEN
  const game = new Game();
  game.add("Mathieu");
  game.add("Thomas");

  // WHEN
  game.roll(5);
  game.wasCorrectlyAnswered(); // Mathieu | 1 coin

  game.roll(3);
  game.wasCorrectlyAnswered(); // Thomas | 1 coin

  game.roll(4);
  game.wasCorrectlyAnswered(); // Mathieu | 2 coins

  game.roll(1);
  game.wasCorrectlyAnswered(); // Thomas | 2 coins

  game.roll(1);
  game.wrongAnswer(); // Mathieu | 2 coins, in penalty box

  game.roll(6);
  game.wasCorrectlyAnswered(); // Thomas | 3 coins

  game.roll(2); // Mathieu | 2 coins, in penalty box
  game.wasCorrectlyAnswered(); // This simply makes no sense but is required otherwise the game won't switch to the next player!

  game.roll(1);
  game.wasCorrectlyAnswered(); // Thomas | 4 coins

  game.roll(3);
  game.wasCorrectlyAnswered(); // Mathieu | 3 coins

  game.roll(5);
  game.wrongAnswer(); // Thomas | 4 coins, in penalty box

  game.roll(4);
  game.wasCorrectlyAnswered(); // Mathieu | 4 coins

  game.roll(5);
  game.wrongAnswer(); // Thomas | 4 coins, in penalty box

  game.roll(2);
  game.wasCorrectlyAnswered(); // Mathieu | 5 coins

  game.roll(3);
  game.wasCorrectlyAnswered(); // Thomas | 5 coins

  game.roll(1);
  const playerWins = game.wasCorrectlyAnswered(); // Mathieu | 6 coins

  // THEN
  expect(playerWins).toEqual(true);
});
