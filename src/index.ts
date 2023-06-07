import AllPlayers from "./AllPlayers";
import AllQuestionsSets, { Category } from "./AllQuestionsSets";
import Board from "./Board";
import Player from "./Player";

export class Game {
  private players = new AllPlayers();

  private isGettingOutOfPenaltyBox: boolean = false;

  private questions = new AllQuestionsSets();

  public add(name: string) {
    this.players.add(new Player(name));
  }

  public roll(roll: number) {
    if (this.players.getCurrentPlayer().deprecatedIsInPenaltyBox()) {
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
    return this.players.getCurrentPlayer().playerWins();
  }

  public wrongAnswer(): boolean {
    console.log(
      `${this.deprecatedGetCurrentPlayerName()} provided a wrong answer and consequently goes to the penalty box.`
    );
    this.players.getCurrentPlayer().deprecatedSetInPenaltyBox();

    this.players.switchToNextPlayer();

    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    console.log(`${this.deprecatedGetCurrentPlayerName()} provided the correct answer.`);
    if (this.players.getCurrentPlayer().deprecatedIsInPenaltyBox()) {
      if (this.isGettingOutOfPenaltyBox) {
        this.players.getCurrentPlayer().deprecatedFreeOfPenaltyBox();
        console.log(`${this.deprecatedGetCurrentPlayerName()} goes out of the penalty box.`);

        this.players.getCurrentPlayer().earnACoin();

        var winner = this.didPlayerWin();

        this.players.switchToNextPlayer();

        return winner;
      } else {
        console.log("This should NOT happen!");

        this.players.switchToNextPlayer();

        return false;
      }
    } else {
      this.players.getCurrentPlayer().earnACoin();

      var winner = this.didPlayerWin();

      this.players.switchToNextPlayer();

      return winner;
    }
  }

  private deprecatedGetCurrentPlayerName = (): string => this.players.getCurrentPlayer().deprecatedGetName();
}
