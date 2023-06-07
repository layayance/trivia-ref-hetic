import AllQuestionsSets from "../AllQuestionsSets";
import Board from "../Board";

class Player {
  private position = 0;
  private coins = 0;
  private isInPenaltyBox = false;

  private deprecatedIsGettingOutOfPenaltyBox = false;

  constructor(private name: string) {}

  move = (roll: number): number => {
    this.position = Board.shiftPosition(this.position, roll);
    return this.position;
  };

  earnACoin = (): number => {
    this.coins += 1;
    console.log(`${this.name} earned a coin and consequently has ${this.coins} point(s).`);
    return this.coins;
  };

  playerWins = (): boolean => {
    const playerWins = this.coins === 6;
    if (playerWins) {
      console.log(`${this.name} won the game.`);
    }
    return playerWins;
  };

  private askQuestion(questions: AllQuestionsSets): void {
    const category = Board.computeCurrentCategory(this.position);
    const question = questions.ask(category);
    console.log(question);
  }

  roll = (questions: AllQuestionsSets, roll: number): void => {
    if (this.isInPenaltyBox) {
      if (roll % 2 != 0) {
        this.deprecatedIsGettingOutOfPenaltyBox = true;

        this.move(roll);

        console.log(
          `${this.name} rolled a ${roll} and might go out of the penalty box; their new position is ${this.position}.`
        );

        this.askQuestion(questions);
      } else {
        this.deprecatedIsGettingOutOfPenaltyBox = false;
        console.log(`${this.name} rolled a ${roll} and stays in penalty box (their position is ${this.position}).`);
      }
    } else {
      this.move(roll);

      console.log(`${this.name} rolled a ${roll} and their new position is ${this.position}.`);

      this.askQuestion(questions);
    }
  };

  provideWrongAnswer = (): void => {
    console.log(`${this.name} provided a wrong answer and consequently goes to the penalty box.`);
    this.isInPenaltyBox = true;
  };

  deprecatedGetName = (): string => this.name;

  deprecatedFreeOfPenaltyBox = (): void => {
    this.isInPenaltyBox = false;
  };

  deprecatedIsInPenaltyBox = (): boolean => this.isInPenaltyBox;

  deprecatedGetIsGettingOutOfPenaltyBox = (): boolean => this.deprecatedIsGettingOutOfPenaltyBox;
}

export default Player;
