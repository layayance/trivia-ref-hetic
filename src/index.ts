import AllQuestionsSets, { Category } from "./AllQuestionsSets";
import Board from "./Board";

export class Game {
  private players: Array<string> = [];
  private places: Array<number> = [];
  private purses: Array<number> = [];
  private inPenaltyBox: Array<boolean> = [];
  private currentPlayer: number = 0;
  private isGettingOutOfPenaltyBox: boolean = false;

  private questions = new AllQuestionsSets();

  public add(name: string) {
    this.players.push(name);
    this.places[this.howManyPlayers() - 1] = 0;
    this.purses[this.howManyPlayers() - 1] = 0;
    this.inPenaltyBox[this.howManyPlayers() - 1] = false;
    console.log(`New player added: ${name}; their place is 0 and they have 0 coins. They are NOT in the penalty box.`);
  }

  private howManyPlayers(): number {
    return this.players.length;
  }

  public roll(roll: number) {
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (roll % 2 != 0) {
        this.isGettingOutOfPenaltyBox = true;

        // console.log(`This is a paradox:
        // - place: ${this.places[this.currentPlayer]}
        // - inPenaltyBox: ${this.inPenaltyBox[this.currentPlayer]}
        // - isGettingOutOfPenaltyBox: ${this.isGettingOutOfPenaltyBox}`);

        this.places[this.currentPlayer] = Board.shiftPosition(this.places[this.currentPlayer], roll);

        console.log(
          `${this.deprecatedGetCurrentPlayerName()} rolled a ${roll} and might go out of the penalty box; their new position is ${
            this.places[this.currentPlayer]
          }.`
        );

        this.askQuestion();
      } else {
        this.isGettingOutOfPenaltyBox = false;
        console.log(
          `${this.deprecatedGetCurrentPlayerName()} rolled a ${roll} and stays in penalty box (their position is ${
            this.places[this.currentPlayer]
          }).`
        );
      }
    } else {
      this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
      if (this.places[this.currentPlayer] > 11) {
        this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;
      }
      console.log(
        `${this.deprecatedGetCurrentPlayerName()} rolled a ${roll} and their new position is ${
          this.places[this.currentPlayer]
        }.`
      );

      this.askQuestion();
    }
  }

  private askQuestion(): void {
    const question = this.questions.ask(this.currentCategory() as Category);
    console.log(question);
  }

  private currentCategory(): string {
    const position = this.places[this.currentPlayer];
    return Board.computeCurrentCategory(position);
  }

  private didPlayerWin(): boolean {
    return this.purses[this.currentPlayer] == 6;
  }

  public wrongAnswer(): boolean {
    console.log(
      `${this.deprecatedGetCurrentPlayerName()} provided a wrong answer and consequently goes to the penalty box.`
    );
    this.inPenaltyBox[this.currentPlayer] = true;

    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
    console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    console.log(`${this.deprecatedGetCurrentPlayerName()} provided the correct answer.`);
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (this.isGettingOutOfPenaltyBox) {
        this.inPenaltyBox[this.currentPlayer] = false;
        console.log(`${this.deprecatedGetCurrentPlayerName()} goes out of the penalty box.`);

        this.purses[this.currentPlayer] += 1;
        console.log(
          `${this.deprecatedGetCurrentPlayerName()} earned a coin and consequently has ${
            this.purses[this.currentPlayer]
          } point(s).`
        );

        var winner = this.didPlayerWin();
        if (winner) {
          console.log(`${this.deprecatedGetCurrentPlayerName()} won the game.`);
        }

        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
        console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

        return winner;
      } else {
        console.log("This should NOT happen!");
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
        console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);
        return false;
      }
    } else {
      this.purses[this.currentPlayer] += 1;
      console.log(
        `${this.deprecatedGetCurrentPlayerName()} earned a coin and consequently has ${
          this.purses[this.currentPlayer]
        } point(s).`
      );

      var winner = this.didPlayerWin();
      if (winner) {
        console.log(`${this.deprecatedGetCurrentPlayerName()} won the game.`);
      }

      this.currentPlayer += 1;
      if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
      console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

      return winner;
    }
  }

  private deprecatedGetCurrentPlayerName = (): string => this.players[this.currentPlayer];
}
