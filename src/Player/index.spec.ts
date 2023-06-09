import Player from ".";
import AllQuestionsSets from "../AllQuestionsSets";

test("The player always provides correct answers and wins the game", () => {
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

test("The player provides a wrong answer and goes to penalty box, then rolls an even number. Then they stay in the penalty box.", () => {
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
  player.provideWrongAnswer();

  player.roll(questions, 2);
  // This simply makes no sense but the loose API allows it! Useful for testing purpose though.
  const playerWins = player.provideWrongAnswer();

  // THEN
  expect(playerWins).toEqual(false);
});

test("The player provides a wrong answers and goes to penalty box, then rolls an odd number and provides a wrong answer. Then they stay in the penalty box.", () => {
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
  player.provideWrongAnswer();

  player.roll(questions, 1);
  const playerWins = player.provideWrongAnswer();

  // THEN
  expect(playerWins).toEqual(false);
});

test("The player provides a wrong answers and goes to penalty box, then rolls an odd number and answers correctly. Then they exit from penalty box.", () => {
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
  player.provideWrongAnswer();

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
