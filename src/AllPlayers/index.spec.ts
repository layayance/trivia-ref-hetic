import AllPlayers from ".";
import Player from "../Player";

test("The first player is the one who has been added first", () => {
  // GIVEN
  const firstPlayer = new Player("Player 1");
  const secondPlayer = new Player("Player 2");
  const players = new AllPlayers();

  // WHEN
  players.add(firstPlayer);
  players.add(secondPlayer);

  // THEN
  expect(players.getCurrentPlayer()).toBe(firstPlayer);
});

test("Switch to next player (regular case)", () => {
  // GIVEN
  const firstPlayer = new Player("Player 1");
  const secondPlayer = new Player("Player 2");
  const players = new AllPlayers();
  players.add(firstPlayer);
  players.add(secondPlayer);

  // WHEN
  players.switchToNextPlayer();

  // THEN
  expect(players.getCurrentPlayer()).toBe(secondPlayer);
});

test("Switch to next player (edge case)", () => {
  // GIVEN
  const firstPlayer = new Player("Player 1");
  const secondPlayer = new Player("Player 2");
  const players = new AllPlayers();
  players.add(firstPlayer);
  players.add(secondPlayer);
  players.switchToNextPlayer();

  // WHEN
  players.switchToNextPlayer();

  // THEN
  expect(players.getCurrentPlayer()).toBe(firstPlayer);
});
