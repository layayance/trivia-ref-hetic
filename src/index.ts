import AllPlayers from "./AllPlayers";
import AllQuestionsSets, { Category } from "./AllQuestionsSets";
import Board from "./Board";
import Player from "./Player";

export class Game {
  private questions = new AllQuestionsSets();
  private players = new AllPlayers();

  public add(name: string) {
    this.players.add(new Player(name));
  }

  public roll(roll: number) {
    this.players.getCurrentPlayer().roll(this.questions, roll);
  }

  public wrongAnswer(): boolean {
    this.players.getCurrentPlayer().provideWrongAnswer();
    this.players.switchToNextPlayer();
    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    const winner = this.players.getCurrentPlayer().provideCorrectAnswer();
    this.players.switchToNextPlayer();
    return winner;
  }
}
