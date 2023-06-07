import AllPlayers from "./AllPlayers";
import AllQuestionsSets, { Category } from "./AllQuestionsSets";
import Board from "./Board";
import Player from "./Player";

export class Game {
  private players = new AllPlayers();

  private deprecatedPlayers: Array<string> = [];
  private deprecatedCurrentPlayerIndex: number = 0;

  private deprecatedPurses: Array<number> = [];
  private deprecatedInPenaltyBox: Array<boolean> = [];

  private isGettingOutOfPenaltyBox: boolean = false;

  private questions = new AllQuestionsSets();

  public add(name: string) {
    this.players.add(new Player(name));

    this.deprecatedPlayers.push(name);
    this.deprecatedPurses[this.howManyPlayers() - 1] = 0;
    this.deprecatedInPenaltyBox[this.howManyPlayers() - 1] = false;
    console.log(`New player added: ${name}; their place is 0 and they have 0 coins. They are NOT in the penalty box.`);
  }

  private howManyPlayers(): number {
    return this.deprecatedPlayers.length;
  }

  public roll(roll: number) {
    if (this.deprecatedInPenaltyBox[this.deprecatedCurrentPlayerIndex]) {
      if (roll % 2 != 0) {
        this.isGettingOutOfPenaltyBox = true;

        // console.log(`This is a paradox:
        // - place: ${this.places[this.currentPlayer]}
        // - inPenaltyBox: ${this.inPenaltyBox[this.currentPlayer]}
        // - isGettingOutOfPenaltyBox: ${this.isGettingOutOfPenaltyBox}`);

        this.players.getCurrentPlayer().move(roll);

        console.log(
          `${this.deprecatedGetCurrentPlayerName()} rolled a ${roll} and might go out of the penalty box; their new position is ${this.players
            .getCurrentPlayer()
            .deprecatedGetPosition()}.`
        );

        this.askQuestion();
      } else {
        this.isGettingOutOfPenaltyBox = false;
        console.log(
          `${this.deprecatedGetCurrentPlayerName()} rolled a ${roll} and stays in penalty box (their position is ${this.players
            .getCurrentPlayer()
            .deprecatedGetPosition()}).`
        );
      }
    } else {
      this.players.getCurrentPlayer().move(roll);

      console.log(
        `${this.deprecatedGetCurrentPlayerName()} rolled a ${roll} and their new position is ${this.players
          .getCurrentPlayer()
          .deprecatedGetPosition()}.`
      );

      this.askQuestion();
    }
  }

  private askQuestion(): void {
    const question = this.questions.ask(this.currentCategory() as Category);
    console.log(question);
  }

  private currentCategory(): string {
    const position = this.players.getCurrentPlayer().deprecatedGetPosition();
    return Board.computeCurrentCategory(position);
  }

  private didPlayerWin(): boolean {
    return this.deprecatedPurses[this.deprecatedCurrentPlayerIndex] == 6;
  }

  public wrongAnswer(): boolean {
    console.log(
      `${this.deprecatedGetCurrentPlayerName()} provided a wrong answer and consequently goes to the penalty box.`
    );
    this.deprecatedInPenaltyBox[this.deprecatedCurrentPlayerIndex] = true;

    this.players.switchToNextPlayer();

    this.deprecatedCurrentPlayerIndex += 1;
    if (this.deprecatedCurrentPlayerIndex == this.deprecatedPlayers.length) this.deprecatedCurrentPlayerIndex = 0;
    console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    console.log(`${this.deprecatedGetCurrentPlayerName()} provided the correct answer.`);
    if (this.deprecatedInPenaltyBox[this.deprecatedCurrentPlayerIndex]) {
      if (this.isGettingOutOfPenaltyBox) {
        this.deprecatedInPenaltyBox[this.deprecatedCurrentPlayerIndex] = false;
        console.log(`${this.deprecatedGetCurrentPlayerName()} goes out of the penalty box.`);

        this.deprecatedPurses[this.deprecatedCurrentPlayerIndex] += 1;
        console.log(
          `${this.deprecatedGetCurrentPlayerName()} earned a coin and consequently has ${
            this.deprecatedPurses[this.deprecatedCurrentPlayerIndex]
          } point(s).`
        );

        var winner = this.didPlayerWin();
        if (winner) {
          console.log(`${this.deprecatedGetCurrentPlayerName()} won the game.`);
        }

        this.players.switchToNextPlayer();

        this.deprecatedCurrentPlayerIndex += 1;
        if (this.deprecatedCurrentPlayerIndex == this.deprecatedPlayers.length) this.deprecatedCurrentPlayerIndex = 0;
        console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

        return winner;
      } else {
        console.log("This should NOT happen!");

        this.players.switchToNextPlayer();

        this.deprecatedCurrentPlayerIndex += 1;
        if (this.deprecatedCurrentPlayerIndex == this.deprecatedPlayers.length) this.deprecatedCurrentPlayerIndex = 0;
        console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);
        return false;
      }
    } else {
      this.deprecatedPurses[this.deprecatedCurrentPlayerIndex] += 1;
      console.log(
        `${this.deprecatedGetCurrentPlayerName()} earned a coin and consequently has ${
          this.deprecatedPurses[this.deprecatedCurrentPlayerIndex]
        } point(s).`
      );

      var winner = this.didPlayerWin();
      if (winner) {
        console.log(`${this.deprecatedGetCurrentPlayerName()} won the game.`);
      }

      this.players.switchToNextPlayer();

      this.deprecatedCurrentPlayerIndex += 1;
      if (this.deprecatedCurrentPlayerIndex == this.deprecatedPlayers.length) this.deprecatedCurrentPlayerIndex = 0;
      console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

      return winner;
    }
  }

  private deprecatedGetCurrentPlayerName = (): string => this.players.getCurrentPlayer().deprecatedGetName();
}
