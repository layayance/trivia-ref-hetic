import Player from ".";
import AllQuestionsSets from "../AllQuestionsSets";

test("", () => {
  // GIVEN
  const player = new Player("Player");
  const questions = new AllQuestionsSets();

  // WHEN
  player.roll(questions, 1);
  player.provideCorrectAnswer();

  player.roll(questions, 1);
  player.provideCorrectAnswer();

  player.roll(questions, 1);
  player.provideCorrectAnswer();

  player.roll(questions, 1);
  player.provideCorrectAnswer();

  player.roll(questions, 1);
  player.provideCorrectAnswer();

  player.roll(questions, 1);
  const playerWins = player.provideCorrectAnswer();

  // THEN
  expect(playerWins).toEqual(true);
});

// class RollingPlayer {
//     roll = (): AnsweringPlayer => {}
// }

// class AnsweringPlayer {
//     provideCorrectAnswer = (): RollingPlayer => {}
//     provideWrongAnswer = (): RollingPlayer => {}
// }
