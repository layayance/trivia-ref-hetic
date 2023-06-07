import AllPlayers from "./AllPlayers";
import AllQuestionsSets, { Category } from "./AllQuestionsSets";
import Board from "./Board";
import Player from "./Player";

export class Game {
  private players = new AllPlayers();

  private questions = new AllQuestionsSets();

  public add(name: string) {
    this.players.add(new Player(name));
  }

  public roll(roll: number) {
    this.players.getCurrentPlayer().roll(this.questions, roll);
  }

  private didPlayerWin(): boolean {
    return this.players.getCurrentPlayer().playerWins();
  }

  public wrongAnswer(): boolean {
    this.players.getCurrentPlayer().provideWrongAnswer();

    this.players.switchToNextPlayer();

    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    console.log(`${this.deprecatedGetCurrentPlayerName()} provided the correct answer.`);
    if (this.players.getCurrentPlayer().deprecatedIsInPenaltyBox()) {
      if (this.players.getCurrentPlayer().deprecatedGetIsGettingOutOfPenaltyBox()) {
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
